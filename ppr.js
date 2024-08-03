document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("#form");
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
});
function validate() {
    form.addEventListener("submit", function (e){
        e.preventDefault();
    });
    let name = document.querySelector("#name1");
    let cnt = 0;

    resetError("divname");
    resetError("divemail");
    resetError("divnumber");
    resetError("divmessage");

    if (!isNaN(name.value) || name.value.length <= 3) {
        setError("divname", "(Required)");
    } else {
        cnt++;
    }

    let email = document.querySelector("#email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        setError("divemail", "(Required)");
    } else {
        cnt++;
    }

    let phNumber = document.querySelector("#telphone").value;

    if (isNaN(phNumber) || phNumber.length !== 10) {
        setError("divnumber", "(Required)");
    } else {
        cnt++;
    }

    let message = document.querySelector("#textarea");

    if (message.value.trim() === "") {
        setError("divmessage", "(Required)");
    } else {
        cnt++;
    }

    if (cnt === 4) {
        let formData = new FormData(form);
        let url = "https://script.google.com/macros/s/AKfycbzgziuFOd69h5ohB838hybY-dQXYr86G3tvx-njHsoc674jqZ0TWgmZZpx-E9rsX4_B/exec";

        fetch(url, {
            method: "POST",
            body: new URLSearchParams(formData),
        })
            .then((res) => res.text())
            .then((finalRes) => {
                console.log(finalRes);
                showSuccessMessage();
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
}

function setError(id, error) {
    let element = document.getElementById(id);
    let errorElement = element.querySelector(".CS2MC1FMCLabel span");

    if (errorElement) {
        errorElement.innerHTML = error;
    }
}

function resetError(id) {
    let element = document.getElementById(id);

    if (element) {
        let errorElement = element.querySelector(".CS2MC1FMCLabel span");

        if (errorElement) {
            errorElement.innerHTML = "";
        }
    }
}
// 
function showSuccessMessage() {
    let okieThanks = document.getElementById("successIcon");
    okieThanks.style.display = "flex";

    okieThanks.addEventListener("animationend", function () {
        okieThanks.style.display = "none";
    });

    document.querySelector('#form').reset();
}