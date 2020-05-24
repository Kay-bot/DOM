const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = "username is valid";
  } else {
    feedback.textContent =
      "username must contain letters only & be between 6 & 12 characters long";
  }
});

form.username.addEventListener("keyup", (e) => {
  if (usernamePattern.test(e.target.value)) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
