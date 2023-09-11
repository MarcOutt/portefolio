function toggleCheckbox() {
    var checkbox = document.querySelector(".navigation__checkbox");
    checkbox.checked = !checkbox.checked;
}

var boutons = document.querySelectorAll(".navigation__link");

const textToType = "Développeur Python";
const typingSpeed = 150;
const typingSpeedDelete = 50;
const timeToShow = 1500;


function typeAndDeleteText(index, direction) {
    const typingElement = document.getElementById("typing-text");
  
    if (direction === "type") {
      if (index <= textToType.length) {
        typingElement.textContent = textToType.substring(0, index);
        setTimeout(() => typeAndDeleteText(index + 1, "type"), typingSpeed);
      } else {
        setTimeout(() => typeAndDeleteText(index - 1, "delete"), timeToShow);
      }
    } else if (direction === "delete") {
      if (index >= 0) {
        typingElement.textContent = textToType.substring(0, index);
        setTimeout(() => typeAndDeleteText(index - 1, "delete"), typingSpeedDelete);
      } else {
        setTimeout(() => typeAndDeleteText(1, "type"), typingSpeed);
      }
    }
  }
  
  typeAndDeleteText(1, "type");


boutons.forEach(function(bouton) {
    bouton.addEventListener('click', toggleCheckbox);
});


function parallaxScroll() {
    const navBackground = document.querySelector('header');
    const scrollPosition = window.scrollY;
    navBackground.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
  }

 window.addEventListener('scroll', parallaxScroll);


