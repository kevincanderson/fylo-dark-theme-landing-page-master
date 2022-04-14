function myFunction() {
    const email = document.getElementById("email");
    
    email.addEventListener('keyup', function (event) {
      isValidEmail = email.checkValidity();
      console.log(isValidEmail);
  
    if ( isValidEmail ) {
      document.getElementById("invalid-email").style.visibility = "hidden";
    } else {
      document.getElementById("invalid-email").style.visibility = "visible";
    }
  })};
  
  myFunction();