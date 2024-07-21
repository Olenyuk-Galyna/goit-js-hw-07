const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;
  const trimedEmail = email.value.trim();
  const trimedPassword = password.value.trim();

  if (trimedEmail === "" || trimedPassword === "") {
    return alert("All form fields must be filled in");
  }

  const userData = { email: trimedEmail, password: trimedPassword };
  console.log(userData);
  e.currentTarget.reset();
}
