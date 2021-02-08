const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');






slides.forEach(function(slide,index){
    slide.style.left =`${index * 100}%`
});


let counter = 0;

prevBtn.addEventListener('click',function(){
    counter--;
    carousel()
});


nextBtn.addEventListener('click',function(){
    counter++;
    carousel()
});


function carousel(){
    //working with slides

    if(counter === slides.length){
        counter = 0
    }
    if(counter < 0){
        counter = slides.length - 1
    }
    slides.forEach(function(slide){
        slide.style.transform = `translate(-${counter * 100}%)`
    })
}