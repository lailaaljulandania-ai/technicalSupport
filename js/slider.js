/*
السلايدر
*/
// جمع جميع الشرائح التي تحوي على اسم class=box 
let boxs = document.querySelectorAll(".service-box"); 

// ترتيب البوكسات [0, 1 ,2 ,3,4,5]
// طول Nodlist 6 عناصر

let current = 0; //البوكس الأول
let second  = 1; // البوكس الثاني
let third = 2; // البوكس الثالث

// دالة إظهار الشريحة بناءا على ترتيب الشريحة
function showBox(current, second, third) {
  boxs.forEach(box => box.classList.remove("active"));
  boxs[current].classList.add("active");
  boxs[second].classList.add("active");
  boxs[third].classList.add("active");
  // إعادة ترتيب البوكس بناء على الأولوية
  boxs[current].style.order = 1;
  boxs[second].style.order = 2;
  boxs[third].style.order = 3;
}
// دالة الشريحة التالية
function nextBox(){
  current = (current + 1) % boxs.length; 
  second = (second + 1) % boxs.length; 
  third = (third + 1) % boxs.length; 

  showBox(current, second, third);
}

// دالة الشريحة السابقة
function prevBox(){
  current = (current - 1 + boxs.length) % boxs.length;
  second = (second - 1 + boxs.length) % boxs.length;
  third = (third - 1 + boxs.length) % boxs.length; 

  showBox(current, second, third);
}

// إظهار الشريحة الأولى عند تحميل الصفحة
showBox(current, second, third);

// تشغيل دالة nextBox تلقائيا كل ثانيتين
// setInterval(nextBox, 2000);