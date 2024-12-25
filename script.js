const infoContainer = document.getElementById("infoContainer");
const infoContainerMobile = document.getElementById("infoContainerMobile");
const infoBlock = document.getElementById("infoBlock");
const infoBlockMobile = document.getElementById("infoBlockMobile");
const infoAbout = document.getElementById("infoAbout");
const toggleButton = document.getElementById("toggleButton");
const toggleButtonMobile = document.getElementById("toggleButtonMobile");
const toggleRightButton = document.getElementById("toggleRightButton");
const toggleButtonProfile = document.getElementById("toggleButtonProfile");
const infoBlockRightMobile = document.getElementById("infoBlockRightMobile");
const toggleRightButtonMobile = document.getElementById(
  "toggleRightButtonMobile"
);
const infoAboutMobile = document.getElementById("infoAboutMobile");
const toggleButtonProfileMobile = document.getElementById(
  "toggleButtonProfileMobile"
);

const checkbox = document.getElementById("myCheckbox");
const checkbox2 = document.getElementById("checkbox2");
const menu = document.getElementById("menu");

const toggleHandler = (button, target) => {
  button.addEventListener("click", () => {
    if (target.classList.contains("expanded")) {
      target.classList.remove("expanded");
      button.textContent = "More";
    } else {
      target.classList.add("expanded");
      button.textContent = "Hide";
    }
  });
};

toggleHandler(toggleButton, infoContainer);
toggleHandler(toggleRightButton, infoBlock);
toggleHandler(toggleButtonProfile, infoAbout);
toggleHandler(toggleButtonMobile, infoContainerMobile);
toggleHandler(toggleRightButtonMobile, infoBlockRightMobile);
toggleHandler(toggleButtonProfileMobile, infoAboutMobile);

function updateBackground() {
  if (checkbox.checked || checkbox2.checked) {
    menu.style.transform = "translate(0, 0)";
  } else {
    menu.style.transform = "translate(-200%, 0)";
  }
}

checkbox.addEventListener("change", updateBackground);
checkbox2.addEventListener("change", updateBackground);

updateBackground();
