var openAnc=document.querySelector(".login_btn");
openAnc.addEventListener("click", function(){
    var form = document.querySelector("#myForm");
    var shadow=document.querySelector("#shadow");
    form.classList.remove("hidden");
    shadow.classList.remove("hidden");
    form.classList.add("vision");
    shadow.classList.add("shadow");
    var close=document.querySelector("#close");
    close.addEventListener("click", function(){
    form.classList.remove("vision");
    shadow.classList.remove("shadow");
    form.classList.add("hidden");
    shadow.classList.add("hidden");    
    })
    shadow.addEventListener("click", function(){
    form.classList.remove("vision");
    shadow.classList.remove("shadow");
    form.classList.add("hidden");
    shadow.classList.add("hidden");     
    })
})
var openAnc=document.querySelector(".registr_btn");
openAnc.addEventListener("click", function(){
    var form = document.querySelector("#myForm_t");
    var shadow=document.querySelector("#shadow");
    form.classList.remove("hidden_t");
    shadow.classList.remove("hidden");
    form.classList.add("vision");
    shadow.classList.add("shadow");
    var close=document.querySelector("#close");
    close.addEventListener("click", function(){
    form.classList.remove("vision");
    shadow.classList.remove("shadow");
    form.classList.add("hidden_t");
    shadow.classList.add("hidden");    
    })
    shadow.addEventListener("click", function(){
    form.classList.remove("vision");
    shadow.classList.remove("shadow");
    form.classList.add("hidden_t");
    shadow.classList.add("hidden");     
    })
})
var slides = document.querySelectorAll('.slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2500);
function nextSlide() {
slides[currentSlide].className = 'slide';
currentSlide = (currentSlide+1)%slides.length;
slides[currentSlide].className = 'slide showing';
}