// تعريف عنصر العرض وحفظه في متغير 
const show = document.getElementById('display');
// دالة عرض المعادلات الحسابية
function display(number){
    // إذا كان النص المدخل "اكمل العملية" يتم حذفها ثم إدخال عنصر آخر
    if (show.value == "اكمل العملية"){
        show.value = '';
    }
    show.value += number;
}
// دالة مسح محتويات عنصر العرض
function clearDisplay(){
    show.value = '';
}
// دالة حساب ناتج المعادلة الحسابية
function calculate(){
    try{
        show.value = eval(show.value);
    }
   catch{
    show.value = ("اكمل العملية")
   }
}
// دالة تفعيل العمليات الحسابية المدخلة من لوحة المفاتيح
document.addEventListener('keydown', function(event){
    // حفظ قيمة المفتاح المضغوط في متغير
    const key = event.key;
    // عرض الأرقام والعمليات الحسابية في مكان العرض
    if(!isNaN(key) || ["*", "-", "/", "+"].includes(key)){
        display(key);
    }
    //  إذا تم الضغط على = أو Enter يتم حساب الناتج
    else if (key == "=" || key == "Enter") {
        calculate()
    } 
    // إذا تم الضغط على مفاتيح backspace يتم مسح العنصر الأخير في شاشة العرض
    else if (key == "Backspace"){
        show.value = show.value.slice(0, -1)
    }
    // مسح جميع عناصر العرض عند الضغط على delete
    else if (key == "Delete")
        clearDisplay()
})