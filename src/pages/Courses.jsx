import React, { useState } from 'react';
import { PlayCircle, Lock, CheckCircle, CreditCard, Sparkles, ArrowLeft, BookOpen, HelpCircle } from 'lucide-react';

const API_URL = "https://backend-chi-six-43.vercel.app/api";

// 100 kunlik roadmap bo'yicha Day 1 - Day 30 darslari
const lessons = [
  { 
    id: 1, 
    title: "1-dars: HTML tili. Teglar. Web-hujjat strukturasi. HEAD qism teglari.", 
    free: true, 
    content: `HTML (HyperText Markup Language) — veb-sahifalarning tuzilishi va strukturasini belgilovchi gipermatnli belgilash tili.Teglar nima?Teg — bu brauzerga matn, rasm yoki boshqa elementlarni qanday ko'rsatishni aytuvchi maxsus buyruq. Ular burchak qavslar (< >) ichida yoziladi. Teglar juft (<html>...</html>) va toq bo'ladi.Web-hujjat strukturasiHar bir oddiy HTML-hujjat ma'lum bir standart tuzilishga ega:html<!DOCTYPE html>
<html>
  <head>
    <!-- Sahifaning texnik va sarlavha qismi -->
    <title>Sahifa nomi</title>
  </head>
  <body>
    <!-- Sahifaning ko'rinadigan asosiy qismi -->
    <h1>Salom, dunyo!</h1>
  </body>
</html>
<!DOCTYPE html> — hujjatning HTML5 versiyasida ekanligini brauzerga bildiruvchi buyruq.<html> — HTML hujjatining boshlanishi va tugashini bildiruvchi asosiy juft teg.<head> — veb-sahifaning xizmat ko'rsatuvchi sarlavha qismi.<body> — foydalanuvchiga brauzer oynasida ko'rinadigan asosiy kontent qismi.HEAD qism teglari<head> bo'limi sahifaning texnik ma'lumotlarini o'z ichiga oladi va bu ma'lumotlar sahifaning o'zida (ekranda) ko'rsatilmaydi.Eng ko'p ishlatiladigan <head> teglari:<title> — brauzer oynasining yuqori qismidagi tabda (yorliqda) ko'rsatiladigan sahifa sarlavhasi.<meta charset="UTF-8"> — matn kodlash jadvalini belgilaydi (o'zbek tilidagi harflar to'g'ri chiqishi uchun muhim).<meta name="description" content="..."> — qidiruv tizimlari (Google, Yandex) uchun sahifaning qisqacha tavsifi (SEO).<link> — tashqi CSS uslublar jadvalidagi fayllarni sahifaga ulash uchun ishlatiladi.<script> — JavaScript dasturlash fayllarini sahifaga ulash uchun xizmat qiladi.<style> — sahifa ichki dizayn qoidalarini (CSS) yozish uchun ishlatiladi.`,
    quiz: {
      question: "HTML hujjatida brauzer oynasining sarlavhasida (tabda) ko'rinadigan matn qaysi teg ichiga yoziladi?",
      options: ["<body>", "<head> ichidagi <title>", "<html>", "<meta>"],
      correct: 1
    }
  },
  { 
    id: 2, 
    title: "2-dars: HTML da izohlar. Blok darajali va ichki darajali matn bo'limlari. Matnni bezash teglari.", 
    free: true, 
    content: `HTML-da izohlar kodni tushuntirish uchun yoziladi, blok va ichki elementlar sahifa tuzilishini belgilaydi, bezash teglari esa matn ko'rinishini o'zgartiradi.1. HTML-da izohlar (Comments)Izohlar brauzerda ko'rinmaydi. Ular kodni tushunish yoki vaqtincha yashirish uchun kerak.Yozilish tartibi: <!-- Bu yerda izoh yoziladi -->Xususiyati: Bir qatorli yoki ko'p qatorli bo'lishi mumkin. Brauzer bu qismni o'qib, ekranga chiqarmaydi.2. Blok darajali va ichki darajali elementlarBlok darajali elementlar (Block-level)Bu elementlar har doim yangi qatordan boshlanadi. Ular mavjud bo'sh joyning butun enini (kengligini) egallaydi.<p> — Paragraf (matn qismi).<div> — Umumiy blok konteyneri.<h1> - <h6> — Sarlavhalar.<ul>, <ol>, <li> — Ro'yxatlar va ularning elementlari.Ichki darajali elementlar (Inline)Bu elementlar yangi qatordan boshlanmaydi. Ular faqat o'zi egallagan matn miqdoricha joy oladi.<span> — Matnning kichik qismini ajratish uchun.<a> — Havola (silka) yaratish uchun.<strong> — Muhim matn.<em> — Ajratib ko'rsatilgan matn.3. Matnni bezash teglariMatn ko'rinishini chiroyli qilish yoki unga ma'no berish uchun ishlatiladi (ko'pchiligi ichki darajali teglardir).<b> — Matnni qalin qiladi (maxsus ma'nosiz).<strong> — Matnni qalin qiladi va uning muhimligini bildiradi.<i> — Matnni kursiv (og'ma) qiladi.<em> — Matnni kursiv qiladi va urg'u beradi.<u> — Matnning tagiga chizadi.<del> — Matnning ustiga chizadi (o'chirilgan kabi).<mark> — Matnni sariq rangda belgilaydi (marker bilan bo'yalandek).<small> — Matn hajmini kichiklashtiradi.`,
    quiz: {
      question: "HTML da yangi qatordan boshlanmaydigan va faqat o'z hajmiicha joy egallaydigan elementlar qanday ataladi?",
      options: ["Block-level elementlar", "Inline (Ichki darajali) elementlar", "Root elementlar", "Semantic elementlar"],
      correct: 1
    }
  },
  { 
    id: 3, 
    title: "3-dars: HTML da ro'yxat va havolalar (giperyo'llanmalar).", 
    free: true, 
    content: `HTML da ro‘yxatlar ma'lumotlarni tartibli ko‘rsatish uchun, havolalar (giperyo‘llanmalar) esa sahifalarni bir-biriga bog‘lash uchun ishlatiladi.1. HTML da Ro‘yxatlar (Lists)HTML da ro‘yxatning asosiy 3 turi mavjud:Tartiblanmagan ro‘yxat (<ul>) — Elementlar nuqta yoki boshqa belgilar bilan belgilanadi.Tartiblangan ro‘yxat (<ol>) — Elementlar raqamlar yoki harflar bilan tartiblanadi.Ta'riflar ro‘yxati (<dl>) — Atama (<dt>) va uning izohi (<dd>) ko‘rinishida bo‘ladi.Misol:html<!-- Tartiblanmagan ro'yxat -->
<ul>
  <li>Olma</li>
  <li>Banan</li>
</ul>

<!-- Tartiblangan ro'yxat -->
<ol>
  <li>Birinchi qadam</li>
  <li>Ikkinchi qadam</li>
</ol>
<ul> yoki <ol> — ro‘yxatni boshlaydi.<li> — ro‘yxatning har bir elementini belgilaydi.2. Giperyo‘llanmalar (Links / Havolalar)HTML da havolalar <a> (anchor) tegi yordamida yaratiladi. href atributi havola qayerga olib borishini (manzilni) ko‘rsatadi.Misol:html<a href="https://google.com">Google saytiga o'tish</a>
Asosiy atributlari:href="manzil" — Boshqa sahifa yoki sayt manzilini kiritish uchun.target="_blank" — Havolani yangi oynada (tabda) ochish uchun ishlatiladi.html<a href="https://uzbekdevs.uz" target="_blank">Yangi oynada ochish</a>`,
    quiz: {
      question: "HTML da giperhavola (link) yaratish uchun qaysi teg ishlatiladi?",
      options: ["<link>", "<a>", "<href>", "<url>"],
      correct: 1
    }
  },
  { 
    id: 4, 
    title: "4-dars: HTML ning grafika, video, audio va animatsiya imkoniyatlari.", 
    free: true, 
    content: `HTML5 veb-sahifalarga qo'shimcha dasturlarsiz multimedia va vizual elementlarni qo'shish imkonini beradi.Audio imkoniyatlari<audio> tegi yordamida veb-sahifaga ovozli fayllar qo'shiladi.MP3, OGG va WAV kabi mashhur formatlarni qo'llab-quvvatlaydi.controls atributi orqali sahifada ijro etish, to'xtatish va ovozni boshqarish tugmalari ko'rsatiladi.Video imkoniyatlari<video> tegi yordamida sahifaga to'g'ridan-to'g'ri video joylashtiriladi.MP4, WebM va Ogg formatlaridagi videolarni ishlatish mumkin.autoplay, loop va controls atributlari orqali videoni avtomatik boshlash yoki takrorlash sozlanadi.Grafika imkoniyatlari<canvas> tegi — JavaScript yordamida 2D va 3D grafika, o'yinlar va rasmlarni chizish uchun ishlatiladigan dinamik maydon.SVG (Scalable Vector Graphics) — o'lchami o'zgarganda sifati buzilmaydigan vektorli rasmlarni to'g'ridan-to'g'ri HTML kodiga yozish imkonini beradi.Animatsiya imkoniyatlariHTMLning o'zi statik til bo'lsa-da, uning CSS3 va JavaScript bilan birgalikdagi imkoniyatlari silliq animatsiyalar yaratishga yordam beradi.<canvas> elementlari yoki CSS transformatsiyalari orqali obyektlarni harakatlantirish, rangini o'zgartirish va vizual effektlar berish mumkin.`,
    quiz: {
      question: "HTML sahifasiga rasm qo'shish uchun qaysi teg ishlatiladi?",
      options: ["<picture>", "<image>", "<img>", "<src>"],
      correct: 2
    }
  },
  { 
    id: 5, 
    title: "5-dars: HTML da jadvallar bilan ishlash.", 
    free: true, 
    content: `HTML da jadvallar bilan ishlash.
HTML da hujjatlarda ba’zida jadvallarni yaratish kerak bo’ladi. Buning uchun <table> juft tegdan foydalanamiz.

<table> … </table> — jadvalning umumiy sohasini yaratish tegi. Teg atributlari:
width= «butun jadval kengligi piksel yoki % da»
align = «butun jadvalni hujjatda gorizontal joylashuvi ( left -chap , center — o’rtada, right — o’ng )»
border = «jadvaldagi katakchalar chegaralarining o’lchami»
bordercolor = «jadvaldagi katakchalar chegaralarining rang nomi yoki kodi»
bgcolor = «jadvaldagi katakchalar ichki fon rang nomi yoki kodi»
cellpadding = «katakchalar ichiga joy tashlash masofasi»
cellspacing = «katakchalar orasida joy tashlash masofasi»

Jadvalning har bir satrini aniqlash uchun <tr> … <tr> tegidan foydalanamiz. Satrning har bir katakchalarini esa yoki <td> … <td> — oddiy kataklarning teglari yoki <th> … <th> — sarlavha katakchaning teglari yordamida aniqlaymiz. Ushbu teglar atributlari:
width= «katakcha kengligi piksel yoki % da»
height= «katakcha balandligi piksel yoki % da»
align = «katakchadagi matnni gorizontal joylashuvi ( left -chap , center — o’rtada, right — o’ng )»
valign = «katakchadagi matnni vertikal joylashuvi ( top — yuqorisida, middle — o’rtasida, bottom — qo’yida )»
bgcolor =«katakchaning ichki fon rang nomi yoki kodi»
border =«katakchaning chegaralar o’lchami»
bordercolor =«katakchaning chegaralarning rang nomi yoki kodi»

Ba’zida bizga bir nechta jadval katakchalarini birlashtirsh zarur bo’ladi. Buni biz <td> yoki <th> teglarning qo’yidagi ikkita atributlar yordamida bajarishimiz mumkin:
colspan = «birlashtirilgan vertikal joylashgan katakchalar (ustunlar) soni»
rowspan = «birlashtirilgan gorizontal joylashgan katakchalar (satrlar) soni»

Misol:

<!DOCTYPE html>
<html>
 <head>
   <!-- Sahifaning ekranga chiqmaydigan qism -->
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>

 <body>  
   
<table align="center" width="90%" border="1" bordercolor="gray" bgcolor="#cccccc" cellpadding="2px" cellspacing="2px" > 
<tr>
<th> Bilim va ko'nikma </th> 
<th colspan="3"> Web sahifaning holati % </th>
</tr>
<tr>
<td> HTML </td> 
<td bgcolor="red" align="center" width="20%"> 33% </td>
<td colspan="2"> </td>
</tr>
<tr>
<td> CSS </td>
<td colspan="2" bgcolor="red"  align="center" width="40%"> 66% </td>
<td>  </td>
</tr>
<tr>
<td> Java Script </td> 
<td colspan="3" bgcolor="red"  align="center"  width="60%"> 99% </td></tr>
</table>

 </body>
</html>
Реклама


Bu misolda web sahifamizda 4×4 o’lchamli jadval yaratiladi.

Agarda bizga jadvalning katakchadagi matnni yonchalab yozish kerak bo’lsa, u holda <p> yoki <div> yoki boshqa matn blok element tegining style atributudan foydalanamiz:
writing-mode: — yozilish yo’nalishini sozlash (horizontal-tb — chap tomondan o’ng’ tomonga; vertical-rl — past qismidan yuqori qismiga; vertical-lr — yuqori qismidan past qismiga

Misol:

<!DOCTYPE html>
<html>
 <head>
   <!-- Sahifaning ekranga chiqmaydigan qism -->
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>

 <body>  
   
<table align="center" width="90%" border="1" bordercolor="gray" bgcolor="#cccccc" cellpadding="2px" cellspacing="2px" > 
<tr><th width="50%"> Oddiy matn </th> <th> <div style="writing-mode: vertical-rl;"> Yo'nalishi o'zgargan matn </div></th></tr>
</table>


 </body>
</html> 
Bu misolda web sahifamizda oddiy va yo’nalishi o’zgargan matnli katakchali jadval yaratiladi.

HTML-5 yaratilishdan avval web hujjatda ma’lumotlarni qo’lay xolda joylashtirish va uning strukturasini hosil qilishda ba’zida jadvallardan foydalanish odatga kirgan edi. Jadval yordamida butun hujjatimiz bo’limlarga bo’linib kerakli ma’lumotlar kiritamiz.


Bu misollarda hujjatimiz strukturasini jadval yordamida hosil qilish 2 ta na’munasi ko’rsatilgan .`,
    quiz: {
      question: "Jadval ichida yangi qator ochish uchun qaysi teg ishlatiladi?",
      options: ["<td>", "<tr>", "<th>", "<table>"],
      correct: 1
    }
  },
  { 
    id: 6, 
    title: "6-dars: HTML ning interaktif elementlari. Formalar, tugmalar va matn sohalari.", 
    free: true, 
    content: `HTML ning interaktiv elementlari. Formalar, tugmalar, ro’yhat va matn sohalari.
Web sahifada server va mijoz-inson o’rtasida muloqotni yaratish hamda web sahifa orqali foydalanuvchi nomlari, elektron pochta manzili, telefon raqamlari, kredit karta raqami, parol va shu kabi ma’lumotlarni kiritib yoki taklif etilgan variantlardan biror birini tanlab serverga junatish uchun HTMLda — formalar, o’z ichiga har xil interaktiv elementlarni oluvchi maxsus maydonlardan foydalaniladi.

<form> … </form> juft teglar yordamida forma maydoni yaratiladi. Teg atributlari:
name = «formani nomlash».
action = «formani qayta ishlash va tahrirlash URL yoki electron pochta manzili»
method = «formani junatish usuli (get — junatilagan ma’lumot URL da ko’rsatiladi yoki post- ko’rsatilmaydi)»
target = «forma junatilgandan so’ng olingan javobni qayerda ko’rsatilishi (_blank, _self,_ parent, _top)»

Ushbu formalar ichiga ma’lumotlarni kiritish uchun muljallangan har xil interaktiv elementlarni joylashtiramiz. Ba’zida esa formadadi bir nechta interaktiv elementlarni guruhlashimiz kerak bo’ladi. Shunda guruh atrofini ramkalash uchun ularni <fieldset> … </fieldset> teglar orasida joylashtiramiz. Ramkaning yuqori burchagidagi guruh nomini esa <legend> … </legend> teglar orasiga joylashtiramiz.

Misol:


HTML ning interaktiv elementlarni guruhi na’munasi.

HTML ning interaktiv elementlari.
<textarea> … </textarea> — matn chiqarish yoki kiritish maydonini hosil qilish tegi. Teg parametrlari:
name= «elenment nomi»
cols = «maydon kengligi (harflar soni)»
rows = «maydon balandligi (satrlar soni)»
wrap= «yangi satrga avtomatik o’tish (off — yoq, soft — faqat ekranda, hard — ekran va junatganda)
maxlength= «maksimal kiritish mumkin bo’lgan belgilar soni»
tabindex= «TAB tugmasi yordamida o’tish tartibi»
disabled — faol emas bo’lishi
readonly — faqat o’qish mumkinligi
autofocus — oldindan tanlangan
required — tuldirish majburligi
placeholder = «maydondagi izoh matni»

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
  <form name="registration" action="http://www.bolalar-soft.uz" method= "post" target="_self">
 <fieldset>
 <legend>Matnli maydon sohasi </legend> 
 <textarea name="text" wrap="soft"  cols="30" rows="3"> Matn kiritish yoki chiqarish maydon elementi
  </textarea>
  </fieldset>
  </form>

 </body>
</html>

Bu misolda web sahifamizda har bitta satrga 30 harfdan iborat 3 ta satrli matnli maydon elementi yaratiladi.

<select> … </select> — berk yoki ochiq ro’yhat maydonini hosil qilish tegi. Teg atributlari:
size = «satrlar soni, agar 1 dan katta bo’lsa ochiq ro’yhat yaratiladi»
name = «elementni nomlanishi»
onchange = «tanlash natijasidagi harakat»
tabindex= «TAB tugmasi yordamida o’tish tartibi»
multiple — bir nechta satrli ro’yhat
autofocus — oldindan tanlangan
disabled — faol emasligi
required — tuldirish majburligi

Har bir ro’yhatdagi element <option> … </option> teglar orasida joylashtiriladi. Teg atributlari:
selected — oldindan tanlangan ro’yhat elementi
value = «tanlash natijasidagi qiymat».

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend>Ro'yhat maydoni</legend> 
<select size="1" name="Jins" recuired> <option disabled selected> Jinsni tanlang </option>
<option value="a"> Ayol </option>
<option value="e"> Erkak </option>
<select> </fieldset></form>

 </body>
</html>

Bu misolda web sahifamizda 2 ta variantli bekr ro’yhat elementi yaratiladi.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self">
<fieldset>
<legend>Ochiq ro'yhat maydoni</legend> 
<select size="4" name="Viloyat" multiple>
<option disabled selected> Viloyatni tanlang </option>
<option value="tosh">Toshkent </option>
<option value="and"> Andijon </option>
<option value="nam">Namangan</option>
<option value="far"> Farg'ona</option>
<option value="sir"> Sirdaryo</option>
<option value="nav"> Navoi</option>
<select>
</fieldset>
</form>

 </body>
</html>

Bu misolda web sahifamizda 4 ta variant ko’rsatuvchi 6 tali ochiq ro’yhat elementi yaratiladi.

Ba’zida ro’yhat elementlarini guruhlash kerak bo’ladi. Buning uchun <optgroup> … </optgroup> — tegi va uning label=»guruh nomi» atributi yordamidan foydalanamiz.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<optgroup label="Oliy ta'lim">
<option value="bakalavr">Bakalavr </option>
<option value="magistr">Magistr </option>
</optgroup>


 </body>
</html>

Bu misolda Oliy ta’lim tarkibiga Bakalavr va Magistr elementlari guruhlangan ochiq ro’yhati ko’rsatilmoqda.

HTML da har xil interaktiv muloqot elementlarini hosil qilish universal, — <input> toq tegi mavjud. Teg atributlari:
type — asosiy atributi bo’lib, u yordamida yaratilgan muloqot element turi ko’rsatiladi:
type=»text» — matn kiritish maydoni elementi,
type=»password» — ***** holatida matn kiritish maydoni elementi,
type=»radio» — doirasimon shartli bayroqchalar ro’yhati elementi,
type=»checkbox» — to’rtburchakli shartsiz bayroqchalar ro’yhat elementi,
type=»button» — oddiy tugma elementi,
type=»submit» — formani junatish tugma elementi,
type=»reset» — formani tozalash tugma elementi,name = «elementni nomlash»
readonly — o’zgartirib bo’lmasligi
autofocus — oldindan tanlanganligi
disabled — faol emasligi
required — tuldirish majburligi
value = «element o’stidagi matn» — faqat type=text, type=password, type=button, type=reset va type=submit elementlar uchun qo’llaniladi.
size = «ekranda ko’rinuvchi xarflar soni» — faqat type=text element uchun qo’llaniladi.
maxlength= -«elementning uzunligini» — faqat type=text element uchun qo’llaniladi.
placeholder = «elementlardagi yordamchi matnni aniqlaydi » -faqat type=text va type=password elementlar uchun qo’llaniladi.
cheked = «tanlangan yoki yoqligini aniqlaydi (true yoki false)» — faqat type=radio va type=checkbox elementlar uchun qo’llaniladi.
multiple — bir nechta fayl tanlash mumkinligi — faqat type=fayl elementi uchun qo’llaniladi.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend> Matn kiritish elementi : </legend> 
Login:<input type="text" name="login" placeholder="Ismingiz" size="20"> <br> 
Parol: <input size="8" name="password" placeholder="8 ta belgili parol" type="password"> <br>
</fieldset></form>


 </body>
</html>

Bu misolda web sahifamizda ism va parol kiritish elementlari yaratiladi.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend>Radio kiritish elementi: </legend> 
<input type="radio" name="ayol" checked="true">Ayol<br>
<input type="radio" name="erkak"> Erkak<br>
</fieldset></form>


 </body>
</html>

Bu misolda web sahifamizda 2 ta shartli bayroq elementlari yaratiladi.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend> Checkbox kiritish elementi : </legend> 
<input type="checkbox" name="football"checked="true"> Football <br> 
<input type="checkbox" name="box"> Box <br>
<input type="checkbox" name="chess"> Chess <br>
</fieldset></form>


 </body>
</html>

Bu misolda web sahifamizda 3 ta shartsiz bayroq elementlari yaratiladi.

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend>Button, submit, reset, file va image kiritish elementlari</legend> 
<input type="button" name="btn1" value="Kirish" onclick="cmdclick"> 
<input type="submit" value="Jo'natish"> 
<input type="reset" value="Tozalash"> <br>
<input type="file" name="file"> 
</fieldset></form>


 </body>
</html>

Bu misolda web sahifamizda 2 ta variantli bekr ro’yhat elementi yaratiladi.

<button> … </button> — oddiy tugma interaktiv muloqot elementini hosil qilish tegi. Ushbu teg avval tanishtirilgan <input> tegining button, submit, reset va file turlariga o’xshash bo’lib, faqat o’lardan farqli bir nechta satrli, rasmli, jadvalli va boshqa noyob ko’rinishdagi tugmalarni yaratish imkonini yaratadi. Teg parametrlari :
type= «tugma turi (button — oddiy, reset — formani tozalash, submit — formani junatish)»
title= «yordamchi matn»
autofocus — «oldindan tanlangan «
tabindex= «TAB tugmasi yordamida o’tish tartibi»
disabled — faol emasligi
style= «element stilini aniqlash kodi (height va width — o’lchamlari)»

Misol:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>  
   
<form name="registration" action= "http://www.bolalar-soft.uz" method= "post" target="_self"><fieldset>
<legend>Button elementi</legend> 
<button type="button" name="btn1" onclick="cmdclick"><img src="icon.png"> </button>
<button type="submit"> Ma'lumotlarni </br>  jo'natish </button> 
<button type="reset"> Tozalash </button> </fieldset></form>


 </body>
</html>

Bu misolda web sahifamizda 3 ta variantli tugma elementi yaratiladi.`,
    quiz: {
      question: "Foydalanuvchidan katta hajmli matn (fikr, izoh) yig'ish uchun qaysi teg ishlatiladi?",
      options: ["<input type='text'>", "<textarea>", "<textbox>", "<form-text>"],
      correct: 1
    }
  },
  { 
    id: 7, 
    title: "7-dars: HTML5 Semantik konteynerlar va yangi interaktif elementlar.", 
    free: true, 
    content: `HTML-5. Konteynerlar — yangi hujjat struktura teglari. Yangi interaktiv elementlari.
Hozirda Web saytlar yaratishda HTML5 tilidan foydalaniladi. Ushbu tilning asosiy afzalliklari bu: yangi interaktiv muloqot elementlari, grafik, audio va videolar biilan ishlash imkoniyatlari, web-hotiradan ma’lumotlarni saqlashda foydalanish va hokazo… Eng muhimi bu HTML5 oldingi versiyalarda yozilgan barcha teglarni to’g’ri qabul qiladi.

Birinchidan HTML fayning boshida albatta <!DOCTYPE html> tegi joylashtirilishi shart. Bundan keyin esa <html lang=»en»> yoki <html lang=»ru-RU»> bilan server tili hamda <head> qismida albatta <meta charset=»utf-8″> tegi yordamida kodlash usuli yoziladi.

HTML5 da hujjatni bo’limlarga (konteynerlarga) ajratish imkoniyati paydo bo’lgan. Bo’limlar yordamida hujjat strukturasini (tarkibini) tashkil qilish juda qo’lay.

<header> — hujjatimiz yoki bo’limning sarlavhasini aniqlaydi

<nav> — hujjatning havolalar (menyu-mundarijasi) bo’limini aniqlaydi

<article> — hujjatning maqola (blog postlari yoki shaxsiy ma’lumotlar) bo’limini aniqlaydi

<section> — hujjatning tarkibidagi ihtiyoriy bo’limini aniqlaydi

<aside> — hujjatning tarkibiga bog’liq yordamchi qism bo’limini aniqlaydi

<footer> — hujjatning pastki bo’limini aniqlaydi

Ushbu konteynerlarning tashki ko’rinishini sozlashda CSS style-ning imkoniyatlaridan foydalaniladi.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">

<style>
  footer {
     width: 400px;
     height: 50px;
     background: teal; 
     padding: 5px; 
     border: 2px violet solid;
     border-radius: 0px 0px 20px 20px; 
     box-shadow: 10px 10px 15px #cccccc; 
     color: white;
     text-align: center; 
     font-size: 16px; 
     }
</style>

 </head>
  <body>   
     <footer>
         Bu sahifaning pastki qismida<br>
         joylashgan <b>FOOTER</b> konteyneri.
     </footer>
 </body>
</html>

Bu misolda web sahifamizda footer konteyner tashki ko’rinishi style orqali sozlanmoqda.

HTML-5 da <input> tegining type atributi uchun ko’plab yangi interaktiv muloqot elementlarining ko’rinishlari qo’shilgan:
type= email — elektron pochta adresini kiritish maydoni,
type=url — internetdagi URL manzilni kiritish maydoni,
type=tel — telefon raqamlar kiritish maydoni,
type=number — raqamlar kiritish maydoni,
type=range — darajani aniqlash yugurtagu,
type=date — sana tanlash maydoni,
type=month — oy tanlash maydoni,
type=week — hafta tanlash maydoni,
type=time — vaqt tanlash maydoni,
type=datetime — sana va vaqtni birgalikda tanlash maydoni,
type=datetime-local — sana va vaqt tanlash maydoni,
type=search — qidirish satri,
type=color — rang tanlash tugmasi )

Ushbu interaktiv elementlarning atributlari:
id = » JavaScript lar orqali elementga murojaat qilish uchun nomi»
tabindex = » TAB tugmasi yordamida o’tish tartibi»
placeholder = «email, url, tel va search elementlardagi yordamchi matnni aniqlaydi»
value = » element qiymatini aniqlaydi, masalan number va range uchun — 50, date uchun — 2021-09-01, color uchun esa — #FF3CDF»
min = » number va range elementlardagi eng kichik son»
max = » number va range elementlardagi eng katta son»
step = » number va range elementlardagi son o’zgarish qadami»
readonly — elementni o’zgartirib bo’lmasligi
autofocus — elementni oldindan tanlanganligi
disabled — elementni faol emasligi
required — elementni tuldirish majburligi

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>


  <form name="setting" action="http://www.bolalar-soft.uz" method= "post" target="_self">
 <fieldset>
   <legend>Yangi interaktiv elementlari</legend> 
   E-pochta adres: <input type="email" value="user@server" autofocus required><br>
   Telefon: <input type="tel" placeholder="9989-x-xxx-xx-xx" required><br>
   Web-sahifa manzili: <input type="url" required>
 </fieldset>
 </form>

 </body>
</html>

Bu misolda web sahifamizda input ning yangi email, tel va url ko’rinishlari yaratilmoqda.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>

  <form name="setting" action="http://www.bolalar-soft.uz" method= "post" target="_self">
 <fieldset>
   <legend>Yangi interaktiv elementlari</legend> 
   Sana tanlash : <input type="date" value="2021-09-01"> <br>
   To'liq sana tanlash: <input type="datetime-local"> <br>
   Oyni tanlash : <input type="month"><br>
   Haftani tanlash : <input type="week"><br>
   Vaqtni tanlash : <input type="time">
 </fieldset>
 </form>

 </body>
</html>

Bu misolda web sahifamizda input ning yangi date, datetima-local, month, week va time ko’rinishlari yaratilmoqda.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">
 </head>
  <body>

  <form name="setting" action="http://www.bolalar-soft.uz" method= "post" target="_self">
 <fieldset>
   <legend>Yangi interaktiv elementlari</legend>
   Rang tanlash : <input type="color" value="#FF0000"> <br>
   Son kiritish : <input type="number" min="1" max="100" value="50"> <br>
   Darajani sozlash : <input type="range" min="1" max="100" value="50%"> <br>
   Qidirish satri : <input type="search" placeholder="Kalit so'zni kiriting">
  </fieldset>
  </form>

 </body>
</html>

Bu misolda web sahifamizda input ning yangi color, number, range va search ko’rinishlari yaratilmoqda.`,
    quiz: {
      question: "Veb-sahifaning pastki qismi (footer) uchun HTML5 da qaysi semantik teg ishlatiladi?",
      options: ["<bottom>", "<footer>", "<end>", "<section>"],
      correct: 1
    }
  },
  { 
    id: 8, 
    title: "8-dars: HTML5 ning CANVAS — rastr grafik imkoniyati.", 
    free: true, 
    content: ` HTML-5 ning CANVAS — yangicha rastr grafik imkoniyati.
<canvas> — bu HTML5 ning rasmlar chizish yangi imkoniyat tegi. Canvas bu — ikki o’lchovli to’rtburchak rastrli tasvirlar maydonidir. Uning yuqori chap burchagi koordinatasi (0,0), pastki o’ng burchak koordinatasini esa biz width va height atributlar yordamida aniqlaymiz. HTML5 ning yangi <canvas> tegi yordamida web sahifamizda JavaScript — lardan foydalanib grafik shakllar (tasvir) chizish sohasi yaratadi.

Teg atributlari:
height = «tasvir chizish sohasining balandlik o’lchami % dagi yoki pikseldagi qiymati»
width = «tasvir chizish sohasining kenglik o’lchami % dagi yoki pikseldagi qiymati»
border = «tasvir chizish sohasining chegara o’lchami»
id = «JavaScript lar orqali elementga murojaat qilish uchun nomi»

CANVAS rastrli tasvir chizish sohasi bilan ishlash.

Birinchidan — bizning hujjatimizning <body> qismida quyidagilarni yozib, «can» nomli 500×300 pixel o’lchamida tasvir chizish sohasini yaratamiz:


<body>

<b><canvas width="500" height="300"  border="2" id="can"></b> <b></canvas></b> 

</body>
Ikkinchidan — ushbu can nomli canvas (tasvir chizish) sohasida grafik shakllar chizish uchun hujjatimizning <head> qismida <script> … </script> teglar orasiga quyidagilarga uxshash JavaScript maxsus kodlarni yozamiz:


<head>

<script> 
  window.onload=function() 
    { 
      var canvas=document.getElementById("can"); 
      var context=canvas.getContext("2d"); 
     }; 
</script>

</head>
Ushbu kod orqali hujjat yuklangandan so’ng, can nomli canvas-elementni yaratib, uni context deb nomlab, 2d-shaklida bo’lishini ta’minlayapmiz (3d-shakillar HTML5 da hali mavjud emas, ammo kelajakda yaratilishi mumkin).

Ushbu Context nomli canvas tasvirlarni chizish sohasida har hil grafik shakllarni chiziqlar yordamida chizish uchun qo’yidagi JavaScript — kodlaridan foydalanishimiz mumkin:
context.moveTo(x,y); — chizish qalamni (kursorni) context nomli sohaning (x,y) koordinatasiga olib borish.
context.lineTo(x,y); — turgan joydan context nomli sohaning (x,y) koordinatasigacha qalam bilan chiziq chizish.
context.lineWidth=»…»; — context nomli sohaning chizish qalam qalinligi.
context.lineCap=»…»; — context nomli sohaning chizish qalam uchlarining shakli (round, square).
context.strokeStyle=«rang kodi yoki nomi»; — context nomli sohaning chizish qalam (chegaralar) rangi kodi.
context.stroke(); — chiziq va shakllar chizish buyrug»i.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">

<script>
window.onload=function() 
   {
   var canvas=document.getElementById("can");
   var context=canvas.getContext("2d");
   context.lineWidth="5";
   context.lineCap="round";
   context.strokeStyle="red";
   context.moveTo(50,150);
   context.lineTo(350,50);
   context.lineTo(350,100);
   context.lineTo(50,200);
   context.lineTo(50,150);
   context.stroke();
   };
</script>

 </head>
  <body>   

    <canvas width="400" height="250" border="2" id="can">
    </canvas> 

 </body>
</html>

Bu misolda web sahifamizda context nomli 2d canvas tasvir chizish sohasi yaratilib, uning ichiga 4-ta 5px qalinlikda bo’lgan qizil rangli chiziqlar chizilib geometrik shakl hosil qilinadi.

Context nomli canvas tasvirlarni chizish sohasida har hil tayyor ichki rangga ega bo’lgan grafik shakllar (turtburchak, aylana, ark …) chizish uchun qo’yidagi JavaScript — kodlaridan foydalanishimiz mumkin:
context.arc(x, y, r, gradus1, gradus2, yunalish); — markazi (x,y) koordinatasida joylashgan, radiusi r ga teng va yo’nalishi yoki true (soat bo’ylab) yoki false (soatga qarshi) ga teng bo’lgan aylana (agar gradus1=0 va gradus2=2*Math.PI teng bo’lsa) yoki arc (gradus1 va gradus2 = ihtoyoriy graduslarga teng bo’lsa) context nomli sohada chizish.
context.rect(x1, y1, x2, y2); — yuqori chap nuqtasi (x1,y1) va pastki o’ng nuqtasi (x2,y2) koordinata bo’yicha turtburchak context nomli sohada chizish.
context.fillStyle = «rang kodi yoki nomi «; — shaklning (aylana, arc yoki turtburchak) ichki rangi kodi.
context.fill(); — shakllar ichini bo’yash buyrug’i.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">

<script>
window.onload=function() 
   {
     var canvas=document.getElementById("can");
     var context=canvas.getContext("2d");
     context.moveTo(50,50);
     context.rect(50, 50, 50, 200);
     context.moveTo(300,150);
     context.arc(200, 150, 100, 0, 2*Math.PI, false);
     context.moveTo(330,100);
     context.arc(330, 100, 75, 1.2*Math.PI, 1.8*Math.PI,  false);
     context.lineWidth="5";
     context.lineCap="round";
     context.strokeStyle="red";
     var grdl=context.createLinearGradient(0,0,canvas.width,canvas.height);
     grdl.addColorStop(0,'#8ED671');
     grdl.addColorStop(1,'#004CB3');
     context.fillStyle=grdl;
     context.fill();
     context.stroke();
   };
</script>

 </head>
  <body>   

    <canvas width="400" height="250" border="2" id="can">
    </canvas> 

 </body>
</html>

Bu misolda web sahifamizda context nomli 2d canvas tasvir chizish sohasi yaratilib, uning ichiga 5px qalinlikda bo’lgan qizil rangli turtburchak, aylana va ark geometrik shakllar hosil qilinadi.

Context nomli canvas tasvirlarni chizish sohasida matnlar chizish uchun qo’yidagi JavaScript — kodlaridan foydalanishimiz mumkin:
context.font=»ko’rinish #px Shrift nomi»; — tasvir chizish context sohaning matn shrift ko’rinishi (bold, italic yoki underline), o’lchami (px da) va shrifti (shakli) nomini aniqlash buyrug’i.
context.textAlign=»…»; — tasvir chizish context sohaning matnni gorizontal joylashtirish buyrug’i.
context.textBaseline=»…»; — tasvir chizish context sohaning matnni gorizontal joylashtirish buyrug’i.
context.strokeStyle=»rang kodi yoki nomi «; — tasvir chizish context sohaning matn rangini aniqlash buyrug’i.
context.strokeText(«matn»,x,y); — ko’rsatilgan matnni tasvir chizish context sohaning (x,y) koordinatadan boshlab chiqarish buyrug’i.

Masalan:

<!DOCTYPE html>
<html>
 <head>
   <title> ..: Mening birinchi sahifam :.. </title>
   <link rel="shortcut icon"  href="picture/icon.png" type="images/png">

<script>
window.onload=function() 
   {
     var canvas=document.getElementById("can");
     var context=canvas.getContext("2d");
     context.moveTo(50,100);
     context.font="italic 70px ArialBlack";
     context.textAlign="center";
     context.textBaseline="middle";
     context.lineWidth="2";
     context.strokeStyle="orange";
     context.strokeText("Baraka-Ustoz",200,100);
   };
</script>

 </head>
  <body>   

    <canvas width="400" height="250" border="2" id="can">
    </canvas> 

 </body>
</html>

Bu misolda web sahifamizda context nomli 2d canvas tasvir chizish sohasi yaratilib, uning ichiga orange rangli 70px ArialBlack shriftli «Baraka-Ustoz» matn hosil qilinadi.`,
    quiz: {
      question: "HTML5 da <canvas> tegi yordamida grafika chizish uchun asosiy qaysi tildan foydalaniladi?",
      options: ["CSS", "PHP", "JavaScript", "Python"],
      correct: 2
    }
  },
  { 
    id: 9, 
    title: "9-dars: HTML5 ning SVG — vektorli grafik imkoniyati.", 
    free: true, 
    content: `HTML5-da SVG (Scalable Vector Graphics) — bu veb-sahifalarda ikki o‘lchovli vektorli grafikalarni tasvirlash uchun ishlatiladigan XML formatidagi tildir.Oddiy raster grafikadan (PNG, JPEG) farqli o‘laroq, SVG tasvirlari piksellardan emas, balki matematik formula va koordinatalardan tashkil topadi.📐 SVG-ning asosiy afzalliklariCheksiz masshtablanish: Tasvir sifati har qanday o‘lchamda (kichik smartfon ekranidan tortib ulkan monitorlargacha) mutlaqo buzilmaydi, xiralashmaydi.Kichik fayl hajmi: Geometrik shakllar va chiziqlardan iborat bo‘lgani uchun fayl hajmi juda kichik bo‘ladi va sahifa tez yuklanadi.CSS va JavaScript yordamida boshqarish: SVG elementlarining rangini, o‘lchamini CSS orqali o‘zgartirish va JavaScript yordamida ularga dinamik effektlar (animatsiyalar) berish mumkin.SEO do‘stona: SVG kod ichidagi matnlar qidiruv tizimlari (Google, Yandex) tomonidan indekslanadi.💻 HTML5-da SVG-ni qo‘llash usullariSVG-ni HTML sahifaga bir nechta usulda joylashtirish mumkin:1. Inline usuli (To‘g‘ridan-to‘g‘ri kod ichida)Eng ko‘p tarqalgan usul. SVG kodi to‘g‘ridan-to‘g‘ri HTML hujjati ichiga yoziladi:html<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>
Bu kod ekranda qora hoshiyali, qizil rangdagi aylanani hosil qiladi.2. <img> tegi orqaliSVG-ni oddiy rasm fayli (.svg) sifatida yuklash:html<img src="logo.svg" alt="Kompaniya logotipi" width="200">
🛠 SVG tarkibidagi asosiy shakllarSVG ichida tayyor geometrik shakllarni yaratish uchun maxsus teglar mavjud:<rect> — To‘rtburchak<circle> — Aylana<ellipse> — Ellips<line> — To‘g‘ri chiziq<polygon> — Ko‘pburchak<path> — Murakkab chiziqlar va ixtiyoriy shakllar (eng kuchli element)📊 Canvas va SVG o‘rtasidagi farqHTML5-da grafikalar bilan ishlash uchun yana bir texnologiya — Canvas mavjud. Ularning asosiy farqlari:XususiyatiSVG 📐Canvas 🎨TuriVektorli (matematik shakllar)Raster (piksellar to‘plami)DOM bilan bog‘liqlikHar bir shakl DOM elementi hisoblanadiYagona element (ichki shakllarni DOM ko‘rmaydi)Sifat yo‘qolishiKattalashtirilganda sifat o‘zgarmaydiKattalashtirilganda piksellashib ketadi (xiralashadi)Mos keladigan sohaLogotiplar, piktogrammalar (icons), grafiklarMurakkab o‘yinlar, piksel darajasidagi manipulyatsiyalar`,
    quiz: {
      question: "SVG grafikasining asosiy afzalligi nimada?",
      options: ["Fayl hajmi juda katta bo'ladi", "Kattalashtirganda sifati buzilmaydi (vektorli)", "Faqat qora-oq rangda ishlaydi", "Faqat video uchun ishlatiladi"],
      correct: 1
    }
  },
  { 
    id: 10, 
    title: "10-dars: HTML5 multimedia elementlarini amalda qo'llash va xulosa.", 
    free: true, 
    content: `HTML5 multimedia elementlari veb-sahifalarga uchinchi tomon plaginlarisiz (masalan, Flash) toʻgʻridan-toʻgʻri audio va video joylashtirish imkonini beradi. Ushbu texnologiyalar yordamida multimedia fayllarini veb-saytga integratsiya qilish juda osonlashdi.Quyida asosiy multimedia elementlari, ularni amalda qoʻllash boʻyicha kod namunalari va yakuniy xulosa keltirilgan.1. <video> elementi (Videolarni joylashtirish)<video> tegi veb-sahifada video fayllarni koʻrsatish uchun ishlatiladi. Foydalanuvchiga videoni boshqarish (pauza, ovoz, toʻliq ekran) tugmalarini koʻrsatish uchun controls atributi shart.Amaliy misol:html<video width="640" height="360" controls poster="muqova.jpg">
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Sizning brauzeringiz video elementini qo'llab-quvvatlamaydi.
</video>
Asosiy atributlari:controls: Pleyer tugmalarini chiqaradi.autoplay: Sahifa yuklanishi bilan videoni avtomatik boshlaydi (koʻpincha brauzerlar ovozsiz boʻlishini talab qiladi).loop: Video tugagach, uni qaytadan boshlaydi.poster: Video yuklanguncha yoki pleyer koʻrsatguncha turadigan rasm.muted: Videoni ovozsiz holatda yoqadi.2. <audio> elementi (Audioni joylashtirish)<audio> tegi veb-sahifaga musiqa, podkast yoki ovozli xabarlarni joylashtirish uchun xizmat qiladi. Video elementi kabi tuzilishga ega, lekin ekranda faqat boshqaruv paneli koʻrinadi.Amaliy misol:html<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Sizning brauzeringiz audio elementini qo'llab-quvvatlamaydi.
</audio>
Asosiy atributlari:Videodagi kabi controls, autoplay, loop va muted atributlaridan foydalanish mumkin.3. Matnli subtitrlar: <track> elementiEshitishida muammosi bor foydalanuvchilar yoki boshqa tildagi tomoshabinlar uchun videoga subtitr qoʻshishda <track> elementidan foydalaniladi. U .vtt (WebVTT) formatidagi fayllarni qabul qiladi.Amaliy misol:html<video controls width="640">
  <source src="kino.mp4" type="video/mp4">
  <track src="subtitr-uz.vtt" kind="subtitles" srclang="uz" label="O'zbekcha" default>
</video>
Brauzerlar mosligi uchun tavsiya (Multiple Sources)Hamma brauzerlar ham bir xil video yoki audio formatlarini qoʻllab-quvvatlamaydi. Shu sababli bir nechta formatni <source> tegi orqali koʻrsatish eng toʻgʻri yoʻldir:Video uchun eng xavfsiz formatlar: MP4, WebM.Audio uchun eng xavfsiz formatlar: MP3, WAV, OGG.XulosaHTML5 multimedia elementlari veb-dasturlashda inqilobiy oʻzgarish qildi. Ularning asosiy afzalliklari va xulosasi quyidagilardan iborat:Plaginlarsiz ishlash: Flash kabi tashqi dasturlarga ehtiyoj qolmadi, bu esa xavfsizlikni oshirdi.Yuqori tezlik va unumdorlik: Brauzerlar multimedia fayllarini tabiatiga koʻra tezroq va kamroq resurs sarflab yuklaydi.Mobil moslashuvchanlik (Responsiveness): HTML5 video va audio pleyerlari smartfon va planshetlarda mukammal ishlaydi va sensorli boshqaruvga moslashgan.Boshqaruv osonligi (JS va CSS integratsiyasi): JavaScript yordamida shaxsiy pleyer dizaynlarini yaratish va multimedia jarayonini toʻliq nazorat qilish (pleyer tugmalarini dasturlash) mumkin.Zamonaviy veb-saytlarda multimedia elementlaridan toʻgʻri foydalanish foydalanuvchi tajribasini (UX) sezilarli darajada yaxshilaydi.`,
    quiz: {
      question: "Videoga avtomatik takrorlanish (loop) xususiyatini berish uchun qaysi atribut ishlatiladi?",
      options: ["autoplay", "loop", "controls", "muted"],
      correct: 1
    }
  },
  { 
    id: 11, 
    title: "11-dars: CSS ga kirish. Selektorlar, klasslar va id'lar.", 
    free: true, 
    content: `CSS (Cascading Style Sheets) — bu veb-sahifalarning tashqi koʻrinishini (ranglar, shriftlar, dizayn va joylashuv) shakllantirish uchun ishlatiladigan texnologiyadir. HTML sahifaning "suyagi" (strukturasi) boʻlsa, CSS uning "kiymi" (guzalligi) hisoblanadi.CSS sahifadagi elementlarga qanday dizayn berishni belgilash uchun selektorlar, klasslar va ID'lardan foydalanadi.1. Selektorlar (Selectors)Selektor — bu CSS kodlari HTML-ning aynan qaysi elementiga taʼsir qilishi kerakligini koʻrsatuvchi koʻrsatkichdir.Teg selektori: Toʻgʻridan-toʻgʻri HTML tegining oʻziga stil beradi. Sahifadagi barcha shu turdagi teglarga taʼsir qiladi.cssp {
  color: blue; /* Barcha paragraflar matni ko'k rangga kiradi */
}
2. Klasslar (Classes)Klasslar bir nechta elementlarga bir xil stilni qayta-qayta qoʻllash uchun ishlatiladi. HTML-da elementga class atributi beriladi, CSS-da esa uning oldiga nuqta (.) qoʻyib chaqiriladi.HTML:html<p class="matn-yashil">Bu birinchi matn.</p>
<h2 class="matn-yashil">Bu sarlavha.</h2>
CSS:css.matn-yashil {
  color: green; /* Klassi 'matn-yashil' bo'lgan barcha elementlar yashil bo'ladi */
}
3. ID'lar (Identifiers)ID sahifadagi faqatgina bitta yagona elementga xos boʻlgan stilni berish uchun ishlatiladi (bitta sahifada bitta ID nomidan faqat bir marta foydalanish mumkin). HTML-da elementga id atributi beriladi, CSS-da esa uning oldiga panjara (#) belgisi qoʻyiladi.HTML:html<div id="asosiy-blok">Bu asosiy qism.</div>
CSS:css#asosiy-blok {
  background-color: yellow; /* Faqat shu ID'ga ega blok foni sariq bo'ladi */
}
Klass va ID oʻrtasidagi asosiy farqlarXususiyatiKlass (.class)ID (#id)TakrorlanishiBir sahifada koʻp marta ishlatsa boʻladi.Sahifada faqat 1 marta ishlatilishi shart.BelgisiNuqta (.) bilan boshlanadi.Panjara (#) bilan boshlanadi.UstunligiID'ga qaraganda kuchi pastroq.Klassga qaraganda kuchliroq (ustunroq).`,
    quiz: {
      question: "CSS da klass (class) nomini ko'rsatish uchun qaysi belgi ishlatiladi?",
      options: ["#", ".", "@", "*"],
      correct: 1
    }
  },
  { 
    id: 12, 
    title: "12-dars: Matnlar bilan ishlash, shriftlar (Fontlar) va ranglar.", 
    free: true, 
    content: `Dizayn, dasturlash yoki hujjatlar bilan ishlashda matn, shrift (font) va ranglarning toʻgʻri kombinatsiyasi ma'lumotni yetkazib berishda eng muhim rol oʻynaydi.Quyida ushbu uchta element bilan ishlash boʻyicha asosiy qoʻllanma keltirilgan.1. Shriftlar (Fontlar) bilan ishlashShriftlar matnning xarakteri va kayfiyatini belgilaydi. Ularni toʻrtta asosiy guruhga boʻlish mumkin:Serif (Kertikli shriftlar): Harflarning uchida kichik chiziqchalari (kertiklari) bor. Rasmiy, klassik va jiddiy kayfiyat bagʻishlaydi. Kitoblar va bosma nashrlar uchun mos.Misollar: Times New Roman, Georgia, Garamond.Sans-Serif (Kertiksiz shriftlar): Zamonaviy, toza va minimalist uslub. Ekranlardan oʻqish uchun juda qulay. Web-saytlar va mobil ilovalarda keng qoʻllaniladi.Misollar: Arial, Helvetica, Roboto, Inter.Monospace (Teng kenglikdagi shriftlar): Har bir harf bir xil kenglikni egallaydi. Asosan dasturlash kodlari va jadval ma'lumotlari uchun ishlatiladi.Misollar: Courier New, Consolas, Fira Code.Display / Script (Dekorativ shriftlar): Qoʻlyozma yoki noodatiy shakldagi shriftlar. Faqat yirik sarlavhalar yoki logotiplar uchun mos, katta matnlarda oʻqish qiyin.Shriftlar bilan ishlash qoidalari:Ierarxiya: Sarlavha katta va qalin, asosiy matn esa oʻrtacha oʻlchamda va oddiy boʻlishi kerak.Cheklov: Bir dizayn yoki hujjatda 2 tadan ortiq har xil shrift oilasidan foydalanmang.2. Ranglar bilan ishlashRanglar inson psixologiyasiga ta'sir qiladi va e'tiborni tortishga yordam beradi.Matn va fon kontrasti: Rang tanlashda eng muhim qoida — kontrast (birlashib ketmaslik). Toʻq fonda och matn, och fonda esa toʻq matn boʻlishi shart.Ranglar psixologiyasi:Koʻk: Ishonch, professionallik, xavfsizlik (Banklar, IT kompaniyalar).Qizil: Energiya, shoshilinchlik, ehtiros (Chegirmalar, ogohlantirishlar).Yashil: Tabiat, tinchlik, oʻsish, salomatlik.Qora/Toʻq kulrang: Elegantlik, premium sifat, rasmiylik.Rang kombinatsiyalarini tanlash uchun asboblar:Adobe Color yoki Coolors.co — bir-biriga mos tushadigan ranglar palitrasini yaratish uchun eng yaxshi platformalar.3. Matnni shakllantirish (Tipografika)Matn oson oʻqilishi (readability) uchun faqat shrift va rang yetarli emas, uni toʻgʻri joylashtirish ham kerak:Satrlar oraligʻi (Line height): Satrlar bir-biriga yopishib qolmasligi kerak. Odatda shrift oʻlchamidan 1.4 – 1.6 barobar katta boʻlishi tavsiya etiladi.Satr uzunligi: Bir satrda ideal holda 45 tadan 75 tagacha belgi (harf va boʻshliq) boʻlishi kerak. Juda uzun satrlarni koʻz charchatadi.Tekislash (Alignment): Katta matnlarni chap tomondan tekislash (Align left) oʻqishni osonlashtiradi. Blokli tekislash (Justify) ba'zida soʻzlar orasida xunuk boʻshliqlar hosil qiladi.`,
    quiz: {
      question: "CSS da matnning qalinligini (og'irligini) belgilash uchun qaysi xususiyat ishlatiladi?",
      options: ["font-size", "font-weight", "text-align", "font-style"],
      correct: 1
    }
  },
  { 
    id: 13, 
    title: "13-dars: CSS Box Model (Blok modeli): Margin, Border, Padding, Width, Height.", 
    free: true, 
    content: `CSS Box Model (Blok modeli) — bu har bir HTML elementini o‘rab turuvchi to‘rtburchak quti tizimidir. Veb-sahifadagi har qanday element (matn, rasm, tugma) ushbu model asosida joylashadi va vizual o‘lchamlarga ega bo‘ladi.Blok modeli ichkaridan tashqariga qarab joylashgan 4 ta asosiy qatlamdan iborat:+-----------------------------------+

|             MARGIN                |  <- Tashqi bo'shliq
|   +---------------------------+   |
|   |         BORDER            |   |  <- Chegara (Ramka)
|   |   +-------------------+   |   |
|   |   |     PADDING       |   |   |  <- Ichki bo'shliq
|   |   |   +-----------+   |   |   |
|   |   |   |  CONTENT  |   |   |   |  <- Kontent (Matn, rasm...)
|   |   |   +-----------+   |   |   |
|   |   +-------------------+   |   |
|   +---------------------------+   |
+-----------------------------------+
Asosiy Xususiyatlar va Ularning VazifalariContent (Kontent): Elementning ichidagi haqiqiy tarkib (matn, rasm, video va h.k.).Width (Kenglik) va Height (Balandlik): Kontent maydonining o‘lchamini belgilaydi (standart rejimda).Padding (Ichki bo‘shliq): Kontent va uning chegarasi (border) o‘rtasidagi bo‘sh joy. U shaffof bo‘ladi va elementning fon rangini (background) ko‘rsatadi.Border (Chegara): Padding va kontentni o‘rab turuvchi chekka chiziq. Uning qalinligi, rangi va uslubi (masalan, solid, dashed) bo‘lishi mumkin.Margin (Tashqi bo‘shliq): Element chegarasidan tashqaridagi bo‘sh joy. U elementni qo‘shni elementlardan uzoqlashtirish va ular orasida masofa hosil qilish uchun xizmat qiladi. Har doim mutlaqo shaffof bo‘ladi.O‘lchamlarni Hisoblash Rejimlari (box-sizing)Elementning sahifada egallaydigan umumiy joyini hisoblash box-sizing xususiyatiga bog‘liq:1. Standart rejim: box-sizing: content-box;Bu standart rejim bo‘lib, siz bergan width va height faqat kontentning o‘ziga tegishli bo‘ladi. Umumiy o‘lchamni topish uchun ularga padding va borderlarni qo‘shish kerak.Umumiy kenglik = width + chap padding + o'ng padding + chap border + o'ng borderUmumiy balandlik = height + tepa padding + past padding + tepa border + past borderMisol:cssdiv {
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
Elementning sahifadagi umumiy kengligi: \(300 + 20 + 20 + 5 + 5 = \mathbf{350px}\) bo‘ladi.2. Zamonaviy rejim: box-sizing: border-box;Bu rejimda siz ko‘rsatgan width va height elementning umumiy yakuniy o‘lchamiga teng bo‘ladi. Padding va border o‘lchamlari berilgan kenglikning ichiga yashirincha qisqaradi (kontent maydoni kichrayadi).Xuddi shu misol border-box bilan:cssdiv {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid black;
}
Elementning umumiy kengligi aniq \(\mathbf{300px}\) bo‘lib qoladi, kontent uchun qolgan joy esa 250px ga aylanadi.Dasturchilar tartib va hisob-kitoblar chalkashib ketmasligi uchun deyarli har doim barcha elementlarga box-sizing: border-box; xususiyatini qo‘llashadi.`,
    quiz: {
      question: "Elementning ichki bo'shlig'ini (kontent bilan chegara orasini) belgilash uchun qaysi xususiyat ishlatiladi?",
      options: ["margin", "padding", "border", "spacing"],
      correct: 1
    }
  },
  { 
    id: 14, 
    title: "14-dars: Display xususiyati: Block, Inline, Inline-block va None.", 
    free: true, 
    content: `CSS da display xususiyati elementlarning sahifada qanday joylashishi va ko'rsatilishini belgilaydi. block, inline, inline-block va none qiymatlarining asosiy farqlari quyidagicha:1. Block (Blokli element)Tavsif: Har doim yangi qatordan boshlanadi va mavjud kenglikning (container) 100% qismini egallaydi.Xususiyatlari: Unga width (kenglik) va height (balandlik), shuningdek tashqi (margin) hamda ichki (padding) bo'shliqlarni To'liq berish mumkin.Misollar: <div>, <p>, <h1>–<h6>, <section>, <ul>.2. Inline (Satrli element)Tavsif: Yangi qatordan boshlanmaydi, boshqa elementlar bilan bir qatorda (yonma-yon) turadi.Xususiyatlari: Faqat o'z ichidagi matn yoki element hajmi qadar joy oladi. Unga width va height berib bo'lmaydi. Tepadan va pastdan margin ishlamaydi.Misollar: <span>, <a>, <strong>, <em>.3. Inline-block (Satrli-blokli element)Tavsif: inline va block elementlarining xususiyatlarini o'zida birlashtiradi.Xususiyatlari: Elementlar xuddi inline kabi bir qatorda yonma-yon joylashadi, lekin block kabi unga width, height, margin va padding qiymatlarini to'liq berish mumkin.Misollar: <button>, <input>.4. None (Ko'rsatmaslik)Tavsif: Elementni va uning barcha ichki qismlarini sahifadan butunlay yashiradi.Xususiyatlari: Element sahifada joy egallamaydi (go'yo u umuman yo'qdek ishlaydi). Uni JavaScript yoki CSS orqali qaytadan ko'rinadigan qilish mumkin (display: block; va hokazo).W3Schools`,
    quiz: {
      question: "Elementni ekranda butunlay ko'rinmaydigan (yashirin) qilish uchun qaysi qiymat ishlatiladi?",
      options: ["display: hidden", "display: none", "visibility: off", "opacity: 0"],
      correct: 1
    }
  },
  { 
    id: 15, 
    title: "15-dars: Pozitsiyalash: Position (Static, Relative, Absolute, Fixed, Sticky).", 
    free: true, 
    content: `Elementlarni sahifadagi o'rnini aniq boshqarish uchun position xususiyati ishlatiladi.

1. Turlari:
- static: Odatiy holat (oqim bo'yicha).
- relative: O'zining odatdagi o'rniga nisbatan suriladi.
- absolute: Eng yaqin pozitsiyalangan ota elementga nisbatan joylashadi.
- fixed: Brauzer oynasiga nisbatan qotib qoladi (skroll qilganda ham siljilmaydi).
- sticky: Skroll qilganda ma'lum bir nuqtaga kelib yopishib qoladi.`,
    quiz: {
      question: "Sahifani pastga sursa ham (scroll) ekranning bir joyida qotib turadigan element uchun qaysi position ishlatiladi?",
      options: ["position: relative", "position: absolute", "position: fixed", "position: static"],
      correct: 2
    }
  },
  { 
    id: 16, 
    title: "16-dars: Flexbox asoslari (Flexible Box Layout).", 
    free: true, 
    content: `Flexbox (Flexible Box Layout) — bu bir o'lchamli (one-dimensional) elementlarni tartibga solish va ular orasidagi bo'shliqni taqsimlash uchun mo'ljallangan CSS loyihalash modeli.Asosiy tushunchalarFlexbox tizimi ikki qismdan iborat:Flex Container (Ota element): display: flex yoki display: inline-flex xususiyati berilgan element.Flex Items (Bola elementlar): Flex konteynerning bevosita ichidagi barcha bola elementlar.O'qlar (Axes)Flexbox'ni tushunish uchun ikkita o'qni bilish muhim:Main Axis (Asosiy o'q): Elementlar joylashadigan asosiy yo'nalish (flex-direction orqali belgilanadi).Cross Axis (Kondensatsiyalangan/qo'shimcha o'q): Asosiy o'qqa perpendikulyar (tik) yo'nalish.Konteyner xususiyatlari (Flex Container Properties)display: flex; — Elementni flex konteynerga aylantiradi.flex-direction — Elementlarning joylashish yo'nalishini belgilaydi (row, row-reverse, column, column-reverse).flex-wrap — Elementlar sig'maganda keyingi qatorga o'tishini ta'minlaydi (nowrap, wrap, wrap-reverse).justify-content — Elementlarni asosiy o'q bo'yicha tekislaydi (flex-start, flex-end, center, space-between, space-around, space-evenly).align-items — Elementlarni qo'shimcha o'q bo'yicha tekislaydi (stretch, flex-start, flex-end, center, baseline).Element xususiyatlari (Flex Items Properties)flex-grow — Elementning bo'sh joyni egallab kengayish koeffitsiyenti.flex-shrink — Joy yetmaganda elementning kichrayish koeffitsiyenti.flex-basis — Elementning boshlang'ich o'lchami.align-self — Bitta element uchun align-items qiymatini o'zgartirish imkonini beradi`,
    quiz: {
      question: "Flexbox da elementlarni gorizontal o'q bo'ylab bo'shliqlarni teng taqsimlagan holda joylashtirish uchun qaysi xususiyat ishlatiladi?",
      options: ["align-items: center", "justify-content: space-between", "flex-direction: column", "display: block"],
      correct: 1
    }
  },
  { 
    id: 17, 
    title: "17-dars: CSS Grid Layout (Jadval va qismlarga bo'lish).", 
    free: true, 
    content: `CSS Grid Layout — bu veb-sahifalarni ikki o‘lchamli (ustunlar va qatorlar) ko‘rinishida mukammal loyihalash uchun mo‘ljallangan juda kuchli CSS tizimidir. U sahifani jadval (to‘r) ko‘rinishida qismlarga bo‘lish va elementlarni joylashtirishni osonlashtiradi.Quyida CSS Grid tizimining asosiy tushunchalari va uni qismlarga bo‘lishda ishlatish qoidalari keltirilgan.1. Asosiy tushunchalarGrid tizimi bilan ishlashda ikkita asosiy element mavjud:Grid Container (Ota element): display: grid; buyrug‘i berilgan asosiy blok.Grid Item (Bola element): Konteyner ichidagi to‘g‘ridan-to‘g‘ri joylashgan elementlar.2. Jadval va ustunlarni yaratish (Xususiyatlar)Konteynerga ustun va qatorlar o‘lchamini berish orqali jadval shakllantiriladi:grid-template-columns: Ustunlar soni va ularning kengligini belgilaydi.grid-template-rows: Qatorlar soni va ularning balandligini belgilaydi.gap (yoki grid-gap): Ustunlar va qatorlar orasidagi masofa (bo‘shliq).Kod misoli:css.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr; /* 3 ta ustun: birinchisi 200px, qolgan ikkitasi qolgan joyni teng bo'lishadi (1fr) */
  grid-template-rows: 100px auto;       /* 2 ta qator: birinchisi 100px, ikkinchisi ichidagi kontentga qarab */
  gap: 20px;                            /* Elementlar orasidagi masofa 20px */
}
Ma'lumot: fr (fractional unit) — bu grid konteyneridagi mavjud bo‘sh joyning bir qismini anglatuvchi moslashuvchan (flexible) o‘lchov birligidir.3. Sahifani qismlarga bo'lish (Layout yaratish)Sahifani odatiy qismlarga (Header, Sidebar, Main, Footer) bo‘lish uchun ikki xil usuldan keng foydalaniladi:Usul A: Grid Lines (Chiziqlar raqami orqali)Har bir element qaysi chiziqdan boshlanib, qaysi chiziqda tugashini ko‘rsatish orqali qismlarga bo‘linadi.css.wrapper {
  display: grid;
  grid-template-columns: 250px 1fr; /* Sidebar va Asosiy qism uchun */
  grid-template-rows: 80px auto 60px; /* Header, Kontent, Footer uchun */
  gap: 10px;
}

.header {
  grid-column: 1 / 3; /* 1-chiziqdan boshlanib 3-ustun chizig'igacha cho'ziladi (to'liq eniga) */
}

.sidebar {
  grid-column: 1 / 2;
}

.main-content {
  grid-column: 2 / 3;
}

.footer {
  grid-column: 1 / 3; /* To'liq eniga */
}
Usul B: Grid Template Areas (Vizual nomlash orqali)Bu usul kodni juda tushunarli va vizual qiladi. Sahifa qismlariga nom beriladi va jadval ko‘rinishida joylashtiriladi.css.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  gap: 15px;
}

/* Har bir elementni o'z o'rniga bog'lash */
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
4. Muhim funksiyalar va qulayliklarrepeat() funksiyasi: Bir xil o‘lchamdagi ustunlarni qayta-qayta yozmaslik uchun ishlatiladi.Misol: grid-template-columns: repeat(3, 1fr); (3 ta teng ustun yaratadi).minmax() funksiyasi: Elementning minimal va maksimal o‘lchamini chegaralaydi.Misol: grid-template-rows: minmax(100px, auto); (Kamida 100px bo‘ladi, kontent ko‘paysa o‘sadi).auto-fit va auto-fill: Media so'rovlarsiz (@media) responsiv (mobilbop) jadvallar yaratish uchun ishlatiladi.Misol: grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); (Ekran sig‘ishiga qarab avtomatik ustunlar sonini moslaydi).Flexbox'dan farqi nimada?Flexbox asosan bir o‘lchamli (yo faqat qator, yo faqat ustun) joylashtirish uchun qulay.CSS Grid esa bir vaqtning o‘zida ham qator, ham ustunlar bilan ishlovchi mukammal ikki o‘lchamli tuzilmadir..`,
    quiz: {
      question: "CSS Grid da bir xil o'lchamdagi 3 ta ustun hosil qilish uchun qaysi yozuv to'g'ri?",
      options: ["grid-columns: 3", "grid-template-columns: repeat(3, 1fr)", "display: columns-3", "grid-layout: 3-cols"],
      correct: 1
    }
  },
  { 
    id: 18, 
    title: "18-dars: Responsiv dizayn va Media Queries (@media).", 
    free: true, 
    content: `Saytni telefon, planshet va kompyuter ekranlarida bir xil darajada chiroyli ko'rinishini ta'minlash uchun Media Queries ishlatiladi.

1. Sintaksis:
@media (max-width: 768px) {
  body {
    background-color: lightgray;
  }
}
Bu kod ekran eni 768 pikseldan kichik bo'lganda ishlaydi (mobil qurilmalar uchun).`,
    quiz: {
      question: "Ekran kengligi 768px dan kichik bo'lgan qurilmalar uchun stil yozishda qaysi media qoida ishlatiladi?",
      options: ["@media (min-width: 768px)", "@media (max-width: 768px)", "@screen (max: 768px)", "@media (device: mobile)"],
      correct: 1
    }
  },
  { 
    id: 19, 
    title: "19-dars: CSS o'zgaruvchilari (Variables) va Pseudo-classes (:hover, :active).", 
    free: true, 
    content: `CSS o'zgaruvchilari (Variables) va Pseudo-klaslar (:hover, :active) zamonaviy va dinamik veb-saytlar yaratishda birgalikda juda ko'p qo'llaniladi. Ularning yordamida kodni qisqartirish va saytdagi interaktivlikni oson boshqarish mumkin.Quyida har biri haqida batafsil va ularning birgalikda ishlatilishini ko'rib chiqamiz.1. CSS O'zgaruvchilari (Custom Properties)CSS o'zgaruvchilari qiymatlarni (ranglar, o'lchamlar, shriftlar) bitta joyda saqlab, loyihaning istalgan qismida qayta-qayta ishlatishga imkon beradi.E'lon qilish: O'zgaruvchilar ikkita chiziq (--) bilan boshlanadi va odatda global bo'lishi uchun :root ichida yoziladi.Ishlatish: Qiymatni chaqirish uchun var() funksiyasidan foydalaniladi.css/* Global o'zgaruvchilarni e'lon qilish */
:root {
  --main-color: #3498db;
  --hover-color: #2980b9;
  --padding-size: 12px 24px;
}

/* O'zgaruvchilarni qo'llash */
.btn {
  background-color: var(--main-color);
  padding: var(--padding-size);
  color: white;
  border: none;
  cursor: pointer;
}
2. Pseudo-classes (:hover va :active)Pseudo-klaslar elementning muayyan bir holatda (holat o'zgarganda) qanday ko'rinishini belgilaydi.:hover – Sichqoncha ko'rsatkichi elementning ustiga kelganda ishlaydi.:active – Foydalanuvchi elementni bosib turganda (klik jarayonida) ishlaydi.css/* Oddiy holat */
.btn {
  background-color: #3498db;
  transition: 0.3s; /* O'tish effektini silliq qilish uchun */
}

/* Sichqoncha ustiga kelganda */
.btn:hover {
  background-color: #2980b9;
}

/* Bosib turganda */
.btn:active {
  transform: scale(0.95); /* Elementni biroz kichraytirish */
}
3. O'zgaruvchilar va Pseudo-klaslarni birgalikda ishlatishEng afzal jihati shundaki, pseudo-klaslar ichida CSS o'zgaruvchisining qiymatini o'zgartirish mumkin. Bu kodni juda toza va boshqarishga oson qiladi.Mukammal misol:css:root {
  /* Asosiy rang va interaktiv ranglar */
  --btn-bg: #2ecc71; /* Yashil */
  --btn-font-size: 16px;
}

.primary-button {
  background-color: var(--btn-bg);
  font-size: var(--btn-font-size);
  color: white;
  padding: 10px 20px;
  border: none;
  transition: all 0.2s ease;
}

/* :hover holatida faqat o'zgaruvchi qiymatini yangilaymiz */
.primary-button:hover {
  --btn-bg: #27ae60; /* To'qroq yashil */
}

/* :active holatida ham o'zgaruvchini o'zgartirish mumkin */
.primary-button:active {
  --btn-bg: #1e7e34;
}
Nega bu usul qulay?Kodni boshqarish oson: Agar tugmaning rangini o'zgartirmoqchi bo'lsangiz, faqat :root yoki asosiy klass ichidagi o'zgaruvchini o'zgartirasiz. Ko'p qatorli :hover kodlarini titkilab o'tirish shart emas.Dinamik mavzular (Dark/Light mode): Saytni tungi rejimga o'tkazishda faqat o'zgaruvchilar qiymati almashtiriladi, :hover yoki :active stillarini qaytadan yozish talab etilmaydi.`,
    quiz: {
      question: "Sichqoncha kursorini element ustiga olib borganda ishlaydigan pseudo-klass qaysi?",
      options: [":active", ":hover", ":focus", ":visited"],
      correct: 1
    }
  },
  { 
    id: 20, 
    title: "20-dars: CSS Animatsiyalar, Transition va Transform.", 
    free: true, 
    content: `CSS Transform, Transition va Animation — veb-sahifalardagi elementlarni harakatlantirish va bezash uchun ishlatiladigan uchta asosiy vositadir. Ular bir-birini to'ldiradi, lekin vazifalari har xil.1. CSS Transform (O'zgartirish)Transform — elementning tashqi ko'rinishi, o'lchami yoki joylashuvini bir martalik o'zgartirish (masalan, uni siljitish, aylantirish, kattalashtirish yoki qiyshaytirish).Asosiy funksiyalari:translate(x, y) — elementni siljitish.scale(n) — element hajmini kattalashtirish yoki kichraytirish.rotate(deg) — elementni daraja bo'yicha aylantirish.skew(x, y) — elementni qiyshaytirish.Xususiyati: O'zgarish bir zumda, animatsiyasiz sodir bo'ladi. Uni silliq qilish uchun transition qo'shiladi.2. CSS Transition (Silliq o'tish)Transition — bir holatdan (masalan, tugmaning oddiy rangi) ikkinchi holatga (:hover – sichqoncha borgandagi rang) o'tishni vaqt davomida silliq bajarish.Asosiy qismlari (shorcut):transition-property — qaysi xususiyat o'zgarishi (all, background-color, transform va hokazo).transition-duration — o'tish qancha vaqt davom etishi (masalan, 0.3s).transition-timing-function — harakat tezligi (masalan, ease, linear).transition-delay — boshlanishidan oldingi kechikish.Xususiyati: O'zi harakat boshlamaydi. Faqat biror hodisa sodir bo'lganda (:hover, :focus yoki sinf qo'shilganda) o'zgarishni silliqlashtiradi.3. CSS Animation (Murakkab animatsiya)Animation — foydalanuvchi harakatiga bog'lanmagan holda, o'z-özidan ishga tushadigan yoki cheksiz takrorlanadigan murakkab harakatlar.Ishlatilishi: @keyframes qoidasi yordamida animatsiyaning boshi, o'rtasi va oxiridagi holatlari foizlarda (0%, 50%, 100%) belgilanadi.Asosiy xossalari:animation-name — @keyframes nomi.animation-duration — davomiyligi.animation-iteration-count — necha marta takrorlanishi (infinite — cheksiz).Xususiyati: Hodisasiz (:hover siz ham) ishlaydi, bir nechta bosqichli murakkab traektoriyalarni yaratishga imkon beradi.`,
    quiz: {
      question: "Element o'lchamini silliq kattalashtirish yoki aylantirish uchun qaysi xususiyat ishlatiladi?",
      options: ["transform", "transition-speed", "animation-move", "display-fx"],
      correct: 0
    }
  },
  { 
    id: 21, 
    title: "21-dars: JavaScript ga kirish. O'zgaruvchilar (let, const, var) va ma'lumot turlari.", 
    free: true, 
    content: `JavaScript — bu veb-saytlarga jon kirituvchi va ularni interaktiv qiladigan mashhur dasturlash tili.O'zgaruvchilar (Variables)O'zgaruvchilar ma'lumotlarni xotirada saqlash uchun ishlatiladigan idishlardir. JavaScriptda o'zgaruvchi yaratish uchun uchta kalit so'z bor: var, let va const.var: Eski usul. Uni qayta e'lon qilish va qiymatini o'zgartirish oson. Hozirgi kunda xatoliklar ko'p chiqargani uchun undan foydalanish tavsiya etilmaydi.let: Zamonaviy va xavfsiz usul. Qiymatini keyinchalik o'zgartirish mumkin. Faqat o'zi e'lon qilingan qism (blok) ichida ishlaydi.const: O'zgarmas qiymatlar uchun ishlatiladi. Unga bir marta qiymat beriladi va uni dastur davomida o'zgartirib bo'lmaydi.Misol:javascriptlet yosh = 25;       // Qiymatini o'zgartirish mumkin
const pi = 3.14;     // Qiymati o'zgarmas qoladi
Ma'lumot turlari (Data Types)JavaScript dinamik til hisoblanadi. Bunda o'zgaruvchiga qanday qiymat bersangiz, uning turi o'zi avtomatik belgilanadi. Asosiy ma'lumot turlari ikki guruhga bo'linadi.1. Oddiy (Primitiv) turlarString (Matn): Matnli ma'lumotlar qo'shtirnoq ichiga yoziladi. Masalan: let ism = "Anvar";Number (Son): Butun va o'nlik sonlar. Masalan: let narx = 15000;Boolean (Mantiqiy qiymat): Faqat ikkita qiymatni oladi — true (to'g'ri) yoki false (noto'g'ri). Masalan: let ismOchiq = true;Undefined: Qiymat berilmagan o'zgaruvchining holati. Masalan: let x;Null: Bo'sh yoki qiymat yo'qligini bildiruvchi maxsus atama. Masalan: let Natija = null;2. Murakkab turlarObject (Obyekt): Bir nechta ma'lumotlarni juftlik (kalit: qiymat) shaklida saqlaydi.Masalan: let odam = { ism: "Bekzod", yosh: 20 };Array (Massiv): Tartiblangan ro'yxat.Masalan: let mevalar = ["olma", "banan", "gilos"];`,
    quiz: {
      question: "Qiymati keyinchalik o'zgarmaydigan o'zgaruvchini e'lon qilish uchun qaysi kalit so'z ishlatiladi?",
      options: ["var", "let", "const", "static"],
      correct: 2
    }
  },
  { 
    id: 22, 
    title: "22-dars: Arifmetik amallar, shart operatorlari (if, else, switch).", 
    free: true, 
    content: `Dasturlashda arifmetik amallar sonli qiymatlar ustida matematik hisob-kitoblarni bajarish uchun, shart operatorlari эса (if, else, switch) dastur jarayonini muayyan shartlarga qarab boshqarish uchun ishlatiladi.1. Arifmetik amallarAsosiy arifmetik operatorlar quyidagilardan iborat:+ (Qoʻshish): Ikki sonni qoʻshadi (5 + 3 = 8).- (Ayirish): Birinchi sondan ikkinchisini ayiradi (5 - 3 = 2).* (Koʻpaytirish): Ikki sonni koʻpaytiradi (5 * 3 = 15)./ (Boʻlish): Birinchi sonni ikkinchisiga boʻladi (6 / 2 = 3).% (Qoldiqni topish): Boʻlishdan chiqqan qoldiqni qaytaradi (5 % 2 = 1).2. Shart operatorlari (if, else, else if)Shart operatorlari berilgan mantiqiy shart rost (true) yoki yolgʻon (false) ekanligiga qarab, kodning ma'lum bir qismini bajaradi.if (Agar): Berilgan shart rost boʻlsa, kod blokini bajaradi.else if (Aks holda, agar): Birinchi shart yolgʻon boʻlib, yangi shartni tekshirish kerak boʻlganda ishlatiladi.else (Aks holda): Yuqoridagi barcha shartlar bajarilmaganda ishlanadi.Misol (C++ / C# / Java):cppint x = 10;
if (x > 15) {
    // x 15 dan katta bo'lsa
} else if (x > 5) {
    // x 5 dan katta va 15 dan kichik/teng bo'lsa
} else {
    // qolgan barcha holatlarda
}
3. Switch operatoriswitch operatori bir nechta aniq qiymatlardan birini tanlash talab etilganda if-else oʻrniga ishlatiladi. U kodning oʻqilishini osonlashtiradi.Sintaksis va misol:cppint kun = 2;
switch (kun) {
    case 1:
        // kun == 1 bo'lsa
        break;
    case 2:
        // kun == 2 bo'lsa
        break;
    default:
        // yuqoridagilarning hech biri bo'lmasa
        break;
}`,
    quiz: { 
      question: "JavaScript da shartni tekshirish uchun asosiy operator qaysi?", 
      options: ["for", "if / else", "let", "function"], 
      correct: 1 
    } 
  },
  { 
    id: 23, 
    title: "23-dars: Sikllar (Loops): for, while, do...while.", 
    free: true, 
    content: `Dasturlashda tsikllar (loops) bir turdagi kod blokini bir necha marotaba qayta-qayta bajarish uchun ishlatiladi. Bu kodni qisqartirishga va vaqtni tejashga yordam beradi.Aksariyat dasturlash tillarida (C++, Java, JavaScript, C# va boshqalar) asosan uchta tsikl turi mavjud: for, while va do...while.1. for tsikliBu tsikl odatda takrorlanishlar soni oldindan aniq bo'lganda ishlatiladi. Unda tsiklning boshlanishi, sharti va qadami bir qatorda yoziladi.Sintaksisi:javascriptfor (boshlang'ich_qiymat; shart; qadam) {
    // bajariladigan kod
}
Misol: 1 dan 5 gacha bo'lgan sonlarni ekranga chiqarish.javascriptfor (let i = 1; i <= 5; i++) {
    console.log(i); 
}
2. while tsikliBu tsikl takrorlanishlar soni oldindan noma'lum bo'lganda, faqat ma'lum bir shart bajarilib turgandagina kodni takrorlash uchun ishlatiladi. Tsikl ichiga kirmasdan oldin shart tekshiriladi.Sintaksisi:javascriptwhile (shart) {
    // bajariladigan kod
    // qadam (shartni o'zgartiruvchi kod)
}
Misol:javascriptlet i = 1;
while (i <= 5) {
    console.log(i);
    i++; // agar bu yozilmasa, tsikl abadiy bo'lib qoladi
}
3. do...while tsikliBu tsikl while ga juda o'xshash, ammo bitta muhim farqi bor: kod kamida bir marta bajariladi, shundan so'ng shart tekshiriladi. Shart noto'g'ri (false) bo'lsa ham, birinchi qadam baribir ishlaydi.Sintaksisi:javascriptdo {
    // bajariladigan kod
    // qadam
} while (shart);
Misol:javascriptlet i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);
Farqlarni solishtirish uchun jadvalTsikl turiShart qachon tekshiriladi?Kamida necha marta bajariladi?Eng ko'p ishlatiladigan holatforTsikl boshlanishidan oldin0 marta (agar shart xato bo'lsa)Takrorlanishlar soni aniq bo'lsa (masalan, 10 marta)whileTsikl boshlanishidan oldin0 marta (agar shart xato bo'lsa)Shart bajarilguncha takrorlash kerak bo'lsa (masalan, foydalanuvchi to'g'ri parol kiritguncha)do...whileTsikl tanasi bajarilgandan keyin1 marta (shart xato bo'lsa ham)Kod kamida bir marta ishlashi shart bo'lgan holatlarda (masalan, menyuni ko'rsatish)`, 
    quiz: { 
      question: "Aniq bir necha marta takrorlanadigan amallar uchun qaysi sikl qulayroq?", 
      options: ["for", "if", "alert", "switch"], 
      correct: 0 
    } 
  },
  { 
    id: 24, 
    title: "24-dars: Funksiyalar (Function Declaration, Expression va Arrow Functions).", 
    free: true, 
    content: `Funksiyalar qayta ishlatiladigan kod bloklarini yig'ish uchun xizmat qiladi.

Funksiya turlari:
- Function Declaration: function sayHello() { ... }
- Function Expression: const sayHello = function() { ... }
- Arrow Function (Strelkali funksiya): const sayHello = () => { ... }`, 
    quiz: { 
      question: "Zamonaviy JavaScriptda qisqa yoziladigan strelkali funksiya qanday belgilanadi?", 
      options: ["=>", "->", "==>", "-->"], 
      correct: 0 
    } 
  },
  { 
    id: 25, 
    title: "25-dars: Massivlar (Arrays) va ular bilan ishlash metodlari.", 
    free: true, 
    content: `Massiv (array) — bu bir xil turdagi tartiblangan ma'lumotlarni yagona o'zgaruvchida saqlash uchun ishlatiladigan ma'lumotlar tuzilmasi. Massivdagi har bir element o'zining tartib raqami — indeksga ega bo'ladi (indekslash odatda 0 dan boshlanadi).Massiv yaratishMassiv e'lon qilish tilda turlicha yoziladi (masalan, JavaScript'da):javascriptlet mevalar = ["olma", "banan", "anor"];
Asosiy massiv metodlari (JavaScript misolida)Massivlar bilan ishlashni osonlashtiruvchi muhim metodlar mavjud:Element qo'shish va o'chirishpush() — Massiv oxiriga yangi element qo'shadi va yangi uzunligini qaytaradi.pop() — Massiv oxiridan bitta elementni o'chiradi va o'sha elementni qaytaradi.unshift() — Massiv boshiga yangi element qo'shadi.shift() — Massiv boshidan bitta elementni o'chiradi.Qidirish va kesishindexOf() — Ko'rsatilgan elementning birinchi uchragan indeksini qaytaradi. Topmasa -1 beradi.includes() — Massiv ichida element bor-yo'qligini tekshiradi (true yoki false qaytaradi).slice(start, end) — Massivning bir qismini nusxalab, yangi massiv qaytaradi (aslini o'zgartirmaydi).splice(start, deleteCount, item1...) — Massivdan elementlarni o'chiradi, almashtiradi yoki qo'shadi (asl massivni o'zgartiradi).Iteratsiya va transformatsiya metodlarimap(callback) — Har bir element ustidan amal bajarib, natijalardan iborat yangi massiv qaytaradi.filter(callback) — Shartni qanoatlantiruvchi elementlarni ajratib olib, yangi massiv hosil qiladi.reduce(callback, initialValue) — Massiv elementlarini bitta qiymatga jamlaydi (masalan, yig'indini hisoblash).forEach(callback) — Massivning har bir elementi bo'ylab birma-bir aylanib chiqadi (qiymat qaytarmaydi).Foydali misollarjavascriptlet raqamlar = [1, 2, 3, 4, 5];

// Map: har bir elementni 2 barobar oshirish
let kopaytirilgan = raqamlar.x => x * 2; // [2, 4, 6, 8, 10]

// Filter: faqat juft sonlarni ajratib olish
let juftlar = raqamlar.filter(x => x % 2 === 0); // [2, 4]`, 
    quiz: { 
      question: "Massivning oxiriga yangi element qo'shish uchun qaysi metod ishlatiladi?", 
      options: ["pop()", "push()", "shift()", "slice()"], 
      correct: 1 
    } 
  },
  { 
    id: 26, 
    title: "26-dars: Obektlar (Objects) va ularning xossalari.", 
    free: true, 
    content: `Obyekt — bu maʼlumotlar (xossalar) va ular bilan ishlaydigan amallarni (metodlarni) oʻz ichiga olgan real yoki mavhum dasturiy element.Obyektga yoʻnaltirilgan dasturlashda (OOP - Vikipediya) har bir obyekt uchta asosiy tarkibiy qismga ega:Identifikator (Identity): Obyektning oʻziga xos noyob nomi yoki manzili.Holat (State / Xossalar): Obyektning oʻzgaruvchilari yoki xususiyatlari (masalan, mashinaning rangi, tezligi, rusumi).Xatti-harakat (Behavior / Metodlar): Obyekt bajarishi mumkin boʻlgan funksiyalar yoki amallar (masalan, mashinaning yurishi, toʻxtashi).Obyekt xossalari (Properties / Attributes)Xossalar obyektning holatini va qiymatlarini saqlaydi.Har bir obyekt Sinf (Class) deb nomlangan qolip yoki shablon asosida yaratiladi va sinfda belgilangan xossalarga ega boʻladi.Bir xil sinfdan yaratilgan obyektlarning xossalari bir xil nomda boʻlsa-da, ularning qiymatlari bir-biridan farq qilishi mumkin`, 
    quiz: { 
      question: "JavaScriptda obekt yaratish uchun qaysi qavslardan foydalaniladi?", 
      options: ["[] (Kvadrat)", "() (Dumaloq)", "{} (Figurali)", "<> (Burchakli)"], 
      correct: 2 
    } 
  },
  { 
    id: 27, 
    title: "27-dars: DOM (Document Object Model) bilan ishlash.", 
    free: true, 
    content: `DOM (Document Object Model) — bu veb-sahifaning daraxtsimon tuzilmasi bo'lib, JavaScript orqali HTML elementlarini o'zgartirish, qo'shish yoki o'chirish imkonini beradi.Elementlarni tanlab olish (Select)HTML elementlarini JavaScriptga ulash uchun quyidagi usullar ishlatiladi:document.getElementById('id') — ID bo'yicha bitta elementni oladi.document.querySelector('selector') — Berilgan CSS selektoriga mos keluvchi birinchi elementni qaytaradi.document.querySelectorAll('selector') — Mos keluvchi barcha elementlarni ro'yxat (NodeList) ko'rinishida oladi.Elementlarni o'zgartirishTanlab olingan elementlarning matni yoki ko'rinishini oson o'zgartirish mumkin:element.textContent = 'Yangi matn' — Element ichidagi matnni o'zgartiradi.element.innerHTML = '<b>Qalin matn</b>' — HTML teglar bilan birga matn kiritadi.element.style.color = 'red' — Elementning CSS uslublarini o'zgartiradi.element.classList.add('active') — Elementga yangi CSS klass qo'shadi.Element yaratish va qo'shishYangi elementlarni dinamik tarzda sahifaga qo'shish bosqichlari:document.createElement('tag') — Yangi element yaratadi (masalan, 'div' yoki 'p').parent.appendChild(element) — Uni boshqa elementning oxiriga qo'shadi.parent.remove() — Elementni sahifadan o'chirib tashlaydi.Hodisalar (Events) bilan ishlashFoydalanuvchi harakatlariga (bosish, kiritish) javob berish uchun addEventListener ishlatiladi:javascriptconst button = document.querySelector('#myButton');

button.addEventListener('click', function() {
    alert('Tugma bosildi!');
});`, 
    quiz: { 
      question: "Sahifadan klass nomi bo'yicha birinchi uchragan elementni topish uchun qaysi metod ishlatiladi?", 
      options: ["getElementById", "querySelector", "createElement", "appendChild"], 
      correct: 1 
    } 
  },
  { 
    id: 28, 
    title: "28-dars: Hodisalar bilan ishlash (Event Listeners).", 
    free: true, 
    content: `JavaScript-da Hodisalar bilan ishlash (Event Listeners) veb-sahifani foydalanuvchi harakatlariga (masalan, tugmani bosish, matn kiritish, sichqonchani yuborish) javob beradigan qilish uchun ishlatiladi.Buning uchun eng zamonaviy va keng tarqalgan usul addEventListener() metodidir.📌 Asosiy Sintaksisjavascriptelement.addEventListener(hodisa_nomi, funksiya);
element: Hodisa roʻy berishini kutayotgan HTML elementi.hodisa_nomi: Qanday hodisa sodir boʻlishi (masalan, 'click', 'mouseover').funksiya: Hodisa sodir boʻlganda bajariladigan kodlar toʻplami.🛠️ Amaliy MisolFoydalanuvchi tugmani bosganda ekranga xabar chiqarish:html<button id="myButton">Meni bos!</button>

<script>
  // 1. Elementni tanlab olamiz
  const button = document.getElementById('myButton');

  // 2. Unga Event Listener biriktiramiz
  button.addEventListener('click', function() {
      alert('Tugma bosildi!');
  });
</script>
📂 Koʻp ishlatiladigan hodisalar turlariHodisalarni vazifasiga koʻra bir nechta guruhga boʻlish mumkin:🖱️ Sichqoncha hodisalari (Mouse Events)click – Element ustida sichqoncha chap tugmasi bosilganda.dblclick – Element ikki marta tez-tez bosilganda.mouseenter – Sichqoncha koʻrsatkichi element hududiga kirganda.mouseleave – Sichqoncha koʻrsatkichi element hududidan chiqqanda.⌨️ Klaviatura hodisalari (Keyboard Events)keydown – Klaviaturadagi istalgan tugma bosilganda.keyup – Bosilgan tugma qoʻyib yuborilganda.📄 Forma hodisalari (Form Events)submit – Forma yuborilganda (<form> elementi uchun).input – Matn maydoniga (<input>, <textarea>) biror narsa yozilganda.change – Element qiymati oʻzgarganda (masalan, <select> roʻyxatidan boshqa qiymat tanlanganda).🌐 Oyna hodisalari (Window Events)load – Sahifa toʻliq yuklanganda.resize – Brauzer oynasining oʻlchami oʻzgarganda.🔍 event obyekti (Hodisa tafsilotlari)Funksiya ichiga avtomatik ravishda event (yoki shunchaki e) obyekti uzatiladi. Bu obyekt orqali hodisa haqida batafsil maʼlumot olish mumkin:javascriptconst input = document.querySelector('input');

input.addEventListener('keydown', function(event) {
    console.log("Bosilgan tugma: " + event.key); // Foydalanuvchi qaysi tugmani bosganini ko'rsatadi
});
event.preventDefault() nima uchun kerak?Brauzerning standart harakatini toʻxtatish uchun ishlatiladi. Masalan, havola (<a>) bosilganda boshqa sahifaga oʻtib ketmasligi yoki forma yuborilganda sahifa qayta yuklanmasligi uchun:javascriptconst link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault(); // Havola bo'yicha o'tishni taqiqlaydi
    console.log("Havola bosildi, lekin sahifa o'zgarmadi.");
});
🗑️ Event Listenerni oʻchirish (removeEventListener)Agar biriktirilgan hodisani keyinchalik olib tashlash kerak boʻlsa, removeEventListener ishlatiladi. Buning uchun chaqiriladigan funksiya alohida nomlangan boʻlishi shart:javascriptfunction xabarBerish() {
    alert("Salom!");
}

// Hodisani qo'shish
button.addEventListener('click', xabarBerish);

// Hodisani o'chirish (endi tugma bosilsa hech narsa sodir bo'lmaydi)
button.removeEventListener('click', xabarBerish);`,
    quiz: {
      question: "Elementga hodisa (masalan, bosish) qo'shish uchun qaysi metod ishlatiladi?",
      options: ["addEventListener", "clickEvent", "onPress", "listenTo"],
      correct: 0
    }
  },
  { 
    id: 29, 
    title: "29-dars: Asinxron JavaScript: Callback, Promises va Async/Await.", 
    free: true, 
    content: `Asinxron JavaScript — bu dasturning asosiy oqimini to‘sib qo‘ymagan holda, fonda og‘ir operatsiyalarni (masalan, tarmoq so‘rovlari, taymerlar yoki fayllar bilan ishlash) bajarish imkonini beruvchi texnologiyadir.JavaScript kodlari sinxron, ya'ni qatorma-qator bajariladi. Agar biror qatordagi kod ko'p vaqt talab qilsa, keyingi kodlar kutib qoladi. Buning oldini olish uchun asinxronlikni boshqarishning 3 ta asosiy usuli mavjud: Callback, Promises va Async/Await.1. Callback (Qayta qo'ng'iroq funksiyasi)Callback — bu boshqa bir funksiyaga argument sifatida uzatiladigan va asinxron jarayon yakunlangandan so‘ng chaqiriladigan funksiyadir.Kamchiligi: Agar asinxron zanjirlar ko‘payib ketsa, kod o‘qishga juda qiyin bo‘lgan "Callback Hell" (Callback do‘zaxi) holatiga kelib qoladi.javascript// Oddiy callback misoli
function ma'lumotniYuklash(callback) {
    setTimeout(() => {
        console.log("1. Ma'lumot yuklandi");
        callback();
    }, 2000);
}

ma'lumotniYuklash(() => {
    console.log("2. Yuklangan ma'lumot foydalanuvchiga ko'rsatildi");
});
2. Promises (Va'dalar)Promises — asinxron operatsiyaning yakuniy natijasini (muvaffaqiyatli yoki muvaffaqiyatsiz) ifodalovchi obyektdir. U callback do'zaxidan qutulish va kodni zanjir shaklida (.then() va .catch()) yozish imkonini beradi.Vayda 3 xil holatda bo‘lishi mumkin:Pending — Kutish holati.Fulfilled — Muvaffaqiyatli yakunlanish (resolve chaqirilganda).Rejected — Xatolik bilan yakunlanish (reject chaqirilganda).javascriptconst internetdanYuklash = new Promise((resolve, reject) => {
    let muvaffaqiyatli = true; 
    setTimeout(() => {
        if (muvaffaqiyatli) {
            resolve("Ma'lumot muvaffaqiyatli keldi!");
        } else {
            reject("Xatolik yuz berdi!");
        }
    }, 2000);
});

internetdanYuklash
    .then(natija => console.log(natija))  // Muvaffaqiyatli holat uchun
    .catch(xato => console.error(xato));   // Xatolik holati uchun
3. Async / AwaitAsync/Await — bu Promises bilan ishlashni yanada osonlashtiradigan, asinxron kodni xuddi sinxron kod kabi ko‘rinishda yozishga imkon beruvchi eng zamonaviy va qulay usuldir.async — Funksiya oldidan qo‘yiladi va u har doim Promise qaytaradi.await — Faqat async funksiya ichida ishlaydi. U Promise yakunlanguniga qadar kod ijrosini vaqtincha to‘xtatib turadi. Xatoliklarni ushlash uchun try...catch blokidan foydalaniladi.javascriptfunction servergaSo'rov() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Serverdan javob keldi"), 2000);
    });
}

async function jarayonniBoshqarish() {
    try {
        console.log("So'rov yuborilmoqda...");
        const natija = await servergaSo'rov(); // Promise bajarilishini kutadi
        console.log(natija);
    } catch (xato) {
        console.error("Xatolik:", xato);
    }
}

jarayonniBoshqarish();`,
    quiz: {
      question: "Asinxron funksiyalar ichida ma'lumot kelishini kutib turish uchun qaysi kalit so'z ishlatiladi?",
      options: ["wait", "await", "delay", "async-stop"],
      correct: 1
    }
  },
  { 
    id: 30, 
    title: "30-dars: JavaScript LocalStorage va SessionStorage bilan ishlash.", 
    free: true, 
    content: `Web Storage API (LocalStorage va SessionStorage) JavaScript-da ma'lumotlarni foydalanuvchi brauzerida kalit-qiymat (key-value) juftligi ko'rinishida saqlash imkonini beradi.Ular faqat satr (string) ko'rinishidagi ma'lumotlarni saqlaydi va ma'lumotlar serverga yuborilmaydi (cookie-lardan farqli o'laroq).📊 LocalStorage va SessionStorage farqiXususiyatiLocalStorageSessionStorageMa'lumot muddatiBrauzer yopilsa ham o'chib ketmaydi (doimiy).Vkladka (tab) yoki brauzer yopilishi bilan o'chib ketadi.HajmiTaxminan 5MB - 10MBTaxminan 5MBO'qish doirasiIstalgan oyna yoki vkladkada o'qish mumkin (bitta domen ichida).Faqat ochilgan vkladkaning o'zida amal qiladi.⚙️ Asosiy metodlar va buyruqlarIkkala xotira turi uchun ham buyruqlar bir xil yoziladi:setItem(key, value) — Ma'lumotni xotiraga yozish.getItem(key) — Kalit bo'yicha ma'lumotni o'qish.removeItem(key) — Kalit bo'yicha ma'lumotni o'chirish.clear() — Xotirani butunlay tozalash.length — Xotiradagi elementlar sonini bilish.💻 Kod misollari1. LocalStorage bilan ishlashjavascript// Ma'lumotni saqlash
localStorage.setItem('foydalanuvchi', 'Alisher');
localStorage.setItem('til', 'uz');

// Ma'lumotni o'qish
const ism = localStorage.getItem('foydalanuvchi');
console.log(ism); // Natija: Alisher

// Ma'lumotni o'chirish
localStorage.removeItem('til');

// Hammasini tozalash
localStorage.clear();
2. SessionStorage bilan ishlashjavascript// Ma'lumotni saqlash
sessionStorage.setItem('sessiya_id', 'abc123xyz');

// Ma'lumotni o'qish
const id = sessionStorage.getItem('sessiya_id');
console.log(id); // Natija: abc123xyz

// O'chirish
sessionStorage.removeItem('sessiya_id');
⚠️ Muhim qoida: Massiv va Obyektlarni saqlashXotira faqat matn (string) qabul qilgani uchun, obyekt yoki massivlarni to'g'ridan-to'g'ri saqlab bo'lmaydi. Ularni saqlashdan oldin JSON formatiga o'tkazish kerak.Xato usul:javascriptconst user = { name: "Anvar", age: 25 };
localStorage.setItem('user', user); // Xotirada "[object Object]" bo'lib qoladi
To'g'ri usul:javascriptconst user = { name: "Anvar", age: 25 };

// Saqlash: Obyektni string-ga o'tkazamiz
localStorage.setItem('user', JSON.stringify(user));

// O'qish: String-ni qaytadan obyektga o'tkazamiz
const saqlanganUser = JSON.parse(localStorage.getItem('user'));
console.log(saqlanganUser.name); // Natija: Anvar
🔒 Xavfsizlik bo'yicha eslatmaHech qachon LocalStorage yoki SessionStorage ichida parollar, bank karta ma'lumotlari yoki o'ta maxfiy tokenlarni saqlamang. Ularni zararli skriptlar (XSS hujumlari) orqali o'g'irlash oson.`,
    quiz: {
      question: "Brauzer yopilgandan keyin ham saqlanib qoladigan ma'lumotlar ombori qanday ataladi?",
      options: ["SessionStorage", "LocalStorage", "MemoryCache", "CookieStore"],
      correct: 1
    }
  },
  { 
    id: 31, 
    title: "31-dars: ReactJS ga kirish. JSX sintaksisi va Virtual DOM tushunchasi.", 
    free: false, 
    content: `ReactJS — bu foydalanuvchi interfeyslarini (UI) yaratish uchun mo‘ljallangan, dunyoda eng ommabop bo‘lgan JavaScript kutubxonasi. U Meta (Facebook) va dasturchilar hamjamiyati tomonidan qo‘llab-quvvatlanadi. React yordamida veb-ilovalarni alohida, qayta ishlatilishi mumkin bo‘lgan bo‘laklar — komponentlar ko‘rinishida tez va oson yig‘ish mumkin.ReactJS dasturlashni soddalashtirish uchun ikkita asosiy ustunga tayanadi: JSX sintaksisi va Virtual DOM.1. JSX (JavaScript XML) sintaksisiJSX — bu JavaScript ichida HTML kodini yozish imkonini beruvchi maxsus sintaktik kengaytma. U React dasturchilariga kodni tushunarli va vizual jihatdan oson o‘qiladigan formata yozishga yordam beradi.Qanday ishlaydi: Brauzerlar JSX kodini to‘g‘ridan-to‘g‘ri tushunmaydi. Shuning uchun Babel kabi komilyatorlar JSX kodini oddiy React.createElement() funksiyalariga o‘girib beradi.Asosiy qoidalari:JSX ichida istalgan JavaScript ifodasini (o‘zgaruvchilar, hisob-kitoblar) jingalaksimon qavslar {} ichida yozish mumkin.JSX kodi har doim bitta asosiy ota-ona (parent) element ichiga o‘ralgan bo‘lishi kerak (yoki <></> fragmentidan foydalaniladi).HTML'dagi class atributi o‘rniga JavaScript'ning kalit so‘zi bilan to‘qnashmaslik uchun className ishlatiladi.Misol:jsxconst ism = "Shaxzod";
// JSX ko'rinishi
const element = <h1 className="salom">Salom, {ism}!</h1>;
2. Virtual DOM tushunchasiVirtual DOM (VDU) — bu React ilovalarining yuqori tezlikda ishlashini ta'minlovchi eng muhim texnologiyadir.Oddiy brauzerlarda DOM (Document Object Model) elementlari yangilanganda, butun sahifa qaytadan yuklanadi va bu ko'p resurs talab qiladi (sust ishlaydi). React bu muammoni Virtual DOM orqali hal qiladi.Ishlash mexanizmi:Nusxa olish: React haqiqiy DOM'ning xotiradagi yengil va virtual nusxasini (Virtual DOM) yaratadi.O‘zgarishlarni kuzatish: Sahifada biror ma'lumot o‘zgarganda, React yangi Virtual DOM daraxtini yaratadi va uni eskisiga solishtiradi (bu jarayon Reconciliation yoki Diffing algoritmi deyiladi).Nuqtali yangilash: React faqatgina o‘zgargan elementni aniqlaydi va haqiqiy DOM'ning faqat o‘sha qismini yangilaydi (butun sahifani qayta yuklamaydi).🔄 Oddiy DOM va Virtual DOM taqqoslanishiXususiyatiOddiy DOM (Real DOM)Virtual DOM (React)Yangilanish tezligiSekin (butun daraxt qayta yuklanishi mumkin)Juda tez (faqat o‘zgargan qism yangilanadi)Xotira sarfiKo‘p resurs talab qiladiYengil va kam xotira yeydiIshlash prinsipiHTML elementlarini to‘g‘ridan-to‘g‘ri o‘zgartiradiJavaScript ob'ektlari bilan ishlaydiReactJS o'zining mana shu xususiyatlari tufayli dinamik, tezkor va zamonaviy Single Page Applications (SPA) ya'ni bir sahifali veb-ilovalarni yaratishda eng mukammal vositalardan biri hisoblanadi.`,
    quiz: {
      question: "JavaScript ichida HTML yozish imkonini beruvchi sintaksis qanday ataladi?",
      options: ["HTML-JS", "JSX", "Virtual DOM", "React-DOM"],
      correct: 1
    }
  },
  { 
    id: 32, 
    title: "32-dars: React Component'lar va Props (Ma'lumot uzatish).", 
    free: false, 
    content: `React Component (Komponent) va Props (Xususiyatlar) React-ning eng asosiy tushunchalari hisoblanadi. Ular yordamida veb-sahifani kichik, mustaqil va qayta ishlatiladigan bo'laklarga bo'lish mumkin.Quyida ularning ishlash prinsipi va ma'lumot uzatish usullari sodda tushuntirilgan.1. React Component nima?Komponent — bu sahifaning ma'lum bir qismini (masalan: tugma, menyu, rasm yoki butun bir forma) ifodalovchi kod bo'lagi. React-da komponentlar odatda JavaScript funksiyalari ko'rinishida yoziladi va ular JSX (HTML-ga o'xshash kod) qaytaradi.Komponent nomlari har doim katta harf bilan boshlanishi shart.jsx// Oddiy komponentga misol
function Welcome() {
  return <h1>Xush kelibsiz!</h1>;
}
2. Props nima? (Ma'lumot uzatish)Props (properties so'zidan olingan) — bu bir komponentdan boshqasiga (odatda otadan bolaga) ma'lumot uzatish uchun ishlatiladigan vosita. Uni HTML teglari xususiyatlariga (attributes) o'xshash deb tasavvur qilish mumkin (masalan, <img src="url" /> dagi src kabi).Props-ning asosiy qoidasi:Props faqat bir tomonlama (yuqoridan pastga) harakat qiladi va ularni qabul qilib olgan komponent ichida o'zgartirib bo'lmaydi (Read-Only).3. Props yordamida ma'lumot uzatishga misolAytaylik, bizda foydalanuvchi ismini ko'rsatuvchi komponent bor va biz unga turli xil ismlarni uzatmoqchimiz.1-qadam: Bola komponentni yaratish va props-ni qabul qilishKomponent funksiyasiga birinchi argument sifatida props obyekti keladi.jsxfunction UserCard(props) {
  return (
    <div className="card">
      <h2>Foydalanuvchi: {props.name}</h2>
      <p>Yoshi: {props.age}</p>
    </div>
  );
}
2-qadam: Ota komponentda ma'lumotni uzatishApp komponenti ichida UserCard komponentini chaqiramiz va unga xohlagan qiymatlarimizni xususiyat sifatida berib yuboramiz.jsxfunction App() {
  return (
    <div>
      <h1>Bizning jamoa</h1>
      {/* Ma'lumotlarni props orqali uzatish */}
      <UserCard name="Ali" age={25} />
      <UserCard name="Olim" age={30} />
      <UserCard name="Zuhra" age={22} />
    </div>
  );
}
4. Zamonaviy usul: Destructuring (Obyektni bo'laklash)Amaliyotda props.name deb yozish o'rniga, JavaScript-ning destructuring imkoniyatidan foydalanib, kerakli o'zgaruvchilarni komponent argumentining o'zidayoq ajratib olish qulayroq hisoblanadi:jsx// To'g'ridan-to'g'ri { name, age } ko'rinishida qabul qilish
function UserCard({ name, age }) {
  return (
    <div className="card">
      <h2>Foydalanuvchi: {name}</h2>
      <p>Yoshi: {age}</p>
    </div>
  );
}
5. Props orqali funksiyalarni uzatish (Boladan otaga xabar berish)Props orqali nafaqat matn yoki sonlar, balki funksiyalarni ham uzatish mumkin. Bu asosan bola komponentda biror hodisa (click) sodir bo'lganda, ota komponentni ogohlantirish uchun ishlatiladi.jsx// Bola komponent
function Button({ text, onClickAction }) {
  return <button onClick={onClickAction}>{text}</button>;
}

// Ota komponent
function App() {
  const handleClick = () => {
    alert("Tugma bosildi!");
  };

  return (
    <div>
      {/* Funksiyani props orqali uzatish */}
      <Button text="Meni bos" onClickAction={handleClick} />
    </div>
  );
}
XulosaComponent — bu sahifaning qayta ishlatiluvchi g'ishtchasi.Props — bu g'ishtchalarga har xil ko'rinish yoki ma'lumot berish uchun tashqaridan uzatiladigan parametrlar.`,
    quiz: {
      question: "Ota komponentdan bola komponentga ma'lumot uzatish uchun nima ishlatiladi?",
      options: ["State", "Props", "DOM", "Redux"],
      correct: 1
    }
  },
  { 
    id: 33, 
    title: "33-dars: State (Holat) va useState hook'i.", 
    free: false, 
    content: `React-da State (holat) va useState hook'i komponentlarning dinamik ma'lumotlarini boshqarish uchun eng asosiy vositalardan biridir.Ularni tushunish uchun oddiy va tushunarli qo'llanma:1. State (Holat) nima?State — bu komponentning ichki xotirasi. Unda vaqt o'tishi bilan o'zgarishi mumkin bo'lgan va foydalanuvchi interfeysiga (UI) bevosita ta'sir qiladigan ma'lumotlar saqlanadi.Oddiy o'zgaruvchilardan farqi: State o'zgarganda, React avtomatik ravishda komponentni qayta chizadi (re-render qiladi) va ekrandagi ma'lumot yangilanadi. Agar oddiy o'zgaruvchini o'zgartirsangiz, UI yangilanmaydi.2. useState hook'i nima?useState — bu funksional komponentlarda state yaratish va uni yangilash uchun ishlatiladigan React funksiyasi (hook).Sintaksisi:javascriptconst [stateNomi, set_StateNomi] = useState(boshlangichQiymat);
stateNomi: joriy qiymatni saqlaydigan o'zgaruvchi.set_StateNomi: ushbu qiymatni o'zgartirish va komponentni qayta chizish uchun mo'ljallangan funksiya.boshlangichQiymat: state'ning eng birinchi qiymati (bu raqam, matn, massiv yoki obyekt bo'lishi mumkin).3. Amaliy misol: Kliklar hisoblagichi (Counter)Keling, tugma bosilganda sonni oshirib boradigan oddiy komponentni ko'ramiz:jsximport React, { useState } from 'react';

function Counter() {
  // 'count' deb nomlangan state yaratamiz, boshlang'ich qiymati: 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Hisoblagich: {count}</h1>
      
      {/* Tugma bosilganda setCount ishga tushadi va count qiymatini 1 taga oshiradi */}
      <button onClick={() => setCount(count + 1)}>
        Oshirish
      </button>
    </div>
  );
}

export default Counter;
4. useState bilan ishlashda 3 ta muhim qoidaTo'g'ridan-to'g'ri o'zgartirmang: State qiymatini count = count + 1 deb o'zgartirib bo'lmaydi. Har doim uning maxsus funksiyasidan (setCount) foydalanish shart.Asinxronlik: State o'zgartiruvchi funksiya chaqirilgandan so'ng, qiymat kodning keyingi satridayoq darhol o'zgarib qolmaydi. React o'zgarishlarni navbatga qo'yadi va komponent qayta chizilgandagina yangi qiymat namoyon bo'ladi.Hook'larni faqat tepada chaqiring: useState funksiyasini shartlar (if), sikllar (for) yoki ichki funksiyalar ichida ishlatib bo'lmaydi. U faqat komponent funksiyasining eng yuqori qismida yozilishi kerak.`,
    quiz: {
      question: "Komponent ichida o'zgaruvchi holatini saqlash va yangilash uchun qaysi hook ishlatiladi?",
      options: ["useEffect", "useState", "useRef", "useContext"],
      correct: 1
    }
  },
  { 
    id: 34, 
    title: "34-dars: Hodisalar (Events) bilan ishlash va Forma ma'lumotlarini boshqarish.", 
    free: false, 
    content: `Hodisalar (Events) bilan ishlash va forma ma'lumotlarini boshqarish veb-dasturlashning (ayniqsa JavaScript, React va boshqa freymvorklarning) eng muhim qismlaridan biridir. Quyida ushbu tushunchalar sodda va amaliy misollar bilan tushuntirilgan.1. Hodisalar (Events) bilan ishlashHodisa — bu foydalanuvchi yoki brauzer tomonidan amalga oshiriladigan harakat (masalan: tugmani bosish, matn kiritish, sahifani yangilash).Eng ko'p ishlatiladigan hodisalar:click — Element ustiga bosilganda.submit — Forma yuborilganda.change — Input yoki select qiymati o'zgarganda.keyup / keydown — Klaviaturadan tugma bosilganda yoki qo'yib yuborilganda.JavaScript-da misol:javascript// Tugmani tanlab olamiz
const button = document.querySelector('#myButton');

// Hodisani tinglovchini biriktiramiz
button.addEventListener('click', function(event) {
    console.log('Tugma bosildi!');
    console.log(event.target); // Hodisa sodir bo'lgan elementni ko'rsatadi
});
2. Forma ma'lumotlarini boshqarishForma bilan ishlashda ikkita asosiy vazifa bor: ma'lumotlarni yig'ib olish va sahifa qayta yuklanishining oldini olish.event.preventDefault() nima uchun kerak?Brauzer formani yuborganda (submit bo'lganda) avtomatik ravishda sahifani yangilab yuboradi. Buning oldini olish va ma'lumotlarni JavaScript yordamida qayta ishlash uchun event.preventDefault() funksiyasi ishlatiladi.JavaScript-da formani boshqarish (Misol):html<form id="userForm">
    <input type="text" id="username" placeholder="Ismingizni kiriting" required>
    <button type="submit">Yuborish</button>
</form>

<script>
const form = document.querySelector('#userForm');

form.addEventListener('submit', function(event) {
    // 1. Sahifa yangilanishini to'xtatamiz
    event.preventDefault(); 
    
    // 2. Input ichidagi qiymatni olamiz
    const usernameInput = document.querySelector('#username').value;
    
    // 3. Ma'lumot bilan ishlaymiz
    console.log('Kiritilgan ism:', usernameInput);
    
    // Formani tozalash (ixtiyoriy)
    form.reset();
});
</script>
3. Zamonaviy usul: React-da Hodisalar va FormlarAgar siz React frameworkidan foydalanayotgan bo'lsangiz, hodisalar biroz boshqacha (bosh harf bilan, masalan: onClick, onSubmit) yoziladi va ma'lumotlar State orqali boshqariladi.React-da boshqariladigan forma (Controlled Component):jsximport React, { useState } from 'react';

function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Sahifa yangilanishini oldini oladi
    alert('Yuborilgan ism: ' + name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} // Har bir harf yozilganda stateni yangilaydi
        placeholder="Ismingizni kiriting" 
      />
      <button type="submit">Yuborish</button>
    </form>
  );
}

export default UserForm;
Xulosa va oltin qoidalar:Forma yuborilayotganda doimo event.preventDefault() dan foydalaning.Foydalanuvchi kiritgan ma'lumotni tekshirish (validation) uchun submit hodisasidan ichida shart operatorlaridan (if/else) foydalaning.Katta va murakkab formalar uchun JavaScript-da FormData obyektidan, React-da esa Formik yoki React Hook Form kutubxonalaridan foydalanish tavsiya etiladi.`,
    quiz: {
      question: "Reactda tugma bosilganda ishlaydigan hodisa atributi qanday yoziladi?",
      options: ["onclick", "onClick", "on-click", "click"],
      correct: 1
    }
  },
  { 
    id: 35, 
    title: "35-dars: useEffect hook'i va API bilan ishlash (Fetch / Axios).", 
    free: false, 
    content: `React-da useEffect hook'i tashqi tizimlar (masalan, API'lar) bilan sinxronizatsiya qilish uchun ishlatiladi. Komponent ekranga chiqqanda (render bo'lganda) ma'lumotlarni yuklab olish eng ko'p tarqalgan holatlardan biridir.Quyida Fetch va Axios yordamida API'dan ma'lumot olishni ko'rib chiqamiz.1. Fetch API bilan ishlashfetch — brauzerning ichki funksiyasi bo'lib, qo'shimcha kutubxonalarsiz ishlaydi.jsximport { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API so'rovi funksiyasi
    fetch('https://typicode.com')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Xatolik yuz berdi:', error);
        setLoading(false);
      });
  }, []); // Bo'sh massiv: komponent birinchi marta render bo'lganda 1 marta ishlaydi

  if (loading) return <p>Yuklanmoqda...</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
2. Axios bilan ishlash (async/await usuli)Axios — tashqi kutubxona bo'lib, ma'lumotlarni avtomatik JSON formatiga o'tkazadi va xatolar bilan ishlashni osonlashtiradi. Uni ishlatish uchun loyihaga o'rnatish kerak (npm install axios).useEffect ichida to'g'ridan-to'g'ri async so'zini ishlatib bo'lmaydi. Shuning uchun ichkarida alohida async funksiya ochiladi:jsximport { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ichki async funksiya yaratamiz
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://escuelajs.co');
        setProducts(response.data); // Axios ma'lumotni .data ichida qaytaradi
      } catch (err) {
        setError('Ma'lumotni yuklashda xatolik ketdi.');
      }
    };

    fetchProducts();
  }, []); // Bo'sh massiv: faqat 1 marta ishlaydi

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h3>Mahsulotlar</h3>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}
💡 Eng muhim qoidalar va maslahatlarBo'sh bog'liqliklar massivi ([]): Agar useEffect oxiridagi [] tashlab ketilsa, API so'rovi har bir renderda (cheksiz ravishda) qayta-qayta bajariladi. API'dan faqat komponent ochilganda ma'lumot olish uchun [] qoldirish shart.Loading va Error holatlari: Foydalanuvchi tajribasini (UX) yaxshilash uchun har doim ma'lumot yuklanayotgan vaqtda loading (spinner) va xatolik yuz berganda error holatlarini ko'rsatish tavsiya etiladi.Cleanup (Tozalash) funksiyasi: Agar foydalanuvchi ma'lumot yuklanib bo'lmasidan oldin boshqa sahifaga o'tib ketsa, "memory leak" (xotira yo'qotilishi) sodir bo'lishi mumkin. Buning oldini olish uchun Fetch'da AbortController yoki Axios'da CancelToken yordamida so'rovni bekor qilish funksiyasini yozish foydali hisoblanadi.`,
    quiz: {
      question: "Komponent ekranga chiqqanda bir marta ishga tushadigan kodni qaysi hook ichiga yozamiz?",
      options: ["useState", "useEffect", "useMemo", "useCallback"],
      correct: 1
    }
  },
  { 
    id: 36, 
    title: "36-dars: List va Keys (Ro'yxatlar va Kalitlar).", 
    free: false, 
    content: `React-da List (Ro'yxatlar) va Keys (Kalitlar) ma'lumotlar to'plamini (masalan, massivlarni) ekranga chiqarish va ularni samarali boshqarish uchun ishlatiladi.1. List (Ro'yxatlar) bilan ishlashReact-da massiv ichidagi ma'lumotlarni rasmga yoki komponentlarga aylantirish uchun JavaScript-ning map() metodidan foydalaniladi.Misol:jsxfunction MevalarRuyxati() {
  const mevalar = ['Olma', 'Banan', 'Gilos', 'Aonor'];

  return (
    <ul>
      {mevalar.map((meva, index) => (
        <li key={index}>{meva}</li>
      ))}
    </ul>
  );
}
2. Keys (Kalitlar) nima va u nima uchun kerak?Kalitlar (Keys) — React-ga ro'yxatdagi qaysi element o'zgarganini, qo'shilganini yoki o'chirilganini aniqlashga yordam beradigan maxsus satrli atributlardir.🟢 Samaradorlik: React butun ro'yxatni qaytadan chizmasdan, faqat o'zgargan elementni topib, o'shani o'zini yangilaydi (Virtual DOM orqali).🟢 Identifikatsiya: Har bir element ro'yxat ichida o'zining takrorlanmas (unique) kalitiga ega bo'lishi shart.3. Kalit sifatida nimalarni ishlatish kerak?Kalit tanlashda quyidagi qoidalarga amal qilish tavsiya etiladi:ID (Eng yaxshi variant): Odatda ma'lumotlar bazasidan keladigan takrorlanmas id raqamlari eng to'g'ri tanlovdir.jsxconst turlar = toDos.map(todo => <li key={todo.id}>{todo.text}</li>);
Index (Oxirgi chora): Agar ma'lumotlarda hech qanday ID bo'lmasa, map() metodining index (tartib raqami) ko'rsatkichidan foydalanish mumkin.Diqqat: Agar ro'yxat elementlari tartibi o'zgarsa, o'chirilsa yoki yangi element qo'shilsa, indexdan foydalanish dasturda xatoliklarga (bug) olib kelishi mumkin.Muhim qoidalar:Kalitlar global miqyosda emas, faqat o'z joyida takrorlanmas bo'lishi kerak: Ikki xil ro'yxatda bir xil kalitlar ishlatilishi mumkin, lekin bitta ro'yxatning ichida kalitlar takrorlanmasligi shart.Kalitlarni bevosita map() ichida ko'rsatish lozim: Agar ro'yxat elementlarini alohida komponentga ajratgan bo'lsangiz, key atributini o'sha komponent chaqirilgan joyga qo'yish kerak.To'g'ri amaliyot:jsxfunction MevaElementi(props) {
  // Bu yerda key shart emas
  return <li>{props.nomi}</li>;
}

function MevalarRuyxati() {
  const mevalar = [
    { id: 1, nom: 'Olma' },
    { id: 2, nom: 'Banan' }
  ];

  return (
    <ul>
      {/* key atributi aynan shu yerda bo'lishi kerak */}
      {mevalar.map(meva => (
        <MevaElementi key={meva.id} nomi={meva.nom} />
      ))}
    </ul>
  );
}`,
    quiz: {
      question: "Reactda massiv elementlarini ekranga chiqarishda har bir element uchun nima ko'rsatish majburiy?",
      options: ["class", "key", "id-name", "index-only"],
      correct: 1
    }
  },
  { 
    id: 37, 
    title: "37-dars: React Router DOM (Sahifalararo o'tishlar).", 
    free: false, 
    content: `React Router DOM — bu React kutubxonasida yaratilgan veb-ilovalarda sahifalararo o'tishlarni (marshrutlash / routing) boshqarish uchun eng ommabop modul hisoblanadi. U sahifa to'liq yangilanmasdan (refresh bo'lmasdan) bir komponentdan ikkinchisiga o'tishni ta'minlaydi.Quyida React Router DOM-dan foydalanish bo'yicha eng muhim tushunchalar va oddiy qo'llanma keltirilgan.1. O'rnatishLoyiha terminalida quyidagi buyruq orqali o'rnatiladi:bashnpm install react-router-dom
2. Asosiy KomponentlarReact Router DOM bir nechta tayyor komponentlarni taqdim etadi:BrowserRouter: Marshrutlash tarixini saqlaydigan va butun ilovani o'rab turadigan asosiy komponent.Routes: Barcha Route (yo'llar)ni o'z ichiga oluvchi konteyner.Route: Muayyan URL manzili uchun qaysi komponent ko'rsatilishini belgilaydi.Link: Sahifani yangilamasdan boshqa URL-ga o'tish uchun ishlatiladigan havola (huddi <a> tegi kabi).3. Kodda Qo'llanilishi (Misol)Quyidagi misolda Home (Bosh sahifa), About (Biz haqimizda) sahifalari va ular o'rtasida harakatlanish ko'rsatilgan:jsximport React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Sahifa komponentlari
const Home = () => <h2>Bosh sahifa</h2>;
const About = () => <h2>Biz haqimizda</h2>;
const NotFound = () => <h2>Sahifa topilmadi (404)</h2>;

function App() {
  return (
    <BrowserRouter>
      {/* Navigatsiya menyusi */}
      <nav>
        <ul>
          <li><Link to="/">Bosh sahifa</Link></li>
          <li><Link to="/about">Biz haqimizda</Link></li>
        </ul>
      </nav>

      {/* Sahifalar almashadigan joy */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* 404 Sahifa uchun */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
4. Dasturiy o'tish (useNavigate huki)Ba'zan tugma (button) bosilganda yoki qandaydir shart bajarilganda (masalan, login muvaffaqiyatli bo'lsa) avtomatik boshqa sahifaga o'tkazish kerak bo'ladi. Buning uchun useNavigate hukidan foydalaniladi:jsximport { useNavigate } from 'react-router-dom';

const LoginButton = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Login qilish mantiqi...
    
    // Asosiy sahifaga yo'naltirish
    navigate('/'); 
  };

  return <button onClick={handleLogin}>Kirish</button>;
};
5. Dinamik marshrutlar (useParams huki)Agar URL manzilida ID yoki maxsus o'zgaruvchilar bo'lsa (masalan: /user/25), ularni useParams orqali o'qib olish mumkin:Marshrutni sozlash: <Route path="/user/:id" element={<User />} />Komponent ichida ID ni olish:jsximport { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  return <h2>Foydalanuvchi ID raqami: {id}</h2>;
};`,
    quiz: {
      question: "React ilovasida sahifalarni almashtirish uchun qaysi mashhur kutubxona ishlatiladi?",
      options: ["react-router-dom", "react-navigation", "router-js", "react-dom-pages"],
      correct: 0
    }
  },
  { 
    id: 38, 
    title: "38-dars: Global state boshqaruvi: Context API.", 
    free: false, 
    content: `React-da Context API — bu ma'lumotlarni komponentlar ierarxiyasi bo'ylab har bir darajada qo'lda props uzatmasdan (prop drilling muammosisiz), komponentlar o'rtasida global almashish imkonini beruvchi tizimdir.U odatda ilova tili, UI mavzusi (dark/light mode) yoki foydalanuvchi avtorizatsiya holati kabi ko'plab komponentlar uchun umumiy bo'lgan ma'lumotlarni boshqarishda qo'llaniladi.🛠 Context API qadamba-qadam (Amaliy misol)Keling, oddiy Mavzu (Theme) almashtirish misolida global holatni qanday boshqarishni ko'ramiz.1. Context yaratish (ThemeContext.jsx)Dastlab createContext funksiyasi yordamida yangi kontekst yaratamiz va uni eksport qilamiz.jsximport { createContext, useState, useContext } from 'react';

// 1. Kontekst yaratish
const ThemeContext = createContext();

// 2. Maxsus Provider komponentini yaratish
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    // value orqali global holat va funksiyani pastki komponentlarga uzatamiz
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Kontekstni oson ishlatish uchun custom hook (Ixtiyoriy, lekin tavsiya etiladi)
export const useTheme = () => useContext(ThemeContext);
2. Ilovani Provider bilan o'rash (main.jsx yoki App.jsx)Global holatdan foydalana olishi uchun barcha komponentlarni ThemeProvider ichiga olishimiz kerak.jsximport React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
3. Kontekstni komponent ichida ishlatish (ThemeButton.jsx)Endi istalgan quyi komponentda useContext (yoki o'zimiz yozgan useTheme hooki) orqali global ma'lumotni olamiz.jsximport { useTheme } from './ThemeContext';

const ThemeButton = () => {
  // Global holat va funksiyani qabul qilib olamiz
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ 
      background: theme === 'light' ? '#fff' : '#333', 
      color: theme === 'light' ? '#000' : '#fff',
      padding: '20px' 
    }}>
      <p>Hozirgi mavzu: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>Mavzuni o'zgartirish</button>
    </div>
  );
};

export default ThemeButton;
⚖️ Context API-ning afzalliklari va kamchiliklariAfzalliklari (Pros)Kamchiliklari (Cons)⚡ Yengil vaznli: Hech qanday tashqi kutubxona (Redux, Zustand) talab qilmaydi, React-ning o'zida mavjud.⚠️ Keraksiz qayta render (Re-render): Provider ichidagi value o'zgarganda, unga bog'langan barcha komponentlar qayta render bo'ladi.🧩 Prop Drilling-ga barham beradi: Ma'lumotlarni 5-10 ta qatlam ostidagi komponentga to'g'ridan-to'g'ri uzatadi.🧬 Komponentlar bog'liqligi: Komponentni boshqa joyda qayta ishlatish qiyinlashadi (u faqat Provider ichida ishlaydi).🛠 Oson sozlash: Kichik va o'rta loyihalar uchun ideal yechim.🧱 Arxitektura murakkabligi: Juda ko'p kontekstlar ko'payib ketsa, kod chalkashib ketishi mumkin (Context Hell).💡 Eng yaxshi amaliyotlar (Best Practices)Kontekstlarni bo'ling: Hamma global holatni bitta Context-ga tiqmang. Masalan, AuthContext alohida, ThemeContext alohida bo'lsin.Tez-tez o'zgaradigan holatlar uchun ishlatmang: Agar holat soniyada bir necha marta o'zgarsa (masalan, input qiymati yoki animatsiya koordinatalari), Context o'rniga Zustand, Redux Toolkit yoki Signals ishlatgan ma'qul.`,
    quiz: {
      question: "Ma'lumotlarni har bir qavatdan (props drilling) o'tkazmasdan global uzatish uchun nima ishlatiladi?",
      options: ["Context API", "Local Storage", "CSS Modules", "HTML DOM"],
      correct: 0
    }
  },
  { 
    id: 39, 
    title: "39-dars: Performance optimizatsiyasi: useMemo va useCallback.", 
    free: false, 
    content: `Katta hajmli ilovalarda ortiqcha re-renderlarning oldini olish va dastur tezligini oshirish uchun optimizatsiya hook'lari ishlatiladi.
- useMemo: Hisob-kitob natijalarini eslab qolish (memoization) uchun.
- useCallback: Funksiyalarni qayta yaratishning oldini olish uchun.`,
    quiz: {
      question: "Og'ir hisob-kitob natijalarini xotirada saqlab qolish uchun qaysi hook ishlatiladi?",
      options: ["useMemo", "useState", "useEffect", "useRef"],
      correct: 0
    }
  },
  { 
    id: 40, 
    title: "40-dars: React ilovasini Build qilish va Vercel'ga deploy qilish.", 
    free: false, 
    content: `React ilovasini Vercel platformasiga deploy qilish juda tez va oson jarayon. Buni ikki xil usulda amalga oshirish mumkin: GitHub orqali (tavsiya etiladi) yoki Vercel CLI (konsol) orqali.Quyida har bir qadamni batafsil ko'rib chiqamiz.1-usul: GitHub orqali deploy qilish (Eng oson va avtomatik usul)Bu usulning qulayligi — loyihangizga yangi kod qo'shib GitHub'ga yuklaganingizda, Vercel uni avtomatik ravishda qayta build qiladi (CI/CD).1-qadam: Kodni GitHub'ga yuklangAgar loyihangiz hali GitHub'da bo'lmasa:GitHub'da yangi repozitoriy (repository) yarating.Terminalda loyihangiz papkasiga kiring va quyidagi buyruqlarni bajaring:bashgit init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin REPOZITORIY_LINKI
git push -u origin main
2-qadam: Vercel'ga ulaningvercel.com saytiga kiring va Sign Up (yoki Login) tugmasini bosing.Ro'yxatdan o'tishda Continue with GitHub variantini tanlang.3-qadam: Loyihani import qilingVercel boshqaruv panelida (Dashboard) "Add New..." -> "Project" tugmasini bosing.GitHub repozitoriyalaringiz ro'yxatidan o'zingizning React loyihangizni toping va "Import" tugmasini bosing.4-qadam: Build sozlamalari va DeployFramework Preset qismida Vercel loyihangizni avtomatik aniqlaydi (masalan, Create React App yoki Vite).Agar loyihangizda .env (maxfiy kalitlar) bo'lsa, ularni Environment Variables bo'limiga qo'shing.Hech qanday sozlamani o'zgartirmasdan, shunchaki "Deploy" tugmasini bosing.Yuz beradigan jarayon: Vercel loyihangizni o'zi build qiladi (npm run build) va sizga tayyor https://vercel.app ko'rinishidagi tekin domen (link) beradi. 🎉2-usul: Vercel CLI orqali (Konsoldan to'g'ridan-to'g'ri)Agar kodni GitHub'ga yuklamasdan, kompyuteringizdan to'g'ridan-to'g'ri deploy qilmoqchi bo'lsangiz:Vercel CLI dasturini o'rnating:bashnpm install -g vercel
Tizimga kiring (Login):bashvercel login
(Sizdan brauzer orqali akkauntingizni tasdiqlash so'raladi)Loyihangiz papkasiga kiring va deploy buyrug'ini bering:bashvercel
Konsolda chiqadigan savollarga javob bering (ko'pincha shunchaki Enter tugmasini bosish kifoya).Loyihani yakuniy (Production) versiyaga o'tkazish uchun quyidagilarni bajaring:bashvercel --prod
⚠️ Muhim eslatma (React Router muammosi)Agar loyihangizda React Router (react-router-dom) ishlatilgan bo'lsa va sahifani yangilaganda (Refresh/F5) 404 Not Found xatoligi chiqsa, loyihangizning asosiy (root) papkasida vercel.json nomli fayl yarating va ichiga quyidagi kodni yozing:json{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
Bu kod barcha so'rovlarni index.html fayliga yo'naltiradi va ichki sahifalar muammosiz ishlaydi. Faylni qo'shgandan so'ng kodni qayta GitHub'ga push qiling.`,
    quiz: {
      question: "React loyihasini production uchun yig'ish (build qilish) komandasi qaysi?",
      options: ["npm run start", "npm run build", "npm run dev", "npm deploy"],
      correct: 1
    }
  },
  { 
    id: 41, 
    title: "41-dars: Netflix Clone loyihasiga kirish va arxitektura dizayni.", 
    free: false, 
    content: `Netflix Clone loyihasi — bu foydalanuvchilarga video kontentlarni (kino, serial, xizmatlar) real vaqt rejimida ko'rish imkoniyatini beruvchi, yuqori yuklamalarga chidamli (high-load) tizim hisoblanadi. Bunday loyihani muvaffaqiyatli qurish uchun to'g'ri arxitektura va texnologik stekni tanlash muhim ahamiyatga ega.Quyida ushbu loyihaga kirish va uning fundamental arxitektura dizayni keltirilgan.1. Loyihaning Umumiy Arxitekturasi (Microservices)Netflix kabi yirik tizimlar Mikroxizmatlar (Microservices) arxitekturasi asosiga quriladi. Bu tizimning turli qismlarini bir-biriga bog'liq bo'lmagan holda mustaqil rivojlantirish va masshtablash (scaling) imkonini beradi.[ Frontend / Client ] (Web, Mobile, TV)
         │
         ▼
[ API Gateway ] (Xavfsizlik, Routing, Load Balancing)
         │
 ┌───────┼───────────────┬────────────────┐
 ▼       ▼               ▼                ▼
[Auth] [Catalog] [Video Streaming] [Recommendation] ... (Boshqa mikroxizmatlar)
2. Asosiy Komponentlar va Tizim DizayniTizimni mantiqiy jihatdan bir nechta asosiy bloklarga bo'lish mumkin:A. API Gateway (Tizimga kirish eshigi)Foydalanuvchidan kelgan barcha so'rovlarni qabul qiladi va tegishli mikroxizmatga yo'naltiradi.Vazifalari: Autentifikatsiya (Xavfsizlik), so'rovlarni filtrlash va yuklamani taqsimlash (Load Balancing).B. Kontentni yetkazib berish tarmog'i (CDN - Content Delivery Network)Video fayllar juda katta hajmdagi ma'lumotlar bo'lgani uchun ular markaziy serverda saqlanmaydi.Videolar dunyo bo'ylab joylashgan CDN serverlarida (kengaytirilgan keshda) saqlanadi. Foydalanuvchiga eng yaqin joylashgan serverdan video uzatiladi. Bu videoning qotmasdan (buferizatsiyasiz) qo'yilishini ta'minlaydi.C. Video Ingestion & Encoding (Videoni qayta ishlash)Admin panel orqali yuklangan original video (masalan, 4K formatda) tizim tomonidan avtomatik ravishda turli formatlarga (1080p, 720p, 480p) va bo'laklarga (chunks) bo'linadi.HLS (HTTP Live Streaming) yoki DASH protokollari yordamida foydalanuvchining internet tezligiga qarab videoning sifati avtomatik moslashadi (Adaptive Bitrate Streaming).3. Tavsiya etiladigan Texnologiyalar Steki (Tech Stack)Loyiha uchun zamonaviy va barqaror texnologiyalardan foydalanish tavsiya etiladi:Qatlam (Layer)TexnologiyalarFrontend (Kliyent)React.js, Next.js (Web uchun), React Native yoki Flutter (Mobil uchun)Backend (Mikroxizmatlar)Node.js (Express/NestJS), Go (Golang) yoki Java (Spring Boot)Ma'lumotlar Bazasi (SQL)PostgreSQL yoki MySQL (Foydalanuvchilar, to'lovlar, obunalar uchun)Ma'lumotlar Bazasi (NoSQL)MongoDB yoki Cassandra (Filmlar katalogi, metadata va ko'rishlar tarixi uchun)Kesh va Navbat (Queue)Redis (Kesh va Seanslar uchun), RabbitMQ yoki Apache Kafka (Xabarlar navbati)Video Saqlash & CDNAWS S3 (Foyllarni saqlash), AWS CloudFront yoki Cloudflare (CDN)DevOps & InfratuzilmaDocker, Kubernetes (Mikroxizmatlarni boshqarish), Nginx4. Ma'lumotlar Bazasi Dizayni (Sodda Ko'rinishda)Tizimda kamida quyidagi asosiy jadvallar (kolleksiyalar) bo'lishi shart:Users: Id, Ism, Email, Parol, Obuna turi (Premium/Free), To'lov holati.Profiles: Id, User_Id, Profil ismi, Profil rasmi, Yosh chegarasi (Kattalar/Bolalar).Videos/Movies: Id, Nomi, Tavsifi, Janr, Davomiyligi, Video_URL (CDN linki), Thumbnail_URL.WatchHistory: Id, Profile_Id, Video_Id, To'xtagan vaqti (progress_seconds), Ko'rilgan sana.5. Loyihani Ishga Tushirish Bosqichlari (MVP)1-Bosqich: Arxitekturani chizish va ma'lumotlar bazasini loyihalash.2-Bosqich: Autentifikatsiya (Tizimga kirish/ro'yxatdan o'tish) va foydalanuvchi profillarini yaratish.3-Bosqich: Filmlar katalogini yaratish (Backend va Frontend integratsiyasi).4-Bosqich: Video pleyerni sozlash va HLS strimingni yo'lga qo'yish (AWS S3 yoki lokal server orqali).5-Bosqich: "Ko'rishni davom ettirish" (Watch History) va qidiruv tizimini joriy qilish..`,
    quiz: {
      question: "Netflix interfeysi uchun qanday ranglar palitrasi asosiy qilib olinadi?",
      options: ["Oq va och ko'k", "Qora va to'q qizil/oq", "Sariq va yashil", "Pushti va binafsha"],
      correct: 1
    }
  },
  { 
    id: 42, 
    title: "42-dars: TMDB API bilan tanishish va kalit olish.", 
    free: false, 
    content: `The Movie Database (TMDB) API — bu filmlar, seriallar, aktyorlar va teleshoular haqidagi ulkan ma'lumotlar bazasidan bepul foydalanish imkonini beruvchi platformadir. Undan dasturlar, veb-saytlar yoki botlar yaratishda foydalanish mumkin.TMDB API bilan tanishish va shaxsiy API kalitini (API Key) olish uchun quyidagi bosqichlarni bajaring:1-qadam: TMDB saytida roʻyxatdan oʻtishTMDB rasmiy veb-saytiga kiring.Yuqori oʻng burchakdagi "Join TMDB" (TMDB-ga qoʻshilish) tugmasini bosing.Foydalanuvchi nomi (username), parol va elektron pochta manzilingizni kiriting va roʻyxatdan oʻting.Pochtangizga kelgan tasdiqlash xatidagi havolani bosib, profilingizni faollashtiring.2-qadam: API kalitini soʻrash (Request API Key)Saytga login qilib kirgandan soʻng, yuqori oʻng burchakdagi profilingiz belgisini (avatar) bosing va "Settings" (Sozlamalar) boʻlimiga oʻting.Chap tomondagi menyudan "API" boʻlimini tanlang.Sahifada "Create" (Yaratish) tugmasini bosing (bu yerda sizdan "Developer" (Dasturchi) yoki "Professional" turini tanlash soʻraladi, oddiy loyihalar uchun Developer variantini tanlang).Shartnomani oʻqib chiqib, rozilik bildiring (Accept).3-qadam: Maʼlumotnomani toʻldirishAPI kalitini olish uchun sizdan loyihangiz haqida qisqacha ma'lumot soʻraladi:Type of Use: Foydalanish turi (masalan, Personal yoki Educational).Application Name: Ilovangiz nomi (masalan, My Movie App).Application URL: Agar veb-saytingiz boʻlsa havolasi (boʻsh qoldirsa ham boʻladi yoki http://localhost deb yozish mumkin).Application Summary: Ilova nima vazifa bajarishi haqida qisqacha tavsif (ingliz tilida yozgan maʼqul, masalan: “This is an educational project to display popular movies using TMDB API.”).Shaxsiy maʼlumotlar: Ism-sharifingiz, manzilingiz va telefon raqamingiz.Maʼlumotlarni toʻldirib, "Submit" tugmasini bosing. API kaliti odatda darhol yaratiladi va shu sahifaning oʻzida koʻrinadi.TMDB API bilan ishlash asoslariKalitni olganingizdan soʻng, sizga ikkita asosiy kod beriladi:API Key (v3 auth): Soʻrovlar oxiriga ulanadigan uzun maxsus kod.API Read Changes Token (v4 auth): HTTP Header orqali Bearer token sifatida yuboriladigan xavfsizroq kod.Oddiy soʻrov yuborishga misolEng mashhur filmlar roʻyxatini olish uchun brauzeringiz yoki kodingiz orqali quyidagi URL-ga soʻrov (GET request) yuborasiz:texthttps://themoviedb.org
Natija sizga JSON formatida qaytadi va unda filmlarning nomlari, ID raqamlari, reytingi va poster rasmlari manzillari joy olgan boʻladi.Muhim eslatmalar:Rasm manzillari: TMDB rasmlarni toʻliq URL shaklida qaytarmaydi (masalan, faqat /kqj667...jpg qaytadi). Rasmni koʻrsatish uchun uning oldiga asosiy manzilni qoʻshish kerak: https://tmdb.org.API Hujjatlari: Barcha buyruqlar, qidiruv tizimi va filtrlash usullarini mukammal oʻrganish uchun rasmiy TMDB API Documentation sahifasidan foydalaning.`,
    quiz: {
      question: "Kinolar va seriallar ma'lumotlarini olish uchun qaysi ommaviy API ishlatiladi?",
      options: ["TMDB API", "GitHub API", "Weather API", "Google Maps API"],
      correct: 0
    }
  },
  { 
    id: 43, 
    title: "43-dars: Bosh sahifa (Banner va asosiy kino qismi).", 
    free: false, 
    content: `Veb-saytning bosh sahifasi (Banner va asosiy kino qismi) uchun quyida sodda, chiroyli va zamonaviy HTML hamda CSS kodi keltirilgan. Bu struktura Netflix yoki boshqa striming platformalariga o‘xshash dizaynni taqdim etadi.1. HTML Kodi (index.html)html<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kinoteatr - Bosh Sahifa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- NAVIGATSIYA -->
    <header class="navbar">
        <div class="logo">KINO<span>PREMIUM</span></div>
        <nav>
            <ul>
                <li><a href="#" class="active">Bosh sahifa</a></li>
                <li><a href="#">Filmlar</a></li>
                <li><a href="#">Seriallar</a></li>
                <li><a href="#">Yuborilganlar</a></li>
            </ul>
        </nav>
    </header>

    <!-- BANNER QISMI (Katta Reklama Filmi) -->
    <section class="banner">
        <div class="banner-content">
            <h1 class="movie-title">Gdyardianlar: Afsonaning Qaytishi</h1>
            <p class="movie-info">2026 • Fantastika, Jangari • 2 soat 15 daqiqa • Reyting: 8.9</p>
            <p class="movie-desc">Koinotning chekka burchagida yangi xavf uyg'onadi. Eski qahramonlar yana bir bor birlashishga va borliqni saqlab qolishga majbur.</p>
            <div class="banner-buttons">
                <button class="btn btn-play">▶ Tomosha qilish</button>
                <button class="btn btn-info">ℹ Batafsil</button>
            </div>
        </div>
    </section>

    <!-- ASOSIY KINO QISMI (Kino Kartalari) -->
    <main class="main-content">
        <div class="section-title">
            <h2>Trenddagi Filmlar</h2>
            <a href="#" class="view-all">Barchasini ko'rish →</a>
        </div>

        <div class="movie-grid">
            <!-- 1-Kino kartasi -->
            <div class="movie-card">
                <img src="https://unsplash.com" alt="Kino">
                <div class="card-details">
                    <h3>Qora Ritsarning Soya Qismi</h3>
                    <span>2025 • Jangari</span>
                </div>
            </div>

            <!-- 2-Kino kartasi -->
            <div class="movie-card">
                <img src="https://unsplash.com" alt="Kino">
                <div class="card-details">
                    <h3>Vaqtlar Ora</h3>
                    <span>2026 • Drama</span>
                </div>
            </div>

            <!-- 3-Kino kartasi -->
            <div class="movie-card">
                <img src="https://unsplash.com" alt="Kino">
                <div class="card-details">
                    <h3>Mars Missiyasi</h3>
                    <span>2024 • Ilmiy-fantastika</span>
                </div>
            </div>

            <!-- 4-Kino kartasi -->
            <div class="movie-card">
                <img src="https://unsplash.com" alt="Kino">
                <div class="card-details">
                    <h3>Sirlar O'rmoni</h3>
                    <span>2026 • Triller</span>
                </div>
            </div>
        </div>
    </main>

</body>
</html>
2. CSS Kodi (style.css)css/* Umumiy sozlamalar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #111;
    color: #fff;
    overflow-x: hidden;
}

/* Navigatsiya */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 5%;
    position: absolute;
    width: 100%;
    z-index: 10;
    background: linear-gradient(to bottom, rgba(0,0,0,0.8), transparent);
}

.logo {
    font-size: 24px;
    font-weight: bold;
    letter-spacing: 1px;
}

.logo span {
    color: #e50914;
}

.navbar ul {
    display: flex;
    list-style: none;
}

.navbar ul li {
    margin-left: 20px;
}

.navbar ul li a {
    color: #e5e5e5;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
}

.navbar ul li a:hover, .navbar ul li a.active {
    color: #fff;
    font-weight: bold;
}

/* Banner qismi */
.banner {
    height: 85vh;
    background: linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), 
                url('https://unsplash.com') no-repeat center center/cover;
    display: flex;
    align-items: center;
    padding: 0 5%;
}

.banner-content {
    max-width: 600px;
}

.movie-title {
    font-size: 48px;
    font-weight: 800;
    margin-bottom: 15px;
    line-height: 1.2;
}

.movie-info {
    font-size: 14px;
    color: #cccccc;
    margin-bottom: 15px;
}

.movie-desc {
    font-size: 16px;
    line-height: 1.5;
    color: #e5e5e5;
    margin-bottom: 25px;
}

.banner-buttons .btn {
    padding: 12px 25px;
    font-size: 16px;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 15px;
    transition: 0.3s;
}

.btn-play {
    background-color: #e50914;
    color: white;
}

.btn-play:hover {
    background-color: #b80710;
}

.btn-info {
    background-color: rgba(109, 109, 110, 0.7);
    color: white;
}

.btn-info:hover {
    background-color: rgba(109, 109, 110, 0.9);
}

/* Asosiy kino qismi */
.main-content {
    padding: 40px 5%;
}

.section-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.section-title h2 {
    font-size: 24px;
    font-weight: 600;
}

.view-all {
    color: #e50914;
    text-decoration: none;
    font-size: 14px;
}

/* Kino kartalari grid tizimi */
.movie-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
}

.movie-card {
    background-color: #181818;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.movie-card:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.movie-card img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

.card-details {
    padding: 15px;
}

.card-details h3 {
    font-size: 16px;
    margin-bottom: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card-details span {
    font-size: 12px;
    color: #808080;
}
Xususiyatlari:Responsive Dizayn: Grid tizimi (auto-fit) yordamida kino kartalari har qanday ekran hajmiga (mobil telefon, planshet, kompyuter) moslashadi.Vizual effektlar: Kursorni kino kartalari ustiga olib borganda (hover) ular biroz kattalashadi va soya hosil qiladi.To'q rangli mavzu (Dark Mode): Kino platformalari uchun eng qulay va ko'zni charchatmaydigan ranglar sxemasidan foydalanilgan.`,
    quiz: {
      question: "Bosh sahifaning yuqori qismidagi asosiy kino ko'rsatiladigan qism nima deb ataladi?",
      options: ["Footer", "Banner / Hero section", "Sidebar", "Navbar"],
      correct: 1
    }
  },
  { 
    id: 44, 
    title: "44-dars: Kino qatorlari (Movie Rows) va horizontal scroll yaratish.", 
    free: false, 
    content: `Kino platformalarida (masalan, Netflix yoki HBO) keng qoʻllaniladigan kino qatorlari (Movie Rows) va horizontal (yotiq) scroll elementini yaratish uchun HTML va CSS ning oʻzi yetarli. Silliq siljish va chiroyli dizayn uchun asosan CSS Flexbox yoki CSS Grid hamda overflow-x: auto xossasidan foydalaniladi.Quyida sodda va zamonaviy koʻrinishdagi kino qatorini yaratish kodi keltirilgan:1. HTML KodiKinolari qatorini oʻrab turuvchi asosiy konteyner va uning ichida har bir kino kartochkasi joylashadi.html<div class="movie-section">
  <h2 class="movie-title">Trenddagi Kinolar</h2>
  
  <div class="movie-row">
    <!-- 1-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 1</div>
    </div>
    <!-- 2-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 2</div>
    </div>
    <!-- 3-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 3</div>
    </div>
    <!-- 4-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 4</div>
    </div>
    <!-- 5-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 5</div>
    </div>
    <!-- 6-Kino -->
    <div class="movie-card">
      <img src="https://placeholder.com" alt="Kino nomi">
      <div class="movie-info">Kino Nomi 6</div>
    </div>
  </div>
</div>
2. CSS KodiHorizontal scroll toʻgʻri ishlashi uchun display: flex va overflow-x: auto eng muhim xossalar hisoblanadi.css/* Umumiy fon (Netflix uslubida) */
body {
  background-color: #111;
  color: #fff;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 20px;
}

/* Kino bo'limi */
.movie-section {
  margin-bottom: 40px;
}

.movie-title {
  font-size: 22px;
  margin-left: 10px;
  margin-bottom: 15px;
}

/* Horizontal Scroll yaratuvchi asosiy qator */
.movie-row {
  display: flex;
  gap: 15px; /* Kartochkalar orasidagi masofa */
  overflow-x: auto; /* Yotiq o'q bo'ylab scroll yoqish */
  padding: 10px;
  scroll-behavior: smooth; /* Silliq siljish */
}

/* Windows/Chrome brauzerlarida scrollbarni yashirish yoki chiroyli qilish */
.movie-row::-webkit-scrollbar {
  height: 8px; /* Scrollbar balandligi */
}

.movie-row::-webkit-scrollbar-thumb {
  background-color: #333; /* Scrollbar rangi */
  border-radius: 4px;
}

.movie-row::-webkit-scrollbar-track {
  background: transparent;
}

/* Kino kartochkasi */
.movie-card {
  flex: 0 0 auto; /* Kartochkalar siqilib qolmasligi uchun juda muhim! */
  width: 180px;
  background-color: #222;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

/* Sichqoncha ustiga kelganda kattalashish effekti */
.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
}

/* Kino rasmi */
.movie-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

/* Kino haqida qisqacha matn */
.movie-info {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
}
Kodning asosiy sirlari (Kalit xossalar):overflow-x: auto; — Agar kinolar ekranga sigʻmay qolsa, avtomatik ravishda oʻngga siljitish (scroll) imkoniyatini beradi.flex: 0 0 auto; — Bu xossa movie-card ichida ishlatilgan. U kartochkalarga berilgan width: 180px oʻlchamini qatʼiy saqlab qoladi. Agar bu yozilmasa, Flexbox barcha kinolarni bitta ekranga siqib joylashtirishga harakat qiladi va scroll hosil boʻlmaydi.scroll-behavior: smooth; — Keyinchalik JavaScript orqali "Oʻngga" yoki "Chapga" tugmalari qoʻshilsa, scroll silliq harakatlanishini taʼminlaydi..`,
    quiz: {
      question: "Kinolar ro'yxatini yonma-yon (gorizontal) siljitish uchun CSS'da nima ishlatiladi?",
      options: ["overflow-x: auto / scroll", "display: block", "float: left", "position: static"],
      correct: 0
    }
  },
  { 
    id: 45, 
    title: "45-dars: Kino kartochkalari (Movie Cards) va hover effektlari.", 
    free: false, 
    content: `Kino kartochkalari (Movie Cards) uchun HTML va CSS yordamida chiroyli hamda zamonaviy hover (sichqoncha ko'rsatkichi olib kelingandagi) effektlaridan namuna.Bu dizaynda sichqoncha kartochka ustiga kelganda, kino rasmi biroz kattalashadi va pastdan kino haqidagi ma'lumotlar (nomi, reytingi, qisqacha tavsifi) ohista ko'tarilib chiqadi.1. HTML Kodi (index.html)html<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kino Kartochkasi Hover Effekti</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="movie-container">
        <!-- Kino Kartochkasi -->
        <div class="movie-card">
            <div class="movie-image">
                <!-- Bu yerga kino posteri linki qo'yiladi -->
                <img src="https://unsplash.com" alt="Kino posteri">
            </div>
            <div class="movie-info">
                <h2 class="movie-title">Interstellar</h2>
                <span class="movie-rating">⭐ 8.7</span>
                <p class="movie-description">Insoniyatning omon qolishi uchun fazogirlar jamoasi koinot bo'ylab vaqt va makon chegaralarini buzib sayohatga otlanishadi.</p>
                <button class="watch-btn">Tomosha qilish</button>
            </div>
        </div>
    </div>

</body>
</html>
2. CSS Kodi (style.css)css/* Umumiy sahifa sozlamalari */
body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #0f172a; /* To'q ko'k/qora fon */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.movie-container {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
}

/* Kino kartochkasi asosi */
.movie-card {
    position: relative;
    width: 300px;
    height: 450px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    cursor: pointer;
    background-color: #1e293b;
}

/* Kino rasmi */
.movie-image {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease;
}

.movie-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

/* Hover bo'lganda rasmning biroz kattalashishi va xiralashishi */
.movie-card:hover .movie-image {
    transform: scale(1.1);
    filter: brightness(0.4);
}

/* Kino ma'lumotlari bloki */
.movie-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 25px;
    box-sizing: border-box;
    color: #ffffff;
    /* Pastdan yuqoriga o'tuvchi qora gradient fon */
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9) 40%);
    
    /* Ma'lumotlarni boshlang'ich holatda pastga yashirish */
    transform: translateY(140px);
    transition: transform 0.5s ease;
}

/* Hover bo'lganda ma'lumotlarning yuqoriga ko'tarilishi */
.movie-card:hover .movie-info {
    transform: translateY(0);
}

/* Elementlar dizayni */
.movie-title {
    margin: 0 0 5px 0;
    font-size: 24px;
    font-weight: 700;
}

.movie-rating {
    display: inline-block;
    background-color: #eab308; /* Sariq rang */
    color: #000;
    padding: 3px 8px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 15px;
}

.movie-description {
    font-size: 14px;
    line-height: 1.5;
    color: #cbd5e1;
    margin-bottom: 20px;
    /* Tavsif juda uzun bo'lsa cheklash */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Tugma dizayni */
.watch-btn {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #ef4444; /* Qizil rang */
    color: white;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
}

.watch-btn:hover {
    background-color: #dc2626;
}
Effektning ishlash prinsipi:overflow: hidden: Kartochka ichidagi rasm kattalashganda yoki ma'lumotlar pastdan chiqqanda kartochka chegarasidan tashqariga chiqib ketmasligini ta'minlaydi.transform: translateY() va transition: Ma'lumotlar blokini boshida pastga surib qo'yadi va sichqoncha kelganda (:hover) silliq ko'tarilish effektini beradi.filter: brightness(): Rasm ustiga matn chiqqanda yaxshi o'qilishi uchun rasmni biroz qoraytiradi.`,
    quiz: {
      question: "Sichqoncha kursorini element ustiga olib borganda animatsiya hosil qilish uchun CSS'da nima ishlatiladi?",
      options: [":hover", ":active", ":focus", ":visited"],
      correct: 0
    }
  },
  { 
    id: 46, 
    title: "46-dars: Kino haqida batafsil ma'lumot va Trailer ko'rish (Modal oynalar).", 
    free: false, 
    content: `Kino haqida batafsil ma'lumot va tizer/treylerni modal oynada ko'rsatish — veb-dasturlashda juda ommabop interfeys yechimi hisoblanadi. Quyida HTML, CSS va JavaScript yordamida sodda, chiroyli va to'liq ishlaydigan namuna keltirilgan.Ushbu kodda kino kartochkasi bosilganda modal oyna ochiladi, uning ichida YouTube treyleri (<iframe> orqali) va film haqida ma'lumotlar ko'rinadi. Modal yopilganda esa video avtomatik ravishda to'xtaydi.1. HTML Kodhtml<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kino Ma'lumotlari va Treyler</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Kino kartochkasi -->
    <div class="movie-card" id="openModalBtn">
        <img src="https://unsplash.com" alt="Kino posteri" class="movie-poster">
        <div class="movie-info">
            <h3>Interstellar</h3>
            <p>Janr: Ilmiy-fantastika, Drama</p>
            <button class="view-btn">Batafsil & Treyler</button>
        </div>
    </div>

    <!-- Modal Oyna -->
    <div id="movieModal" class="modal">
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            
            <div class="modal-body">
                <!-- Video Treyler -->
                <div class="video-container">
                    <!-- YouTube video ID sini 'embed/' dan keyin qo'ying -->
                    <iframe id="trailerVideo" src="https://youtube.com" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                
                <!-- Batafsil ma'lumot -->
                <div class="movie-details">
                    <h2>Interstellar (2014)</h2>
                    <p class="rating">⭐ 8.7/10 (IMDb)</p>
                    <p class="description">
                        Film insoniyat kelajagi xavf ostida qolgan davr haqida hikoya qiladi. Bir guruh tadqiqotchilar insoniyat uchun yangi uy topish maqsadida koinot va vaqt chegaralarini buzib o'tib, qora tuynuk orqali sayohatga otlanishadi.
                    </p>
                    <ul>
                        <li><strong>Rejissyor:</strong> Christopher Nolan</li>
                        <li><strong>Bosh rollarda:</strong> Matthew McConaughey, Anne Hathaway, Jessica Chastain</li>
                        <li><strong>Davomiyligi:</strong> 169 daqiqa</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
2. CSS Kod (style.css)css/* Umumiy stillar */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #141414;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

/* Kino kartochkasi */
.movie-card {
    background-color: #1f1f1f;
    border-radius: 10px;
    overflow: hidden;
    width: 300px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: transform 0.3s;
}

.movie-card:hover {
    transform: scale(1.03);
}

.movie-poster {
    width: 100%;
    height: 400px;
    object-fit: cover;
}

.movie-info {
    padding: 15px;
    text-align: center;
}

.movie-info h3 {
    margin: 0 0 10px 0;
}

.movie-info p {
    color: #b3b3b3;
    font-size: 14px;
    margin-bottom: 15px;
}

.view-btn {
    background-color: #e50914;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
}

/* Modal asosi (orqa fon) */
.modal {
    display: none; 
    position: fixed; 
    z-index: 1000; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    background-color: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(5px);
    justify-content: center;
    align-items: center;
}

/* Modal ichki qismi */
.modal-content {
    background-color: #181818;
    width: 90%;
    max-width: 800px;
    border-radius: 12px;
    position: relative;
    box-shadow: 0 5px 25px rgba(0,0,0,0.7);
    animation: fadeIn 0.4s ease;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
}

/* Yopish tugmasi */
.close-btn {
    position: absolute;
    top: 15px;
    right: 20px;
    color: #aaa;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
    z-index: 1010;
    transition: color 0.2s;
}

.close-btn:hover {
    color: #fff;
}

/* Modal ichidagi kontent */
.modal-body {
    padding: 20px;
}

/* Video moslashuvchanligi (Responsive) */
.video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 format */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 20px;
}

.video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

/* Kino tafsilotlari */
.movie-details h2 {
    margin-top: 0;
    color: #fff;
}

.rating {
    color: #f5c518;
    font-weight: bold;
}

.description {
    line-height: 1.6;
    color: #d2d2d2;
}

.movie-details ul {
    list-style: none;
    padding: 0;
}

.movie-details ul li {
    margin-bottom: 8px;
    color: #b3b3b3;
}

.movie-details ul li strong {
    color: #fff;
}
3. JavaScript Kod (script.js)javascript// Elementlarni tanlab olish
const modal = document.getElementById("movieModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.querySelector(".close-btn");
const trailerVideo = document.getElementById("trailerVideo");

// YouTube videoning asl manzili (src) saqlab qo'yiladi
const videoSrc = trailerVideo.src;

// Kartochka bosilganda modalni ochish
openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    // Agar video ochilganda darhol qo'yilishini istasangiz, src ga autoplay qo'shish mumkin:
    trailerVideo.src = videoSrc + "?autoplay=1"; 
});

// Yopish tugmasi bosilganda modalni yopish
closeBtn.addEventListener("click", closeModal);

// Modal tashqarisi bosilganda ham yopish
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Modalni yopish va videoni to'xtatish funksiyasi
function closeModal() {
    modal.style.display = "none";
    // Videoni to'xtatish uchun src manzilini bo'shatib, qayta tiklaymiz
    trailerVideo.src = "";
    trailerVideo.src = videoSrc;
}
Bu kod qanday ishlaydi?Video to'xtashi (Muhim qism): Foydalanuvchi modal oynani yopganda, JavaScript iframe ichidagi src manzilini yangilaydi. Agar bu bajarilmasa, modal yopilgandan keyin ham orqa fonda video ovozi eshitilib turaveradi.Moslashuvchanlik (Responsive): CSS'dagi .video-container yordamida treyler har qanday ekran o'lchamiga (telefon, planshet, kompyuter) 16:9 nisbatda chiroyli moslashadi.Effektlar: Modal ochilganda biroz yuqoridan pastga silliq tushish effekti (@keyframes fadeIn) qo'shilgan..`,
    quiz: {
      question: "Foydalanuvchi kinoni bosganda ekstralar chiqadigan oyna qanday ataladi?",
      options: ["Modal window", "Alert box", "Tooltip", "Navbar"],
      correct: 0
    }
  },
  { 
    id: 47, 
    title: "47-dars: Qidiruv tizimi (Search functionality).", 
    free: false, 
    content: `Qidiruv tizimi (Search functionality) — bu foydalanuvchiga ma'lumotlar bazasi, veb-sayt yoki butun internet tarmoqlaridan kerakli ma'lumotlarni kalit so‘zlar (keywords) orqali topishga imkon beruvchi dasturiy tizimdir.Qidiruv tizimining ishlash printsipi va asosiy komponentlari quyidagilardan iborat:1. Ishlash bosqichlariKrouling (Crawling): Maxsus robotlar (spider/bot) internetdagi barcha sahifalarni kezib chiqadi va yangi ma'lumotlarni to‘playdi.Indekslash (Indexing): To‘plangan ma'lumotlar tahlil qilinadi va qidiruv tizimining ulkan ma'lumotlar bazasiga (indeksiga) saralab joylashtiriladi.Reytinglash (Ranking): Foydalanuvchi so‘rov kiritganda, tizim algoritmlari eng mos (relevant) va sifatli natijalarni aniqlab, ularni ketma-ketlikda tartiblaydi.2. Kalit funksiyalari va qulayliklariAvto-to‘ldirish (Autocomplete): Foydalanuvchi yozishni boshlashi bilan qidiruv so‘rovlarini taklif qilish.Filtrlash va saralash: Natijalarni sana, tur (rasm, video, yangilik), hajm yoki joylashuv bo‘yicha ajratish.Xatolarni tuzatish: Imlo xatolari bilan yozilgan so‘zlarni to‘g‘rilab, "Balki siz buni nazarda tutgandirsiz?" funksiyasini taklif etish.Semantik qidiruv: Faqatgina so‘zma-so‘z emas, balki foydalanuvchining maqsadini va gapning ma'nosini tushunib qidirish.3. TurlariGlobal qidiruv tizimlari: Butun internet bo‘ylab ishlaydi (masalan: Google, Bing, Yandex).Ichki qidiruv (Site Search): Faqatgina bitta muayyan veb-sayt yoki dastur ichidagi ma'lumotlarni qidiradi (masalan: Wikipedia yoki e-commerce saytlaridagi qidiruv paneli).Agar sizga biror sayt yoki dastur uchun qidiruv tizimini yaratish (kodlash), algoritmlari yoki tayyor texnologiyalar (masalan: Elasticsearch, Algolia) haqida ma'lumot kerak bo‘lsa, batafsilroq so‘rashingiz mumkin.`,
    quiz: {
      question: "Qidiruv maydoniga har bir harf yozilganda ishlaydigan hodisa qaysi?",
      options: ["onChange", "onSubmit", "onClick", "onLoad"],
      correct: 0
    }
  },
  { 
    id: 48, 
    title: "48-dars: Firebase Authentication (Ro'yxatdan o'tish va Kirish).", 
    free: false, 
    content: `Firebase Authentication — bu foydalanuvchilarni tizimga kiritish va roʻyxatdan oʻtkazish jarayonini oson va xavfsiz hal qilib beradigan tayyor bulutli xizmatdir. U orqali elektron pochta, telefon raqami yoki Google, Facebook, GitHub kabi ijtimoiy tarmoqlar yordamida kirishni sozlash mumkin.Quyida veb-saytlar (JavaScript/Web SDK v9+) uchun Email va Parol orqali roʻyxatdan oʻtish va tizimga kirishning eng sodda va tushunarli usuli keltirilgan.1. Firebase-ni sozlash (Initialization)Birinchi navbatda, Firebase loyihangizni sozlab olishingiz kerak.javascriptimport { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase konsolidan olingan konfiguratsiya
const firebaseConfig = {
  apiKey: "Sizning_API_Kalitingiz",
  authDomain: "://firebaseapp.com",
  projectId: "loyiha-nomi",
  storageBucket: "://appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:123456:web:abcde12345"
};

// Firebase-ni ishga tushirish
const app = initializeApp(firebaseConfig);

// Authentication xizmatini olish
export const auth = getAuth(app);
2. Roʻyxatdan oʻtish (Sign Up)Yangi foydalanuvchi yaratish uchun createUserWithEmailAndPassword funksiyasidan foydalaniladi.javascriptimport { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Yuqoridagi fayldan import qilinadi

const registerUser = (email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Ro'yxatdan muvaffaqiyatli o'tdi
      const user = userCredential.user;
      console.log("Muvaffaqiyatli ro'yxatdan o'tdingiz:", user.email);
    })
    .catch((error) => {
      // Xatolik yuz berganda
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Xatolik yuz berdi:", errorCode, errorMessage);
    });
};
3. Tizimga kirish (Sign In)Mavjud foydalanuvchini tizimga kiritish uchun signInWithEmailAndPassword funksiyasi ishlatiladi.javascriptimport { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";

const loginUser = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Tizimga muvaffaqiyatli kirdi
      const user = userCredential.user;
      console.log("Tizimga kirildi:", user.email);
    })
    .catch((error) => {
      // Xatolik yuz berganda
      console.error("Email yoki parol noto'g'ri:", error.message);
    });
};
4. Tizimdan chiqish (Sign Out)Foydalanuvchi seansini tugatish uchun signOut funksiyasi kifoya qiladi.javascriptimport { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const logoutUser = () => {
  signOut(auth)
    .then(() => {
      console.log("Tizimdan muvaffaqiyatli chiqildi.");
    })
    .catch((error) => {
      console.error("Chiqishda xatolik:", error.message);
    });
};
5. Foydalanuvchi holatini kuzatish (Auth State Listener)Foydalanuvchi tizimga kirganmi yoki chiqqanmi — buni real vaqtda bilib turish uchun onAuthStateChanged tinglovchisi (listener) qo'yiladi. Bu sahifa yangilanganda foydalanuvchi ichkaridaligini saqlab qolish uchun juda muhim.javascriptimport { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // Foydalanuvchi tizimga kirgan
    console.log("Hozirgi foydalanuvchi:", user.uid);
  } else {
    // Foydalanuvchi tizimga kirmagan (yoki chiqib ketgan)
    console.log("Foydalanuvchi tizimga kirmagan.");
  }
});
💡 Foydali maslahat:Firebase Authentication ishlashi uchun, eng birinchi navbatda, Firebase Console (brauzerda) ga kirib, Authentication bo'limidan Email/Password bilan kirish usulini (Sign-in method) yoqib qo'yishingiz (Enable) shart..`,
    quiz: {
      question: "Foydalanuvchilarni autentifikatsiya qilish uchun qaysi mashhur xizmatdan foydalanamiz?",
      options: ["Firebase Auth", "HTML Storage", "CSS Grid", "Vite Config"],
      correct: 0
    }
  },
  { 
    id: 49, 
    title: "49-dars: Sevimli kinolar ro'yxati (My List / Watchlist) va Firebase Firestore.", 
    free: false, 
    content: `Yaratmoqchi bo'lgan "Sevimli kinolar ro'yxati" (Watchlist) ilovasi uchun Firebase Firestore juda qulay va mos keladigan ma'lumotlar bazasidir. Firestore real vaqt rejimida (real-time) ishlaydi va ma'lumotlar strukturasini JSON ko'rinishida (hujjatlar va kolleksiyalar) saqlaydi.Quyida ushbu tizimni to'g'ri loyihalash uchun eng samarali arxitektura va kod namunalarini keltiraman.1. Ma'lumotlar bazasi strukturasi (Database Structure)Firestore-da foydalanuvchilar o'z ro'yxatlarini boshqarishi uchun Subcollections (Yordamchi kolleksiyalar) arxitekturasidan foydalanish tavsiya etiladi. Bu xavfsizlik qoidalarini (Security Rules) sozlashni osonlashtiradi.📁 users (Kolleksiya)📄 {userId} (Hujjat - Foydalanuvchi IDsi)📁 watchlist (Yordamchi kolleksiya)📄 {movieId} (Hujjat - Kino IDsi yoki Firestore auto-id)🆔 movieId: "550" (masalan, TMDB IDsi)🎬 title: "Fight Club"🖼️ posterPath: "/pB8BM7uW6DCm6G5BhCH967tnOIq.jpg"📅 addedAt: Firebase Timestamp (Qachon qo'shilgani)2. CRUD Amallari (Kod namunalari - JavaScript/Firebase v9+)Kinolarni ro'yxatga qo'shish, o'chirish va o'qib olish funksiyalari quyidagicha yoziladi:➕ Kinoni ro'yxatga qo'shish (Add to Watchlist)Agar kinoning o'z IDsi bo'lsa (masalan, TMDB API'dan kelayotgan ID), o'sha ID bilan hujjat yaratgan ma'qul. Bu keyinchalik "kino ro'yxatda bormi yoki yo'qmi" degan tekshirishni osonlashtiradi.javascriptimport { db } from "./firebaseConfig"; 
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

async function addToWatchlist(userId, movie) {
  try {
    // movie.id ni hujjat nomi sifatida ishlatamiz
    const movieRef = doc(db, "users", userId, "watchlist", String(movie.id));
    
    await setDoc(movieRef, {
      movieId: movie.id,
      title: movie.title,
      posterPath: movie.posterPath,
      addedAt: serverTimestamp() // Saralash uchun kerak bo'ladi
    });
    
    console.log("Kino muvaffaqiyatli qo'shildi!");
  } catch (error) {
    console.error("Xatolik yuz berdi:", error);
  }
}
➖ Kinoni ro'yxatdan o'chirish (Remove from Watchlist)Foydalanuvchi kinoni ro'yxatdan olib tashlamoqchi bo'lsa, hujjatni o'chiramiz.javascriptimport { doc, deleteDoc } from "firebase/firestore";

async function removeFromWatchlist(userId, movieId) {
  try {
    const movieRef = doc(db, "users", userId, "watchlist", String(movieId));
    await deleteDoc(movieRef);
    console.log("Kino ro'yxatdan o'chirildi.");
  } catch (error) {
    console.error("O'chirishda xatolik:", error);
  }
}
📋 Ro'yxatni olish va real vaqtda kuzatish (Get & Listen to Watchlist)Foydalanuvchi o'z ro'yxatini ko'rganda, oxirgi qo'shilgan kinolar yuqorida turishi uchun orderBy dan foydalanamiz. onSnapshot yordamida ro'yxat o'zgarganda (kino qo'shilsa yoki o'chirilsa) ekran avtomatik yangilanadi.javascriptimport { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function subscribeToWatchlist(userId, callback) {
  const watchlistRef = collection(db, "users", userId, "watchlist");
  const q = query(watchlistRef, orderBy("addedAt", "desc"));

  // Real-time tinglovchi
  return onSnapshot(q, (snapshot) => {
    const movies = [];
    snapshot.forEach((doc) => {
      movies.push({ id: doc.id, ...doc.data() });
    });
    callback(movies); // Ma'lumotlarni UI'ga uzatish
  });
}

// Ishlatish tartibi:
// const unsubscribe = subscribeToWatchlist(userId, (movies) => { setMoviesList(movies) });
// Sahifadan chiqib ketganda: unsubscribe();
3. Xavfsizlik qoidalari (Firestore Security Rules)Hech kim boshqa foydalanuvchining sevimli kinolar ro'yxatini ko'ra olmasligi yoki o'zgartira olmasligi kerak. Buning uchun Firebase konsolida quyidagi qoidani (Rules) o'rnating:javascriptrules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Faqat tizimga kirgan foydalanuvchi o'z hujjati va uning ichidagi watchlist'ni boshqara oladi
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
  }
}
💡 Foydali maslahatAgar siz kinolar haqidagi to'liq ma'lumotni (aktyorlar, janrlar, description) TMDB (The Movie Database) API kabi tashqi xizmatdan olayotgan bo'lsangiz, Firestore'da kinoning faqat id, title va posterPath kabi minimal ma'lumotlarini saqlang. Bu bazadagi joyni tejaydi va o'qish tezligini oshiradi. Batafsil ma'lumot sahifasiga o'tilganda esa API orqali qolgan ma'lumotlarni yuklab olishingiz mumkin.`,
    quiz: {
      question: "Ma'lumotlarni bulutli bazada (cloud database) saqlash uchun Firebase'ning qaysi xizmati qulay?",
      options: ["Cloud Firestore", "Firebase Hosting", "Google Analytics", "Firebase Storage"],
      correct: 0
    }
  },
  { 
    id: 50, 
    title: "50-dars: Netflix Clone loyihasini yakunlash va Deploy qilish.", 
    free: false, 
    content: `Netflix Clone loyihasini muvaffaqiyatli yakunlash va production muhitiga deploy qilish (internetga joylashtirish) uchun quyidagi ketma-ketlikni bajaring.1. Loyihani Yakunlash (Checklist)Deploy qilishdan oldin loyihangiz toʻliq tayyor ekanligini tekshiring:Ekologik oʻzgaruvchilar (Environment Variables): API kalitlari (TMDB_API_KEY, Firebase Config va h.k.) kod ichida qolib ketmaganiga ishonch hosil qiling. Ularni .env fayliga oʻtkazing.Xatoliklarni tekshirish: Konsoldagi (Console) barcha xatolar va ogohlantirishlarni (Warnings) tozalang.Responsive Dizayn: Sayt smartfon, planshet va kompyuter ekranlarida toʻgʻri koʻrinishini tekshiring.Build tekshiruvi: Mahalliy kompyuterda loyihani yigʻib koʻring:bashnpm run build  # yoki yarn build
2. Frontend qismini Deploy qilishAgar loyihangiz asosan Frontend (React, Vue, Next.js) va tayyor API (TMDB, Firebase) yordamida qurilgan boʻlsa, quyidagi bepul va ommabop platformalardan birini tanlang:Variant A: Vercel (Next.js va React uchun eng yaxshisi)GitHub-da yangi repozitoriy ochib, loyihangizni yuklang (git push).Vercel saytida roʻyxatdan oʻting va GitHub hisobingizni ulang."Add New" -> "Project" tugmasini bosing.Netflix Clone repozitoriyangizni tanlang.Environment Variables boʻlimiga .env faylingizdagi barcha kalitlarni (masalan, REACT_APP_TMDB_KEY) kiriting."Deploy" tugmasini bosing. 1-2 daqiqada saytingiz tayyor boʻladi.Variant B: NetlifyNetlify platformasiga kiring va GitHub orqali ulaning."Import from Git" tugmasini bosing va loyihani tanlang.Build settings qismida:Build command: npm run buildPublish directory: build (yoki dist) deb yozing.Site configuration -> Environment variables qismiga API kalitlarni qoʻshing."Deploy site" tugmasini bosing.3. Backend qismini Deploy qilish (Agar mavjud boʻlsa)Agar loyihangizda shaxsiy Node.js/Express, Python yoki boshqa backend va ma'lumotlar bazasi (MongoDB, PostgreSQL) boʻlsa, backendni alohida deploy qilishingiz kerak:Render.com (Tavsiya etiladi - Bepul va oson): GitHub repozitoriyangizni ulab, Web Service sifatida Node.js loyihangizni deploy qiling. .env oʻzgaruvchilarini kiritishni unutmang.Railway.app: Backend va ma'lumotlar bazasini bir joyda deploy qilish uchun juda qulay platforma.4. Deploydan keyingi muhim sozlamalarCORS xatoligi: Agar backend ishlatsangiz, backend sozlamalarida frontendning yangi URL manziliga ruxsat bering (cors({ origin: 'https://vercel.app' })).TMDB / API ruxsatnomalari: TMDB yoki boshqa tashqi API sozlamalarida, agar xavfsizlik uchun domen cheklovi boʻlsa, yangi domen manzilingizni ruxsat etilgan roʻyxatga qoʻshing..`,
    quiz: {
      question: "Tayyor React veb-ilovasini internetga chiqarish uchun qaysi platforma juda qulay?",
      options: ["Vercel", "Notion", "Google Sheets", "Paint"],
      correct: 0
    }
  },
  { 
    id: 61, 
    title: "61-dars: This kalit so'zi va uning konteksti.", 
    free: false, 
    content: `Dasturlashda (xususan, JavaScript, Java, C++, C# va boshqa tillarda) this kalit soʻzi joriy kod bajarilayotgan kontekstni (yaʼni obʼyektni) anglatadi. JavaScript-da this qayerda va qanday chaqirilayotganiga qarab dinamik ravishda oʻzgaradi.Quyida this kalit soʻzining asosiy kontekstlari va ularning qanday ishlashi tushuntirilgan:1. Global kontekst (Global Context)Agar this hech qanday funksiya yoki obʼyekt ichida boʻlmasa (ochiq maydonda boʻlsa), u global obʼyektga ishora qiladi.Brauzerlarda: window obʼyektini anglatadi.Node.js muhitida: global obʼyektini anglatadi.javascriptconsole.log(this); // Brauzerda [object Window] ni chiqaradi
2. Obʼyekt metodlari ichida (Object Method)this biror obʼyekt ichidagi metod (funksiya) tarkibida ishlatilsa, u shu metod tegishli boʻlgan obʼyektning oʻziga ishora qiladi.javascriptconst foydalanuvchi = {
  ism: "Ali",
  salomlashish: function() {
    console.log("Salom, mening ismim " + this.ism);
  }
};

foydalanuvchi.salomlashish(); // "Salom, mening ismim Ali" (this -> foydalanuvchi)
3. Oddiy funksiyalar ichida (Function Context)Oddiy funksiya ichida this ning qiymati kod qaysi rejimda ishlayotganiga bogʻliq:Strict mode boʻlmaganda (Sust rejim): this yana global obʼyektga (window) aylanadi.Strict mode yoqilganda ("use strict";): this qiymati undefined boʻladi (xavfsizlikni taʼminlash uchun).javascriptfunction test() {
  console.log(this);
}
test(); // Brauzerda: Window obʼyekti

function testStrict() {
  "use strict";
  console.log(this);
}
testStrict(); // undefined
4. Arrow funksiyalar ichida (Arrow Functions)Arrow (koʻrsatkichli) funksiyalarning oʻzining shaxsiy this konteksti boʻlmaydi. Ular this qiymatini oʻzini oʻrab turgan tashqi muhitdan (leksik kontekstdan) meros qilib oladi.javascriptconst odam = {
  ism: "Vali",
  gapirish: function() {
    // Bu yerda oʻq funksiyasi ishlatilgan
    const ichkiFunksiya = () => {
      console.log(this.ism); 
    };
    ichkiFunksiya();
  }
};

odam.gapirish(); // "Vali" (Arrow funksiya 'this'ni gapirish() metodidan oldi)
5. Konstruktorlar ichida (Constructor Context)Funksiya new kalit soʻzi yordamida chaqirilganda, u konstruktor vazifasini bajaradi. Bu holatda this yangi yaratilayotgan obʼyektga ishora qiladi.javascriptfunction Mashina(model) {
  this.model = model; // this yangi ochilayotgan obʼyektga bogʻlanadi
}

const myCar = new Mashina("Tesla");
console.log(myCar.model); // "Tesla"
6. Kontekstni majburiy oʻzgartirish (call, apply, bind)JavaScript-da this qiymatini funksiyaga majburiy tarzda yopishtirib (boshqa obʼyektga yoʻnaltirib) berish mumkin:call() va apply(): Funksiyani darhol chaqiradi va birinchi argument sifatida berilgan obʼyektni this oʻrniga qoʻyadi.bind(): Funksiyani darhol chaqirmaydi, balki this muayyan obʼyektga bogʻlangan yangi funksiya nusxasini qaytaradi.javascriptfunction tanishtir() {
  console.log("Men " + this.kasb);
}

const xodim = { kasb: "Dasturchi" };

tanishtir.call(xodim); // "Men Dasturchi".`,
    quiz: {
      question: "Arrow funksiyalarda `this` kalit so'zi nimaga bog'langan bo'ladi?",
      options: ["O'zining tashqi (lexical) ota konteksiga", "Har doim global window obyektiga", "Faqat chaqirgan elementga", "Doimo undefined ga"],
      correct: 0
    }
  },
  {
    id: 62,
    title: "62-dars: Call, Apply va Bind metodlari.",
    free: false,
    content: `JavaScript'da call, apply va bind metodlari funksiyaning kontekstini (this kalit so'zining qiymatini) boshqarish va o'zgartirish uchun ishlatiladi.
1. call() metodi: call() funksiyani darhol chaqiradi va unga this qiymatini hamda argumentlarni alohida-alohida (vergul bilan) uzatadi.
Sintaksis: funksiya.call(kontekst, arg1, arg2, ...)
Misol:
const person = {
  name: 'Anvar',
  sayHello: function(age, city) {
    console.log(\`Salom, mening otim \${this.name}, \${age} yoshdaman, \${city}danman.\`);
  }
};
const otherPerson = { name: 'Malika' };
person.sayHello.call(otherPerson, 25, 'Toshkent');

2. apply() metodi: apply ham funksiyani darhol chaqiradi, lekin argumentlarni alohida emas, massiv ko'rinishida qabul qiladi.
Sintaksis: funksiya.apply(kontekst, [arg1, arg2, ...])
Misol:
const numbers = [5, 10, 15, 20];
const maxNumber = Math.max.apply(null, numbers); 
console.log(maxNumber); // 20

3. bind() metodi: bind funksiyani darhol chaqirmaydi. Buning o'rniga u this bog'langan yangi funksiya qaytaradi, uni keyinroq istalgancha chaqirish mumkin.
Sintaksis: const yangiFunksiya = funksiya.bind(kontekst, arg1, arg2, ...)
Misol:
const car = {
  brand: 'Tesla',
  getBrand: function() {
    console.log(this.brand);
  }
};
const showCarBrand = car.getBrand.bind(car);
setTimeout(showCarBrand, 1000);`,
    quiz: {
        question: "Funksiyani darhol ishlatmasdan, uning `this` kontekstini bog'lab yangi funksiya qaytaruvchi metod qaysi?",
        options: ["bind()", "call()", "apply()", "push()"],
        correct: 0
    }
},
  { 
    id: 63, 
    title: "63-dars: Closure (Yopilish) tushunchasi va amaliy qo'llanilishi.", 
    free: false, 
    content: `JavaScriptda closure (yopilish) — bu funksiya va uning atrofidagi tashqi muhit (lexical environment) kombinatsiyasidir. Bu mexanizm ichki funksiyaga o'zi yaratilgan joydagi tashqi funksiya o'zgaruvchilarini (tashqi funksiya o'z ishini tugatgandan keyin ham) eslab qolish va ulardan foydalanish imkonini beradi.Soddaroq aytganda, closure tufayli ichki funksiya "tashqi dunyo"ni eslab qoladi.🛠️ Amaliy misol (Oddiy tushuntirish)Quyidagi kodda ichkiFunksiya o'zidan tepada turgan tashqiOzgariuvchini eslab qoladi:javascriptfunction tashqiFunksiya() {
    let tashqiOzgariuvchi = "Men tashqi o'zgaruvchiman!";

    function ichkiFunksiya() {
        console.log(tashqiOzgariuvchi); // Tashqi muhitdagi o'zgaruvchini ishlatmoqda
    }

    return ichkiFunksiya;
}

const meningFunksiyam = tashqiFunksiya(); 
// tashqiFunksiya bajarilib bo'ldi va uning xotirasi o'chishi kerak edi...

meningFunksiyam(); // Chiqish: "Men tashqi o'zgaruvchiman!"
tashqiFunksiya() chaqirilib bo'linganidan keyin ham, meningFunksiyam uni ichidagi o'zgaruvchini eslab qoldi. Mana shu hodisa closure deyiladi.🚀 Amaliy qo'llanilishiClosure dasturlashda juda ko'p muammolarni hal qiladi. Quyida eng ommabop amaliy misollar keltirilgan:1. Ma'lumotlarni yashirish (Data Privacy / Private variables)JavaScriptda obyekt yaratganda uning xususiyatlarini (properties) to'g'ridan-to'g'ri o'zgartirishdan himoya qilish uchun closure ishlatiladi. Bu OOP dagi encapsulation (inkapsulyatsiya) ga o'xshaydi.javascriptfunction hisoblagich() {
    let _son = 0; // Bu o'zgaruvchi tashqaridan ko'rinmaydi (Private)

    return {
        oshir: function() { _son++; },
        kamaytir: function() { _son--; },
        qiymat: function() { return _son; }
    };
}

const counter = hisoblagich();
counter.oshir();
counter.oshir();
console.log(counter.qiymat()); // Chiqish: 2
console.log(counter._son);      // Chiqish: undefined (tashqaridan kirib bo'lmaydi)
2. Funksiya fabrikalari (Function Factories)Bir xil qolipga ega, lekin turli vazifalarni bajaruvchi funksiyalarni dinamik ravishda yaratishda qo'l keladi.javascriptfunction ko'paytiruvchi(x) {
    return function(y) {
        return x * y;
    };
}

const ikkigaKo'paytir = ko'paytiruvchi(2);
const uchgaKo'paytir = ko'paytiruvchi(3);

console.log(ikkigaKo'paytir(5)); // Chiqish: 10
console.log(uchgaKo'paytir(5)); // Chiqish: 15
3. State (Holat) saqlash (Masalan, React-da)React kutubxonasidagi useState huki aynan closure arxitekturasiga asoslangan. U komponent qayta chizilganda (re-render) ham eski qiymatlarni saqlab qolish uchun closure-dan foydalanadi.4. Event Listener va Asinxron kodlarVeb-brayzerlarda hodisalarni tinglash (event listeners) yoki setTimeout ishlatganda context (muhit)ni yo'qotib qo'ymaslik uchun closure juda muhim.javascriptfunction tugmaniSozla(tugmaNomi) {
    let bosilishSoni = 0;

document.getElementById("myButton").addEventListener("click", function() {
    bosilishSoni++;
console.log('Tugma ' + bosilishSoni + ' marta bosildi.');
});
}
⚠️ Closure bilan ishlashda nimalarga e'tibor berish kerak?Xotira sarfi (Memory Leaks): Closure ichidagi o'zgaruvchilar xotiradan o'chirilmaydi (Garbage Collector ularga tegmaydi), chunki ichki funksiya ularga hali ham bog'langan bo'ladi. Agar keraksiz closure-lar juda ko'p bo'lsa, bu kompyuter xotirasini to'ldirib qo'yishi mumkin. Shuning uchun kerak bo'lmagan funksiyalarni null qilib qo'yish tavsiya etiladi..`,
    quiz: {
      question: "Closure nima imkoniyatni beradi?",
      options: ["Tashqi funksiya o'zgaruvchilariga ichki funksiyadan kirish va saqlab qolish", "Faqat massivlarni aylantirishni", "CSS stillarini o'zgartirishni", "DOM elementlarini o'chirishni"],
      correct: 0
    }
  },
  {
    id: 64,
    title: "64-dars: Prototypes va Prototypal Inheritance (Prototip merosxo'rligi).",
    free: false,
    content: `JavaScript-da Prototypes (Prototiplar) va Prototypal Inheritance (Prototipli merosxo'rlik) tillarning eng asosiy va muhim tushunchalaridan biridir. JavaScript ob'ektga yo'naltirilgan (OOP) til bo'lsa-da, u an'anaviy tillar (Java, C++) kabi klasslarga emas, prototiplarga asoslangan.

1. Prototype nima?
JavaScript-da deyarli barcha ob'ektlarning yashirin havolasi (reference) bo'ladi, bu havola [[Prototype]] deb nomlanadi. Prototip — bu shunchaki boshqa bir ob'ekt bo'lib, joriy ob'ekt undan xususiyat (property) va metodlarni nusxalab olmasdan, to'g'ridan-to'g'ri ishlatishi (meros olishi) mumkin.
Kodda [[Prototype]] ni ko'rish yoki o'zgartirish uchun __proto__ xususiyatidan yoki zamonaviy Object.getPrototypeOf() metodidan foydalaniladi.
Misol:
const hayvon = {
  yeydi: true,
  yuradi() {
    console.log("Hayvon yurmoqda...");
  }
};
const quyon = {
  sakraydi: true,
  __proto__: hayvon
};
console.log(quyon.sakraydi); // true
console.log(quyon.yeydi);    // true
quyon.yuradi();              // "Hayvon yurmoqda..."

2. Prototypal Inheritance (Prototipli merosxorlik) nima?
Qachonki biz ob'ektdan biror xususiyat yoki metodni qidirsak va u ob'ektning o'zida topilmasa, JavaScript avtomatik ravishda uni ob'ektning prototipidan qidirishni boshlaydi. Bu jarayon Prototype Chain (Prototiplar zanjiri) deyiladi.
Zanjirning eng yuqori nuqtasida Object.prototype turadi va uning prototipi null ga teng.

3. F.prototype (Konstruktor funksiyalar prototipi)
Yangi ob'ektlarni yaratish uchun konstruktor funksiyalardan foydalanganimizda, har bir funksiya avtomatik ravishda .prototype nomli xususiyatga ega bo'ladi.
Misol:
function Shaxs(ism) {
  this.ism = ism;
}
Shaxs.prototype.salomlashish = function() {
  console.log(\`Salom, mening ismim \${this.ism}\`);
};
const ali = new Shaxs("Ali");
ali.salomlashish(); // "Salom, mening ismim Ali"

4. Zamonaviy JavaScript: class kalit so'zi
ES6 (2015) versiyasida JavaScript-ga class tushunchasi kirib keldi. Ammo bu shunchaki "syntactic sugar" (shakarli sintaksis) hisoblanadi. Ya'ni, klasslar orqasida baribir o'sha eski prototiplar tizimi ishlaydi.`,
    quiz: {
        question: "JavaScript'da obyektlar orasida merosxo'rlik nima asosida qurilgan?",
        options: ["Prototype chain (Prototip zanjiri)", "Classes only", "Java interfaces", "Global scope"],
        correct: 0
    }
},
  { 
    id: 65, 
    title: "65-dars: ES6 Classes (Klasslar) va OOP tamoyillari.", 
    free: false, 
    content: `ES6 Klasslari (Classes) — JavaScript dasturlash tilida Obyektga Yo‘naltirilgan Dasturlash (OOP) tamoyillarini qulayroq va tushunarliroq shaklda yozish uchun kiritilgan maxsus sintaksis (shakar sintaksis) hisoblanadi. JavaScript aslida prototiplarga asoslangan til bo‘lsa-da, klasslar sintaksisi kodni boshqa tillarga (Java, C++) o‘xshatib yozish imkonini beradi.Quyida ES6 klasslari va OOPning 4 ta asosiy tamoyili JavaScript-da qanday amalga oshirilishi batafsil tushuntirilgan.Klass Yaratish va Undan Nusxa OlishKlass yaratish uchun class kalit so‘zidan, obyekt xususiyatlarini boshlang‘ich qiymat bilan to‘ldirish uchun esa constructor funksiyasidan foydalaniladi.javascriptclass Shaxs {
  // Konstruktor - obyekt yaratilganda birinchi ishlaydi
  constructor(ism, yosh) {
    this.ism = ism;
    this.yosh = yosh;
  }

  // Metod (Klass ichidagi funksiya)
salomlash() {
  console.log('Salom, mening ismim ' + this.ism + ' va yoshim ' + this.yosh + 'da.');
}
}

// Klassdan nusxa (obyekt) olish
const shaxs1 = new Shaxs("Ali", 25);
shaxs1.salomlash(); // "Salom, mening ismim Ali va yoshim 25da."
OOP Tamoyillari JavaScript-daObyektga yo‘naltirilgan dasturlashning 4 ta asosiy tamoyili mavjud:1. Encapsulation (Inkapsulyatsiya / Yopiqlik)Inkapsulyatsiya — obyektning ma'lumotlari (xususiyatlari) va ularni boshqaradigan metodlarni bir joyga jamlash hamda tashqi dunyodan yashirish (himoya qilish) demakdir.JavaScript-da haqiqiy private (maxfiy) xususiyatlar yaratish uchun # belgisidan foydalaniladi.javascriptclass BankHisobi {
  #balans; // Private xususiyat, tashqaridan to‘g‘ridan-to‘g‘ri o‘zgartirib bo‘lmaydi

  constructor(boshlangichBalans) {
    this.#balans = boshlangichBalans;
  }

  // Balansni ko‘rish uchun xavfsiz metod (Getter)
  getBalans() {
    return this.#balans;
  }

  // Balansni o‘zgartirish uchun xavfsiz metod (Setter)
  pulKirit(miqdor) {
    if (miqdor > 0) {
      this.#balans += miqdor;
    }
  }
}

const hisob = new BankHisobi(1000);
hisob.pulKirit(500);
console.log(hisob.getBalans()); // 1500
// console.log(hisob.#balans); // Xatolik beradi, chunki xususiyat maxfiy!
2. Inheritance (Voroslik / Merosxo‘rlik)Voroslik — mavjud klassning xususiyatlari va metodlarini yangi klassga o‘tkazish (meros qilib berish) imkoniyatidir. Buning uchun extends va super() kalit so‘zlaridan foydalaniladi.javascript// Ota klass (Parent class)
class Hayvon {
  constructor(nom) {
    this.nom = nom;
  }

  ovoz() {
    console.log('${this.nom} qandaydir ovoz chiqarmoqda.');
  }
}

// Bola klass (Child class)
class It extends Hayvon {
  constructor(nom, jins) {
    super(nom); // Ota klassning konstruktorini chaqiradi
    this.jins = jins;
  }

  vovilla() {
    console.log('${this.nom} vovillamoqda!');
  }
}

const meningItim = new It("Reks", "Avcharka");
meningItim.ovoz();    // "Reks qandaydir ovoz chiqarmoqda." (Otadan meros olingan)
meningItim.vovilla(); // "Reks vovillamoqda!" (O‘zining metodi)
3. Polymorphism (Polimorfizm / Ko‘p shakllilik)Polimorfizm — bir xil nomli metodning har xil klasslarda turlicha ishlashidir. Bola klass ota klassdan meros qolgan metodni o‘ziga moslab qayta yozishi (Method Overriding) polimorfizmga misol bo‘ladi.javascriptclass Shakl {
  chiz() {
    console.log("Shakl chizilmoqda...");
  }
}

class Doira extends Shakl {
  chiz() {
    console.log("Doira chizilmoqda ⭕");
  }
}

class Kvadrat extends Shakl {
  chiz() {
    console.log("Kvadrat chizilmoqda 🔲");
  }
}

const shakllar = [new Shakl(), new Doira(), new Kvadrat()];

// Har bir obyekt o‘zining chiz() metodini ishlatadi
shakllar.forEach(shakl => shakl.chiz());
// O'tkazilgan turlarga qarab konsolda:
// "Shakl chizilmoqda..."
// "Doira chizilmoqda ⭕"
// "Kvadrat chizilmoqda 🔲"
4. Abstraction (Abstraksiya / Mavhumlashtirish)Abstraksiya — murakkab ichki mexanizmlarni yashirib, foydalanuvchiga faqat eng zarur va sodda interfeysni taqdim etish tamoyilidir.Masalan, siz mashinani haydash uchun faqat rul va pedallardan foydalanasiz, lekin motor ichida nima bo‘layotganini bilishingiz shart emas.JavaScript-da rasmiy ravishda abstract class tushunchasi yo‘q, ammo uni mantiqiy jihatdan quyidagicha modellashtirish mumkin:javascriptclass MasofaviyBoshqaruv {
  constructor() {
    if (this.constructor === MasofaviyBoshqaruv) {
      throw new Error("Abstrakt klassdan to‘g‘ridan-to‘g‘ri nusxa olib bo‘lmaydi!");
    }
  }

  // Mavhum metod interfeysi
  yoqish() {
    throw new Error("Metod albatta bola klassda yozilishi shart!");
  }
}

class TelevizorBoshqaruvi extends MasofaviyBoshqaruv {
  yoqish() {
    console.log("Televizor ekranini yoqish, tok yuborish, dasturlarni yuklash...");
    console.log("Televizor yoqildi.");
  }
}

const pult = new TelevizorBoshqaruvi();
pult.yoqish(); // Foydalanuvchi faqat bitta tugmani bosdi (yoqish), ichki murakkablik yashirin qoldi.
XulosaKlass (Class): Obyekt yaratish uchun qolip yoki shablon.Inkapsulyatsiya: Ma'lumotlarni # yordamida yashirish va xavfsiz boshqarish.Voroslik: Kodni qayta ishlatish uchun extends orqali meros olish.Polimorfizm: Bir xil metodni turli klasslarda turlicha talqin qilish.Abstraksiya: Murakkablikni yashirib, faqat zarur interfeysni ko‘rsatish.`,
    quiz: {
      question: "Klassdan yangi obyekt (nusxa) olish uchun qaysi kalit so'z ishlatiladi?",
      options: ["new", "create", "this", "init"],
      correct: 0
    }
  },
  { 
    id: 66, 
    title: "66-dars: Asinxron JavaScript chuqur: Event Loop, Call Stack va Task Queue.", 
    free: false, 
    content: `Asinxron JavaScriptni chuqur tushunish uchun uning asosi boʻlgan Event Loop (Xodisalar sikli), Call Stack (Chaqiriqlar steki) va Task Queue (Vazifalar navbati) mexanizmlarini bilish shart.JavaScript bir vaqtning oʻzida faqat bitta amalni bajara oladigan (single-threaded) tildir. Ammo u qanday qilib serverdan ma'lumot yuklash yoki taymerlar kabi og'ir amallarni dasturni qotirib qoʻymasdan (non-blocking) bajara oladi? Bunga quyidagi komponentlarning birgalikdagi ishi sabab boʻladi.1. Call Stack (Chaqiriqlar steki)Call Stack — bu JavaScript dvigateli (masalan, V8) kodni ketma-ket bajarishi uchun ishlatadigan joy. Bu mexanizm LIFO (Last In, First Out — Oxirgi kirdi, birinchi chiqdi) prinsipi asosida ishlaydi.Funksiya chaqirilganda, u stekning eng yuqorisiga qoʻshiladi (Push).Funksiya bajarilib boʻlingach, u stekdan oʻchiriladi (Pop).Agar stekda biror bir og'ir amal (masalan, cheksiz sikl) bajarilayotgan boʻlsa, stek "band" boʻladi va brauzer boshqa hech qanday kodni bajara olmay qoladi (bloklanish).2. Web APIs (Brauzer imkoniyatlari)JavaScript brauzer ichida ishlaganda, unga brauzer tomonidan qoʻshimcha imkoniyatlar (Web APIs) taqdim etiladi. Bular JavaScriptning oʻziga tegishli emas, lekin asinxronlikni taʼminlashda juda muhim.setTimeout va setIntervalfetch yoki XMLHttpRequest (tarmoq soʻrovlari)DOM hodisalari (addEventListener)Asinxron kod duch kelganda, u Call Stack'dan darhol Web API muhitiga oʻtkazib yuboriladi va u yerda fonda (background) bajariladi.3. Task Queue (Vazifalar navbati)Web API muhitida asinxron amal tugagach (masalan, taymer vaqti tugasa yoki serverdan javob kelsa), unga biriktirilgan callback (qayta aloqa) funksiyasi toʻgʻridan-toʻgʻri stekka qaytmaydi. U Task Queue (yoki Callback Queue)ga navbatga turadi.Bu yerda FIFO (First In, First Out — Birinchi kirdi, birinchi chiqdi) prinsipi ishlaydi. Ammo bu navbat ham oʻz ichiga ikki qismga boʻlinadi:Macrotask Queue (Yirik vazifalar navbati): setTimeout, setInterval, setImmediate, I/O amallari.Microtask Queue (Kichik vazifalar navbati): Promise.then/catch/finally, async/await, MutationObserver. Microtask'lar har doim Macrotask'lardan birinchi bajariladi!4. Event Loop (Hodisalar sikli)Event Loop — bu Call Stack va Task Queue oʻrtasida doimiy aloqani taʼminlab turuvchi koʻrinmas dispetcher (sikl). Uning vazifasi juda oddiy:U doimiy ravishda Call Stack boʻsh yoki boʻsh emasligini tekshiradi.Agar Call Stack mutlaqo boʻsh boʻlsa, Event Loop avval Microtask Queue ichidagi barcha vazifalarni stekka oʻtkazadi va bajaradi.Microtask'lar tugagach, Macrotask Queue ichidagi birinchi navbatda turgan vazifani stekka olib chiqadi.Bu jarayon cheksiz davom etadi.Amaliy misol ustida tahlilQuyidagi kod qanday ketma-ketlikda chiqishini koʻrib chiqamiz:javascriptconsole.log("1. Start");

setTimeout(() => {
    console.log("2. SetTimeout (Macrotask)");
}, 0);

Promise.resolve().then(() => {
    console.log("3. Promise (Microtask)");
});

console.log("4. End");
Natija:text1. Start
4. End
3. Promise (Microtask)
2. SetTimeout (Macrotask)
Nima uchun bunday boʻldi? (Bosqichma-bosqich tahlil):console.log("1. Start") sinxron kod. Darhol Call Stack'ga kiradi, konsolga yozadi va stekdan chiqib ketadi.setTimeout chaqiriladi. U asinxron (Web API). Brauzer taymerni (0 millisekund) ishga tushiradi. Vaqt tugagach, uning callback funksiyasi Macrotask Queuega joylashadi.Promise.resolve().then() asinxron kod. Uning callback funksiyasi darhol Microtask Queuega joylashadi.console.log("4. End") sinxron kod. Call Stack'ga kiradi, konsolga yozadi va chiqib ketadi.Endi Call Stack boʻsh. Event Loop ishga tushadi.Event Loop birinchi boʻlib Microtask Queueni tekshiradi. U yerda Promise callback'i bor. Uni stekka chiqaradi. Konsolda 3. Promise (Microtask) chiqadi.Microtask tugadi. Endi Event Loop Macrotask Queueni tekshiradi. U yerda setTimeout callback'i bor. Uni stekka chiqaradi. Konsolda 2. SetTimeout (Macrotask) chiqadi.XulosaCall Stack sinxron kodlarni bajaradi (LIFO).Web APIs asinxron amallarni fonda boshqaradi.Microtask (Promise) har doim Macrotask (setTimeout)dan ustun turadi va birinchi bajariladi.Event Loop faqatgina Call Stack boʻshagandagina navbatdagi asinxron vazifalarni bajarishga ruxsat beradi..`,
    quiz: {
      question: "Microtask navbatidagi (masalan, Promise.then) vazifalar Task navbatidagilarga (setTimeout) nisbatan qanday bajariladi?",
      options: ["Oldinroq bajariladi", "Keyinroq bajariladi", "Parallel bajariladi", "Umuman bajarilmaydi"],
      correct: 0
    }
  },
  { 
    id: 67, 
    title: "67-dars: Error Handling (Xatoliklar bilan ishlash): try, catch, throw.", 
    free: false, 
    content: `Dasturlashda try, catch va throw — kutilmagan xatoliklarni (exception) boshqarish va dasturning to‘satdan to‘xtab qolishining oldini olish uchun ishlatiladigan asosiy mexanizmdir.Asosiy tushunchalartry — xatolik yuzaga kelishi mumkin bo‘lgan xavfli kod blokini sinovdan o‘tkazish uchun yoziladi.catch — try blokida xatolik chiqsa, uni ushlab olib, dasturni buzib yubormasdan boshqa muqobil amal bajarish yoki xatoni qayta ishlash uchun ishlatiladi.throw — dasturchi tomonidan ataylab (qo‘lda) xatolik yaratish va uni catch blokiga yuborish uchun xizmat qiladi.Kod namunasi (JavaScript misolida)javascriptfunction bolish(a, b) {
    try {
        if (b === 0) {
            // Ataylab xato tashlaymiz
            throw new Error("Nolga bo'lish mumkin emas!");
        }
        let natija = a / b;
        console.log("Natija:", natija);
    } catch (xato) {
        // Xatolikni ushlab, ekranga chiqaramiz
        console.log("Xatolik yuz berdi:", xato.message);
    } finally {
        // Xato bo'lsa ham, bo'lmasa ham ishlaydigan qism (ixtiyoriy)
        console.log("Amaliyot yakunlandi.");
    }
}

bolish(10, 2);  // Natija: 5, keyin Amaliyot yakunlandi.
bolish(5, 0);   // Xatolik yuz berdi: Nolga bo'lish mumkin emas!, keyin Amaliyot yakunlandi.
Foydali maslahatlarDasturni qutqarish: try...catch bo‘lmaganda, dastur b = 0 bo‘lganida butunlay to‘xtab qolar edi. Bu blok xatoni yashirincha hal qilish yoki foydalanuvchiga tushunarli xabar berish imkonini beradi.throw dan oqilona foydalaning: Faqat haqiqatan ham dastur davom etishi mantiqsiz bo‘lgan favqulodda vaziyatlardagina throw orqali maxsus xato obyektlarini (new Error()) yarating.`,
    quiz: {
      question: "Xatolik yuzaga kelishi mumkin bo'lgan kod qaysi blok ichiga yoziladi?",
      options: ["try", "catch", "finally", "error"],
      correct: 0
    }
  },
  { 
    id: 68, 
    title: "68-dars: Modular JavaScript (import / export, CommonJS vs ES Modules).", 
    free: false, 
    content: `JavaScript uses two primary module systems to split code into reusable pieces: CommonJS (CJS) and ECMAScript Modules (ES Modules / ESM). While CommonJS was the historical standard for Node.js, ES Modules is now the official, native standard for both modern browsers and Node.js.Direct ComparisonFeatureCommonJS (CJS)ES Modules (ESM)Syntaxrequire() and module.exportsimport and exportEnvironmentBuilt for Node.js (Server-side)Native to Browsers & Node.jsLoadingSynchronous (blocks execution)Asynchronous (non-blocking)ResolutionDynamic (Runtime)Static (Compile-time)Tree ShakingNot supportedSupported (removes unused code)Top-level awaitNot supportedFully supportedFile GlobalsIncludes __dirname, __filenameNo global variables (uses import.meta.url)1. CommonJS (CJS)CommonJS is the legacy system built into Node.js. Because it loads files synchronously, it is highly optimized for server environments where file access is near-instantaneous. However, this makes it poorly suited for web browsers where loading dependencies over a network would freeze the user interface.Syntax Example:javascript// math.js (Exporting)
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

module.exports = { add, subtract };

// app.js (Importing)
const { add } = require('./math.js');
console.log(add(5, 3)); 
Dynamic Behavior: Because require() is evaluated at runtime, you can wrap it inside conditional statements or loops:javascriptif (userLoggedIn) {
    const dashboard = require('./dashboard.js'); // Perfectly valid in CJS
}
2. ES Modules (ESM)ES Modules is the standardized module system introduced in ES6 (ES2015). It allows browsers to download different parts of a script concurrently without stalling performance.Syntax Example:javascript// math.js (Exporting)
export const add = (a, b) => a + b;
export default function multiply(a, b) { return a * b; } // Default export

// app.js (Importing)
import multiply, { add } from './math.js';
console.log(add(5, 3));
Static Analysis: Unlike CJS, standard import statements are static and must sit at the very top of your file. They cannot reside inside if statements or loops. This rigidity enables build tools to perform tree-shaking (dead-code elimination), automatically stripping away uncalled functions to shrink the final bundle size.Dynamic Imports: If you genuinely need conditional or lazy loading in ESM, use the import() function, which runs asynchronously and returns a promise:javascriptif (condition) {
    const module = await import('./dynamicFile.js');
}.`,
    quiz: {
      question: "Zamonaviy JavaScript modellarida fayldan tashqariga ma'lumot chiqarish uchun nima ishlatiladi?",
      options: ["export", "send", "include", "require"],
      correct: 0
    }
  },
  { 
    id: 69, 
    title: "69-dars: Regular Expressions (RegEx) va Validatsiyalar.", 
    free: false, 
    content: `Regular Expressions (RegEx) — matn ichidagi belgilar ketma-ketligini ma'lum qoidalar va shablonlar asosida qidirish, tekshirish, ajratish yoki almashtirish uchun ishlatiladigan maxsus ifoda tilidir.Validatsiya (Tekshiruv) esa foydalanuvchi kiritgan ma'lumotlarning (masalan, elektron pochta, telefon raqam yoki parol) belgilangan talablarga mos kelishini aniqlash jarayonidir. RegEx bu jarayonda eng asosiy va kuchli vositalardan biri hisoblanadi.RegEx nima uchun ishlatiladi?Formatni tekshirish (Validatsiya): Email, IP-manzil, sana yoki telefon raqamining to'g'ri yozilganini tekshirish.Matndan ma'lumot qidirish: Katta hajmli matnlar yoki log fayllaridan kerakli qismni topib olish.Matnni almashtirish va qismlarga bo'lish: Ortiqcha bo'sh joylarni tozalash yoki matndagi ayrim qismlarni boshqasiga o'zgartirish.Asosiy belgilar (Syntax)^ — Matnning boshlanishini bildiradi.$ — Matnning tugashini bildiradi.\d — Istalgan bitta raqam (0-9).\w — Lotin harfi, raqam yoki pastki chiziqcha (_).\s — Bo'sh joy (space) yoki yangi qator belgisi.. — Har qanday bitta belgi (yangi qatordan tashqari).+ — Oldindagi belgi 1 yoki undan ko'p marta takrorlanishi mumkin.* — Oldindagi belgi 0 yoki undan ko'p marta takrorlanishi mumkin.{n,m} — Takrorlanishlar soni (n tadan m tagacha).Amaliy misollar (Validatsiya shablonlari)Email validatsiyasi:regex^[\w.-]+@[\w.-]+\.\w+$
Telefon raqam (O'zbekiston formati uchun sodda misol):regex^\+998\d{9}$
(Izoh: +998 bilan boshlanib, ketidan aniq 9 ta raqam kelishini tekshiradi).Faqat harflardan iborat matn:regex^[A-Za-z]+$
Parol talablari (Kamida 8 ta belgi, harflar va raqamlar):regex^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
`,
    quiz: {
      question: "Matn ichidan muayyan qolipni qidirish uchun nima ishlatiladi?",
      options: ["Regular Expressions (RegEx)", "Array methods", "DOM selectors", "JSON parse"],
      correct: 0
    }
  },
  { 
    id: 70, 
    title: "70-dars: Advanced JS amaliyoti va imtihon.", 
    free: false, 
    content: `Ilg'or JavaScript bilimlarini mustahkamlash uchun murakkab algoritmik masalalar yechish va closure, async/future bo'yicha amaliy topshiriqlar.`,
    quiz: {
      question: "Murakkab JavaScript dasturlarini yozishda asosiy e'tibor nimaga qaratiladi?",
      options: ["Kod sifati, xotira va asinxron boshqaruvga", "Faqat ranglarga", "Faqat HTML teglariga", "Faqat CSS animatsiyalariga"],
      correct: 0
    }
  },
  {id: 71, 
    title: "71-dars: CSS Framework'larga kirish. Bootstrap va Tailwind taqqoslashi.", 
    free: false, 
    content: `CSS frameworklar — bu veb-sahifalarni tezroq va osonroq loyihalash uchun oldindan tayyorlab qo'yilgan kodlar to'plamidir. Ular tayyor dizayn elementlari (tugmalar, formalar, navigatsiya panellari) va grid (setka) tizimlarini taqdim etib, dasturchilarga har safar noldan CSS yozmaslik imkonini beradi.Bugungi kunda eng ommabop ikki CSS framework — bu Bootstrap va Tailwind CSS hisoblanadi. Quyida ularning asosiy farqlari va taqqoslamasini ko'rib chiqamiz.Bootstrap va Tailwind CSS farqlariXususiyatiBootstrapTailwind CSSYondashuvKomponentlarga asoslangan (Component-based)Utility-klaslarga asoslangan (Utility-first)Dizayn erkinligiCheklangan (Saytlar bir-biriga o'xshab qolishi mumkin)Cheksiz (Istalgancha noyob dizayn yaratish mumkin)O'rganish qiyinligiOson va tezBiroq vaqt talab qiladi (Klasslar juda ko'p)Fayl hajmiKattaroq (Ishlatilmagan kodlar ham yuklanadi)Kichikroq (Faqat ishlatilgan klasslargina saqlanadi)JavaScript bog'liqligiBor (Dinamik elementlar uchun o'z JS yoki Popper.js ishlatadi)Yo'q (Faqatgina sof CSS klasslardan iborat)Batafsil tavsif📦 BootstrapBootstrap — bu "tayyor qismlardan uy qurish"ga o'xshaydi. Unda btn, card, navbar kabi tayyor klasslar bor.Afzalliklari: Saytni juda tez yig'ish mumkin. Hujjatlari (documentation) mukammal va namunalari ko'p.Kamchiliklari: Agar tayyor dizaynni o'zgartirmoqchi bo'lsangiz, Bootstrap klasslarini qaytadan yozib chiqish (override) qiyinchilik tug'diradi. Ko'p saytlar bir xil andozada ko'rinib qoladi.🛠️ Tailwind CSSTailwind CSS — bu "legolardan xohlagan shaklni yasash"ga o'xshaydi. Unda tayyor tugma yoki karta yo'q, lekin ularni yasash uchun kichik yordamchi klasslar (utility classes) mavjud. Masalan, tugma yasash uchun HTML ichida bg-blue-500 text-white font-bold py-2 px-4 rounded kabi klasslar yoziladi.Afzalliklari: Hech qanday CSS fayl ochmasdan, faqat HTML ichida noyob va chiroyli dizaynlar yaratish mumkin. Ishlatilmagan CSS kodlarini avtomatik o'chirib tashlagani uchun juda yengil ishlaydi.Kamchiliklari: HTML kodi klasslar ko'pligidan juda uzun va chalkash bo'lib ketishi mumkin. Boshlanishida har bir klass nomini yodlab olish qiyinroq..`,
    quiz: {
      question: "Tailwind CSS qanday turdagi freymvork hisoblanadi?",
      options: ["Utility-first (Kichik sinflar yordamida)", "Faqat tayyor tugmalar to'plami", "Backend freymvorki", "JavaScript kutubxonasi"],
      correct: 0
    }
  },
  { 
    id: 72, 
    title: "72-dars: Bootstrap kutubxonasini ulash va Grid tizimi.", 
    free: false, 
    content: `Bootstrap kutubxonasini loyihaga ulash uchun uning CDN havolalarini HTML hujjatining <head> va <body> qismlariga qo'shish kifoya.Bootstrap'ni ulashRasmiy Bootstrap CSS va JS fayllarini quyidagicha ulasiz:CSS (head qismiga):html<link href="https://jsdelivr.net" rel="stylesheet">
JavaScript (body yopilishidan oldin):html<script src="https://jsdelivr.net"></script>
Grid (Panjara) tizimiGrid tizimi kontentni ekranda tekislash va joylashtirish uchun konteynerlar, qatorlar va ustunlardan foydalanadi. U Flexbox yordamida qurilgan bo'lib, to'liq moslashuvchan (responsive) hisoblanadi.Konteyner (.container yoki .container-fluid): Elementlarni o'rab turadi va markazlashtiradi.Qator (.row): Ustunlarni guruhlash uchun ishlatiladi.Ustun (.col): Asosiy kontent joylashadigan qism. Grid tizimi har bir qatorni 12 ta ustunga bo'ladi.Oddiy Grid namunasi:html<div class="container">
  <div class="row">
    <div class="col-sm-4 bg-light">Birinchi ustun (4 ta ustun kengligi)</div>
    <div class="col-sm-8 bg-warning">Ikkinchi ustun (8 ta ustun kengligi)</div>
  </div>
</div>
Asosiy qoidalar:Har doim ustunlarni (.col) qator (.row) ichiga yozing.Qatorlarni esa konteyner (.container) ichiga joylashtiring.col-sm, col-md, col-lg qo'shimchalari ekran o'lchamiga qarab (telefon, planshet, kompyuter) elementlar hajmini o'zgartirishga xizmat qiladi.`,
    quiz: {
      question: "Bootstrap grid tizimi nechta ustunga bo'lingan?",
      options: ["12 ta", "10 ta", "24 ta", "8 ta"],
      correct: 0
    }
  },
  { 
    id: 73, 
    title: "73-dars: Bootstrap komponentlari: Navbar, Cards va Buttons.", 
    free: false, 
    content: `Bootstrap - bu veb-sahifalarni tez va moslashuvchan (responsive) tarzda yaratish uchun eng ommabop tayyor komponentlar to'plamidir. Quyida uning eng ko'p ishlatiladigan uchta elementi: Navbar, Cards va Buttons haqida batafsil ma'lumot keltirilgan.1. Navbar (Navigatsiya paneli)Navbar — bu veb-saytning yuqori qismida joylashadigan, foydalanuvchini turli sahifalarga yo'naltiradigan menyu paneli. U telefon, planshet va kompyuter ekranlariga avtomatik moslashadi.navbar: Asosiy navigatsiya blokini bildiradi.navbar-expand-lg: Katta ekranlarda menyuni to'liq ochib ko'rsatadi, kichik ekranlarda (masalan, telefonda) esa "burger menyu" (uchta chiziq) ichiga yashiradi.navbar-light bg-light yoki navbar-dark bg-dark: Panelning foni va matn rangini moslashtiradi.html<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logotip</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link active" href="#">Bosh sahifa</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Xizmatlar</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Aloqa</a></li>
      </ul>
    </div>
  </div>
</nav>
2. Cards (Kartochkalar)Cards — bu ma'lumotlarni (rasm, sarlavha, matn va tugmalarni) bitta chiroyli ramka ichida guruhlash uchun ishlatiladigan moslashuvchan konteyner. U asosan yangiliklar, mahsulotlar ro'yxati yoki xizmatlarni ko'rsatishda juda qo'l keladi.card: Kartochkaning asosiy chegarasini belgilaydi.card-img-top: Kartochkaning tepa qismiga rasm joylashtiradi.card-body: Matnlar va tugmalar joylashadigan ichki qism.card-title va card-text: Sarlavha va asosiy matn uslublari.html<div class="card" style="width: 18rem;">
  <img src="rasm-url.jpg" class="card-img-top" alt="Mahsulot rasmi">
  <div class="card-body">
    <h5 class="card-title">Maxsus Mahsulot</h5>
    <p class="card-text">Bu yerda mahsulot yoki xizmat haqida qisqacha qiziqarli ma'lumot joylashadi.</p>
    <a href="#" class="btn btn-primary">Batafsil</a>
  </div>
</div>
3. Buttons (Tugmalar)Buttons — foydalanuvchi biron bir amalni bajarishi (formani jo'natish, sahifaga o'tish, yuklab olish) uchun ishlatiladigan tugmalardir. Bootstrap tayyor ranglar va o'lchamlar to'plamini taqdim etadi.btn: Tugmaning asosiy padding va shrift uslublarini beradi.btn-{rang}: Tugmaning rangini belgilaydi:btn-primary (Ko'k) — Asosiy harakatlar uchun.btn-secondary (Kulrang) — Yordamchi tugmalar uchun.btn-success (Yashil) — Muvaffaqiyatli amallar (masalan, Saqlash).btn-danger (Qizil) — Ogohlantirish yoki o'chirish amallari.btn-outline-*: Faqat chegarasi rangli, ichi bo'sh tugmalar (masalan, btn-outline-primary).btn-lg yoki btn-sm: Tugma o'lchamini kattalashtiradi yoki kichiklashtiradi.html<!-- Oddiy rangli tugmalar -->
<button type="button" class="btn btn-primary">Asosiy</button>
<button type="button" class="btn btn-success">Tasdiqlash</button>
<button type="button" class="btn btn-danger">O'chirish</button>

<!-- Ichki fonsiz (chegarali) tugma -->
<button type="button" class="btn btn-outline-secondary">Yordamchi</button>

<!-- Katta o'lchamli tugma -->
<button type="button" class="btn btn-primary btn-lg">Katta tugma</button>
Amaliyotda birgalikda qo'llanilishiUshbu komponentlarni birlashtirib, Navbar orqali sayt navigatsiyasini yaratish, sahifa markazida esa Cards yordamida mahsulotlarni joylashtirish va har bir mahsulot ichiga Buttons qo'shish orqali to'liq zamonaviy veb-sahifa interfeysini hosil qilish mumkin.        `,
    quiz: {
      question: "Bootstrap da tepki menyu yaratish uchun qaysi klass ishlatiladi?",
      options: ["navbar", "menu-bar", "header-nav", "top-menu"],
      correct: 0
    }
  },
  { 
    id: 74, 
    title: "74-dars: Tailwind CSS'ni React/Vite loyihasiga o'rnatish va sozlash.", 
    free: false, 
    content: `Tailwind CSS'ni React va Vite loyihasiga o'rnatish va sozlash uchun quyidagi ketma-ketlikni bajaring:1. Loyihani yaratish va unga o'tishAgar sizda hali loyiha bo'lmasa, terminalda quyidagi buyruqlarni ishga tushiring:bashnpm create vite@latest my-project -- --template react
cd my-project
2. Tailwind CSS'ni o'rnatishLoyiha ichiga kirgandan so'ng, Tailwind CSS va unga kerakli paketlarni o'rnating hamda sozlash fayllarini yarating:bashnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
Bu buyruq loyihangizda tailwind.config.js va postcss.config.js fayllarini yaratadi.3. Shablon yo'llarini sozlashtailwind.config.js faylini oching va content qismiga barcha shablon fayllaringizga bo'lgan yo'llarni qo'shing:javascript/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
4. Tailwind direktivalarini CSS'ga qo'shingsrc/index.css (yoki loyihangizdagi asosiy CSS) faylini oching va ichidagilarni o'chirib, o'rniga quyidagi Tailwind direktivalarini joylang:css@tailwind base;
@tailwind components;
@tailwind utilities;
5. Loyihani ishga tushirish va tekshirishEndi loyihani tekshirish uchun src/App.jsx faylini ochib, Tailwind klasslari ishlayotganini ko'rishingiz mumkin:jsxfunction App() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <h1 className="text-3xl font-bold text-blue-600 underline">
        Tailwind CSS ishlamoqda!
      </h1>
    </div>
  )
}

export default App
Terminalda loyihani ishga tushiring:bashnpm run dev
Brauzerda ko'rsatilgan manzilda (http://localhost:5173) loyihangiz chiroyli dizaynda ochiladi..`,
    quiz: {
      question: "Tailwind sozlamalarini o'zgartirish uchun asosiy fayl qaysi?",
      options: ["tailwind.config.js", "style.css", "vite.config.js", "index.html"],
      correct: 0
    }
  },
  { 
    id: 75, 
    title: "75-dars: Tailwind CSS Utility klasslari bilan ishlash (Spacing & Flexbox).", 
    free: false, 
    content: `Tailwind CSS-da Spacing (bo‘shliqlar) va Flexbox klasslari maket (layout) yaratishda eng ko‘p ishlatiladigan vositalardir. Quyida ushbu klasslarning ishlash tizimi va asosiy buyruqlari keltirilgan.1. Spacing (Bo‘shliqlar)Tailwind-da bo‘shliqlar o‘lchami maxsus raqamlar bilan belgilanadi. Masalan, 1 birlik 0.25rem (yoki 4px) ga teng. Undan tashqari px (1 piksel), 0.5, 1.5 kabi qiymatlar ham bor.Padding (Ichki bo‘shliq)p-{size} — To‘rtala tomondan ichki bo‘shliq beradi (Masalan: p-4 = 16px).px-{size} — Chap va o‘ng tomondan bo‘shliq (X o‘qi).py-{size} — Yuqori va pastdan bo‘shliq (Y o‘qi).pt-, pb-, pl-, pr- — Mos ravishda faqat yuqori (top), past (bottom), chap (left) va o‘ng (right) tomonlar uchun.Margin (Tashqi bo‘shliq)m-{size} — To‘rtala tomondan tashqi bo‘shliq beradi.mx-{size} — Chap va o‘ng tomondan tashqi bo‘shliq.my-{size} — Yuqori va pastdan tashqi bo‘shliq.mt-, mb-, ml-, mr- — Alohida tomonlar uchun tashqi bo‘shliq.mx-auto — Blok darajasidagi elementni gorizontal bo‘yicha markazlashtiradi.Gap (Elementlar orasidagi masofa)Flex yoki Grid konteynerlari ichidagi elementlar orasiga masofa qo‘yish uchun ishlatiladi:gap-{size} — Elementlar orasiga har tomondan bo‘shliq tashlaydi (Masalan: gap-4).gap-x-{size} / gap-y-{size} — Faqat gorizontal yoki vertikal qatorlar orasidagi masofa.2. Flexbox (Moslashuvchan joylashtirish)Elementlarni bir qatorga yoki ustunga tartib bilan joylashtirish uchun birinchi navbatda otasi bo‘lgan (parent) elementga flex klassi beriladi.Flex Direction (Yo‘nalish)flex-row — Elementlarni chapdan o‘ngga qator qilib joylashtiradi (standart holat).flex-col — Elementlarni yuqoridan pastga ustun shaklida joylashtiradi.flex-row-reverse / flex-col-reverse — Elementlar tartibini teskari qiladi.Justify Content (Asosiy o‘q bo‘yicha tekislash)flex-row bo‘lganda gorizontal, flex-col bo‘lganda vertikal tekislaydi:justify-start — Elementlarni boshiga taqaydi.justify-center — Elementlarni markazga yig‘adi.justify-end — Elementlarni oxiriga taqaydi.justify-between — Birinchi va oxirgi elementni chekkalarga surib, qolganlarini o‘rtada teng taqsimlaydi.justify-around — Har bir elementning atrofiga teng masofa ajratadi.Align Items (Yordamchi o‘q bo‘yicha tekislash)flex-row bo‘lganda vertikal, flex-col bo‘lganda gorizontal tekislaydi:items-start — Elementlarni tepaga/boshiga tekislaydi.items-center — Vertikal ravishda o‘rtaga tekislaydi.items-end — Pastga/oxiriga tekislaydi.items-stretch — Elementlar bo‘yini konteyner balandligi bo‘yicha cho‘zadi (standart holat).Flex Wrap (Keyingi qatorga o‘tish)flex-nowrap — Elementlar sig‘masa ham bir qatorda siqilib turaveradi.flex-wrap — Elementlar sig‘maganda avtomatik keyingi qatorga o‘tadi.🛠 Amaliy MisolQuyidagi kodda Flexbox va Spacing klasslari birgalikda ishlatilib, elementlar o‘rtaga olingan va ular orasiga masofa qo‘yilgan:html<div class="flex flex-row justify-between items-center p-6 bg-gray-100 rounded-lg">
  <!-- Chap tarafdagi logo yoki matn -->
  <div class="font-bold text-lg">MyLogo</div>
  
  <!-- O'ng tarafdagi menyu tugmalari, orasida gap-4 (16px) masofa bor -->
  <div class="flex gap-4">
    <button class="px-4 py-2 bg-blue-500 text-white rounded">Kirish</button>
    <button class="px-4 py-2 bg-green-500 text-white rounded">Ro'yxatdan o'tish</button>
  </div>
</div>`,
    quiz: {
      question: "Tailwind'da elementga ichki bo'shliq (padding) berish uchun qaysi prefiks ishlatiladi?",
      options: ["p-", "m-", "pad-", "space-"],
      correct: 0
    }
  },
  { 
    id: 76, 
    title: "76-dars: Tailwind Grid va Responsiv dizayn (sm, md, lg, xl).", 
    free: false, 
    content: `Tailwind CSS-da Grid va responsiv dizayn (sm, md, lg, xl) Mobile-first (avval mobil qurilmalar) tamoyiliga asoslangan bo‘lib, kichik ekranlar uchun prefikssiz yozilib, katta ekranlar uchun maxsus prefikslar qo‘shiladi.Breakpoint (O‘tish nuqtalari) o‘lchamlariTailwind standart ekran o‘lchamlari quyidagicha:sm (Small): 640px va undan katta ekranlar (planshetlar).md (Medium): 768px va undan katta ekranlar (kichik noutbuklar).lg (Large): 1024px va undan katta ekranlar (noutbuk va kompyuterlar).xl (Extra Large): 1280px va undan katta ekranlar (keng monitorlar).(Qo'shimcha) 2xl: 1536px va undan yuqori.Responsive Grid qanday ishlaydi?Grid konteynerini yaratish uchun grid klassi ishlatiladi. Ustunlar sonini belgilashda esa grid-cols-{n} klasslari qo‘shilib, ekranga qarab o‘zgartiriladi.Amaliy misol:html<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="bg-blue-200 p-4">1-element</div>
  <div class="bg-green-200 p-4">2-element</div>
  <div class="bg-yellow-200 p-4">3-element</div>
  <div class="bg-red-200 p-4">4-element</div>
</div>
Kod tahlili:grid-cols-1 — Mobil (eng kichik) ekranlarda elementlar 1 ta ustunda (ketma-ket pastga qarab) joylashadi.sm:grid-cols-2 — 640px dan boshlab (sm) ustunlar soni 2 taga o‘zgaradi.md:grid-cols-3 — 768px dan boshlab (md) 3 ta ustun bo‘ladi.lg:grid-cols-4 — 1024px va undan katta ekranlarda (lg) 4 ta ustunli ko‘rinishga o‘tadi.gap-4 — Elementlar orasidagi masofani (oraliqni) belgilaydi`,
    quiz: {
      question: "Tailwind'da o'rta o'lchamdagi ekranlar (tablet) uchun qaysi prefiks ishlatiladi?",
      options: ["md:", "sm:", "lg:", "xl:"],
      correct: 0
    }
  },
  { 
    id: 77, 
    title: "77-dars: Tailwind Pseudo-classes va Dark Mode joriy qilish.", 
    free: false, 
    content: `Tailwind CSS-da pseudo-class'lar (masalan, :hover, :focus, :active) va Dark Mode (tungi rejim) juda oson va qulay joriy qilinadi. Ularning har ikkisini ham klasslar oldiga maxsus prefikslar (modifier) qo'shish orqali boshqarishingiz mumkin.Quyida ularni qanday ishlatish bo'yicha qisqa va tushunarli qo'llanma keltirilgan.1. Pseudo-classes (Psevdo-sinflar)Tailwind-da elementning holatiga qarab dizaynni o'zgartirish uchun klass nomining oldiga holat nomi va ikki nuqta (:) qo'yiladi.hover: — Sichqoncha element ustiga kelganda.focus: — Element bosilganda yoki unga kursor tushganda (masalan, inputlar).active: — Element ustiga sichqoncha bosib turilganda.disabled: — Element faol bo'lmagan holatda.Misol:html<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 active:bg-blue-800 disabled:opacity-50">
  Tugma
</button>
2. Dark Mode (Tungi rejim) joriy qilishTailwind-da Dark Mode-ni yoqishning ikki xil usuli bor. Buning uchun elementga dark: prefiksidan foydalanib klass beriladi.A usuli: Tizim sozlamalariga qarab (Media query)Bu standart usul bo'lib, foydalanuvchining operatsion tizimi (Windows, macOS, iOS, Android) qaysi rejimda bo'lsa (Light yoki Dark), Tailwind avtomatik ravishda o'sha rejimga moslashadi. tailwind.config.js fayliga hech narsa qo'shish shart emas.html<div class="bg-white text-black dark:bg-gray-900 dark:text-white p-6">
  <h1 class="text-2xl">Salom Dunyo!</h1>
  <p class="text-gray-600 dark:text-gray-400">Bu matn tungi rejimda rangi o'zgaradi.</p>
</div>
B usuli: Qo'lda almashtirish (Selector / Class)Agar saytingizga foydalanuvchi o'zi yoqib-ochira oladigan maxsus tugma (tugatgich) qo'ymoqchi bo'lsangiz, Tailwind sozlamalariga o'zgartirish kiritishingiz kerak.tailwind.config.js faylini sozlang:javascript/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector', // yoki eski versiyalarda 'class'
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
HTML strukturasi:Endi dark: klasslari ishlashi uchun HTML-ning eng yuqori qismidagi elementga (odatda <html> yoki <body> tegiga) dark klassini qo'shishingiz yoki olib tashlashingiz kerak bo'ladi.html<!-- Tungi rejim faol bo'lganda (<html> tegida dark klassi bor) -->
<html class="dark">
<body class="bg-white text-black dark:bg-gray-950 dark:text-gray-100">

  <main class="p-8">
    <h1 class="text-3xl font-bold">Mavzuni boshqarish</h1>
    <!-- JavaScript orqali html tegidan 'dark' klassini o'chirish/qo'shish tugmasi -->
    <button id="theme-toggle" class="mt-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded">
      Rejimni o'zgartirish
    </button>
  </main>

</body>
</html>
Oddiy JavaScript (Tugma ishlashi uchun):javascriptconst toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  // html tegiga dark klassini qo'shadi yoki olib tashlaydi
  document.documentElement.classList.toggle('dark');
});
3. Pseudo-classes va Dark Mode-ni birgalikda ishlatishSiz ushbu prefikslarni bir-biriga ulab ham ishlatishingiz mumkin. Masalan, tungi rejimda tugmaning ustiga sichqoncha kelgandagi (hover) holatini o'zgartirmoqchisiz. Buning uchun dark:hover: ketma-ketligidan foydalaniladi:html<button class="bg-blue-500 hover:bg-blue-600 dark:bg-amber-500 dark:hover:bg-amber-600 text-white p-2 rounded">
  Moslanuvchan Tugma
</button>
Tushuntirish: Oddiy rejimda tugma ko'k bo'ladi, hover bo'lganda to'q ko'k bo'ladi. Tungi rejimda (dark) esa tugma to'q sariq (amber) rangga o'tadi va sichqoncha kelganda yanada to'qroq rangga kiradi.`,
    quiz: {
      question: "Tailwind'da qora rejim (dark mode) klasslari qanday prefiks bilan yoziladi?",
      options: ["dark:", "night:", "black:", "theme-dark:"],
      correct: 0
    }
  },
  { 
    id: 78, 
    title: "78-dars: Tailwind da animatsiyalar va o'tishlar (Transitions & Transforms).", 
    free: false, 
    content: `Tailwind CSS frameworkida elementlarga jonlilik kiritish uchun Transitions (o'tishlar), Transforms (shakl o'zgarishlari) va Animations (animatsiyalar) uchun tayyor klasslar mavjud.Quyida ularning har birini sodda va tushunarli misollar bilan ko'rib chiqamiz.1. O'tishlar (Transitions)Elementning holati o'zgarganda (masalan, sichqoncha ustiga kelganda — hover), o'zgarish silliq sodir bo'lishi uchun ishlatiladi.transition-{property}: Qaysi xossaga o'tish effekti berilishini belgilaydi (all, colors, opacity, transform).duration-{time}: O'tish qancha vaqt davom etishini belgilaydi (millisekundlarda: duration-300 = 0.3 soniya).ease-{curve}: O'tish tezligi trayektoriyasini belgilaydi (ease-in, ease-out, ease-in-out, ease-linear).delay-{time}: O'tish boshlanishidan oldingi kutish vaqti.Misol: Sichqoncha ustiga kelganda rangi silliq o'zgaradigan tugma.html<button class="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition-colors duration-500 ease-in-out">
  Tugma
</button>
2. Shakl o'zgarishlari (Transforms)Elementlarning o'lchami, burchagi yoki joylashuvini o'zgartirish uchun ishlatiladi. Tailwind CSS v3 va undan yuqori versiyalarida transform klassini alohida yozish shart emas, to'g'ridan-to'g'ri effekt klassini yozish kifoya.Scale (Kattalashtirish/Kichiklashtirish): scale-50, scale-100, scale-110 (foiz hisobida).Rotate (Burish): rotate-45, rotate-90, rotate-180 (gradus hisobida).Translate (Surish): translate-x-4, translate-y-10 (X yoki Y o'qi bo'yicha surish).Misol: Sichqoncha ustiga kelganda kattalashadigan va bir oz buriladigan karta.html<div class="w-64 h-32 bg-green-500 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:rotate-3">
  <p class="text-white p-4">Karta ustiga keling</p>
</div>
3. Animatsiyalar (Animations)Tailwind tarkibida doimiy harakatlanib turadigan 4 ta tayyor standart animatsiya klassi bor:animate-spin: Elementni o'z o'qi atrofida aylantiradi (Ko'pincha yuklanish — Loading belgilari uchun ishlatiladi).animate-ping: Elementni pulsatsiyalanuvchi (kattalashib yo'qoluvchi) qiladi (Bildirishnomalar uchun mos).animate-pulse: Elementni sekin o'chib-yonadigan qiladi (Skelet yuklanishlar — Skeleton screens uchun).animate-bounce: Elementni yuqoriga va pastga sakratadi.Misollar:html<!-- Yuklanish aylanasi -->
<svg class="animate-spin h-5 w-5 mr-3 bg-indigo-500" viewBox="0 0 24 24"></svg>

<!-- Yangi bildirishnoma nuqtasi -->
<span class="flex h-3 w-3 relative">
  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
  <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
</span>

<!-- Sakrayotgan tugma -->
<button class="animate-bounce bg-amber-500 text-white p-2 rounded">
  Pastga tushish
</button>
4. Maxsus (Custom) Animatsiyalar yaratishAgar Tailwind'ning tayyor animatsiyalari yetarli bo'lmasa, tailwind.config.js fayli orqali o'zingizning @keyframes va animatsiyalaringizni qo'shishingiz mumkin:javascript// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    },
  },
}
Ushbu animatsiyani loyihangizda animate-wiggle klassi orqali ishlatishingiz mumkin:html<div class="animate-wiggle bg-purple-500 text-white p-4 rounded">
  Men tebranib turaman!
</div>
`,
    quiz: {
      question: "Tailwind'da animatsiya yoki o'tish vaqtini silliqlash uchun nima yoziladi?",
      options: ["transition duration-*", "animate-slow", "speed-*", "delay-*"],
      correct: 0
    }
  },
  { 
    id: 79, 
    title: "79-dars: Bootstrap va Tailwind yordamida Landing Page yasash (Amaliyot).", 
    free: false, 
    content: `Bootstrap va Tailwind CSS frameworklaridan foydalanib Landing Page (bosh sahifa) yaratish bo'yicha amaliy qo'llanmaga xush kelibsiz! Biz bir xil tuzilishdagi sahifani har ikkala texnologiyada qanday yozilishini solishtiramiz.🧱 Landing Page Tuzilishi (Strukturasi)Bizning sahifamiz 4 ta asosiy qismdan iborat bo'ladi:Navbar (Navigatsiya paneli)Hero Section (Asosiy banner va matn)Features (Xizmatlar yoki imkoniyatlar)Footer (Sahifa otyog'i)🚀 1-Variant: Bootstrap CSS yordamidaBootstrap tayyor komponentlar va klasslarga asoslangan. Kod yozish tez va oson.html<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Landing Page</title>
    <!-- Bootstrap CSS CDN -->
    <link href="https://jsdelivr.net" rel="stylesheet">
</head>
<body>

    <!-- 1. NAVBAR -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand fw-bold" href="#">BrendNom</a>
            <button class="navbar-toggler" type="text/responsive" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link active" href="#">Bosh sahifa</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Xizmatlar</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Aloqa</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- 2. HERO SECTION -->
    <header class="bg-light py-5 text-center">
        <div class="container py-5">
            <h1 class="display-4 fw-bold text-dark">Kelajak Texnologiyalari Biz Bilan</h1>
            <p class="lead text-muted text-center mx-auto" style="max-width: 600px;">
                Biznesingizni raqamlashtirish va zamonaviy yechimlarni joriy qilish uchun eng to'g'ri tanlov.
            </p>
            <div class="mt-4">
                <a href="#" class="btn btn-primary btn-lg me-2">Boshlash</a>
                <a href="#" class="btn btn-outline-secondary btn-lg">Batafsil</a>
            </div>
        </div>
    </header>

    <!-- 3. FEATURES SECTION -->
    <section class="py-5">
        <div class="container">
            <div class="row text-center g-4">
                <div class="col-md-4">
                    <div class="card h-100 p-4 shadow-sm border-0">
                        <h3 class="h5 fw-bold mb-3">Tezkorlik</h3>
                        <p class="text-muted">Bizning tizimlar maksimal darajada tez va xatolarsiz ishlaydi.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 p-4 shadow-sm border-0">
                        <h3 class="h5 fw-bold mb-3">Xavfsizlik</h3>
                        <p class="text-muted">Ma'lumotlaringiz yuqori darajadagi xavfsizlik tizimi bilan himoyalangan.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 p-4 shadow-sm border-0">
                        <h3 class="h5 fw-bold mb-3">24/7 Qo'llab-quvvatlash</h3>
                        <p class="text-muted">Mutaxassislarimiz istalgan vaqtda sizga yordam berishga tayyor.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 4. FOOTER -->
    <footer class="bg-dark text-white text-center py-4">
        <div class="container">
            <p class="mb-0">&copy; 2026 BrendNom. Barcha huquqlar himoyalangan.</p>
        </div>
    </footer>

    <!-- Bootstrap JS JS CDN -->
    <script src="https://jsdelivr.net"></script>
</body>
</html>
🎨 2-Variant: Tailwind CSS yordamidaTailwind CSS utility-first (yordamchi klasslar) uslubida ishlaydi. Unda tayyor card yoki navbar degan klasslar yo'q, hamma dizaynni padding, margin, rang klasslari orqali o'zimiz quramiz.html<!DOCTYPE html>
<html lang="uz">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Landing Page</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://tailwindcss.com"></script>
</head>
<body class="bg-gray-50 text-gray-800">

    <!-- 1. NAVBAR -->
    <nav class="bg-gray-900 text-white sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="#" class="text-xl font-bold tracking-wider">BrendNom</a>
            <div class="hidden md:flex space-x-6">
                <a href="#" class="text-blue-400 hover:text-white transition">Bosh sahifa</a>
                <a href="#" class="text-gray-300 hover:text-white transition">Xizmatlar</a>
                <a href="#" class="text-gray-300 hover:text-white transition">Aloqa</a>
            </div>
        </div>
    </nav>

    <!-- 2. HERO SECTION -->
    <header class="bg-white py-20 text-center px-4 border-b border-gray-100">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-none mb-6">
                Kelajak Texnologiyalari Biz Bilan
            </h1>
            <p class="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                Biznesingizni raqamlashtirish va zamonaviy yechimlarni joriy qilish uchun eng to'g'ri tanlov.
            </p>
            <div class="space-x-3">
                <a href="#" class="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition inline-block">
                    Boshlash
                </a>
                <a href="#" class="border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium px-6 py-3 rounded-lg transition inline-block">
                    Batafsil
                </a>
            </div>
        </div>
    </header>

    <!-- 3. FEATURES SECTION -->
    <section class="py-16 max-w-6xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-gray-950 mb-3">Tezkorlik</h3>
                <p class="text-gray-600">Bizning tizimlar maksimal darajada tez va xatolarsiz ishlaydi.</p>
            </div>
            <!-- Card 2 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-gray-950 mb-3">Xavfsizlik</h3>
                <p class="text-gray-600">Ma'lumotlaringiz yuqori darajadagi xavfsizlik tizimi bilan himoyalangan.</p>
            </div>
            <!-- Card 3 -->
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 class="text-lg font-bold text-gray-950 mb-3">24/7 Qo'llab-quvvatlash</h3>
                <p class="text-gray-600">Mutaxassislarimiz istalgan vaqtda sizga yordam berishga tayyor.</p>
            </div>
        </div>
    </section>

    <!-- 4. FOOTER -->
    <footer class="bg-gray-900 text-gray-400 text-center py-6 border-t border-gray-800">
        <p class="text-sm">&copy; 2026 BrendNom. Barcha huquqlar himoyalangan.</p>
    </footer>

</body>
</html>
📊 Farqi va SolishtirishXususiyatBootstrap (.btn, .card)Tailwind CSS (bg-blue-600, p-6)YondashuvKomponentli (Tayyor bloklar)Utility-first (Atomik klasslar)Dizayn erkinligiStandart ko'rinish (Moslash qiyinroq)Cheksiz erkinlik (Xohlagan dizaynni chizish mumkin)Fayl hajmiKattaroq (Ishlatilmagan CSS ham yuklanadi)Kichikroq (Faqat ishlatilgan klasslar qoladi)TezlikTayyor klasslar bilan juda tez bitadiKlasslar ko'pligi uchun boshida ko'proq kod yoziladi🛠 Amaliyotni qanday bajarish kerak?Kompyuteringizda bootstrap.html va tailwind.html degan ikkita fayl oching.Yuqoridagi kodlarni alohida joylashtiring.Brauzerda ochib, klasslarni o'zgartirib ko'ring (masalan, bg-dark ni bg-primary ga yoki bg-blue-600 ni bg-red-500 ga).`,
    quiz: {
      question: "Landing page yaratishda eng birinchi qism nima deb ataladi?",
      options: ["Hero section", "Footer section", "Database part", "Config file"],
      correct: 0
    }
  },
  { 
    id: 80, 
    title: "80-dars: CSS freymvorklarini optimizatsiya qilish va production.", 
    free: false, 
    content: `CSS freymvorklarini (Bootstrap, Tailwind CSS, Bulma va h.k.) optimizatsiya qilish veb-saytning yuklanish tezligini oshirish va ortiqcha kodlardan xalos bo'lish uchun juda muhimdir. Freymvorklar odatda loyihada ishlatilmaydigan yuzlab tayyor klasslarni o'z ichiga oladi, bu esa fayl hajmini kattalashtirib yuboradi.Production (jonli sayt) muhitiga tayyorlashda CSS freymvorklarini optimallashtirishning eng samarali usullari quyidagilardir:1. Ishlatilmagan CSS kodlarini o'chirish (Purging)Bu usul loyihangizdagi HTML, JavaScript yoki komponent fayllarini skanerlaydi va faqat haqiqatda ishlatilgan klasslarni qoldirib, qolgan barcha ortiqcha kodlarni o'chirib tashlaydi.Tailwind CSS: O'zining ichki mexanizmiga ega. tailwind.config.js faylidagi content qismida loyihangiz fayllari yo'lini to'g'ri ko'rsatishingiz kifoya. Tailwind production build vaqtida avtomatik ravishda faqat ishlatilgan klasslarni qoldiradi.Bootstrap va boshqalar: PurgeCSS vositasidan foydalanish tavsiya etiladi. Uni Webpack, Vite, Gulp yoki PostCSS tizimlariga integratsiya qilish mumkin.2. Kodni siqish (Minification)CSS faylidagi barcha ortiqcha bo'shliqlar (spaces), qator ko'chirishlar (newlines) va sharhlarni (comments) o'chirib tashlash orqali fayl hajmini sezilarli darajada kamaytirish mumkin.Vite, Webpack yoki Parcel kabi zamonaviy assemblerlar (bundlers) production rejimida (npm run build) CSS-ni avtomatik ravishda minifikatsiya qiladi.Agar oddiy loyiha bo'lsa, cssnano yoki CleanCSS kabi vositalardan foydalanish mumkin.3. CSS-ni komponentlarga bo'lish va faqat keraklisini yuklash (Code Splitting)Butun sayt uchun bitta katta CSS faylini yuklash o'rniga, kodni sahifalar yoki komponentlar bo'yicha bo'laklarga bo'lish lozim.Masalan, saytning "Aloqa" (Contact) sahifasidagi CSS faqat shu sahifa ochilganda yuklanishi kerak.React, Vue yoki Next.js kabi freymvorklarda CSS Modules yoki Styled Components-dan foydalanish bu jarayonni avtomatik boshqaradi.4. Faqat kerakli modullarni import qilish (SASS/SCSS orqali)Bootstrap yoki Bulma kabi freymvorklarni to'liqligicha yuklamasdan, faqat sizga kerakli qismlarini (masalan, faqat grid tizimi va tugmalarni) SASS orqali loyihaga qo'shishingiz mumkin.scss// Bootstrap misolida: Butun freymvork o'rniga faqat keraklilari
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";
@import "bootstrap/scss/mixins";
@import "bootstrap/scss/grid"; // Faqat grid kerak bo'lsa
@import "bootstrap/scss/buttons"; // Faqat tugmalar kerak bo'lsa
5. Production uchun server sozlamalari (Gzip / Brotli siqish)CSS fayli foydalanuvchi brauzeriga yetib borgancha, server darajasida ham siqilishi kerak.Serveringizda (Nginx, Apache) Gzip yoki undan ham samaraliroq bo'lgan Brotli siqish algoritmini yoqing. Bu CSS fayli hajmini yana 60-80% gacha kamaytiradi.Kesh hisobga olish (Caching): CSS fayllari nomiga xesh (masalan, main.a8f9b2.css) qo'shish orqali brauzer keshidan samarali foydalaning. Sayt yangilanganda xesh o'zgaradi va brauzer yangi faylni yuklab oladi.📊 Natija qanday bo'ladi?HolatBootstrap (Odatdagi hajm)Tailwind CSS (Odatdagi hajm)Optimizatsiyasiz~150-200 KB~3-4 MB (Barcha klasslar bilan)Purge va Minifikatsiyadan keyin~15-30 KB~5-10 KBXulosa: Productionga chiqishdan oldin har doim kodni Purge qiling (ishlatilmaganini o'chiring), Minify qiling (siqing) va serverda Gzip/Brotli yoqilganligiga ishonch hosil qiling. Zamonaviy vositalar (Vite, Next.js, Nuxt.js) bu jarayonlarning ko'pini o'zi avtomatik tarzda bajaradi.`,
    quiz: {
      question: "Tailwind CSS production rejimida nima qiladi?",
      options: ["Faqat ishlatilgan klasslarni qoldirib, hajmini kichraytiradi", "Fayl hajmini 10 barobar oshiradi", "CSS ni o'chirib tashlaydi", "Faqat qora rangni qoldiradi"],
      correct: 0
    }
  },
  { 
    id: 81, 
    title: "81-dars: SEO nima? Qidiruv tizimlari qanday ishlaydi?", 
    free: false, 
    content: `SEO (Search Engine Optimization) — bu veb-saytni Vikipediya kabi manbalarda ta'riflanganidek, Google va Yandex kabi qidiruv tizimlarida yuqori o'rinlarga chiqarish uchun qilinadigan harakatlar majmui. Maqsad — foydalanuvchi biror narsa qidirganda, saytingiz birinchilardan bo'lib ko'rinishini ta'minlash.Qidiruv tizimlari qanday ishlaydi?Qidiruv tizimlari (masalan, Google) ish jarayoni uchta asosiy bosqichdan iborat:Skanerlash (Crawling):Maxsus dasturlar yoki botlar (robotlar) internetni tinimsiz kezib chiqadi. Ular yangi va o'zgargan sahifalarni topish uchun havolalarga ergashadi.Indekslash (Indexing):Topilgan sahifalardagi ma'lumotlar o'qib chiqiladi. So'zlar, rasmlar va videolar tahlil qilinib, ularning nusxasi katta ma'lumotlar bazasiga (indeksga) saqlanadi.Saralash va ko'rsatish (Ranking):Foydalanuvchi qidiruvga so'z yozganda, tizim o'z bazasidan eng mos va foydali sahifalarni topadi. Ularni sifatiga qarab eng yaxshidan boshlab birinchi o'rinlarga chiqarib beradi.SEO nima uchun kerak?Bepul trafik: Reklama uchun pul to'lamasdan doimiy real mijozlarni jalb qilish imkonini beradi.Ishonch: Odamlar qidiruv natijalarida birinchi chiqqan saytlarga ko'proq ishonadi.Uzoq muddatli natija: SEO to'g'ri bajarilsa, uning foydasi uzoq vaqt davom etadi.`,
    quiz: {
      question: "SEO qisqartmasi nimani anglatadi?",
      options: ["Search Engine Optimization", "Simple Electronic Operation", "Style Editing Online", "System Error Organization"],
      correct: 0
    }
  },
  { 
    id: 82, 
    title: "82-dars: Keyword Research (Kalit so'zlarni tanlash va tahlil qilish).", 
    free: false, 
    content: `Kalit so'zlarni tanlash va tahlil qilish (Keyword Research) — bu foydalanuvchilar qidiruv tizimlariga yozadigan so'z va iboralarni aniqlash hamda o'rganish jarayonidir. Bu jarayon veb-saytga ko'proq mijoz jalb qilishga yordam beradi.Asosiy bosqichlarAuditoriyani o'rganish: Mijozlaringiz nimani qidirayotganini tushuning. Ulardan "Bizni qanday topdingiz?" deb so'rang.Mavzu va so'rovlarni aniqlash: Saytingiz yoki biznesingiz yo'nalishiga mos keladigan asosiy so'zlarni yozib chiqing.Uzun dumli so'zlar (Long-tail): Aniqroq va uzunroq iboralardan foydalaning (masalan, "Toshkentda arzon smartfon sotib olish"). Bunday so'zlar raqobat kamroq bo'lgan joyda aniq mijozlarni olib keladi.Raqobatchilarni tahlil qilish: Raqiblaringiz qaysi kalit so'zlar bo'yicha yuqori o'rinda turganini ko'rib chiqing..`,
    quiz: {
      question: "Foydalanuvchilar Google'da ma'lumot izlash uchun yozadigan so'zlar qanday ataladi?",
      options: ["Keywords (Kalit so'zlar)", "CSS styles", "DOM elements", "React hooks"],
      correct: 0
    }
  },
  { 
    id: 83, 
    title: "83-dars: On-Page SEO: Meta tags, Title va Description optimizatsiyasi.", 
    free: false, 
    content: `On-Page SEO jarayonida Title (sahifa sarlavhasi) va Meta Description (qisqacha tavsif) qidiruv tizimlari va foydalanuvchilar uchun veb-sahifani to'g'ri tushuntirishda eng muhim elementlar hisoblanadi.Ushbu metateglarni optimizatsiya qilish bo'yicha asosiy qoidalar va tavsiyalar:1. Title (Sahifa Sarlavhasi) OptimizatsiyasiTitle — qidiruv natijalarida (SERP) ko'rinadigan qalin harfli bosiladigan havola bo'lib, sahifaning asosiy mavzusini bildiradi.Uzunligi: 50–60 ta belgidan oshmasligi kerak. Aks holda, qidiruv tizimlari uni oxirida qirqib tashlaydi.Asosiy kalit so'z: Eng muhim va asosiy kalit so'zni sarlavhaning bosh qismiga (chap tarafga) qo'ying.Unikal bo'lishi: Saytingizdagi har bir sahifa o'ziga xos va takrorlanmas Title'ga ega bo'lishi shart.Brend nomi: Sarlavha oxiriga brend nomini qo'shish tavsiya etiladi (masalan: Kalit so'z | BrendNomi).Ommiy xato: Bir sahifada ikkita yoki undan ortiq <title> tegini ishlatmang.2. Meta Description (Qisqacha Tavsif) OptimizatsiyasiDescription — sarlavha ostida ko'rinadigan va sahifa mazmunini qisqacha ochib beruvchi matn. Garchi u to'g'ridan-to'g'ri reyting signali bo'lmasa-da, foydalanuvchining ustiga bosish ehtimolini (CTR) keskin oshiradi.Uzunligi: 120–160 ta belgi oralig'ida bo'lishi maqsadga muvofiq.Ma'no va harakatga chaqiruv: Foydalanuvchiga bu sahifada uning muammosiga qanday yechim borligini aniq yozing. "Sotib oling", "Batafsil tanishing", "Bepul yuklab oling" kabi harakatga chaqiruv (Call to Action) so'zlarini qo'shing.Kalit so'zlar: Asosiy va qo'shimcha kalit so'zlarni tabiiy ravishda kiriting. Qidiruv paytida foydalanuvchi kiritgan so'z matnda qalin harflar bilan belgilanadi, bu esa e'tiborni tortadi.Unikallik: Har bir sahifa uchun alohida tavsif yozing, nusxa ko'chirmang.Asosiy qoidalar va xatolarKalit so'zlarni ortiqcha takrorlash (Keyword Stuffing): Title yoki Description'ga ketma-ket kalit so'zlarni terib chiqish qidiruv tizimlari tomonidan qoralanadi va sayt sanksiyaga uchrashi mumkin.Bo'sh qoldirish: Metateglari yo'q sahifalar Google tomonidan past baholanadi yoki o'zboshimchalik bilan matndan olinib tuziladi.Boshqarish: Ularni oson boshqarish uchun WordPress'da Yoast SEO yoki Rank Math kabi pluginlardan foydalanishingiz mumkin.`,
    quiz: {
      question: "Google qidiruv natijalarida sahifaning asosiy qisqa mazmunini ko'rsatuvchi meta teg qaysi?",
      options: ["meta description", "meta title-bar", "meta keywords-list", "meta view"],
      correct: 0
    }
  },
  { 
    id: 84, 
    title: "84-dars: Semantik HTML va qidiruv botlari uchun qulaylik.", 
    free: false, 
    content: `Semantic HTML (semantik HTML) — bu veb-sahifadagi ma'lumotlarning faqat tashqi ko‘rinishini emas, balki ularning ma'nosi va vazifasini brauzer hamda qidiruv botlariga tushunarli qilib ko‘rsatuvchi kodlash usulidir.Oddiy qilib aytganda, teglar tarkibiga qarab tanlanadi. Masalan, matnni shunchaki kattalashtirish uchun emas, u sarlavha bo‘lgani uchun <h1> tegi ichiga olinadi.Qidiruv botlari (SEO) uchun nega muhim?Qidiruv tizimlarining botlari (Googlebot, Yandex Bot va h.k.) sahifangizni indekslashda vizual dizaynni emas, uning kodlar tuzilishini o‘qiydi. Semantik HTML botlarga quyidagi imkoniyatlarni beradi:Kontent iyerarxiyasini tushunish: Bot sahifaning qaysi qismi asosiy, qaysi qismi qo‘shimcha (yon panel) yoki pastki qism (footer) ekanini darrov ajratib oladi.Kalit so‘zlarni to‘g‘ri baholash: Asosiy sarlavha (<h1>) ichidagi so‘zlarga oddiy matndagi so‘zlarga qaraganda kattaroq urg‘u beriladi.Rich Snippets (Boyitilgan natijalar): To‘g‘ri qo‘llangan semantik teglar tufayli qidiruv natijalarida saytingiz sahifalari chiroyliroq va ma'lumotga boyroq (masalan, reyting yulduzchalari, narxlar yoki maqola sanasi bilan) ko‘rinishi mumkin.Asosiy Semantik Teglar va Ularning VazifalariSahifani tartibga solishda <div> va <span> kabi ma'nosiz teglardan qochib, quyidagi maxsus teglardan foydalanish kerak:1. Sahifa tuzilishi (Layout) teglari<header>: Sahifaning yoki biror bo‘limning yuqori qismi (bunda ko‘pincha logo, sayt nomi va navigatsiya joylashadi).<nav>: Saytning asosiy menyusi va navigatsiya havolalari (linklar) uchun xizmat qiladi. Botlar bu orqali sayt xaritasini yaxshiroq tushunadi.<main>: Sahifaning yagona va eng asosiy kontenti joylashadigan qism. Har bir sahifada faqat bitta <main> tegi bo‘lishi shart.<section>: Sahifadagi umumiy mavzuga oid bo‘limlarni guruhlash uchun (masalan, "Xizmatlarimiz", "Biz haqimizda").<article>: Mustaqil, alohida ma'noga ega bo‘lgan kontent (masalan, blog postlari, yangiliklar, forumdagi xabarlar).<aside>: Asosiy kontentga bilvosita bog‘liq bo‘lgan qo‘shimcha ma'lumotlar yoki yon panel (sidebar).: Sahifaning eng pastki qismi (mualliflik huquqlari, aloqa ma'lumotlari, ijtimoiy tarmoq linklari).2. Matn iyerarxiyasi teglari<h1> dan <h6> gacha: Sarlavhalar tizimi. <h1> sahifaning bosh sarlavhasi bo‘lib, undan faqat bir marta foydalanish tavsiya etiladi. Keyingi kichik bo‘limlar mos ravishda <h2>, <h3> va h.k. tartibida ketishi kerak.<p>: Oddiy matn xatboshilari (paragraf).3. Boshqa muhim semantik teglar<figure> va <figcaption>: Rasm va uning ostidagi tushuntirish matnini bir guruhga jamlaydi.<time>: Sana va vaqtni botlar tushunadigan formatda ko‘rsatish uchun.<ul>, <ol>, <li>: Ro‘yxatlarni shakllantirish uchun. Botlar ma'lumotlarni tartiblangan holda oson qabul qiladi.Semantik va Nosemantik Kod O‘rtasidagi FarqBotlar va brauzerlar kodni qanday ko‘rishini solishtiring:Xato (Nosemantik)To‘g‘ri (Semantik)<div class="menu">...</div><nav>...</nav><div id="footer">...</div><footer>...</footer><span style="font-size:24px">Sarlavha</span><h2>Sarlavha</h2>XulosaSemantik HTML — bu nafaqat kodning tozaligi, balki SEO (Search Engine Optimization) poydevoridir. Qidiruv botlari semantik strukturaga ega saytlarni tezroq va xatosiz indekslaydi. Bu esa saytingizning qidiruv natijalarida yuqoriroq o‘rinlarni egallashiga to‘g‘ridan-to‘g‘ri yordam beradi..`,
    quiz: {
      question: "SEO uchun sahifa tuzilishida nima muhim rol o'ynaydi?",
      options: ["Semantik HTML teglari", "Ko'p rangli dizayn", "Katta hajmli rasmlar", "Ko'p sonli tugmalar"],
      correct: 0
    }
  },
  { 
    id: 85, 
    title: "85-dars: Rasmlarni optimizatsiyalash va Alt atributi.", 
    free: false, 
    content: `Rasmlarni optimizatsiyalash va Alt atributi (muqobil matn) veb-saytning yuklanish tezligini oshirish va SEO (qidiruv tizimlarida ko'rinish) samaradorligini yaxshilashda eng muhim omillardan hisoblanadi.1. Rasmlarni optimizatsiyalash nima va u nima uchun kerak?Rasmlarni optimizatsiyalash — bu rasmlarning sifati yomonlashmagan holda ularning fayl hajmini (kilobaytlarini) iloji boricha kamaytirish jarayonidir.Sayt tezligi: Katta hajmli rasmlar saytni sekinlashtiradi. Tez yuklanadigan saytlar esa foydalanuvchilarga yoqadi va Google qidiruvida yuqoriroq chiqadi.Trafikni tejash: Mobil internetdan foydalanuvchilarning trafigi kamroq sarflanadi.Xosting yuklamasi: Serverdagi joy va o'tkazuvchanlik qobiliyati tejaladi.Rasmlarni optimizatsiyalash usullari:To'g'ri format tanlash: Zamonaviy WebP yoki AVIF formatlaridan foydalaning. Ular an'anaviy JPEG va PNG formatlariga qaraganda 30% dan 50% gacha kichikroq hajmga ega.O'lchamni to'g'rilash: Agar rasm saytda 300x300 piksel o'lchamda ko'rinishi kerak bo'lsa, unga 4000x4000 o'lchamdagi asl rasmni yuklamang. Saytga yuklashdan oldin kerakli o'lchamga keltiring.Siquvchi (Compression) asboblar: Sifatni yo'qotmasdan rasmlarni siqish uchun TinyPNG, Squoosh kabi onlayn servislardan yoki WordPress plaginaridan (masalan, Smush, Imagify) foydalaning.2. Alt atributi (Alternative Text) nima?Alt atributi — bu HTML kodida rasm ichiga yoziladigan va rasmda nima tasvirlanganini tushuntiruvchi matndir. Kodda u quyidagicha ko'rinadi:html<img src="noutbuk.jpg" alt="Stol ustida turgan kumushrang noutbuk va kofe finjoni">
Alt atributining 3 ta asosiy vazifasi:SEO (Google uchun): Google botlari rasmdagi piksellarni odam kabi ko'ra olmaydi. Ular rasm nima haqida ekanligini aynan alt matni orqali tushunadi va Google Rasmlar (Google Images) qidiruvida ko'rsatadi.Imkoniyati cheklanganlar uchun (Accessibility): Ko'zi ojiz yoki ko'rish qobiliyati zaif insonlar maxsus "Screen Reader" (ekrandagi matnni o'qib beruvchi) dasturlardan foydalanishadi. Dastur rasmga kelganda, uning alt matnini ovozli o'qib beradi.Rasm yuklanmay qolganda: Agar foydalanuvchining interneti sekin bo'lsa yoki rasm o'chib ketgan bo'lsa, rasm o'rnida shu matn paydo bo'ladi.Alt atributini to'g'ri yozish qoidalariAniq va tasviriy bo'lsin: Rasmda nima borligini lo'nda qilib tushuntiring.Kalit so'zlardan tabiiy foydalaning: Sahifangiz qaysi mavzuda bo'lsa, o'sha kalit so'zni alt matniga kiriting, lekin buni haddan tashqari oshirib yubormang (Spam qilmang).Ortiqcha so'zlar yozmang: Matnni "Bu rasmda...", "Grafik tasvir..." deb boshlamang. To'g'ridan-to'g'ri mavzuga o'ting.Dekorativ rasmlarga tashlab keting: Saytdagi shunchaki chiziqlar, fonlar yoki bezak uchun qo'yilgan ramzlar (ikonkalar) uchun alt atributini bo'sh qoldirish mumkin: alt="".Yaxshi va yomon misollar:❌ Yomon: alt="moshina" (Juda qisqa va tushunarsiz)❌ Spam (Yomon): alt="moshina sotib olish arzon moshinalar moshina narxi Toshkent" (Kalit so'zlar tiqishtirilgan)Yaxshi: alt="Toshkent ko'chalarida ketayotgan oq rangli Chevrolet Malibu mashinasi" (Aniq, tushunarli va tabiiy).`,
    quiz: {
      question: "Rasmlar qidiruv tizimida topilishi va ko'zi ojizlar uchun o'qilishi uchun qaysi atribut majburiy?",
      options: ["alt", "src", "title-img", "class"],
      correct: 0
    }
  },
  { 
    id: 86, 
    title: "86-dars: Technical SEO: Sitemap.xml va Robots.txt.", 
    free: false, 
    content: `Technical SEOda sitemap.xml va robots.txt fayllari qidiruv tizimi botlari (masalan, Googlebot) saytingizni qanday topishi, o‘qishi va indekslashi uchun eng asosiy vositalardir.1. Robots.txt nima?robots.txt — bu saytingizning asosiy katalogida (root directory) joylashgan oddiy matnli fayl. U qidiruv tizimi botlariga saytingizning qaysi qismlariga kirish mumkinligi va qaysilari taqiqlanganini ko‘rsatadi.Asosiy vazifasi: Botlarning keraksiz yoki shaxsiy sahifalarga (masalan, /admin/, /cart/) kirishini cheklash va server yuklamasini kamaytirish.Tuzilishi misoli:textUser-agent: *
Disallow: /admin/
Disallow: /private-page/

Sitemap: https://example.com
Muhim eslatma: Disallow buyrug‘i sahifaning qidiruv natijalaridan to‘liq o‘chib ketishini kafolatlamaydi, u faqat botga o‘sha joyni "kezmaslikni" bildiradi.2. Sitemap.xml nima?sitemap.xml — bu saytingizdagi barcha muhim sahifalar, videolar va boshqa fayllar ro‘yxati ko‘rsatilgan XML formatidagi maxsus xarita.Asosiy vazifasi: Qidiruv tizimlariga sayt tuzilishini tezda tushunishga yordam berish va yangi yoki yangilangan sahifalarni tezroq topib, indekslashni ta'minlash.Tuzilishi misoli:xml<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://sitemaps.org">
  <url>
    <loc>https://example.com</loc>
    <lastmod>2026-09-01</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
3. Ularning farqi va o‘zaro bog‘liqligiXususiyatRobots.txtSitemap.xmlMaqsadiBotlarga qayerga kirish mumkin emasligini aytishBotlarga qaysi sahifalar mavjud va muhimligini ko‘rsatishFayl formatiOddiy matn (.txt)XML (.xml)JoylashuviSayt ildizida (://domain.com)Odatda ildizda (://domain.com)Integratsiya: Eng yaxshi amaliyot sifatida robots.txt faylining oxirgi qatoriga sitemap.xml manzili yozib qo'yiladi. Bu botlarga xaritani osonroq topish imkonini beradi.Ziddiyat bo‘lmasin: robots.txt da yopilgan (taqiqlangan) sahifa sitemap.xml da ko‘rsatilmasligi kerak. Agar sahifani indeksdan chiqarmoqchi bo‘lsangiz, uni faqat robots.txt bilan emas, balki sahifadagi noindex tegi orqali boshqarish tavsiya etiladi.4. SEO bo'yicha asosiy tavsiyalarHar ikkala faylni ham saytingizning asosiy domeni ostiga joylashtiring (/robots.txt va /sitemap.xml).sitemap.xml manzilini Google Search Console va Bing Webmaster Tools tizimlariga qo‘shib qo‘ying.Saytda yangi kontent qo‘shilganda yoki o‘zgarish bo‘lganda sitemap avtomatik yangilanishini ta'minlang..`,
    quiz: {
      question: "Qidiruv robotlariga saytning qaysi qismlariga kirish mumkinligini ko'rsatuvchi fayl qanday ataladi?",
      options: ["robots.txt", "sitemap.xml", "index.html", "config.js"],
      correct: 0
    }
  },
  { 
    id: 87, 
    title: "87-dars: Veb-sayt tezligi va Core Web Vitals optimizatsiyasi.", 
    free: false, 
    content: `Veb-sayt tezligi va Core Web Vitals optimizatsiyasi foydalanuvchi tajribasini (UX) yaxshilash va saytingizni Google qidiruv tizimida yuqoriroq oʻrinlarga koʻtarish (SEO) uchun eng muhim omillardan biridir.Google veb-saytlar sifatini baholash uchun uchta asosiy koʻrsatkichdan foydalanadi. Quyida ushbu koʻrsatkichlar, ularning vazifalari va ularni optimallashtirish usullari keltirilgan.1. Core Web Vitals: Uchta asosiy koʻrsatkichLCP (Largest Contentful Paint) — Yuklanish tezligiNima u: Sahifadagi eng katta matn bloki yoki rasm (masalan, asosiy banner) foydalanuvchiga koʻrinishi uchun ketgan vaqt.Yaxshi koʻrsatkich: 2.5 soniya yoki undan kam.INP (Interaction to Next Paint) — Interaktivlik (Yangi mezon)Nima u: Foydalanuvchi sahifada biror tugmani bosganda, sayt bunga qanchalik tez javob berishi (vizual oʻzgarish yuz berishi). Eslatma: INP koʻrsatkichi eski FID (First Input Delay) oʻrnini egallagan.Yaxshi koʻrsatkich: 200 millisoniya yoki undan kam.CLS (Cumulative Layout Shift) — Vizual barqarorlikNima u: Sahifa yuklanayotgan paytda elementlarning (matn, tugma, reklama) oʻz-oʻzidan surilib ketishi. Bu foydalanuvchi adashib boshqa tugmani bosib yuborishiga sabab boʻladi.Yaxshi koʻrsatkich: 0.1 yoki undan kam.2. Sayt tezligini tekshirish uchun asboblar (Tools)Saytingiz holatini aniqlash uchun quyidagi bepul Google vositalaridan foydalaning:PageSpeed Insights: Saytni kompyuter va mobil qurilmalardagi tezligini tahlil qiladi va xatolarni koʻrsatadi.Google Search Console: "Core Web Vitals" boʻlimi orqali saytingizning qaysi sahifalarida muammo borligini guruhlab beradi.3. Optimizatsiya qilish usullari (Amaliy yechimlar)Core Web Vitals koʻrsatkichlarini yaxshilash uchun quyidagi ishlarni amalga oshirish kerak:🖼️ LCP va yuklanish tezligini yaxshilash:Rasmlarni siqish: Rasmlarni anʼanaviy PNG/JPEG formatidan zamonaviy WebP yoki AVIF formatlariga oʻtkazing.Keshni sozlash (Caching): Server darajasida keshni yoqing, shunda doimiy foydalanuvchilar uchun sayt lahzada ochiladi.CDN ishlatish: Cloudflare kabi CDN (Content Delivery Network) xizmatlaridan foydalanib, sayt maʼlumotlarini foydalanuvchiga yaqin serverlardan yuklang.Hostingni yangilash: Server javob berish vaqtini (TTFB) kamaytirish uchun sifatli va tezkor hosting yoki VPS tanlang.⚡ INP (Interaktivlik) koʻrsatkichini yaxshilash:JavaScript-ni optimallashtirish: Keraksiz yoki ogʻir JavaScript kodlarini qisqartiring yoki ularni sahifa toʻliq yuklangandan keyin ishlashga sozlang (defer yoki async atributlari orqali).Uchinchi tomon skriptlarini kamaytirish: Keraksiz chat-botlar, tahlil skriptlari va piksellarni olib tashlang.📐 CLS (Vizual barqarorlik) koʻrsatkichini yaxshilash:Oʻlchamlarni koʻrsatish: Saytdagi har bir rasm va video uchun kodda aniq oʻlchamlarni (width va height) belgilang.Reklama bloklari uchun joy ajratish: Reklamalar yuklanishidan oldin ular turadigan joy oʻlchamini CSS orqali band qilib qoʻying, shunda reklama paydo boʻlganda matnlar pastga surilib ketmaydi.Yangi elementlarni toʻgʻri joylashtirish: Sahifaning tepa qismiga foydalanuvchi harakatisiz toʻsatdan yangi kontent (banner, xabarnoma) qoʻshmang.XulosaVeb-sayt tezligini oshirish — bu bir marta qilinadigan ish emas, balki doimiy jarayon. Sahifalar qanchalik tez va barqaror ishlasa, foydalanuvchilar saytda shunchalik uzoq qoladi va Google qidiruv tizimi saytingizni yuqoriroq baholaydi.`,
    quiz: {
      question: "Google'ning sahifa tezligi va foydalanuvchi tajribasini o'lchovchi mezonlari qanday ataladi?",
      options: ["Core Web Vitals", "CSS Grid metrics", "JS Speed tests", "HTML validators"],
      correct: 0
    }
  },
  { 
    id: 88, 
    title: "88-dars: Mobile-Friendly (Mobil moslashuvchanlik) va Responsive SEO.", 
    free: false, 
    content: `Hozirgi kunda foydalanuvchilarning ko'pchiligi telefondan kirishini hisobga olib, saytning mobil qurilmalarda mukammal ishlashini ta'minlash va Google mobil-birinchi indeksatsiyasi.`,
    quiz: {
      question: "Google qidiruv tizimi saytlarni indeksatsiya qilishda birinchi navbatda nimaga e'tibor qaratadi?",
      options: ["Mobil versiyasiga (Mobile-first)", "Faqat kompyuter versiyasiga", "Faqat qora rangga", "Faqat ingliz tiliga"],
      correct: 0
    }
  },
  { 
    id: 89, 
    title: "89-dars: Google Search Console va Analytics vositalarini ulash.", 
    free: false, 
    content: `Google Search Console (GSC) va Google Analytics (GA4) vositalarini bir-biriga ulash uchun har ikkala xizmatda ham bir xil hisobga (akkauntga) ega bo'lishingiz va sayt egasi (Administrator) huquqiga ega bo'lishingiz kerak.Qadamlar:Google Analytics'ni ochingGoogle Analytics sahifasiga kiring va kerakli resursni (Property) tanlang.Admin bo'limiga o'tingPastki chap burchakdagi "Admin" (Sozlamalar / tishli g'ildirakcha) ikonmasini bosing.Search Console havolasini topingProperty (Resurs) ustunida pastga qarang va "Search Console links" (Search Console havolalari) bo'limini tanlang.Bog'lanishni boshlang"Link" (Bog'lash) tugmasini bosing.Hisobni tanlang"Choose accounts" (Hisoblarni tanlash) tugmasini bosib, o'zingizga tegishli va Search Console'da tasdiqlangan veb-saytni belgilang.Ma'lumotlar oqimini (Data Stream) ulangSaytingizning veb-oqimini tanlang va "Next" (Keyingisi) tugmasini bosing.Tasdiqlang va yakunlangSozlamalarni ko'rib chiqib, "Submit" (Yuborish) tugmasini bosing. Aloqa muvaffaqiyatli o'rnatilgani haqida xabar chiqadi.Ushbu bog'lanish natijasida Google Analytics hisobotlarida yangi Search Console bo'limi paydo bo'ladi va foydalanuvchilar qaysi qidiruv so'rovlari orqali saytingizga kelganini to'g'ridan-to'g'ri tahlil qila olasiz.`,
    quiz: {
      question: "Saytingizning qidiruv natijalaridagi holatini kuzatish uchun Google'ning qaysi bepul vositasi ishlatiladi?",
      options: ["Google Search Console", "Figma Design", "Visual Studio Code", "Vercel Analytics Pro"],
      correct: 0
    }
  },
  { 
    id: 90, 
    title: "90-dars: SEO audit va saytni to'liq optimizatsiya qilish amaliyoti.", 
    free: false, 
    content: `SEO audit — bu veb-saytning qidiruv tizimlarida (Google, Yandex) yuqori o'rinlarga chiqishga qanchalik tayyorligini har tomonlama tekshirish va xatolarni aniqlash jarayoni.Saytni to'liq optimizatsiya qilish uchun quyidagi amaliy bosqichlarni bajarish lozim:1. Texnik SEO audit (Technical SEO)Saytning qidiruv tizimi robotlari (kraterlar) tomonidan o'qilishi va indekslanishini tekshirish.Indekslash va xatolar: robots.txt fayli va sitemap.xml xaritasining to'g'ri tuzilganligini tekshirish.Dublikat sahifalar: canonical teglari va takroriy (dublikat) sahifalarni aniqlash.SSL sertifikat (HTTPS): Xavfsizlik protokoli mavjudligi va havolalarning xavfsiz ishlashini ta'minlash.Sayt tezligi: Mobil va kompyuter versiyalarida sahifaning yuklanish tezligini oshirish (Core Web Vitals ko'rsatkichlari).2. Ichki optimizatsiya (On-Page SEO)Sahifalar ichidagi kontent va tuzilmani qidiruv tizimlari talablariga moslashtirish.Kalit so'zlar (Keywords): Har bir sahifa uchun mos keluvchi asosiy va yordamchi kalit so'zlarni tanlash va joylashtirish.Meta-teglər: Har bir sahifaga noyob va qiziqarli Title hamda Description yozish.Sarlavhalar strukturasi: H1, H2, H3 sarlavhalarini mantiqiy ketma-ketlikda ishlatish.Ichki havolalar (Internal Linking): Sayt ichidagi sahifalarni bir-biriga o'zaro havolalar orqali bog'lash.3. Kontent auditi va sifatiFoydali va noyob matnlar: Foydalanuvchi savollariga to'liq javob beruvchi, plagiat bo'lmagan matnlarni tayyorlash.Rasmlar optimizatsiyasi: Rasmlar hajmini kichraytirish va ularga alt atributlarini yozish.4. Tashqi optimizatsiya (Off-Page SEO)Boshqa nufuzli saytlardan o'z saytingizga havolalar (backlinks) olish.Sifatli linklar: Spam yoki past sifatli saytlardan emas, ishonchli manbalardan havola to'plash.Brand va PR: Saytni ijtimoiy tarmoqlar va mavzuga oid forumlarda tanitish.5. Xulq-atvor omillari (Behavioral Factors)Mobil moslashuvchanlik: Saytning barcha turdagi ekranlarda (telefon, planshet) mukammal ishlashi.Foydalanuvchi qulayligi (UX): Saytda harakatlanishning soddaligi, dizaynning tushunarli bo'lishi va chiqib ketish ko'rsatkichini (Bounce Rate) kamaytirish.Batafsil ko'rsatmalar va tekshiruv ro'yxatlarini ko'rib chiqish uchun Sayt SEO auditi chek-listi sahifasiga o'tishingiz mumkin.`,
    quiz: {
      question: "Saytdagi SEO xatoliklarini aniqlash jarayoni nima deb ataladi?",
      options: ["SEO Audit", "Code formatting", "UI testing", "Database migration"],
      correct: 0
    }
  },
  { 
    id: 91, 
    title: "91-dars: 100 kunlik bilimlar bazasini yaxlit takrorlash (HTML & CSS).", 
    free: false, 
    content: `O'tilgan dastlabki bosqichlarni xotirada yangilash. HTML teglarining mantiqiy tuzilishi, CSS Box Model, Flexbox va Grid tizimlarini qayta ko'rib chiqish.`,
    quiz: {
      question: "HTML va CSS bilimlarini mustahkamlashda nima eng muhim?",
      options: ["Amaliyot va kod yozish", "Faqat nazariyani o'qish", "Videolarni ko'rish", "Kitob yig'ish"],
      correct: 0
    }
  },
  { 
    id: 92, 
    title: "92-dars: JavaScript va ES6+ xususiyatlarini takrorlash.", 
    free: false, 
    content: `JavaScript va ES6+ (ECMAScript 2015 va undan keyingi versiyalar) zamonaviy veb-dasturlashning asosidir. Quyida eng muhim xususiyatlar, ularning qisqa tushuntirishi va misollari keltirilgan.1. Oʻzgaruvchilar: let va constEski var oʻrniga kelgan. var funksiya doirasiga (function scope) ega boʻlsa, bular blok doirasiga (block scope) ega.let: Qiymati oʻzgaradigan oʻzgaruvchilar uchun.const: Qiymati oʻzgarmaydigan (oʻzgarmas) oʻzgaruvchilar uchun.javascriptlet score = 10;
score = 15; // Toʻgʻri

const pi = 3.14;
// pi = 3.15; // Xatolik beradi
2. Arrow Functions (Yoysimon funksiyalar)Funksiyalarni qisqaroq yozish usuli. Shuningdek, ular oʻzining this kontekstiga ega emas (tashqi kontekstni oladi).javascript// Eski usul
function salom(ism) {
    return "Salom " + ism;
}

// ES6+ usuli
const salom = (ism) => 'Salom ${ism}';
3. Template Literals (Shablonli satrlar)+ belgisisiz matnlarni va oʻzgaruvchilarni oson birlashtirish hamda koʻp qatorli matnlar yozish imkoniyati. Bosh qiyshiq tirnoq (backtick - '\) ishlatiladi.javascriptconst ism = "Ali";
const yosh = 25;

// "Ali 25 yoshda."
const matn = '${ism} ${yosh} yoshda.'; 
4. Destructuring (Strukturani buzish)Massiv yoki obyektdagi maʼlumotlarni alohida oʻzgaruvchilarga juda tez ajratib olish usuli.javascript// Obyekt bilan
const fovdalanuvchi = { ism: "Vali", yosh: 22 };
const { ism, yosh } = fovdalanuvchi;

// Massiv bilan
const ranglar = ["qizil", "yashil", "koʻk"];
const [birinchi, ikkinchi] = ranglar; // birinchi = "qizil"
5. Spread va Rest operatorlari (...)Uchta nuqta (...) vaziyatga qarab ikki xil ishlaydi:Spread (Yoyish): Massiv yoki obyekt elementlarini yoyib yuboradi (nusxalash yoki birlashtirish uchun).Rest (Yigʻish): Funksiya parametrlarida qolgan barcha argumentlarni bitta massivga yigʻadi.javascript// Spread
const massiv1 =;
const massiv2 = [...massiv1, 3, 4]; // [1, 2, 3, 4]

// Rest
function yigindi(...sonlar) {
    return sonlar.reduce((a, b) => a + b, 0);
}
6. Massiv Metodlari (map, filter, reduce)Sikllar (for, while) ishlatmasdan massivlar bilan samarali ishlash usullari.map(): Har bir elementni oʻzgartirib, yangi massiv qaytaradi.filter(): Shartga mos keladigan elementlardan iborat yangi massiv yaratadi.reduce(): Massiv elementlarini bitta qiymatga keltirib jamlaydi.javascriptconst sonlar =;

const kvadratlar = sonlar.map(n => n * n); // [1, 4, 9, 16]
const juftlar = sonlar.filter(n => n % 2 === 0); // [2, 4]
7. Promises va Async/AwaitAsinxron amallar (masalan, serverdan maʼlumot olish) bilan ishlashni soddalashtiradi. Async/Await asinxron kodni xuddi sinxron koddek tekis oʻqishga yordam beradi.javascript// Serverdan ma'lumot olish misoli
async function malumotYuklash() {
    try {
        const javob = await fetch('https://example.com');
        const malumot = await javob.json();
        console.log(malumot);
    } catch (xato) {
        console.error("Xatolik yuz berdi:", xato);
    }
}
8. Classes (Klaslar)Obyektga yoʻnaltirilgan dasturlash (OOP) prinsiplarini qoʻllash uchun qulay sintaksis (prototiplar asosida ishlaydi).javascriptclass Shaxs {
    constructor(ism) {
        this.ism = ism;
    }
    tanishuv() {
        return 'Mening ismim ${this.ism}';
    }
}

const ali = new Shaxs("Ali");
9. Optional Chaining (?.) va Nullish Coalescing (??)Nomaʼlum yoki boʻsh qiymatlar (null, undefined) bilan ishlashda xatoliklarning oldini oladi.?.: Obyekt ichidagi xususiyat mavjud boʻlmasa, xato bermay undefined qaytaradi.??: Chap tomondagi qiymat null yoki undefined boʻlsa, oʻng tomondagi standart qiymatni oladi.javascriptconst user = { profil: { ism: "Anvar" } };

console.log(user.manzil?.shahar); // Xato bermaydi, undefined qaytaradi

const kiritilganQiymat = null;
const yakuniyQiymat = kiritilganQiymat ?? "Standart matn"; // "Standart matn"`,
    quiz: {
      question: "Massiv elementlarini yangi shart asosida saralash uchun qaysi metod ishlatiladi?",
      options: ["filter()", "push()", "alert()", "split()"],
      correct: 0
    }
  },
  { 
    id: 93, 
    title: "93-dars: React.js va Hooks (useState, useEffect, Context) bo'yicha amaliy takrorlash.", 
    free: false, 
    content: `React.js va uning eng muhim Hook-lari (useState, useEffect, Context API) bo'yicha bilimlaringizni mustahkamlash uchun kichik, ammo amaliy loyiha qurishni tavsiya qilaman. Loyiha nomi: "Smart Todo & Theme App" (Mavzuni o'zgartira oladigan va ma'lumotlarni saqlab qoladigan vazifalar menejeri).Quyida har bir Hook-ning vazifasi va ularni bitta loyihada birlashtirish bosqichlari keltirilgan.1. Nazariy qism: Kim nimaga javob beradi?useState: Komponentning ichki holatini (state) boshqarish uchun. Masalan: yangi vazifa matni, vazifalar ro'yxati.useEffect: Yon ta'sirlar (side effects) bilan ishlash uchun. Masalan: vazifalarni brauzer xotirasiga (localStorage) saqlash va sahifa yuklanganda qayta o'qish.useContext: Ma'lumotni komponentlar iyerarxiyasi bo'ylab "prop drilling" (otadan bolaga uzatish) siz, global miqyosda ulashish uchun. Masalan: Ilova mavzusi (Dark/Light mode).2. Amaliy Kod StrukturasiKodni tushunish oson bo'lishi uchun uni 3 ta asosiy qismga ajratamiz.Qadam 1: Context yaratish (ThemeContext.js)Ilovamizning ixtiyoriy joyida Dark/Light rejimini o'zgartira olishimiz uchun kontekst sozlab olamiz.jsximport React, { createContext, useState } from 'react';

// Context yaratamiz
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // 'light' yoki 'dark'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
Qadam 2: Asosiy Komponent (App.js)Bu yerda useState va useEffect Hook-larini birlashtirib, funksionallikni yozamiz.jsximport React, { useState, useEffect, useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './App.css'; // Mavzular dizayni uchun

function App() {
  // 1. useState: Vazifalar ro'yxati va yangi kiritilayotgan matn holati
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Context-dan foydalanamiz
  const { theme, toggleTheme } = useContext(ThemeContext);

  // 2. useEffect: Sahifa birinchi marta yuklanganda LocalStorage-dan ma'lumotni o'qish
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('my_todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  // 3. useEffect: Har safar 'todos' o'zgarganda uni LocalStorage-ga saqlash
  useEffect(() => {
    localStorage.setItem('my_todos', JSON.stringify(todos));
  }, [todos]);

  // Vazifa qo'shish funksiyasi
  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Vazifani o'chirish funksiyasi
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className={'app-container ${theme}'}>
      <header>
        <h1>Mening Vazifalarim</h1>
        <button onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Tungi rejim' : '☀️ Kunduzgi rejim'}
        </button>
      </header>

      <form onSubmit={addTodo}>
        <input 
          type="text" 
          value={inputValue} 
          onChange={(e) => setInputValue(e.target.value)} 
          placeholder="Yangi vazifa qo'shing..."
        />
        <button type="submit">Qo'shish</button>
      </form>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
Qadam 3: Loyihani o'rash (index.js)ThemeContext butun ilova bo'ylab ishlashi uchun App komponentini ThemeProvider ichiga olamiz.jsximport React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
3. O'zingizni tekshirish uchun topshiriqlar (Mustaqil rivojlantirish)Bilimingizni yanada mustahkamlash uchun ushbu loyihaga quyidagi funksiyalarni qo'shib ko'ring:useState mashqi: Har bir vazifaning yoniga "Bajarildi" (Checkbox) tugmasini qo'ying. Bosilganda vazifa matni ustiga chizilsin (text-decoration: line-through).useEffect mashqi: Sahifa nomini (brauzer tabidagi yozuvni) bajarilmagan vazifalar soniga qarab o'zgartiring. Masalan: Document.title = "Sizda ${count} ta vazifa bor".useContext mashqi: ThemeContext ichiga foydalanuvchi tilini (UZ / EN) o'zgartiruvchi yangi holat (state) qo'shing va tugmalar matnini tilga moslang.`,
    quiz: {
      question: "React'da yon effektlarni (side-effects) boshqarish uchun qaysi hook ishlatiladi?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      correct: 0
    }
  },
  { 
    id: 94, 
    title: "94-dars: Git va GitHub bilan ishlashni mukammal takrorlash.", 
    free: false, 
    content: `Git va GitHub versiyalarni boshqarish hamda loyihalar ustida jamoaviy ishlash uchun eng muhim vositalardir. Quyida ushbu texnologiyalarni mukammal takrorlash va eslab qolish uchun eng kerakli buyruqlar va tushunchalar jamlangan.🚀 Git nima va u qanday ishlaydi?Git — loyihadagi o‘zgarishlarni kuzatib boruvchi lokal (kompyuteringizdagi) tizim. GitHub esa ushbu kodlarni bulutda saqlaydigan va jamoa bilan ishlashga imkon beruvchi masofaviy (remote) platformadir.Git tizimi 3 ta asosiy hududdan iborat:Working Directory: Siz kod yozayotgan va o‘zgartirayotgan papka.Staging Area (Index): Kommit (saqlash) qilishdan oldin o‘zgarishlar vaqtinchalik yig‘iladigan joy.Local Repository: Kodning yakuniy versiyalari tarixda muhrlanib saqlanadigan joy.💻 Eng muhim Git buyruqlari1. Boshlang‘ich sozlamalar va sozlashYangi kompyuterda yoki tizimda birinchi marta ishlashda ism va emailni kiritish shart:git config --global user.name "Ismingiz" — Git uchun ism belgilash.git config --global user.email "emailingiz@example.com" — Git uchun email belgilash.git init — Joriy papkada yangi bo‘sh Git repozitoriysini yaratish.git clone <url> — Masofaviy (GitHub'dagi) repozitoriyni kompyuterga ko‘chirib olish.2. Kundalik ish jarayoni (Workflow)Kod yozish jarayonida eng ko‘p ishlatiladigan buyruqlar ketma-ketligi:git status — Qaysi fayllar o‘zgargani va holati qandayligini tekshirish.git add <fayl_nomi> — Muayyan faylni Staging Area'ga qo‘shish.git add . — Barcha o‘zgargan fayllarni Staging Area'ga qo‘shish.git commit -m "Izoh" — Staging Area'dagi o‘zgarishlarni qisqa izoh bilan tarixga saqlash.3. Tarmoqlar (Branches) bilan ishlashAsosiy kodga zarar yetkazmasdan yangi funksiyalar qo‘shish uchun tarmoqlardan foydalaniladi:git branch — Mavjud tarmoqlar ro‘yxatini ko‘rish.git branch <tarmoq_nomi> — Yangi tarmoq yaratish.git checkout <tarmoq_nomi> yoki git switch <tarmoq_nomi> — Boshqa tarmoqqa o‘tish.git checkout -b <tarmoq_nomi> — Yangi tarmoq yaratish va unga darhol o‘tish.git merge <tarmoq_nomi> — Ko‘rsatilgan tarmoqdagi o‘zgarishlarni joriy (siz turgan) tarmoqqa birlashtirish.git branch -d <tarmoq_nomi> — Keraksiz bo‘lgan tarmoqni o‘chirish.4. GitHub (Remote) bilan aloqaLokal kodni bulutga yuklash va u yerdan yuklab olish:git remote add origin <remote_url> — Lokal repozitoriyni masofaviy GitHub repozitoriyiga bog‘lash.git push -u origin <tarmoq_nomi> — Lokal o‘zgarishlarni birinchi marta GitHub'ga yuklash.git push — Keyingi safar o‘zgarishlarni o‘sha tarmoqqa to‘g‘ridan-to‘g‘ri yuklash.git pull — GitHub'dagi eng oxirgi o‘zgarishlarni lokal kompyuterga yuklab olish va birlashtirish.git fetch — GitHub'dagi o‘zgarishlarni tekshirish (lekin kodga birlashtirmaslik).5. Tarixni ko‘rish va xatolarni tuzatishgit log — Hamma kommitlar tarixini (kim, qachon, nima o‘zgartirganini) ko‘rish.git log --oneline — Kommitlar tarixini qisqa va tushunarli bir qatorda ko‘rish.git restore <fayl_nomi> — Fayldagi oxirgi kommitdan keyingi o‘zgarishlarni bekor qilish.git reset --soft HEAD~1 — Oxirgi kommitni bekor qilish, lekin yozilgan kodlarni o‘chirmasdan saqlab qolish.👥 GitHub terminlari va amaliyotlariRepository (Repozitoriy): Loyihangiz va uning barcha fayllari, tarixi saqlanadigan "papka".Fork: Boshqa birovning repozitoriysidan nusxa ko‘chirib, o‘zingizning GitHub sahifangizga o‘tkazish (boshqalarning loyihasiga hissa qo‘shishda kerak bo‘ladi).Pull Request (PR): Siz o‘z tarmog‘ingizda (branch) qilgan o‘zgarishlarni asosiy loyihaga qo‘shishlarini so‘rab loyiha rahbariga yuboradigan taklifingiz.Issues: Loyihadagi xatolar (bug), muammolar yoki kelajakda qilinishi kerak bo‘lgan vazifalarni muhokama qilish joyi..gitignore fayli: Git loyihada kuzatishi shart bo‘lmagan fayllar (masalan, node_modules, maxfiy parollar yozilgan .env fayllari) kiritiladigan maxsus fayl.💡 Ideal ish tartibi (Best Practice)GitHub'da yangi loyiha (repozitoriy) yarating.Uni kompyuterga git clone qiling.Yangi vazifa ustida ishlash uchun git checkout -b feature-nomi buyrug‘i bilan alohida tarmoq oching.Kod yozing, so‘ng git add . va git commit -m "tavsif" qiling.Kodni GitHub'ga git push origin feature-nomi orqali yuklang.GitHub saytida Pull Request oching, kodni tekshirib (Code Review), asosiy main tarmoqqa birlashtiring (Merge).`,
    quiz: {
      question: "O'zgarishlarni GitHub repositoriyasiga yuborish uchun qaysi buyruq ishlatiladi?",
      options: ["git push", "git pull", "git clone", "git init"],
      correct: 0
    }
  },
  { 
    id: 95, 
    title: "95-dars: Yakuniy Portfel (Portfolio) loyihasini rejalashtirish.", 
    free: false, 
    content: `Yakuniy Portfel (Portfolio) loyihasini rejalashtirish muvaffaqiyatli martaba yoki o'qish yakuni uchun eng muhim qadamdir. Portfel sizning ko'nikmalaringiz, tajribangiz va eng yaxshi ishsharingizni ko'rsatib beradigan "tashrif qog'ozi" hisoblanadi.Loyiha rejasini tizimli va bosqichma-bosqich tashkil etish uchun quyidagi tayyor freymvorkdan foydalanishingiz mumkin:📅 1-bosqich: Strategiya va Kontseptsiya (1–2-hafta)Bu bosqichda portfelning maqsadi va kim uchun mo'ljallanganligi aniqlanadi.Maqsadni aniqlash: Portfel nima uchun kerak? (Ishga kirish, frilans buyurtmalar olish, universitetga hujjat topshirish).Maqsadli auditoriya (Target Audience): Sizning portfelingizni kim ko'radi? (HR menejerlar, texnik direktorlar, mijozlar). Shunga qarab til va ohang (tone of voice) tanlanadi.Formatni tanlash:Veb-sayt (shaxsiy domen, GitHub Pages, Framer, Webflow)Platformalar (Behance, Dribbble, LeetCode, Kaggle — yo'nalishga qarab)PDF format (taqdimot ko'rinishida)🗒 2-bosqich: Kontentni yig'ish va Saralash (2–3-hafta)Hamma ishlaringizni joylash shart emas. Eng sifatli ishlarga e'tibor qarating."Oltin qoida": Ko'p emas, sifatli va xilma-xil ishlarni tanlang (ideal holda 3 tadan 5 tagacha eng yaxshi loyiha).Case Study (Loyiha tarixi) tayyorlash: Har bir loyiha uchun quyidagilarni yozing:Muammo: Loyiha qanday muammoni hal qilgan?Sizning rolingiz: Loyihada aynan nima ish qildingiz?Texnologiyalar: Qaysi dasturlar, tillar yoki instrumentlardan foydalanildingiz?Natija: Loyiha qanday samara berdi (metrikalar, raqamlar yoki yakuniy ko'rinish)?🎨 3-bosqich: Dizayn va Struktura (3–4-hafta)Portfelning tuzilishi oddiy va navigatsiya qilishga qulay bo'lishi kerak.Struktura (Sahifalar/Bo'limlar):Home / Hero Section: Ismingiz, kasbingiz va qisqa o'ziga xos taklifingiz (Tagline).About Me: Siz haqingizda qisqacha ma'lumot, tajribangiz va qadriyatlaringiz.Projects / Portfolio: Loyihalar ro'yxati.Skills / Resume: Texnik ko'nikmalar va rezyumeni yuklab olish tugmasi.Contact: Aloqa uchun formalar, email, Telegram, LinkedIn havolalari.Vizual uslub: Minimalizmga intiling. Shriftlar va ranglar kombinatsiyasi 2-3 tadan oshmasligi tavsiya etiladi.💻 4-bosqich: Texnik amalga oshirish (4–6-hafta)Portfelni jonli (live) holatga keltirish bosqichi.Ishlab chiqish: Agar dasturchi bo'lsangiz, kod yozing (React, Vue, HTML/CSS). Agar dizayner yoki marketolog bo'lsangiz, No-code vositalardan (Framer, Wix, Notion) foydalaning.Adaptivlik (Responsiveness): Portfel smartfon, planshet va kompyuter ekranlarida birdek chiroyli ko'rinishini ta'minlang (HR'lar ko'pincha telefonda ko'rishadi).Tezlikni tekshirish: Rasmlar va media fayllarni optimallashtiring (siqing), sahifa tez yuklanishi kerak.🔎 5-bosqich: Tekshirish va Launch (6-hafta)Loyihani dunyoga ko'rsatishdan oldingi yakuniy test.Proofreading: Matnlardagi imlo va grammatik xatolarni tekshiring.Havolalar testi: Hamma tugmalar va ijtimoiy tarmoqlarga olib boruvchi linklar to'g'ri ishlayotganiga ishonch hosil qiling.Teskari aloqa (Feedback): Portfelni ustozingizga (mentor), hamkasblaringizga yoki do'stlaringizga ko'rsatib, fikrini biling va kamchiliklarini to'g'rilang.💡 Foydali maslahatPortfel — bu doimiy yashaydigan loyiha. Uni bir marta qilib tashlab qo'ymay, har safar yangi muvaffaqiyatli loyiha tugatganda yangilab borishni odat qiling..`,
    quiz: {
      question: "Dasturchi uchun ish topishda eng muhim ko'rsatmat nima hisoblanadi?",
      options: ["Shaxsiy Portfolio loyihalari", "Faqat diplom", "Faqat sertifikatlar", "Sosial tarmoqlar"],
      correct: 0
    }
  },
  { 
    id: 96, 
    title: "96-dars: Portfolio saytining UI dizayni va React'da yasash.", 
    free: false, 
    content: `Portfolio saytini zamonaviy UI dizaynda loyihalash va uni React+Tailwind CSS yordamida yaratish professional dasturchi yoki dizayner sifatida o'z brendingizni ko'rsatishning eng samarali usulidir. Quyida mukammal portfolio yaratishning bosqichma-bosqich qo'llanmasi keltirilgan.1. UI/UX Dizayn asoslari (Figma uchun tavsiyalar)Zamonaviy portfoliolar odatda Minimalizm va To'q ranglar (Dark Mode) estetikasiga asoslanadi. Dizayn paytida quyidagi struktura va qoidalarga amal qiling:Grid (Setka): 12 talik standart grid tizimidan foydalaning.Ranglar palitrasi: 60-30-10 qoidasiga amal qiling.Asosiy (60%): To'q kulrang yoki qora (#0f172a, #1e293b).Yordamchi (30%): Oq va och kulrang matnlar uchun (#f8fafc, #94a3b8).Aksent/Urg'u rang (10%): Tugmalar va muhim elementlar uchun (Neon yashil, binafsha yoki yorqin ko'k).Tipografika: Inter, Plus Jakarta Sans yoki Poppins kabi o'qishga oson shriftlar.Sayt Strukturasi:Header (Navigatsiya): Logo, Menyu (Home, About, Projects, Contact) va Dark/Light mode tugmasi.Hero Section: Sarlavha ("Salom, men [Ismingiz]"), qisqa ixtisoslashuv, CTA (Call to Action) tugmasi ("Loyihalarni ko'rish") va professional rasm.Skills (Ko'nikmalar): Siz biladigan texnologiyalar ikonkalari (React, JS, Node, Figma va h.k.).Projects (Loyihalar): Har bir loyiha uchun karta (Card) – rasm, qisqa tavsif, ishlatilgan texnologiyalar va GitHub/Live link tugmalari.Contact (Aloqa): Aloqa formasi va ijtimoiy tarmoqlar (LinkedIn, Telegram, GitHub) havolalari.2. React loyihasini sozlashLoyihani tez va zamonaviy Vite instrumenti orqali yaratamiz hamda stillar uchun Tailwind CSS-dan foydalanamiz.Terminalda quyidagi buyruqlarni ketma-ket bajaring:bash# 1. Yangi React loyihasini yaratish
npm create vite@latest my-portfolio -- --template react

# 2. Loyiha papkasiga o'tish
cd my-portfolio

# 3. Zaruriy paketlarni o'rnatish
npm install

# 4. Tailwind CSS va uning sozlamalarini o'rnatish
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 5. Ikonkalar uchun React Icons paketini o'rnatish
npm install react-icons
tailwind.config.js faylini oching va content qismini quyidagicha yangilang:javascriptexport default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
src/index.css faylining eng tepasiga Tailwind direktivalarini qo'shing:css@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  @apply bg-slate-900 text-slate-100 font-sans antialiased;
}
3. Komponentlar arxitekturasi va kodlashKod toza va tushunarli bo'lishi uchun loyihani komponentlarga ajratamiz. src ichida components papkasini oching.A. Hero Section (src/components/Hero.jsx)jsximport React from 'react';
import { HiArrowRight } from 'react-icons/hi';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <p className="text-emerald-400 font-mono mb-4 text-lg">Salom, mening ismim</p>
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
        Asilbek Olimov.
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-slate-400 mb-6">
        Men Full-Stack dasturchiman.
      </h2>
      <p className="max-w-2xl text-slate-400 text-lg mb-8">
        Men zamonaviy, tezkor va foydalanuvchilar uchun qulay bo'lgan veb-ilovalarni 
        yaratish bilan shug'ullanaman. Hozirda React va Node.js ekotizimida loyihalar qilaman.
      </p>
      <a href="#projects" className="group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition duration-300">
        Loyihalarimni ko'rish
        <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
      </a>
    </section>
  );
}
B. Projects Section (src/components/Projects.jsx)jsximport React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projectData = [
  {
    id: 1,
    title: "E-Commerce Platformasi",
    desc: "React va Tailwind yordamida yaratilgan, to'liq moslashuvchan internet do'kon interfeysi.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "SaaS Dashboard UI",
    desc: "Kompaniyalar uchun moliyaviy tahlillar va grafiklar aks etuvchi boshqaruv paneli.",
    tech: ["React", "Chart.js", "Material UI"],
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 border-b-2 border-slate-800 pb-2 inline-block">
        Saralangan Loyihalar
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project) => (
          <div key={project.id} className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 mb-4 text-sm md:text-base">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, index) => (
                  <span key={index} className="bg-slate-900 text-emerald-400 font-mono text-xs px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-4 text-slate-400">
              <a href={project.github} className="hover:text-emerald-400 text-xl transition"><FiGithub /></a>
              <a href={project.link} className="hover:text-emerald-400 text-xl transition"><FiExternalLink /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
C. Asosiy faylni birlashtirish (src/App.jsx)jsximport React from 'react';
import Hero from './components/Hero';
import Projects from './components/Projects';

function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-slate-100 selection:bg-emerald-500 selection:text-slate-950">
      {/* Bu yerga kelajakda Navbar qo'shish mumkin */}
      <main>
        <Hero />
        <Projects />
      </main>
      <footer className="text-center py-6 text-sm text-slate-500 border-t border-slate-800">
        © {new Date().getFullYear()} Asilbek Olimov. Barcha huquqlar himoyalangan.
      </footer>
    </div>
  );
}

export default App;
4. Portfolioni yanada professional qilish uchun maslahatlar:AOW (Framer Motion): Elementlar sayt skroll bo'lganda silliq chiqishi (fade-in effekti) uchun framer-motion kutubxonasini o'rnating va animatsiyalar qo'shing.Responsive Dizayn: Har doim mobil qurilmalarni hisobga oling. Yuqoridagi kodda ishlatilgan md: prefikslari smartfonlar va monitorlar dizaynini avtomat muvofiqlashtiradi.Deploy (Saytni tarmoqqa yuklash): Tayyor loyihani Vercel, Netlify yoki GitHub Pages platformalariga atigi 2 daqiqada tekinga joylashtirishingiz mumkin. Ko'rsatilgan kod npm run build buyrug'i orqali optimizatsiya qilinadi.        `,
    quiz: {
      question: "Portfolio saytini zamonaviy ko'rsatish uchun nima qo'shish tavsiya etiladi?",
      options: ["Animatsiyalar va qulay dizayn", "Ko'p sonli reklamalar", "Faqat matn", "Katta hajmli musiqa"],
      correct: 0
    }
  },
  { 
    id: 97, 
    title: "97-dars: Portfolio sahifasiga Contact form va Telegram Bot integratsiyasi.", 
    free: false, 
    content: `Portfolio sahifasiga Telegram bot orqali ishlaydigan aloqa shaklini (Contact Form) qo'shish — foydalanuvchi xabarlarini bir zumda telefoningizga qabul qilishning eng qulay usulidir.Buning uchun bizga HTML/CSS, JavaScript va bepul Telegram Bot API kerak bo'ladi. Hech qanday murakkab backend (server) kod yozish shart emas.1-qadam: Telegram Bot yaratish va ID olishTelegramda @BotFather botini qidiring va /newbot buyrug'ini yuboring.Botga nom va yuzerneym (masalan, my_portfolio_bot) bering.BotFather sizga API Token beradi (masalan: 7123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ). Buni saqlab qo'ying.O'zingizning shaxsiy Telegram ID raqamingizni bilish uchun @userinfobot ga xabar yuboring va Id raqamini (masalan: 987654321) nusxalab oling.Yaratgan botingizga kirib, /start tugmasini bosib qo'ying (aks holda bot sizga xabar yubora olmaydi).2-qadam: HTML shaklini yaratish (Contact Form)Portfolio sahifangizning kerakli joyiga quyidagi HTML kodni joylashtiring:html<form id="contactForm">
    <h2>Men bilan bog'lanish</h2>
    
    <label for="name">Ismingiz:</label>
    <input type="text" id="name" required placeholder="Ismingizni kiriting">

    <label for="phone">Telefon raqamingiz:</label>
    <input type="tel" id="phone" required placeholder="+998 90 123 45 67">

    <label for="message">Xabar:</label>
    <textarea id="message" required placeholder="Xabaringizni yozing..."></textarea>

    <button type="submit" id="submitBtn">Yuborish</button>
</form>

<!-- Muvaffaqiyatli yoki xatolik haqida xabar -->
<p id="formStatus" style="display:none; font-weight:bold; margin-top:10px;"></p>
3-qadam: JavaScript orqali Telegramga ulashUshbu JavaScript kodini HTML faylingizning eng pastki qismiga (</body> yopilishidan oldin) </script> teglari ichiga joylashtiring.⚠️ Muhim: Kod ichidagi TOKEN va CHAT_ID joyiga o'zingizning ma'lumotlaringizni yozing.javascriptdocument.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Sahifa yangilanib ketishini oldini oladi

    // Bot ma'lumotlari (O'zingiznikiga almashtiring)
    const TOKEN = "7123456789:ABCdefGhIJKlmNoPQRsTUVwxyZ"; // Bot tokeni
    const CHAT_ID = "987654321"; // Sizning Telegram ID raqamingiz
    const URL = 'https://telegram.org{TOKEN}/sendMessage';

    // Inputlardagi qiymatlarni olish
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    const submitBtn = document.getElementById('submitBtn');
    const statusText = document.getElementById('formStatus');

    // Telegramga yuboriladigan matn formati (Chiroyli ko'rinishda)
    const text = '🔔 **Yangi xabar!**\n\n👤 **Ism:** ${name}\n📞 **Tel:** ${phone}\n💬 **Xabar:** ${message}';

    // Tugmani vaqtincha bloklash
    submitBtn.disabled = true;
    submitBtn.innerText = "Yuborilmoqda...";

    // API so'rov yuborish (Fetch orqali)
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
            parse_mode: 'Markdown' // Matnni qalin (bold) qilish uchun
        })
    })
    .then(response => {
        if (response.ok) {
            statusText.style.display = "block";
            statusText.style.color = "green";
            statusText.innerText = "✅ Xabaringiz muvaffaqiyatli yuborildi!";
            document.getElementById('contactForm').reset(); // Formani tozalash
        } else {
            throw new Error('Xatolik yuz berdi');
        }
    })
    .catch(error => {
        statusText.style.display = "block";
        statusText.style.color = "red";
        statusText.innerText = "❌ Xabar yuborishda xatolik. Keyinroq qayta urinib ko'ring.";
    })
    .finally(() => {
        // Tugmani qayta faollashtirish
        submitBtn.disabled = false;
        submitBtn.innerText = "Yuborish";
    });
});
💡 Xavfsizlik bo'yicha maslahatAgarda siz portfoliongiz kodlarini GitHub kabi ochiq platformalarga yuklamoqchi bo'lsangiz, bot tokeningiz hamma xohlovchilar uchun ko'rinadigan bo'lib qoladi (boshqalar ham sizga bot orqali xabar yuborishi mumkin).Buning oldini olish uchun kelajakda kichikgina Node.js (Express) yoki Next.js API serveridan foydalanib, tokenni backend qismida (.env faylda) yashirin saqlash tavsiya etiladi. Oddiy va tezkor loyihalar uchun esa yuqoridagi variant mutlaqo yetarli.`,
    quiz: {
      question: "Veb-saytdan xabarlarni Telegramga yuborish uchun nima ishlatiladi?",
      options: ["Telegram Bot API", "HTML form mail", "CSS Grid", "Local Storage"],
      correct: 0
    }
  },
  { 
    id: 98, 
    title: "98-dars: Kodlarni optimizatsiya qilish, Debugging va Performance test.", 
    files: true,
    content: `Dasturiy taʼminotni ishlab chiqishda kodlarni optimizatsiya qilish, debugging (xatoliklarni topish) va performance test (unumdorlikni tekshirish) bir-biri bilan chambarchas bogʻliq boʻlgan va dasturning tez hamda barqaror ishlashini taʼminlaydigan uchta asosiy bosqichdir.1. Kodlarni optimizatsiya qilish (Code Optimization)Kodni optimizatsiya qilish — bu dasturning ishlash tezligini oshirish, xotira (RAM) sarfini kamaytirish va resurslardan samarali foydalanish jarayonidir.Algoritmlarni yaxshilash: Katta hajmdagi maʼlumotlar bilan ishlashda vaqt murakkabligini (Time Complexity) kamaytirish (masalan, O(N²) dan \(O(N \log N)\) ga oʻtish).Keshni qoʻllash (Caching): Koʻp takrorlanadigan yoki oʻzgarmas hisob-kitoblar natijalarini xotirada saqlab qolish va qayta hisoblamaslik.Yaxshi kodlash amaliyotlari (Clean Code): Keraksiz sikllar (loops) va oʻzgaruvchilardan qochish, asinxron (async/await) dasturlashdan toʻgʻri foydalanish.Maʼlumotlar bazasini optimallashtirish: Soʻrovlarni (SQL queries) indekslash, ortiqcha "N+1" soʻrovlar muammosini bartaraf etish.2. Debugging (Xatoliklarni topish va tuzatish)Debugging — dasturdagi mantiqiy, sintaktik yoki run-time (ishga tushish vaqtidagi) xatoliklarni aniqlash, ularning kelib chiqish sababini oʻrganish va bartaraf etish jarayonidir.Breakpointʼlar bilan ishlash: Kod ijrosini maʼlum bir qatorda toʻxtatib, oʻzgaruvchilarning oʻsha vaqtdagi qiymatini tekshirish.Log yuritish (Logging): Dasturning turli qismlarida console.log, print yoki maxsus log kutubxonalari orqali tizim holatini qayd etib borish.Xatoliklar monitoringi: Production (jonli) muhitda xatolarni avtomatik tutish va xabar berish uchun Sentry, Crashlytics yoki Logrocket kabi vositalardan foydalanish.3. Performance Test (Unumdorlikni tekshirish)Performance test — dasturning maʼlum bir yuklama (nagruzka) ostida qanchalik tez va barqaror ishlashini, tezkorlik darajasini va resurslar sarfini oʻlchashdir.Load Testing (Yuklama testi): Dastur kutilayotgan normal foydalanuvchilar oqimida oʻzini qanday tutishini tekshirish.Stress Testing: Dasturni oʻz limitlaridan yuqori darajadagi ogʻir yuklamaga duchor qilib, qachon va qanday sinishini (crash boʻlishini) aniqlash.Endurance Testing: Tizim uzoq vaqt davomida (masalan, bir necha kun) tinimsiz ishlaganda xotira yetishmovchiligi (memory leak) yuzaga kelish-kelmasligini kuzatish.Ish jarayonidagi asosiy farqlar (Taqqoslash)XususiyatiDebuggingPerformance TestKodni optimizatsiya qilishAsosiy maqsadXatolarni (bug) topish va tuzatishTizim tezligi va limitlarini oʻlchashKodni tezroq va kam resurs sarflaydigan qilishQachon bajariladi?Kod yozish davomida va xato chiqqandaKod tayyor boʻlgach, relizdan oldinTest natijalari yoki sekinlashuv aniqlangandaAsboblar (Tools)Chrome DevTools, VS Code DebuggerJMeter, Locust, K6Profilerʼlar, Refactoring vositalariOmmabop vositalar (Tools)Veb va Frontend uchun: Chrome DevTools (Lighthouse, Performance tab).Backend va API yuklama uchun: Apache JMeter, k6, Locust.Kod tahlili (Profiling) uchun: Py-Spy (Python), Visual Studio Profiler (.NET), YourKit (Java)..`,
    quiz: {
      question: "Dasturdagi xatolarni qidirib topish jarayoni qanday ataladi?",
      options: ["Debugging", "Deploying", "Designing", "Styling"],
      correct: 0
    }
  },
  { 
    id: 99, 
    title: "99-dars: Yakuniy loyihani Vercel'ga joylash (Deploy) va SEO sozlamalari.", 
    free: false, 
    content: `Loyiha yakunlangach, uni Vercel platformasiga joylash (deploy qilish) va SEO (Qidiruv tizimlarini optimallashtirish) sozlamalarini to'g'ri sozlash uning muvaffaqiyati uchun juda muhimdir.Quyida ushbu jarayonlarni bosqichma-bosqich ko'rib chiqamiz.1-qism: Loyihani Vercel'ga joylash (Deploy qilish)Vercel — bu Next.js, React, Vue va boshqa zamonaviy freymvorklar uchun eng qulay va tezkor xosting platformasi.Git omborini tayyorlash: Loyihangiz kodlarini GitHub, GitLab yoki Bitbucket platformalaridan biriga yuklang (Push qiling).Vercel'ga kirish: Vercel veb-saytiga kiring va Git akkauntingiz orqali ro'yxatdan o'ting.Loyihani import qilish:Boshqaruv panelida "Add New" -> "Project" tugmasini bosing.Git akkauntingizni ulab, kerakli loyiha omborini (repository) tanlang va "Import" tugmasini bosing.Sozlamalarni tekshirish:Framework Preset: Vercel ko'p hollarda loyiha turini (masalan, Next.js, Vite, Nuxt) o'zi avtomatik aniqlaydi.Environment Variables: Agar loyihangizda .env fayli bo'lsa (masalan, maxfiy API kalitlar, baza manzillari), ularni Environment Variables bo'limiga birma-bir kiriting.Deploy qilish: "Deploy" tugmasini bosing. 1-2 daqiqa ichida loyihangiz muvaffaqiyatli ishga tushadi va sizga bepul .vercel.app domenli havola beriladi.2-qism: SEO (Optimallashtirish) sozlamalariSaytingiz Google va boshqa qidiruv tizimlarida yuqori o'rinlarni egallashi uchun quyidagi SEO sozlamalarini amalga oshirish shart.🛠️ Texnik SEO va Meta teglarSaytingizning har bir sahifasida quyidagi asosiy HTML meta teglari bo'lishi kerak:Title: Sahifa sarlavhasi (uzunligi 50-60 belgidan oshmasligi va kalit so'zlar bo'lishi tavsiya etiladi).Description: Sahifa haqida qisqacha ma'lumot (uzunligi 150-160 belgi).Favicon: Saytning kichik logotipi (brauzer tabida ko'rinadigan rasm).🔗 Open Graph (OG) va Twitter CardsIjtimoiy tarmoqlarda (Telegram, Facebook, Twitter, LinkedIn) sayt havolasi ulashilganda chiroyli ko'rinishi uchun quyidagi teglarni kiriting:og:title va og:description — sarlavha va tavsif.og:image — havola ulashilganda chiquvchi maxsus rasm (o'lchami odatda 1200x630 piksel).🤖 Robots.txt va Sitemap.xmlQidiruv robotlari saytingizni to'g'ri skanerlashi uchun bu ikki fayl juda muhim:robots.txt: Qaysi sahifalarni indekslash mumkin yoki mumkin emasligini ko'rsatadi.textUser-agent: *
Allow: /
Sitemap: https://sizningdomeningiz.uz
sitemap.xml: Saytingizdagi barcha faol sahifalar ro'yxati (Next.js yoki maxsus plaginlar yordamida uni avtomatik yaratish mumkin).3-qism: Vercel'da SEO-ni yaxshilash uchun qo'shimcha qadamlarShaxsiy domen ulash (Custom Domain): Bepul .vercel.app o'rniga o'zingizning .uz yoki .com domeningizni ulang. Bu brend ishonchliligi va SEO uchun juda muhim. (Vercel loyiha sozlamalarida Settings -> Domains bo'limidan qo'shiladi).HTTPS sertifikati: Vercel har bir ulangan domenga avtomatik ravishda bepul SSL (HTTPS) sertifikatini taqdim etadi. Bu xavfsizlik va Google reytingi uchun majburiydir.Analitika va Skanerlash:Saytingizni Google Search Console va Yandex Webmaster tizimlariga qo'shing.Tasdiqlash kodini (meta teg) sayt kodiga joylang yoki DNS orqali tekshiring.sitemap.xml havolasini Google Search Console'ga yuboring..`,
    quiz: {
      question: "Veb-saytni internetga chiqarish jarayoni odatda qanday ataladi?",
      options: ["Deployment (Deploy)", "Compilation", "Formatting", "Saving"],
      correct: 0
    }
  },
  { 
    id: 100, 
    title: "100-dars: Tabriklaymiz! 100 kunlik Front-End yo'lini muvaffaqiyatli yakunladingiz 🎉", 
    free: true, 
    content: `100 kunlik Front-End dasturlash roadmap'ini to'liq tugatdingiz! Endi sizda kuchli bilimlar bazasi va tayyor portfoliyolar mavjud. Kelgusida Junior Front-End Developer sifatida ish topish va karyerani rivojlantirish bo'yicha maslahatlar.`,
    quiz: {
      question: "100 kunlik dasturni tugatgandan keyin asosiy qadam nima?",
      options: ["Real loyihalar ustida ishlash va ishga topshirish", "Dasturlashni butunlay to'xtatish", "Faqat nazariya o'qish", "Dam olish"],
      correct: 0
    }
  }
];

export default function Courses({ user, setUser, setActiveTab }) {
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paying, setPaying] = useState(false);
  
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizError, setQuizError] = useState("");

  const handleCompleteLesson = async () => {
    if (!user) {
      alert("Iltimos, oldin tizimga kiring!");
      setActiveTab('auth');
      return;
    }

    if (selectedLesson.quiz) {
      if (selectedOption === null) {
        setQuizError("Iltimos, dars yakuniy testiga javob tanlang!");
        return;
      }
      if (selectedOption !== selectedLesson.quiz.correct) {
        setQuizError("Javob noto'g'ri! Qaytdan urinib ko'ring.");
        return;
      }
    }

    setLoading(true);
    setQuizError("");
    try {
      const res = await fetch(`${API_URL}/complete-lesson`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email })
      });
      const data = await res.json();
      
      if (res.ok) {
        setUser(data.user);
        localStorage.setItem('dev_academy_user', JSON.stringify(data.user));
        alert("To'g'ri javob! Tabriklayman, dars yakunlandi va ballar qo'shildi 🎉");
        setSelectedLesson(null);
        setSelectedOption(null);
      } else {
        alert(data.error || "Xatolik yuz berdi");
      }
    } catch (err) {
      alert("Server bilan aloqada xatolik!");
    } finally {
      setLoading(false);
    }
  };

  if (selectedLesson) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
        <button 
          onClick={() => { setSelectedLesson(null); setSelectedOption(null); setQuizError(""); }}
          className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
          <ArrowLeft className="w-4 h-4" />
          <span>Darslar ro'yxatiga qaytish</span>
        </button>

        <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl space-y-6 shadow-2xl">
          <div className="flex items-center space-x-3 text-cyan-400">
            <BookOpen className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider">100 Kunlik Frontend Roadmap</span>
          </div>

          <h1 className="text-3xl font-black text-slate-100">{selectedLesson.title}</h1>

          <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed space-y-4 whitespace-pre-line bg-slate-950/60 p-6 rounded-2xl border border-slate-800/80">
            {selectedLesson.content}
          </div>

          {selectedLesson.quiz && (
            <div className="bg-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-center space-x-2 text-amber-400">
                <HelpCircle className="w-5 h-5" />
                <h3 className="font-bold text-base">Darsni yakunlash uchun mini-test:</h3>
              </div>
              <p className="text-slate-200 font-medium text-sm">{selectedLesson.quiz.question}</p>
              
              <div className="grid gap-2 pt-2">
                {selectedLesson.quiz.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => { setSelectedOption(idx); setQuizError(""); }}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                      selectedOption === idx 
                        ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300' 
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    {idx + 1}. {option}
                  </button>
                ))}
              </div>

              {quizError && (
                <p className="text-rose-400 text-xs font-semibold pt-1">{quizError}</p>
              )}
            </div>
          )}

          <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
            <span className="text-xs text-slate-400">Testni bajarib darsni yakunlang</span>
            <button 
              onClick={handleCompleteLesson}
              disabled={loading}
              className="flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-all disabled:opacity-50">
              <CheckCircle className="w-5 h-5" />
              <span>{loading ? "Tekshirilmoqda..." : "Darsni yakunlash"}</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleLessonClick = (lesson) => {
    if (lesson.free || (user && user.subscription)) {
      setSelectedLesson(lesson);
      setSelectedOption(null);
      setQuizError("");
    } else {
      setShowPaymentModal(true);
    }
  };

  const handlePayment = async (provider) => {
    if (!user) {
      setActiveTab('auth');
      return;
    }

    setPaying(true);
    try {
      const res = await fetch(`${API_URL}/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: user.email })
      });
      const data = await res.json();

      if (res.ok) {
        setUser(data.user);
        localStorage.setItem('dev_academy_user', JSON.stringify(data.user));
        setShowPaymentModal(false);
        alert(`To'lov ${provider === 'click' ? 'Click' : 'Payme'} orqali muvaffaqiyatli amalga oshirildi! Barcha pullik darslar ochildi 🚀`);
      } else {
        alert(data.error || "To'lovni tasdiqlashda xatolik");
      }
    } catch (err) {
      alert("Server bilan aloqada xatolik!");
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-black">Learn Front-End in 100 Days (Day 1-30)</h2>
          <p className="text-slate-400 text-sm mt-1">Har bir dars yakunida mini-testdan o'tib bilimlaringizni mustahkamlang.</p>
        </div>
        {user && !user.subscription && (
          <button 
            onClick={() => setShowPaymentModal(true)}
            className="bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-bold px-6 py-3 rounded-xl shadow-lg shadow-amber-500/20 text-sm flex items-center space-x-2">
            <Sparkles className="w-4 h-4" />
            <span>PRO Obunani olish (99,000 so'm/oy)</span>
          </button>
        )}
      </div>

      <div className="grid gap-4">
        {lessons.map((lesson) => {
          const isAccessible = lesson.free || (user && user.subscription);
          return (
            <div 
              key={lesson.id}
              onClick={() => handleLessonClick(lesson)}
              className={`p-5 rounded-2xl border flex items-center justify-between transition-all cursor-pointer ${
                isAccessible 
                  ? 'bg-slate-900/80 border-slate-800 hover:border-cyan-500/50' 
                  : 'bg-slate-900/40 border-slate-900/60 opacity-80'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm ${
                  isAccessible ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800 text-slate-500'
                }`}>
                  {lesson.id}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-200">{lesson.title}</h4>
                  <span className="text-xs text-slate-500">
                    {lesson.free ? 'Bepul dars + Test' : 'Pullik obuna talab etiladi'}
                  </span>
                </div>
              </div>

              <div>
                {isAccessible ? (
                  <div className="flex items-center space-x-2 text-cyan-400 text-xs font-bold bg-cyan-500/10 px-4 py-2 rounded-xl">
                    <PlayCircle className="w-4 h-4" />
                    <span>O'qish</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold bg-rose-500/10 px-3 py-2 rounded-xl">
                    <Lock className="w-4 h-4" />
                    <span>Qulflangan</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl max-w-md w-full space-y-6 shadow-2xl relative">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto text-cyan-400">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black">99,000 so'm / oy</h3>
              <p className="text-xs text-slate-400">Click yoki Payme orqali tezkor to'lov</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => handlePayment('click')}
                disabled={paying}
                className="w-full bg-[#00AAFF] hover:bg-[#0092dd] text-slate-950 font-bold py-3.5 rounded-xl transition-all disabled:opacity-50">
                {paying ? "To'lov bajarilmoqda..." : "Click orqali to'lash"}
              </button>
              <button 
                onClick={() => handlePayment('payme')}
                disabled={paying}
                className="w-full bg-[#00E676] hover:bg-[#00c864] text-slate-950 font-bold py-3.5 rounded-xl transition-all disabled:opacity-50">
                {paying ? "To'lov bajarilmoqda..." : "Payme orqali to'lash"}
              </button>
            </div>

            <button 
              onClick={() => setShowPaymentModal(false)}
              className="w-full text-xs text-slate-500 hover:text-slate-300 pt-2 text-center block">
              Bekor qilish
            </button>
          </div>
        </div>
      )}
    </div>
  );
}