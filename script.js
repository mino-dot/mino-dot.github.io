function myFunction() {
    document.getElementsByClassName("btn btn-dark");
    alert('Hello');
}

function dud() {
    console.log("Hello");
}

var myVar = setInterval(myTimer, 7000);

function myTimer() {
  var d = new Date();
  console.log(d.toLocaleTimeString());
}