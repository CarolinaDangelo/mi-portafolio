document.addEventListener("focusin", (evento) => {
    let error = evento.target;
    console.log(error);
    console.log(error.parentElement)

    error.addEventListener("focusout", () => {
        console.log(error.validity);
        if (!error.validity.valid) {
            error.parentElement.querySelector(".input__error").style.visibility = "visible";
        } else {
            error.parentElement.querySelector(".input__error").style.visibility = "hidden";
        }
    });
});