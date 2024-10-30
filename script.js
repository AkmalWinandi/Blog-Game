// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add active state to current section in table of contents
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("h2");
  const tableOfContents = document.querySelectorAll(".table-of-contents a");

  sections.forEach((section, index) => {
    const top = section.offsetTop - 100;
    const bottom = top + section.offsetHeight;

    if (window.scrollY >= top && window.scrollY < bottom) {
      tableOfContents.forEach((link) =>
        link.classList.remove("fw-bold", "text-primary")
      );
      tableOfContents[index].classList.add("fw-bold", "text-primary");
    }
  });
});
