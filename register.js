let registeredName = "";
let registeredPass = "";

function register() {
    let Name = document.getElementsByClassName('first1')[0].value;
    let email = document.getElementsByClassName('first2')[0].value;
    let pass1 = document.getElementsByClassName('first3')[0].value;
    let pass2 = document.getElementsByClassName('first4')[0].value;

    if (pass1 !== pass2) {
        alert("Check your password and Try Again !");
    } else {
        localStorage.setItem("registeredName", Name);
        localStorage.setItem("registeredPass", pass1);
        alert("Successfully Registered!");
        window.location.href = "login.html"; 
    }
}

function Login() { //function to login
    let name1 = document.getElementsByClassName('first1')[0].value;
    let password = document.getElementsByClassName('first2')[0].value;

    let storedName = localStorage.getItem("registeredName");
    let storedPass = localStorage.getItem("registeredPass");

    if (name1 !== storedName && password !== storedPass) {
        alert("Invalid Credentials! Try Again");
    } else if (name1 !== storedName) {
        alert("Incorrect Username!");
    } else if (password !== storedPass) {
        alert("Incorrect Password!");
    } else {
        alert("Successfully logged in! Redirecting...");
        window.location.href = "index.html"; 
    }
}
