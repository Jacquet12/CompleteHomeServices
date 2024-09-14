let slideIndex = 0;
showSlides();

// Função que mostra os slides
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    
    // Oculta todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slideIndex++;
    
    if (slideIndex > slides.length) {slideIndex = 1}    
    
    // Exibe o slide atual
    slides[slideIndex - 1].style.display = "block";  
    
    // Muda de slide a cada 5 segundos
    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    slideIndex += n - 1;
    showSlides();
}
