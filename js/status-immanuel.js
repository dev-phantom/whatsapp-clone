var slideIndex = 0 ;
showSlides();

function showSlides(){
    var i;
    var slides =  document.getElementsByClassName("myslides");
    for (i = 0; i < slides.lenght; i++){
        slides[i].style.display="none";
        
    }
}