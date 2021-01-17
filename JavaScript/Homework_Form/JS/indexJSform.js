const button = document.getElementById("submit_next");
const errorUsername = () => {
    const usernameValue = document.getElementById("username").value;
    const checkForUsername = usernameValue.match("/[^A-Za-z0-9]+/");
    
    if (usernameValue.length < 4 && !checkForUsername) {
        document.getElementById("error_user").style.display = "block";
    } 
    else {
        document.getElementById("error_user").style.display = "none";
    }
}

const errorEmail = () => {
    const emailValue = document.getElementById("email").value;
    const checkForEmail = emailValue.match("/\S+@\S+\.\S+/");
    
    if (!checkForEmail) {
        document.getElementById("error_email").style.display = "block";
    } 
    else {
        document.getElementById("error_email").style.display = "none";
    }
}

const errorFirstName = () => {
    const firstNameValue = document.getElementById("first").value;
    const checkForFirstName = firstNameValue.match("/[^A-Za-z -.]+/");

    if (!checkForFirstName) {
        document.getElementById("error_first").style.display = "block";
    } 
    else {
        document.getElementById("error_first").style.display = "none";
    }
}


const errorLastName = () => {
    const lastNameValue = document.getElementById("last").value;
    const checkForLastName = lastNameValue.match("/[^A-Za-z -.]+/");

    if (!checkForLastName) {
        document.getElementById("error_last").style.display = "block";
    } 
    else {
        document.getElementById("error_last").style.display = "none";
    }
}


const errorPhone = () => {
    const phoneValue = document.getElementById("phone").value;
    const checkForPhone = phoneValue.match("/[^0-9]+/");

    if (phoneValue.length !== 10 && !checkForPhone) {
        document.getElementById("error_phone").style.display = "block";
    } 
    else {
        document.getElementById("error_phone").style.display = "none";
    }
}



button.addEventListener("click", errorUsername);
button.addEventListener("click", errorEmail);
button.addEventListener("click", errorFirstName);
button.addEventListener("click", errorLastName);
button.addEventListener("click", errorPhone);

