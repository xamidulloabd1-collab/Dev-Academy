const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// MongoDB-ga ulanish (Local yoki Atlas)
// Agar MongoDB o'rnatilmagan bo'lsa, xotiradagi massivga saqlab turamiz
let users = [
  { id: "1", name: "Jasurbek M.", email: "jasur@mail.com", points: 890, completedLessons: 28, subscription: true },
  { id: "2", name: "Madina Karimova", email: "madina@mail.com", points: 740, completedLessons: 24, subscription: true },
  { id: "3", name: "Sardor Ahmedov", email: "sardor@mail.com", points: 680, completedLessons: 20, subscription: false },
];

// Ro'yxatdan o'tish (Register)
app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.status(400).json({ error: "Bu email allaqachon ro'yxatdan o'tgan!" });
  }

  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password,
    subscription: false,
    completedLessons: 0,
    points: 100, // Boshlang'ich bonus ball
  };

  users.push(newUser);
  res.json({ message: "Muvaffaqiyatli ro'yxatdan o'tdingiz!", user: newUser });
});

// Tizimga kirish (Login)
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (!user) {
    return res.status(400).json({ error: "Email yoki parol xato!" });
  }

  res.json({ message: "Xush kelibsiz!", user });
});

// Barcha foydalanuvchilar va reyting statistikasini olish (Dashboard uchun)
app.get('/api/stats', (req, res) => {
  // Ballar bo'yicha saralash (Reyting uchun)
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);
  
  res.json({
    totalStudents: users.length, // Jami ro'yxatdan o'tgan o'quvchilar soni
    leaderboard: sortedUsers
  });
});

// Darsni tugatganda ball va progressni yangilash
app.post('/api/complete-lesson', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) {
    user.completedLessons = (user.completedLessons || 0) + 1;
    user.points += 30; // Har bir dars uchun 30 ball
    return res.json({ message: "Progress yangilandi!", user });
  }
  res.status(404).json({ error: "Foydalanuvchi topilmadi" });
});

app.listen(PORT, () => {
  console.log(`Backend server ${PORT}-portda ishga tushdi va bazaga ulandi! 🚀`);
});