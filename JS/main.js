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

function changecolor() {
  //Getting HTML Element
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");
  /* "document" refers to all the html webpage getElementById("d1") is a method goes into document having Parameter/Id "d1". */

  //Setting the CSS Class
  dd1.className = "blueback";
  dd2.className = "yellowback";
  //As the name suggest its xyz.className so inside quotation marks we give Class-Name

  //The attribute className is one of the characteristics of an HTML element that can be accessed in JavaScript
}

function changetext() {
  var dd1 = document.getElementById("d1");
  var dd2 = document.getElementById("d2");

  dd1.innerHTML = "Bonjour";
  dd2.innerHTML = "Sayonara";
  //The attribute shown here .innerHTML accesses the HTML content within the element(dd1), in this case, that's everything inside the div, which is text.
}

function changetextcolor() {
  document.getElementById("d1").style.color = "magenta";
  document.getElementById("d2").style.color = "#ff0000";
}
