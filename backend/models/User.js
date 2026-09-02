const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true }, // bcrypt bilan hash qilingan holda saqlanadi
    subscription: { type: Boolean, default: false },
    completedLessons: { type: [Number], default: [] }, // tugatilgan darslarning ID'lari
    points: { type: Number, default: 50 },
  },
  { timestamps: true }
);
 
module.exports = mongoose.model('User', userSchema);
 