# KodAkademiya — Frontend

"0 dan mukammal darajagacha" frontend dasturlashni o'rgatuvchi platforma uchun
React + Tailwind CSS boshlang'ich kodi.

## Ishga tushirish

```bash
npm install
npm run dev
```

Loyihaga http://localhost:5173 orqali kirasiz.

## Papka tuzilishi

```
src/
  components/
    ui/         → Button, GlassCard, Badge, ProgressBar, CodeEditorMock, StagePath
    layout/     → Navbar, Footer
  pages/
    Landing.jsx     → asosiy sahifa (hero, bosqichlar, narxlar)
    Auth.jsx        → kirish / ro'yxatdan o'tish
    Courses.jsx     → kurslar ro'yxati (bosqich → darslar)
    Dashboard.jsx   → shaxsiy kabinet (progress, topshiriqlar, reyting)
  App.jsx       → routing
  index.css     → Tailwind + shrift + glass utility klasslar
```

## Dizayn tokenlari

| Token | Qiymat | Vazifasi |
|---|---|---|
| `base` | `#0A0E17` | Fon (dark mode) |
| `base-surface` | `#12172A` | Glass kartalar foni |
| `cyan-glow` | `#22D3EE` | Asosiy CTA, "Professional" bosqich |
| `violet-glow` | `#A78BFA` | "Expert" bosqich |
| `amber-glow` | `#FBBF24` | Reyting, "Amaliyot" bosqich |
| `mint-glow` | `#34D399` | Bepul/tugallangan holat |
| Shriftlar | `Sora` (display) / `Inter` (matn) / `JetBrains Mono` (kod, label) | |

## Node.js backendga ulash (keyingi qadam)

Hozircha barcha ma'lumotlar (`USER`, `LESSONS`, `LEADERBOARD` va h.k.) komponentlar
ichida mock holatda. Backendni ulaganda quyidagi joylarni almashtiring:

| Fayl | Nima almashtiriladi | Tavsiya etilgan endpoint |
|---|---|---|
| `pages/Auth.jsx` | `handleSubmit` ichidagi mock delay | `POST /api/auth/login`, `POST /api/auth/register` |
| `App.jsx` | `isAuthed`, `isSubscribed` | `GET /api/me` |
| `pages/Courses.jsx` | `LESSONS` obyekti | `GET /api/courses` |
| `pages/Dashboard.jsx` | `USER`, `STAGE_PROGRESS`, `ASSIGNMENTS`, `LEADERBOARD` | `GET /api/me/progress`, `GET /api/me/assignments`, `GET /api/leaderboard` |

Har bir joyda `// TODO(backend): ...` izohi qoldirilgan — qidiruv orqali topasiz.

**Tavsiya:** global auth/subscription holatini React Context yoki React Query orqali
boshqaring, props orqali qo'lda uzatish o'rniga — bu `App.jsx`dagi `isAuthed` /
`isSubscribed`ni har bir sahifaga alohida ulash o'rniga bitta joydan boshqarish imkonini beradi.

To'lov integratsiyasi (Click/Payme/Uzum Pay) — bu server tomonida (Node.js) amalga
oshiriladigan webhook oqimi bo'lgani uchun frontendda faqat "Obuna bo'lish" tugmasi
backend tomonidan qaytarilgan to'lov sahifasiga yo'naltiradi (`window.location.href = paymentUrl`).
# Dev-Academy
