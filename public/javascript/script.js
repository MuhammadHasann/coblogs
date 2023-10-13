const root = document.documentElement;

const hamburgerMenu = document.getElementById("hamburger-menu");
const nav = document.querySelector("nav");
const navUl = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  if (event.target !== hamburgerMenu && event.target !== navUl) {
    nav.classList.remove("active");
  }
});

// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("header-fixed");
//   } else {
//     header.classList.remove("header-fixed");
//   }
// };

const darkModeButton = document.getElementById("darkMode");
const modalDarkMode = document.getElementById("modal-dark-mode");

darkModeButton.addEventListener("click", () => {
  modalDarkMode.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target !== darkModeButton) modalDarkMode.classList.remove("active");
});

// Dark Mode
const lightModeComp = () => {
  localStorage.theme = "light";
  darkModeButton.classList.add("fa-sun");
  darkModeButton.classList.remove("fa-moon");
  lightToggle.classList.add("active");
  darkToggle.classList.remove("active");
  checkboxDarkMode.checked = false;
  root.style.setProperty("--primary-color", "#06b6d4");
  root.style.setProperty("--button", "#0f172a");
  root.style.setProperty("--text-button", "#f1f5f9");
  root.style.setProperty("--mode", "#f1f5f9");
  root.style.setProperty("--mode-transparent", "rgba(241, 245, 249, 0.7)");
  root.style.setProperty("--text-mode", "#181818");
  root.style.setProperty("--bg-other", "#f1f5f9");
  root.style.setProperty("--text-aside", "#181818");
  root.style.setProperty("--bg-copyright", "#0C4A6E");
  root.style.setProperty("--bg-notification", "#f1f5f9");
  root.style.setProperty("--bg-nav", "#f1f5f9");
};

const darkModeComp = () => {
  localStorage.theme = "dark";
  darkModeButton.classList.remove("fa-sun");
  darkModeButton.classList.add("fa-moon");
  lightToggle.classList.remove("active");
  darkToggle.classList.add("active");
  checkboxDarkMode.checked = true;
  root.style.setProperty("--primary-color", "#06b6d4");
  root.style.setProperty("--button", "#334155");
  root.style.setProperty("--text-button", "#f1f5f9");
  root.style.setProperty("--mode", "#0f172a");
  root.style.setProperty("--mode-transparent", "rgba(15, 23, 42, 0.7)");
  root.style.setProperty("--text-mode", "#f1f5f9");
  root.style.setProperty("--bg-other", "#1E293B");
  root.style.setProperty("--text-aside", "#94a3b8");
  root.style.setProperty("--bg-copyright", "#082F49");
  root.style.setProperty("--bg-notification", "#020617");
  root.style.setProperty("--bg-nav", "#1e293b");
};

const lightToggle = document.getElementById("light-toggle");
const darkToggle = document.getElementById("dark-toggle");
const checkboxDarkMode = document.getElementById("checkboxDarkMode");

if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  darkModeComp();
} else {
  lightModeComp();
}

if (!checkboxDarkMode.checked) {
  darkModeButton.classList.add("fa-sun");
  darkModeButton.classList.remove("fa-moon");
  lightToggle.classList.add("active");
  darkToggle.classList.remove("active");
} else {
  darkModeButton.classList.remove("fa-sun");
  darkModeButton.classList.add("fa-moon");
  lightToggle.classList.remove("active");
  darkToggle.classList.add("active");
}

lightToggle.addEventListener("click", () => {
  lightModeComp();
});

darkToggle.addEventListener("click", () => {
  darkModeComp();
});

const listMenu = document.querySelectorAll(".list-menu");

listMenu.forEach((menu) => {
  menu.addEventListener("click", () => {
    listMenu.forEach((otherMenu) => {
      otherMenu.classList.remove("active");
    });
    menu.classList.add("active");
  });
});

const joinNewsletter = document.querySelector(".join-newsletter");
const notification = document.querySelector(".notification");
const closeNotification = document.querySelector("#close-notification");

joinNewsletter.addEventListener("submit", (e) => {
  e.preventDefault();

  notification.classList.add("active");

  setTimeout(() => {
    notification.classList.remove("active");
  }, 3000);
});

closeNotification.addEventListener("click", () => {
  notification.classList.remove("active");
});
