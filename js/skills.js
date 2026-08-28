
/* ==========================================================================
   SKILLS SECTION — SCROLL REVEAL
   Base sa mga class sa index.html: .skill-category.reveal-up, .skill-card
   I-paste/i-append lang ito sa script.js mo.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const skillsSection = document.getElementById("skills");
  if (!skillsSection) return;

  // .skill-category.reveal-up -> fade/slide-in ng bawat column (Front-End, UI/UX, Tools, Other)
  const revealTargets = skillsSection.querySelectorAll(".reveal-up");

  // .skill-card -> para sa in-view class (kung gusto mo pa rin gamitin sa ibang effect,
  // hindi na ito required para lumabas ang fill ng skill-bar, CSS-only na iyon ngayon)
  const skillCards = skillsSection.querySelectorAll(".skill-card");

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealTargets.forEach((el) => observer.observe(el));
  skillCards.forEach((el) => observer.observe(el));
});