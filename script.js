const emailForm = document.querySelector(".email-form");
const successMessage = document.querySelector(".success-message");
const ctaText = document.querySelector(".cta-text");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", () => {
    ctaText.classList.add("hidden");
    emailForm.classList.add("hidden");
    successMessage.classList.remove("hidden");
    successMessage.classList.add("flex");
})