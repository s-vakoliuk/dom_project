//Код,  який за допомоги document.getElementById отримує текст з параграфа з id "content"
let p1 = document.getElementById('content');

//Код,  який за допомоги document.getElementById отримує текст з блоку з id "rules"
let rules1 = document.getElementById('rules');

//Код, який за допомоги document.getElementById замінить текст параграфа з id 'content' на будь-який інший
p1.innerHTML="I really like FIAT Grande Punto"

//Код,  який за допомоги document.getElementById замінить текст з div id 'rules' на будь-який інший
rules1.innerHTML="Головне правило Бійцівського клубу не лижи язиком, а розмовляй солов'їною мовою!"

//Код який замінює змініть кожному елементу колір фону на червоний
p1.style.backgroundColor="red";
rules1.style.backgroundColor="red";

//Код який замінює змініть кожному елементу колір тексту на синій
p1.style.color="blue";
rules1.style.color="blue";

//Код який отримує весь список класів елемента з id=rules і вивести їх в console.log
let rulesid=document.getElementsByClassName('rules');
console.log(rulesid);