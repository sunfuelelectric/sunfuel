gsap.registerPlugin(ScrollTrigger);

// const panels = gsap.utils.toArray("#panels-container .panel");

// gsap.to(panels, {
//   xPercent: -100 * (panels.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: "#panels-container",
//     pin: "#panels",
//     start: "top top",
//     scrub: .5,
//     snap: {
//       snapTo: 1 / (panels.length - 1),
//       duration: { min: 1, max: 1 }
//     },
//     end: () => "+=" + document.querySelector("#panels-container").offsetWidth,
//     autoAlpha: 0
//   }
// });

gsap.utils.toArray(".up_reveal").forEach(function (elem) {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 60%",
      end: "+=50 0%",
      toggleActions: "restart complete none reverse"
    },
    y: 200,
    autoAlpha: 0,
    ease: "expo",
    duration: 2
  })
});

gsap.from("#charge-ring", {
  scrollTrigger: {
    trigger: "#charge-360",
    start: "top 80%",
    end: "+=50 0%",
    toggleActions: "restart complete none reset"
  },
  rotate: 90,
  autoAlpha: 0,
  ease: "elastic",
  duration: 3
});

gsap.utils.toArray(".up_reveal_small").forEach(function (elem) {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 95%",
      end: "+=50 0%",
      toggleActions: "restart complete none reverse"
    },
    y: 200,
    autoAlpha: 0,
    ease: "expo",
    duration: 2
  })
});

gsap.utils.toArray(".up_reveal_first").forEach(function (elem) {
  gsap.from(elem, {
    scrollTrigger: {
      trigger: elem,
      // start: "top 75%",
      start: "0px (50%+90px)",
      end: "+=50 0%",
      toggleActions: "restart complete none reverse"
    },
    y: 100,
    autoAlpha: 0,
    ease: "expo",
    duration: 2
  })
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("panel");
  for (i = 0; i < x.length; i++) {
    x[i].style.opacity="0";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.opacity="1";
  setTimeout(carousel, 6000);
}

document.getElementById("ctrlOne").onclick = function () {
  document.getElementById("ctrlOne").classList.remove("btnCtrlGeneric");
  document.getElementById("ctrlTwo").classList.remove("ctrlBtnTwo");
  document.getElementById("ctrlThree").classList.remove("ctrlBtnThree");

  document.getElementById("ctrlOne").classList.add("ctrlBtnOne");
  document.getElementById("ctrlTwo").classList.add("btnCtrlGeneric");
  document.getElementById("ctrlThree").classList.add("btnCtrlGeneric");

  document.getElementById("phaseDiveOne").style.opacity = 1;
  document.getElementById("phaseDiveTwo").style.opacity = 0;
  document.getElementById("phaseDiveThree").style.opacity = 0;
}
document.getElementById("ctrlTwo").onclick = function () {
  document.getElementById("ctrlOne").classList.remove("ctrlBtnOne");
  document.getElementById("ctrlTwo").classList.remove("btnCtrlGeneric");
  document.getElementById("ctrlThree").classList.remove("ctrlBtnThree");

  document.getElementById("ctrlOne").classList.add("btnCtrlGeneric");
  document.getElementById("ctrlTwo").classList.add("ctrlBtnTwo");
  document.getElementById("ctrlThree").classList.add("btnCtrlGeneric");

  document.getElementById("phaseDiveOne").style.opacity = 0;
  document.getElementById("phaseDiveTwo").style.opacity = 1;
  document.getElementById("phaseDiveThree").style.opacity = 0;
}
document.getElementById("ctrlThree").onclick = function () {
  document.getElementById("ctrlOne").classList.remove("ctrlBtnOne");
  document.getElementById("ctrlTwo").classList.remove("ctrlBtnTwo");
  document.getElementById("ctrlThree").classList.remove("btnCtrlGeneric");

  document.getElementById("ctrlOne").classList.add("btnCtrlGeneric");
  document.getElementById("ctrlTwo").classList.add("btnCtrlGeneric");
  document.getElementById("ctrlThree").classList.add("ctrlBtnThree");

  document.getElementById("phaseDiveOne").style.opacity = 0;
  document.getElementById("phaseDiveTwo").style.opacity = 0;
  document.getElementById("phaseDiveThree").style.opacity = 1;
}

