/*
البحث 
داخل 
الصفحة
*/
// القيمة المدخله للبحث عنها من محتوى الصفحة
const searchForm = document.getElementById('search');
// الاستماع إلى نقر زر الإرسال أو Enter
searchForm.addEventListener('submit', function(event){
  removeHighlight();
  // منع إعادة تحميل الصفحة
  event.preventDefault();
  // حفظ القيمة المدخلة في متغير
  const searchText = searchForm.searchFeild.value.trim();
  // حفظ محتوى الصفحة في متغير
  const content = document.getElementById('contact');

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


// دالة إزالة التظليل السابق
function removeHighlight(){
  const content = document.getElementById('contact');
  // حفظ محتويات النصوص في متغير
  const tags = content.querySelectorAll('*');
  // الدوران على جميع عناصر tags
  for (let tag of tags){
    // إزالة كلاس التظليل من جميع الصفحة
    tag.classList.remove('highlight');
  }
}

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(event) {
  // تقسيم الاسم الكامل إلى أجزاء (كلمات) بناءً على الفراغ
  const nameParts = contactForm.name.value.trim().split(/\s+/);   
  // التحقق إن كان عدد الكلمات في الاسم 4 أو أكثر
  const hasFourNames = (nameParts.length >= 4);
  // التحقق أن البريد الإلكتروني ينتهي بـ .om
  const emailDomainOK = contactForm.email.value.toLowerCase().endsWith(".om");
  // إظهار الرسالة التحذيرية
  const warninigMessage = document.getElementById("warningMessage");

  // إذا كان الشرطان صحيحين، اطبع Valid، وإلا Invalid
  if (hasFourNames && emailDomainOK) {
        // منع إعادة تحميل الصفحة
        event.preventDefault();
        warninigMessage.innerHTML = ("شكرا جزيلا، سيتم مراجعة طلبك");
        warninigMessage.style.backgroundColor = "rgba(80, 148, 95, 0.68)";
        warninigMessage.style.display = "block";
    }
     
  else if (!hasFourNames){
      // منع إعادة تحميل الصفحة
      event.preventDefault();
      warninigMessage.innerHTML = ("الرجاء التأكد من إدخال الاسم الرباعي");
      warninigMessage.style.display = "block";
  } 
  else{
    // منع إعادة تحميل الصفحة
      event.preventDefault();
      warninigMessage.innerHTML = ("الايميل يجب أن ينتهي بـــ .om");
      warninigMessage.style.display = "block";
  } 
})