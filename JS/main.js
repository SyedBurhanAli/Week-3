function dochange() {
  alert("clicked button with JS Function");
}

function tryNow() {
  var choice; //Important
  if (confirm("Try it")) {
    choice = "You Pressed OK!";
  } else {
    choice = "You Pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = choice;
}

function myFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  voteable = age < 18 ? "Too young" : "Old enough";
  document.getElementById("dem").innerHTML = voteable;
} //Took this from StackOverFlow
