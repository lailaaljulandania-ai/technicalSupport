// اسم المستخدم
let userName = localStorage.getItem("name");
if(document.getElementById("greeting")){
// عرض اسم المستخدم
document.getElementById("greeting").innerHTML = `مرحبا، ${userName}`;
/*
السلايدر
*/
// جمع جميع الشرائح التي تحوي على اسم class=slide 
let slides = document.querySelectorAll(".slide"); 
// تعرف زر التالي
const nextBtn = document.getElementById('nextBtn');
// تعرف زر السابق
const prevBtn = document.getElementById('prevBtn');
// ترتيب الشريحة الأولى (الصورة الأولى)
let slideIndex = 0;

// دالة إظهار الشريحة بناءا على ترتيب الشريحة
function showSlide(index){
  
  slides.forEach((slide) => (slide.classList.remove("active")));
  // إضافة كلاس أكتف لعرض الشريحة المراد عرضها
  slides[index].classList.add("active");
}
// دالة الشريحة التالية
function nextSlide(){
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

// دالة الشريحة السابقة
function prevSlide(){
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// عند الضغط على زر التالي إظهار الشريحة التالية
nextBtn.addEventListener('click', nextSlide);

// عند الضغط على زر السابق إظهار الشريحة السابقة
prevBtn.addEventListener('click', prevSlide);

// إظهار الشريحة الأولى عند تحميل الصفحة
showSlide(slideIndex);

// تشغيل دالة nextSlide تلقائيا كل ثانيتين
setInterval(nextSlide, 2000);
}
/*
البحث 
داخل 
الصفحة
*/
// القيمة المدخله للبحث عنها من محتوى الصفحة
const searchForm = document.getElementById('search');
// الاستماع إلى نقر زر الإرسال أو Enter
searchForm.addEventListener('submit', function(event){
  // منع إعادة تحميل الصفحة
  event.preventDefault();
  // حفظ القيمة المدخلة في متغير
  const searchText = searchForm.searchFeild.value.trim();
  // حفظ محتوى الصفحة في متغير
  const content = document.getElementById('content');

  // حفظ محتويات النصوص في متغير
  const pTags = content.querySelectorAll('*');
  // الدوران على جميع عناصر <p> tags
  for (let p of pTags){
    // حفظ نص التاج في متغير
    const text = p.innerHTML;
    // التأكد من وجود كلمة البحث في النص
    if(searchText && text.includes(searchText)){
      // تظليل النص 
      p.innerHTML = text.replaceAll(searchText, `<span class="highlight"> ${searchText}</span>`)
    }
  }
  // مسح محتويات حقل البحث بعد إتمام عملية البحث
  searchForm.searchFeild.value = "";
});
