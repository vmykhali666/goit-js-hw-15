const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const formDataObject = {};

    formData.forEach(function (value, key) {
        formDataObject[key] = value;
    });

    console.log(formDataObject);

    loginForm.reset();
});