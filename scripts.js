// JavaScript to be added
response = '';
var a = document.getElementById('button-yellow'); 
a.addEventListener('click', function() {
  response = prompt("Please provide your email", "name@email.com");
  if (response) {
  a.textContent="Thanks for your email!";
}
}, false);





