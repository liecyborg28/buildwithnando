// @ts-nocheck
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

  initSwiper();
});

const mode = localStorage.getItem("theme")
  ? JSON.parse(localStorage.getItem("theme")!)
  : null;

const html = document.documentElement;
const toggle = document.querySelector(".navbar-link-switch-mode")!;
const sun = document.querySelector(".light-icon")!;
const moon = document.querySelector(".dark-icon")!;

toggle.addEventListener("click", () => {
  html.classList.toggle("dark");
  toggle.classList.toggle("toggle-dark");
  sun.classList.toggle("hidden");
  moon.classList.toggle("hidden");

  localStorage.setItem(
    "theme",
    JSON.stringify(html.classList.contains("dark") ? "dark" : "light")
  );
});

const menu = document.querySelector(".navbar-link-icon")!;
const drawer = document.querySelector(".drawer")!;
const drawerLinkItems = document.querySelectorAll(".drawer-link a");
const closeDrawer = document.querySelector(".close-drawer")!;

drawerLinkItems.forEach((e) => {
  e.addEventListener("click", () => {
    drawer.classList.toggle("show");
  });
});

menu.addEventListener("click", () => {
  drawer.classList.toggle("show");
});

closeDrawer.addEventListener("click", () => {
  drawer.classList.remove("show");
});

function initSwiper() {
  const SwiperGlobal = (window as any).Swiper;
  if (!SwiperGlobal) {
    console.error("Swiper belum dimuat dari CDN!");
    return;
  }

  const slides = [
    {
      name: "HTML5",
      image:
        "https://img.icons8.com/?size=100&id=owWiEaAJmGKK&format=png&color=000000",
    },
    {
      name: "CSS3",
      image:
        "https://img.icons8.com/?size=100&id=4d9YPiN04osD&format=png&color=000000",
    },
    {
      name: "JavaScript",
      image:
        "https://img.icons8.com/?size=100&id=YX2eDFImIaWh&format=png&color=000000",
    },
    {
      name: "TypeScript",
      image:
        "https://img.icons8.com/?size=100&id=Xf1sHBmY73hA&format=png&color=000000",
    },
    {
      name: "Angular",
      image:
        "https://img.icons8.com/?size=100&id=6SWtW8hxZWSo&format=png&color=000000",
    },
    {
      name: "React",
      image:
        "https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000",
    },
    {
      name: "NextJS",
      image:
        "https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000",
    },
    {
      name: "TailwindCSS",
      image:
        "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
    },
    {
      name: "Figma",
      image:
        "https://img.icons8.com/?size=100&id=zfHRZ6i1Wg0U&format=png&color=000000",
    },
    {
      name: "Supabase",
      image:
        "https://img.icons8.com/?size=100&id=sH0rW2TvYdr9&format=png&color=000000",
    },
    {
      name: "NodeJS",
      image:
        "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
    },
    {
      name: "Express",
      image:
        "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000",
    },
    {
      name: "Prisma",
      image:
        "https://img.icons8.com/?size=100&id=aqb9SdV9P8oC&format=png&color=000000",
    },
    {
      name: "MongoDB",
      image:
        "https://img.icons8.com/?size=100&id=8rKdRqZFLurS&format=png&color=000000",
    },
    {
      name: "PostgresSQL",
      image:
        "https://img.icons8.com/?size=100&id=JRnxU7ZWP4mi&format=png&color=000000",
    },
  ].map(
    (e) =>
      `<div class="swiper-item">
              <div class="glass swiper-item-image-container">
                <img src="${e.image}"
                  class="swiper-item-image" alt="skill image">
              </div>
              <span class="swiper-item-image-text">${e.name}</span>
            </div>`
  );

  const swiper = new SwiperGlobal(".swiper", {
    slidesPerView: 6,
    spaceBetween: 0,
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    virtual: { slides },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    speed: 3000,
    breakpoints: {
      576: { slidesPerView: 4 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 6 },
      1200: { slidesPerView: 7 },
    },

    // effect: "slide",
  });

  swiper.on("slideChange", () => {
    console.log("Slide active index:", swiper.activeIndex);
  });
}
