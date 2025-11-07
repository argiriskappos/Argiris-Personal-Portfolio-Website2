document.addEventListener("DOMContentLoaded", () => {
  console.log("Argiris Portfolio Loaded ✅");

  // Example: form validation feedback
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! I’ll get back to you soon.");
      form.reset();
    });
  }
});
