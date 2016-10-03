function validate() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    if (name === '' || email === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if (!(email).match(emailReg)) {
        alert("Invalid Email...!!!!!!");
        return false;
    } else {
        return true;
    }
}

function submit() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  if (validate()) // Calling validation function
  {
      var x = document.getElementsByName('form_name');
      x[0].submit(); //form submission
      alert(" Name : " + name + " \n Email : " + email + " \n Form Name : " + document.getElementById("form_id").getAttribute("name") + "\n\n Form Submitted Successfully......");
  }
}
