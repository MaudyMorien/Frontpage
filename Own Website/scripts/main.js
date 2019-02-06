var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile.jpg') {
      myImage.setAttribute ('src','images/freakshake.jpg');
    } else {
      myImage.setAttribute ('src','images/profile.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Nice to meet you, ' + myName;
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
  