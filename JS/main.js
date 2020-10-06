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
