gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".flyIn_left").forEach(function (elem) {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 60%",
      end: "100px 20%",
      toggleActions: "restart complete none reverse"
    },
    x: 200,
    autoAlpha: 0,
    ease: "expo",
    duration: 2
  })
});

gsap.utils.toArray(".flyIn_right").forEach(function (elem) {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 60%",
      end: "100px 20%",
      toggleActions: "restart complete none reverse"
    },
    x: -200,
    autoAlpha: 0,
    ease: "expo",
    duration: 2
  })
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("img-slides");
  var dots = document.getElementsByClassName("img-control");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // captionText.innerHTML = dots[slideIndex - 1].alt;
  ScrollTrigger.refresh()
}