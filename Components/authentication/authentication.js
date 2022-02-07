const authComponent = document.querySelector("#auth-pages");
const btnToSignUp = document.querySelector("#btn-to-signup");
const btnToLogIn = document.querySelector("#btn-to-login");

btnToSignUp.addEventListener("click", () => {
  authComponent.classList.add("auth-component-rotate");
});

btnToLogIn.addEventListener("click", () => {
  authComponent.classList.remove("auth-component-rotate");
});
