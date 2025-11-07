import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// gsap.to(".block", {
//   x: "300vw",
//   y: "-200vh",
//   duration: "7",
//   scrollTrigger: {
//     trigger: ".container",
//     markers: true,
//     start: "top top",
//   },
// });

// === Timeline liée au scroll ===
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    start: "top top",
    end: "bottom+=500% top",
    pin: true,
    scrub: true,
    markers: false, // mets true pour voir les repères
  },
});

// === Séquence d’animations ===
tl.to(".block", { x: "300%", y: "-200%", duration: 5, ease: "none" })
  .to(".crique", { y: "-80%", duration: 3, ease: "none" })
  .to(".crique-text", {
    duration: 20,
    ease: "sine.inOut",
    opacity: "100",
    delay: "3",
  })
  .to(".crique", { scale: "20", duration: 8 })
  .to(".crique-text, .background, .title", {
    opacity: "0",
    duration: 1,
  })
  .to(".crique, .crique-text", {
    opacity: "0",
    duration: 1,
  })
  .to(".vacancier-text", {
    duration: 20,
    ease: "sine.inOut",
    opacity: "100",
  })
  .to(".herbe-right", {
    x: "-70%",
    duration: 15,
  })
  .to(
    ".vacancier-right",
    {
      x: "-70%",
      duration: 25,
    },
    "-=15"
  )

  .to(
    ".herbe-left",
    {
      x: "70%",
      duration: 15,
    },
    "-=30"
  )
  .to(
    ".vacancier-left",
    {
      x: "70%",
      duration: 25,
    },
    "-=15"
  )
  .to(".vacancier-text", {
    duration: 20,
    ease: "sine.inOut",
    opacity: "0",
  })
  .to(".herbe-right, .vacancier-right", {
    x: "70%",
    duration: 15,
  })
  .to(
    ".herbe-left, .vacancier-left",
    {
      x: "-70%",
      duration: 15,
    },
    "-=15"
  );
