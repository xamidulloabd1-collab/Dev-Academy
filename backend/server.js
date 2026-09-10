const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('./models/User');
const auth = require('./middleware/auth');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET;
const MONGODB_URI = process.env.MONGODB_URI;

// --- MongoDB ulanishini keshlash (Vercel serverless uchun MUHIM) ---
// Vercel har bir so'rovni alohida funksiya chaqiruvi sifatida ishga tushirishi mumkin.
// Agar har safar yangi mongoose.connect() chaqirilsa, ulanishlar soni tezda tugab,
// "too many connections" xatosiga olib keladi. Shuning uchun ulanishni global
// o'zgaruvchida keshlab, funksiya "issiq" (qayta ishlatilgan) bo'lsa qayta ulanmaymiz.
let cached = global._mongooseCache;
if (!cached) {
  cached = global._mongooseCache = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!MONGODB_URI) {
    throw new Error("MONGODB_URI environment o'zgaruvchisi topilmadi. Vercel loyihasining Settings > Environment Variables bo'limini tekshiring.");
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

// Har bir /api so'rovidan oldin bazaga ulanganimizga ishonch hosil qilamiz
app.use(async (req, res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    console.error("❌ MongoDB'ga ulanishda xatolik:", err.message);
    res.status(500).json({ error: "Ma'lumotlar bazasiga ulanib bo'lmadi. Server sozlamalarini tekshiring." });
  }
});

function signToken(user) {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET environment o'zgaruvchisi topilmadi. Vercel loyihasining Settings > Environment Variables bo'limini tekshiring.");
  }
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '30d' });
}

// Javobda parolni hech qachon qaytarmaslik uchun
function toPublicUser(user) {
  const obj = user.toObject ? user.toObject() : user;
  delete obj.password;
  return obj;
}

// Ro'yxatdan o'tish (Register)
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Ism, email va parol to'ldirilishi shart" });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ error: "Bu email allaqachon ro'yxatdan o'tgan!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      completedLessons: [],
      points: 50, // Ro'yxatdan o'tgani uchun boshlang'ich ball
    });

    const token = signToken(newUser);
    res.json({
      message: "Muvaffaqiyatli ro'yxatdan o'tdingiz!",
      user: toPublicUser(newUser),
      token,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Server xatosi. Keyinroq qayta urinib ko'ring." });
  }
});

// Tizimga kirish (Login)
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email va parol talab qilinadi" });
    }

    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ error: "Email yoki parol xato!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Email yoki parol xato!" });
    }

    const token = signToken(user);
    res.json({ message: "Xush kelibsiz!", user: toPublicUser(user), token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message || "Server xatosi. Keyinroq qayta urinib ko'ring." });
  }
});

// Real reyting va statistika jadvalini olish (ochiq, token talab qilinmaydi)
app.get('/api/stats', async (req, res) => {
  try {
    const users = await User.find().sort({ points: -1 });
    res.json({
      totalStudents: users.length,
      leaderboard: users.map(toPublicUser),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server xatosi. Keyinroq qayta urinib ko'ring." });
  }
});

// Darsni tugatganda ball va progressni yangilash (himoyalangan — token talab qilinadi)
app.post('/api/complete-lesson', auth, async (req, res) => {
  try {
    const { lessonId } = req.body;
    if (lessonId === undefined || lessonId === null) {
      return res.status(400).json({ error: "lessonId yuborilmagan" });
    }

    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    }

    if (!Array.isArray(user.completedLessons)) {
      user.completedLessons = [];
    }

    // Dars avval tugatilgan bo'lsa, ballni qayta qo'shmaymiz
    if (user.completedLessons.includes(lessonId)) {
      return res.json({ message: "Bu dars allaqachon yakunlangan!", user: toPublicUser(user) });
    }

    user.completedLessons.push(lessonId);
    user.points += 30; // Har bir tugatilgan dars uchun 30 ball
    await user.save();

    res.json({ message: "Progress yangilandi!", user: toPublicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server xatosi. Keyinroq qayta urinib ko'ring." });
  }
});

// Lokal kompyuterda "node server.js" bilan ishga tushirilganda oddiy serverdek ishlaydi.
// Vercel'da esa bu fayl serverless funksiya sifatida chaqiriladi, shuning uchun
// app.listen() Vercel muhitida ishlamaydi (va kerak ham emas) — shu sabab uni shart qildik.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend server ${PORT}-portda ishga tushdi! 🚀`);
  });
}

module.exports = app;