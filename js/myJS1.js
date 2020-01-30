var slideIndexCurrent = 0; 
var actionCurrent = "running";
var timeCurrent = 0;
var slides = document.getElementsByClassName("slide");
init();

var timeCurrentSave = parseInt(localStorage.getItem("timeCurrentSave"));
if(!timeCurrentSave){
    timeCurrentSave = timeCurrent;
}

setInterval(function(){ showSlides(); }, 1000);

document.getElementById("container").addEventListener("mouseover", mouseOver);
document.getElementById("container").addEventListener("mouseout", mouseOut);

function mouseOver() {
    actionCurrent = "pause";
}

function mouseOut() {
    actionCurrent = "running";
}

function init(){
    for (var i = 0; i < slides.length; i++) {
    if (i != 0) {
        slides[i].style.display = "none";
        }
    }
}

function prevSlides() {
    console.log("next");
    slideIndexCurrent--;
    console.log("--------------/" + slideIndexCurrent)
    for (var i = 0; i < slides.length; i++) {
        if (i != slideIndexCurrent) {
            timeCurrentSave = 0;
            slides[i].style.display = "none";
            if (slideIndexCurrent < 0) {
                slideIndexCurrent = 0; // bị tắc
            }
        }
    }

    slides[slideIndexCurrent].style.display = "block";
}

function nextSlides() {
    slideIndexCurrent++;
    for (var i = 0; i < slides.length; i++) {
        if (i != slideIndexCurrent) {
            timeCurrentSave = 0;
            slides[i].style.display = "none";
            if (slideIndexCurrent == slides.length) {
                slideIndexCurrent = 0;
            }
        }
    }

    slides[slideIndexCurrent].style.display = "block";
}

function showSlides() {
    console.log(actionCurrent);
    if(actionCurrent == "running") {
        timeCurrentSave += 1000;
        localStorage.setItem("timeCurrentSave", timeCurrentSave);
        console.log(timeCurrentSave);
        if (timeCurrentSave >= 5000) {
            timeCurrentSave = 0;
            console.log(slideIndexCurrent)
            slideIndexCurrent++;  
            if (slideIndexCurrent == slides.length) {
                slideIndexCurrent = 0;
            }

            for (var i = 0; i < slides.length; i++) {
                if (i != slideIndexCurrent) {
                    slides[i].style.display = "none";
                }
            }

            slides[slideIndexCurrent].style.display = "block";
        }
    }
}