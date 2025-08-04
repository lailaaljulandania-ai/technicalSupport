// تعريف login form
const loginForm = document.getElementById("loginForm");
// add listener
loginForm.addEventListener("submit", function(event){
    // حفظ اسم المستخدم وكلمة المرور المدخلة عن طريق المستخدم
    const userName = loginForm.username.value;
    const password = loginForm.password.value;
    // حفظ اسم المستخدم في المتصفح
    localStorage.setItem("name", userName);
    // قائمة أسماء المستخدمين وكلمات المرور
    const users = {
        // كلمة المرور : اسم المستخدم
        "LAILA" : "123",
        "ALI" : "8267",
        "SALIM" : "123",
    }
    // 1) تحويل اسم المستخدم إلى الأحرف الكبيرة
    // 2) التأكد من وجود اسم المستخدم وكلمة المرور متطابقة
    if (userName.toUpperCase() in users && password == users[userName.toUpperCase()]) {
        loginForm.action = "pages/home.html";  
    }
     // إذا كان اسم المستخدم أو كلمة المرور خاطئة
    else {
        // منع إعادة تحميل الصفحة
        event.preventDefault();
        // إظهار الرسالة التحذيرية
        const warninigMessage = document.getElementById("warningMessage");
        warninigMessage.innerHTML = ("الرجاء التأكد من اسم المستخدم وكلمة المرور");
        warninigMessage.style.display = "block";
    }  
});




