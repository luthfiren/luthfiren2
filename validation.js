
function validateName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
  
    
    if (!name.match(/^[a-zA-Z]+$/)) {
      nameInput.classList.add("is-invalid");
      alert("Nama harus terdiri dari huruf saja.");
      return false;
    } else {
      nameInput.classList.remove("is-invalid");
      return true;
    }
  }
  
  
  function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
  
   
    if (!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      emailInput.classList.add("is-invalid");
      alert("Email tidak valid.");
      return false;
    } else {
      emailInput.classList.remove("is-invalid");
      return true;
    }
  }
  
 
  function validateForm() {
   
    if (!validateName()) {
      return false;
    }
  
    
    if (!validateEmail()) {
      return false;
    }
  
  
  
    return true;
  }
  
  
  document.getElementById("submit").addEventListener("click", validateForm);