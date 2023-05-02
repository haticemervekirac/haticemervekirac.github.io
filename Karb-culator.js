//If button is pressed, the relevant content of the menu item will appear.
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  var title = coll[i];
  var content = title.nextElementSibling;
  content.style.display = "none";

  title.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


 /*The main calculation window. It calculates the amounts user still needs to take, based on the dietary limitation and 
 the given amount of food*/








 
// DOM elements
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');

// Sign up form submit event
signupForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  // Hash the password (replace this with your own password hashing implementation)
  const hashedPassword = await hashPassword(password);

  // TODO: Add your own logic here to securely store the email and hashed password, e.g. sending data to a server for registration

  // Clear form
  document.getElementById('signup-email').value = '';
  document.getElementById('signup-password').value = '';

  // Show success message (replace this with your own success message implementation)
  alert('Successfully signed up!');
});

// Log in form submit event
loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  // Get user input
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  // Hash the password 
  const hashedPassword = await hashPassword(password);

  // TODO: Add your own logic here to securely compare the email and hashed password with stored values, e.g. sending data to a server for authentication

  // Clear form
  document.getElementById('login-email').value = '';
  document.getElementById('login-password').value = '';

  // Show success message (replace

 //collapsible group of food elements
})