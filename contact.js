document.getElementById("contactForm").addEventListener("submit", function(event){

event.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let result = document.getElementById("result");

let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let phonePattern = /^[0-9]+$/;

if(name === "" || email === "" || phone === "" || message === ""){

result.style.color = "red";
result.innerHTML = "All fields are required.";

return;

}

if(!emailPattern.test(email)){

result.style.color = "red";
result.innerHTML = "Please enter a valid email address.";

return;

}

if(!phonePattern.test(phone)){

result.style.color = "red";
result.innerHTML = "Phone number must contain only digits.";

return;

}

result.style.color = "green";
result.innerHTML = "Form submitted successfully!";

document.getElementById("contactForm").reset();

});