const inputs = document.querySelectorAll("input");

// regex patterns
const regex = {
  username: /^[a-zA-Z\d_]{5,12}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]{5,20})\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  //        yourname    @     domain      .  com          ( .uk )
  password: /^[a-zA-Z\d_\-@]{8,20}$/,
  telephone: /^[\d]{11}$/,
  slug: /^[a-z\d\-]{8,20}$/,
};

// validation function
const validate = (elem, regex) => {
  console.log(elem);
  if (regex.test(elem.value)) {
    elem.classList.remove("invalid");
    elem.classList.add("valid");
  } else {
    elem.classList.remove("valid");
    elem.classList.add("invalid");
  }
};

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener("keyup", (e) => {
    validate(e.target, regex[e.target.getAttribute("name")]);
  });
});
