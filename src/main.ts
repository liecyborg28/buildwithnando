declare const lucide: any;

window.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons({
    attrs: {
      width: 24,
      height: 24,
      stroke: "currentColor",
      "stroke-width": 2,
    },
  });

  if (mode === "light") {
    html.classList.remove("dark");
    toggle.classList.remove("toggle-dark");
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
  } else {
    html.classList.add("dark");
    toggle.classList.add("toggle-dark");
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
  }
});

// switch mode
const mode = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme"))
  : null;

const html = document.documentElement;

const toggle = document.querySelector(".navbar-link-switch-mode");

const sun = document.querySelector(".light-icon");

const moon = document.querySelector(".dark-icon");

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggle.classList.toggle("toggle-dark");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");

  if (html.className === "dark") {
    localStorage.setItem("theme", JSON.stringify("dark"));
  } else {
    localStorage.setItem("theme", JSON.stringify("light"));
  }
});

// drawer
const menu = document.querySelector(".navbar-link-icon");
const drawer = document.querySelector(".drawer");
const drawerLinkItems = document.querySelectorAll(".drawer-link a");
const closeDrawer = document.querySelector(".close-drawer");

drawerLinkItems.forEach((e) => {
  e.addEventListener("click", () => {
    drawer.classList.toggle("show");
  });
});

menu.addEventListener("click", () => {
  drawer.classList.toggle("show");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.toggle("show");
});
