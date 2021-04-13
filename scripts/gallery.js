function openSlides() {
    document.getElementById("modalgallery").style.display = "block";
  }

  function closeSlides() {
    document.getElementById("modalgallery").style.display = "none";
  }
  
  var index = 1;
  showSlides(index);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(index += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(index = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var thumb = document.getElementsByClassName("slidethumb");
    var caption = document.getElementById("caption");
    if (n > slides.length) {index = 1}
    if (n < 1) {index = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < thumb.length; i++) {
      thumb[i].className = thumb[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    thumb[index-1].className += " active";
    caption.innerHTML = thumb[index-1].alt;
  }