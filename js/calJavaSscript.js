const show = document.getElementById('display');

function display(value){
    show.value += value;
}


function clearDisplay(){
    show.value = '';
}

function calculate(){
    try{
        show.value = eval(show.value);
    }
   catch{
    show.value = ("اكمل العملية")
   }
}