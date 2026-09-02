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

if (!JWT_SECRET) {
  console.error("❌ JWT_SECRET .env faylida topilmadi! Serverni to'xtatyapman.");
  process.exit(1);
}
if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI .env faylida topilmadi! Serverni to'xtatyapman.");
  process.exit(1);
}

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("✅ MongoDB'ga muvaffaqiyatli ulandi"))
  .catch((err) => {
    console.error("❌ MongoDB'ga ulanishda xatolik:", err.message);
    process.exit(1);
  });

function signToken(user) {
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
      subscription: false,
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
    res.status(500).json({ error: "Server xatosi. Keyinroq qayta urinib ko'ring." });
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
    res.status(500).json({ error: "Server xatosi. Keyinroq qayta urinib ko'ring." });
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

// To'lov qilinganda obunani faollashtirish (himoyalangan — token talab qilinadi)
app.post('/api/subscribe', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    }

    user.subscription = true;
    await user.save();

    res.json({ message: "Obuna muvaffaqiyatli faollashtirildi!", user: toPublicUser(user) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server xatosi. Keyinroq qayta urinib ko'ring." });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server ${PORT}-portda ishga tushdi! 🚀`);
});