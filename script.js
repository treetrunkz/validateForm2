document.getElementById("myForm").onsubmit = validate;

function validate() {

    let isValid = true;

    let name = document.getElementById("firstName").value;
    if (name === null || name === "") {
        let errname = document.getElementById("errFname")
        errname.classList.remove("error");
        isValid = false;
    }

    let email = document.getElementById("email").value;
    if(email === "" || !email.contains([",", "@"])){
        let emailerror = document.getElementById("emailerror");
        emailerror.classList.remove("error");
        isValid = false;
    }

    let passwordConfirm = document.getElementById("confirmPassword").value;
    let password = document.getElementById("password").value;
    if(password === "" || password !== passwordConfirm || passwordConfirm === "") {
        let passworderror = document.getElementById("passworderror");
        passworderror.classList.remove("error");
        isValid = false;
    }

    if(password.length < 8 || password.length === 0){
        let confirmerror = document.getElementById("passwordconfirmerror");
        confirmerror.classList.remove("error");
        isValid = false;
    }

    let check = document.getElementById("terms").checked;
    if(check=== false ){
        let checkTerms = document.getElementById("checkboxerror");
        checkTerms.classList.remove("error");
        isValid = false;
    }

    return isValid;
}

function button() {
    validate();
}
//document.getElementById("myForm").submit();


