window.onload = function() {



}


function checkFields() {


    var fnamecorect = 1;
    var lnamecorect = 1;
    var emailcorect = 1;
    var usernamecorect = 1;
    var passcorect = 1;

    var fName = document.getElementById("firstName");
    var lName = document.getElementById("lastName");
    var email = document.getElementById("email");
    var username = document.getElementById("username");
    var password = document.getElementById("password");


    if (fName.value.length < 2) {
        fnamecorect = 0;
        fName.className = "incorrect_field";
    }
    if (lName.value.length < 1) {
        lName.className = "incorrect_field";
        lnamecorect = 0;
    }
    if (!(email.value.includes("@"))) {
        email.className = "incorrect_field";
        emailcorect = 0;
    }
    if (username.value.length < 1) {
        username.className = "incorrect_field";
        usernamecorect = 0;
    }
    if (password.value.length < 5) {
        password.className = "incorrect_field";
        passcorect = 0;
    }


    if (fName.value.length > 2) {
        fnamecorect = 1;
        fName.className = "correct_field";
    }
    if (lName.value.length > 1) {
        lName.className = "correct_field";
        lnamecorect = 1;
    }
    if (email.value.includes("@")) {
        email.className = "correct_field";
        emailcorect = 1;
    }
    if (username.value.length > 1) {
        username.className = "correct_field";
        usernamecorect = 1;
    }
    if (password.value.length > 5) {
        password.className = "correct_field";
        passcorect = 1;
    }

    if (passcorect && fnamecorect && lnamecorect && emailcorect && usernamecorect) {
        location.replace("signUpPage2/signUpPage2.html");

    }


}