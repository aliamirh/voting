// this creates our first global  function and it is ready from the beggining of opening the page becasuse of the ready before function
$(document).ready(function() {
askUser();
});
// this function will repeat if the user get to the end of the else function
function askUser() {
  var age = parseInt(prompt("How old are you?"));

  if (age >= 18) {
    $('#ballet').show();
  } else if (age < 18) {
     $("#under-18").show();
  } else {
     alert("numbers only please")
     askUser();
  }
}
