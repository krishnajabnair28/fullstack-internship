const form = document.getElementById("blogForm");
form.addEventListener("submit", function(event){
event.preventDefault();
const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;
if(name=="" || email=="" || message==""){
alert("Please fill all fields.");
return;
}
if(name.length<3){
alert("Name should contain at least 3 letters.");
return;
}if(!email.includes("@")){
alert("Enter a valid email.");
return;
}
if (message.length < 10) {
    alert("Message should contain at least 10 characters.");
    return;
}
alert("Form Submitted Successfully!");
});
