export const textLessons = [
  // --- MODULE 1: HTML ESSENTIALS ---
  { id: 1, title: "1-dars: HTML Home, Introduction & Editors", free: true, content: "# HTML Kirish\nHTML — bu veb-sahifalar yaratish uchun standart til. \n\n## Muharrirlar\nKod yozish uchun VS Code, Sublime Text yoki Notepad++ ishlatiladi." },
  { id: 2, title: "2-dars: HTML Basic Documents & Elements", free: true, content: "# HTML Asosiy Tuzilishi\nHar bir HTML hujjat `<!DOCTYPE html>` bilan boshlanadi va `<html>`, `<head>`, `<body>` teglarni o'z ichiga oladi." },
  { id: 3, title: "3-dars: HTML Attributes & Headings (H1-H6)", free: true, content: "# HTML Atributlar va Sarlavhalar\nAtributlar elementlarga qo'shimcha ma'lumot beradi (masalan: `class`, `id`, `src`). Sarlavhalar `<h1>` dan `<h6>` gacha." },
  { id: 4, title: "4-dars: HTML Paragraphs, Styles & Formatting", free: true, content: "# Paragraflar va Formatlash\nMatnlarni qalin qilish (`<b>`), kursiv qilish (`<i>`) va rang berish (`style='color:red;'`)." },
  { id: 5, title: "5-dars: HTML Links, Images & Favicon", free: true, content: "# Havolalar va Rasmlar\n`<a href='url'>Havola</a>` va `<img src='pic.jpg' alt='Rasm'>` yordamida sahifaga elementlar qo'shiladi." },
  { id: 6, title: "6-dars: HTML Tables (Jadvallar)", free: true, content: "# HTML Jadvallar\n`<table>`, `<tr>`, `<th>`, `ondan keyin `<td>` teglari yordamida ma'lumotlar jadval shaklida chiqariladi." },
  { id: 7, title: "7-dars: HTML Lists (Ordered & Unordered)", free: true, content: "# Ro'yxatlar\n`<ul>` — tartiblanmagan nuqtali ro'yxat, `<ol>` — raqamlangan tartibli ro'yxat." },
  { id: 8, title: "8-dars: HTML Block & Inline Elements", free: true, content: "# Block va Inline\n`<div>` blok element (butun qatorni egallaydi), `<span>` esa inline element (faqat o'ziga yarasha joy oladi)." },
  { id: 9, title: "9-dars: HTML Classes & ID Selectorlari", free: true, content: "# Class va ID\nCSS va JavaScript orqali elementlarni tanlab olish uchun `class` va `id` atributlari ishlatiladi." },
  { id: 10, title: "10-dars: HTML Forms, Inputs & Semantic Tags", free: true, content: "# Formalar va Semantika\n`<form>`, `<input>`, `<button>`, shuningdek `<header>`, `<footer>`, `<section>` kabi semantik teglar." },

  // --- MODULE 2: CSS STYLING ---
  { id: 11, title: "11-dars: CSS Introduction, Syntax & Selectors", free: false, content: "# CSS Kirish\nCSS sahifani bezash uchun ishlatiladi. Sintaksis: `selector { property: value; }`" },
  { id: 12, title: "12-dars: CSS Colors, Backgrounds & Borders", free: false, content: "# Ranglar va Hoshiyalar\nRGB, HEX, HSL ranglar tizimi, fon rasmlari va `border` xossalari." },
  { id: 13, title: "13-dars: CSS Box Model (Margin, Padding, Content)", free: false, content: "# Box Model\nHar bir element quti hisoblanadi: Content, Padding, Border va Margin." },
  { id: 14, title: "14-dars: CSS Display, Max-Width & Position", free: false, content: "# Display va Position\n`display: block/flex/none`, shuningdek `position: relative/absolute/fixed`." },
  { id: 15, title: "15-dars: CSS Flexbox (Container & Items)", free: false, content: "# Flexbox\nElementlarni moslashuvchan tartibda tekislash: `justify-content`, `align-items`." },
  { id: 16, title: "16-dars: CSS Grid Layout (Rows & Columns)", free: false, content: "# CSS Grid\nMurakkab 2 o'lchamli veb-dizaynlar yaratish uchun eng kuchli vosita." },
  { id: 17, title: "17-dars: CSS Media Queries (Responsive Design)", free: false, content: "# Responsive Dizayn\nTelefon, planshet va kompyuter ekranlariga moslashuvchan saytlar yaratish." },
  { id: 18, title: "18-dars: Tailwind CSS Framework bilan tanishuv", free: false, content: "# Tailwind CSS\nTezkor va qulay klasslar asosida zamonaviy dizayn qurish texnologiyasi." },

  // --- MODULE 3: JAVASCRIPT PROGRAMMING ---
  { id: 19, title: "19-dars: JS Introduction, Where To & Variables", free: false, content: "# JavaScript Asoslari\n`let`, `const`, `var` yordamida o'zgaruvchilar e'lon qilish." },
  { id: 20, title: "20-dars: JS Operators, Arithmetic & Assignment", free: false, content: "# Operatorlar\nMatematik amallar (`+`, `-`, `*`, `/`) va solishtirish operatorlari." },
  { id: 21, title: "21-dars: JS Functions & Scope", free: false, content: "# Funksiyalar\n`function myFunc() { ... }` va arrow function sintaksisi." },
  { id: 22, title: "22-dars: JS Objects, Properties & Methods", free: false, content: "# obyektlar (Objects)\nJavaScript'da real dunyo ob'ektlarini tasvirlash va xossalari." },
  { id: 23, title: "23-dars: JS Events (Click, Mouse, Keyboard)", free: false, content: "# Hodisalar (Events)\nTugma bosilganda yoki sichqoncha harakatlanganda ishlaydigan funksiyalar." },
  { id: 24, title: "24-dars: JS Arrays & Array Methods (map, filter)", free: false, content: "# Massivlar bilan ishlash\n`map()`, `filter()`, `reduce()` kabi zamonaviy array metodlari." },
  { id: 25, title: "25-dars: JS Comparisons, If...Else & Switch", free: false, content: "# Shart operatorlari\n`if`, `else if`, `switch` yordamida mantiqiy qarorlar qabul qilish." },
  { id: 26, title: "26-dars: JS Loops (For, While)", free: false, content: "# Sikllar\nTakrorlanuvchi amallarni bajarish uchun `for` va `while` sikllari." },
  { id: 27, title: "27-dars: JS DOM HTML & CSS Manipulation", free: false, content: "# DOM Bilan Ishlash\nHTML teglarini JS yordamida topish, o'zgartirish va boshqarish." },

  // --- MODULE 4: REACT.JS & ADVANCED ---
  { id: 28, title: "28-dars: React.js Introduction & JSX", free: false, content: "# React Kirish\nReact nima va JSX sintaksisi qanday ishlaydi." },
  { id: 29, title: "29-dars: React Components, Props & State", free: false, content: "# Komponentlar va Props\nMa'lumotlarni ota komponentdan bola komponentga uzatish." },
  { id: 30, title: "30-dars: React Hooks (useState, useEffect) & API", free: false, content: "# React Hooks\nHolatni boshqarish va serverdan ma'lumotlarni tortib kelish (Fetch/Axios)." }
];