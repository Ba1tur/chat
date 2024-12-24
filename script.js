const infoContainer = document.getElementById("infoContainer");
const infoBlock = document.getElementById("infoBlock");
const toggleButton = document.getElementById("toggleButton");
const toggleRightButton = document.getElementById("toggleRightButton");
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

// document.addEventListener("DOMContentLoaded", () => {
//   const trigger_boy = document.querySelector(".trigger-boy");
//   const trigger_girl = document.querySelector(".trigger-girl");
//   const modal_boy = document.querySelector("#modal_boy");
//   const modal_girl = document.querySelector("#modal_girl");
//   const chat = document.querySelector("#chat");

//   if (trigger_boy && modal_boy) {
//     trigger_boy.addEventListener("click", () => {
//       modal_boy.style.display = "flex";
//     });
//   } else {
//     console.error("trigger_boy or modal_boy is missing in DOM.");
//   }

//   if (trigger_girl && modal_girl) {
//     trigger_girl.addEventListener("click", () => {
//       modal_girl.style.display = "flex";
//     });
//   } else {
//     console.error("trigger_girl or modal_girl is missing in DOM.");
//   }

//   if (chat) {
//     chat.addEventListener("click", () => {
//       if (modal_boy) modal_boy.style.display = "none";
//       if (modal_girl) modal_girl.style.display = "none";
//     });
//   } else {
//     console.error("Chat element not found in DOM.");
//   }
// });
