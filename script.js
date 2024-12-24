const infoContainer = document.getElementById("infoContainer");
const infoBlock = document.getElementById("infoBlock");
const infoAbout = document.getElementById("infoAbout");
const toggleButton = document.getElementById("toggleButton");
const toggleRightButton = document.getElementById("toggleRightButton");
const toggleButtonProfile = document.getElementById("toggleButtonProfile");
const checkbox = document.getElementById("myCheckbox");
const menu = document.getElementById("menu");

toggleButton.addEventListener("click", () => {
  if (infoContainer.classList.contains("expanded")) {
    infoContainer.classList.remove("expanded");
    toggleButton.textContent = "More";
  } else {
    infoContainer.classList.add("expanded");
    toggleButton.textContent = "Hide";
  }
});

toggleRightButton.addEventListener("click", () => {
  if (infoBlock.classList.contains("expanded")) {
    infoBlock.classList.remove("expanded");
    toggleRightButton.textContent = "More";
  } else {
    infoBlock.classList.add("expanded");
    toggleRightButton.textContent = "Hide";
  }
});

toggleRightButton.addEventListener("click", () => {
  if (infoBlock.classList.contains("expanded")) {
    infoBlock.classList.remove("expanded");
    toggleRightButton.textContent = "More";
  } else {
    infoBlock.classList.add("expanded");
    toggleRightButton.textContent = "Hide";
  }
});

toggleButtonProfile.addEventListener("click", () => {
  if (infoAbout.classList.contains("expanded")) {
    infoAbout.classList.remove("expanded");
    toggleButtonProfile.textContent = "More";
  } else {
    infoAbout.classList.add("expanded");
    toggleButtonProfile.textContent = "Hide";
  }
});

function updateBackground() {
  if (checkbox.checked) {
    menu.style.transform = "none";
  } else {
    menu.style.transform = "translate(-100%, 0)";
  }
}

// Добавляем обработчик событий
checkbox.addEventListener("change", updateBackground);

// Устанавливаем начальное состояние
updateBackground();

