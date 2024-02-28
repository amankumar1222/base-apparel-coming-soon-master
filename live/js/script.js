console.log("aasan hai");



const email = document.getElementById("email")
const btn = document.querySelector(".btn")
const error = document.querySelector(".error")
const icon = document.querySelector(".icon")


function validateEmail(email) {
    var re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}



document.getElementById('subEmail').addEventListener('submit', function (e) {    
    e.preventDefault()
    let isValid = validateEmail(email.value)


    if (isValid == false) {
        error.style.display = "flex"
        icon.style.display = "flex"
    }
    else {
     console.log("Successfully");
     error.style.display = "none"
     icon.style.display = "none"
     
    }




})