const jwt = require('jsonwebtoken');

// Bu middleware so'rov headerida "Authorization: Bearer <token>" borligini tekshiradi.
// Token to'g'ri bo'lsa, req.userId ga foydalanuvchi ID'sini yozadi va davom ettiradi.
function auth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: "Avtorizatsiya talab qilinadi. Iltimos, qaytadan tizimga kiring." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Token yaroqsiz yoki muddati o'tgan. Iltimos, qaytadan tizimga kiring." });
  }
}

module.exports = auth;