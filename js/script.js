WelcomeMessage();

//Welcome Message
function WelcomeMessage() {
    let username = prompt("Enter Your Name");
    if (username) {
        document.getElementById("username").innerHTML = username;
    }
    else {
        alert("Welcome to Website Gita!");
    }
}

// Form Validation
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Check if any field is empty
   if (name === "" || email === "" || message === "") {
    // Display an error message
    alert("Please fill in all fields");
   }
   else {
    // Display a success message
    alert(`Thanks, ${name}! Form submitted successfully!`);
   }
}