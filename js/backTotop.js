
/* ==========================================================================
   18. BACK TO TOP BUTTON
   ========================================================================== */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  const onScroll = () => {
    const shouldShow = window.scrollY > 600;
    btn.hidden = false;
    btn.classList.toggle("visible", shouldShow);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}