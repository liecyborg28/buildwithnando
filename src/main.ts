// @ts-nocheck
declare const lucide: any;

function createIcons() {
  lucide.createIcons({
    attrs: {
      width: 24,
      height: 24,
      stroke: "currentColor",
      "stroke-width": 2,
    },
  });
}

window.addEventListener("DOMContentLoaded", () => {
  createIcons();

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

  initSkills();
  initExperiences();
  initProjects();
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

function initSkills() {
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
    {
      name: "Docker",
      image:
        "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000",
    },
  ].map(
    (e) =>
      `<div class="swiper-item">
              <div class="glass swiper-item-image-container">
                <img src="${e.image}"
                  class="swiper-item-image" alt="skill image"/>
              </div>
              <span class="swiper-item-image-text">${e.name}</span>
            </div>`
  );

  const swiper = new Swiper(".skills-swiper", {
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
      576: { slidesPerView: 5 },
      768: { slidesPerView: 6 },
      992: { slidesPerView: 7 },
      1200: { slidesPerView: 7 },
    },

    effect: "slide",
  });
}

function initExperiences() {
  const experiences = [
    {
      position: "Front-End Developer",
      place: "Kukerja",
      period: "Jul 2022 - Jun 2024",
      jobs: [
        "Develop and maintain user-facing features based on design requirements",
        "Collaborate with UI/UX designers to translate mockups into functional interfaces",
        "Optimize applications for speed, performance, and scalability",
        "Integrate frontend logic with backend APIs and services",
        "Debug, troubleshoot, and fix interface and compatibility issues",
      ],
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "Angular", "Flutter"],
    },
    {
      position: "Fullstack Developer",
      place: "Build with Nando",
      period: "Jan 2024 - Present",
      jobs: [
        "Build and maintain both frontend and backend systems",
        "Design, implement, and manage databases",
        "Develop and integrate APIs for client-server communication",
        "Deploy, monitor, and maintain applications including basic DevOps tasks",
        "Test, debug, and document applications to ensure performance and security",
      ],
      skills: [
        "HTML",
        "TailwindCSS",
        "TypeScript",
        "React",
        "NextJS",
        "ExpressJS",
        "MongoDB",
        "PostgreSQL",
      ],
    },
  ];

  const container = document.querySelector(".experiences-container");

  container.innerHTML = experiences
    .map((x) => {
      return `<div class="glass experience">
            <div class="flex flex-col gap-3">
              <div class="experience-heading">
                <div class="flex flex-col">
                  <span class="experience-position">${x.position}</span>
                  <span class="experience-place">${x.place}</span>
                </div>
                <span class="experience-period">
                  ${x.period}
                </span>
              </div>
              <div>
                <ul class="list-disc pl-4">
                  ${x.jobs.map((y) => `<li class="mb-3">${y}</li>`).join("")}
                </ul>
              </div>
            </div>
            <div class="experience-footer">
            ${x.skills
              .map(
                (y) => `<div class="glass experience-footer-item">${y}</div>`
              )
              .join("")}  
            </div>
          </div>`;
    })
    .join("");
}

function initProjects() {
  const projects = [
    {
      images: [
        "/projects/1/1.png",
        "/projects/1/2.png",
        "/projects/1/3.png",
        "/projects/1/4.png",
        "/projects/1/5.png",
      ],
      title: "General POS",
      desc: "A modern multi-business POS application with smart inventory control and seamless sales management designed to simplify business operations.",
      techs: ["HTML", "SCSS", "TypeScript", "Angular", "ExpressJS", "MongoDB"],
      demo: "https://general-pos-fe.vercel.app",
    },
    {
      images: ["/projects/3/1.png"],
      title: "Plantask",
      desc: "Smart minimal task manager with AI that suggests tasks based on your list title. Perfect for fast and focused planning.",
      techs: ["TailwindCSS", "TypeScript", "NextJS"],
      repo: "https://github.com/liecyborg28/plantask",
      demo: "https://myplantask.vercel.app",
    },
    {
      images: ["/projects/2/1.png", "/projects/2/2.png", "/projects/2/3.png"],
      title: "Articless",
      desc: "An AI-powered tool for fast, accurate paraphrasing and text summarization to improve writing efficiency.",
      techs: [
        "TailwindCSS",
        "TypeScript",
        "NextJS",
        "PostgreSQL",
        "Supabase",
        "ChakraUI",
      ],
      repo: "https://github.com/liecyborg28/articless",
      demo: "https://articless.vercel.app",
    },
    {
      images: [
        "/projects/5/1.png",
        "/projects/5/2.png",
        "/projects/5/3.png",
        "/projects/5/4.png",
      ],
      title: "Cleveresu",
      desc: "Cleveresu is an intelligent CV generator designed to help you create polished, ATS-friendly resumes with ease.",
      techs: [
        "TailwindCSS",
        "TypeScript",
        "NextJS",
        "Supabase",
        "ExpressJS",
        "PostgresSQL",
      ],
      repo: "https://github.com/liecyborg28/cleveresu",
      demo: "https://cleveresu.vercel.app",
    },
    {
      images: [
        "/projects/4/1.png",
        "/projects/4/2.png",
        "/projects/4/3.png",
        "/projects/4/4.png",
      ],
      title: "Report Flow",
      desc: "Report Flow helps you write, format, and send your reports automatically — powered by AI and delivered right on schedule.",
      techs: [
        "TailwindCSS",
        "TypeScript",
        "NextJS",
        "n8n",
        "Google Sheets API",
        "Telegram Bot API",
      ],
      repo: "https://github.com/liecyborg28/report-flow",
      demo: "https://report-flow.netlify.app",
    },
  ];

  const container = document.querySelector(".projects-container");

  container.innerHTML = projects
    .map((x, i) => {
      return `<div class="glass project">
            <div class="swiper project-swiper">
              <div class="swiper-wrapper">
              ${x.images
                .map(
                  (y, j) =>
                    `<div class="glass swiper-slide project-slide">
                    <img src="${y}" alt="project ${i + 1}, slide ${
                      j + 1
                    }" srcset="">
                  </div>`
                )
                .join("")}
              </div>
              <div class="swiper-pagination"></div>
            </div>

            <span class="project-title">
              ${x.title}
            </span>

            <p class="project-desc">
              ${x.desc}
            </p>
            <div class="techs">
              ${x.techs
                .map((y) => `<div class="glass tech">${y}</div>`)
                .join("")}
            </div>
            <div class="project-footer">
              <a target="${x.repo ? "_blank" : ""}" href="${
        x.repo || ""
      }" class="${
        x.repo ? "project-footer-item" : "project-footer-item-disable"
      }"><i data-lucide="github" class="scale-60"></i> ${
        x.repo ? "See Repository" : "Private Repository"
      }</a>
              <a target="${x.demo ? "_blank" : ""}" href="${
        x.demo || ""
      }" class="project-footer-item"><i data-lucide="external-link" class="scale-60"></i> Visit Demo</a>
            </div>
          </div>`;
    })
    .join("");

  createIcons();

  const swiper = new Swiper(".project-swiper", {
    effect: "coverflow",
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 120,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
