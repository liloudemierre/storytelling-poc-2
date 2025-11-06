import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".block", {
  x: "150vw",
  y: "-150vh",
  scrollTrigger: {
    trigger: ".container",
    markers: true,
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
