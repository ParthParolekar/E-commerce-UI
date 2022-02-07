const authComponent = document.querySelector("#auth-pages");
const btnToSignUp = document.querySelector("#btn-to-signup");
const btnToLogIn = document.querySelector("#btn-to-login");

btnToSignUp.addEventListener("click", () => {
  console.log("cliked");
  authComponent.classList.add("auth-component-rotate");
});

btnToLogIn.addEventListener("click", () => {
  console.log("clicked");
  authComponent.classList.remove("auth-component-rotate");
});
