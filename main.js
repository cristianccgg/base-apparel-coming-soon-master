const errorMsg = document.getElementById("error-msg");
const errorIcon = document.getElementById("error-icon");
const btn = document.getElementById("btn");
const input = document.getElementById("input");

btn.addEventListener("click", (event) => {
  if (ValidateEmail(input.value)) {
    alert("Thanks for registering");
    errorMsg.classList.add("active");
    errorIcon.classList.add("active");
  } else {
    errorMsg.classList.toggle("active");
    errorIcon.classList.toggle("active");
  }
});

function ValidateEmail(email) {
  let regex =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return regex.test(email);
}
