var slideIndex = 0;
var timeout;
var interval;
var count = 0;
init();

function init() {
  showSlides();
  autoShowSlides();
}

function autoShowSlides() {
  console.log("autoShowSlides")
  interval = setInterval(showSlides, 3000)
}

function showSlides() {
  console.log("showSlides")
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
}

function timeOut() {
  timeout = setTimeout(() => {
    count++;
  }, 1000);
  console.log(count)
}

function pause() {

}

