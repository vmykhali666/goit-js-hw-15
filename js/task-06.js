const input = document.querySelector("#validation-input");

input.addEventListener("blur", function () {
  const expectedLength = parseInt(input.getAttribute("data-length"), 10);
  const currentLength = input.value.length;

  if (currentLength === expectedLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});