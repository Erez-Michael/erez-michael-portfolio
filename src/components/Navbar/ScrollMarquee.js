import React from "react";
import "./ScrollMarquee.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScrollMarquee = () => {
  gsap.registerPlugin(ScrollTrigger);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion)");
  const sections = document.querySelectorAll(".page-content__section");
  const marquees = document.querySelectorAll(".marquee div");
  let marqueeText = "";

  const updateMarqueeText = () => {
    [...marquees].forEach((marquee) => {
      marquee.classList.add("active");
      marquee.addEventListener("transitionend", () => {
        marquee.classList.remove("active");
        marquee.innerText = `${marqueeText}`.repeat(50);
      });
    });
  };

  const updateBgColor = (color) =>
    document.documentElement.style.setProperty("--color-background", color);

  const setActiveSection = (section) => {
    marqueeText = section.querySelector("h2").textContent;
    [...sections].forEach((section) => section.classList.remove("active"));
    section.classList.add("active");
    !prefersReducedMotion.matches && updateBgColor(section.dataset.bgColor);
    updateMarqueeText();
  };

  if (!prefersReducedMotion.matches) {
    gsap.to(".marquee div", {
      scrollTrigger: {
        trigger: ".page-content",
        scrub: 0.25,
        start: "top bottom",
        end: "bottom top",
        ease: "power2",
      },
      xPercent: -50,
    });
  }

  gsap.utils.toArray(".page-content__section h2").forEach((heading) => {
    ScrollTrigger.create({
      trigger: heading,
      start: "top center",
      end: "bottom 200px",
      toggleActions: "play reset play reset",
      ease: "power2",
      onEnter: () =>
        marqueeText !== heading.textContent &&
        setActiveSection(heading.parentElement),
      onEnterBack: () =>
        marqueeText !== heading.textContent &&
        setActiveSection(heading.parentElement),
    });
  });

  return (
    <>
      <div class="marquee-container">
        <div class="marquee marquee--bottom">
          <div></div>
        </div>
      </div>

      <main class="page-content">
        <section class="page-content__section" data-bg-color="#17202A">
          <h2>|| Portfolio </h2>
        </section>
      </main>
    </>
  );
};

export default ScrollMarquee;
