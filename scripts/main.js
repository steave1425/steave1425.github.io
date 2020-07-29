let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/waterfall.jpg') {
      myImage.setAttribute ('src','img/mountains.jpg');
    } else {
      myImage.setAttribute ('src','img/waterfall.jpg');
    }
}

let myButton = document.querySelector('button');
let myGreeting = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myGreeting.textContent = 'Hello ' + myName + ', learn about Tao.';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myGreeting.textContent = 'Hello ' + storedName + ', learn about Tao.';
}

myButton.onclick = function() {
  setUserName();
}