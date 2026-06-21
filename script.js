document.addEventListener("DOMContentLoaded", () => {
  const learnMoreLink = document.querySelector('a[href="#learn-more"]');

  if (!learnMoreLink) {
    return;
  }

  learnMoreLink.addEventListener("click", (event) => {
    const target = document.querySelector("#learn-more");

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
