var myImage = document.querySelector('img');

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nice to meet you, ' + myName + ' !';
  } 

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Nice to meet you, ' + storedName;
  }

  myButton.onclick = function() {
    setUserName();
  }

