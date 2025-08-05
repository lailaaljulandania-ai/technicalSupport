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