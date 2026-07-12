// @ts-nocheck
declare const lucide: any;
declare const Swiper: any;

/* ------------------------------------------------------------------ */
/* data                                                                */
/* ------------------------------------------------------------------ */

const skills = [
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
  {
    name: "Golang",
    image: "https://img.icons8.com/color/100/golang.png",
  },
  {
    name: "FastAPI",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  {
    name: "Python",
    image: "https://img.icons8.com/color/100/python.png",
  },
];

const experiences = [
  {
    position: "AI Native Engineer",
    place: "PT. eBdesk Teknologi",
    period: "Jun 2026 - Present",
    jobs: [
      "Developed and maintained AI-powered web applications using ReactJS for the frontend and FastAPI for backend services",
      "Designed and implemented RESTful APIs to support AI workflows, data processing pipelines, and real-time application features",
      "Integrated Large Language Models (LLMs), AI agents, and external AI services into enterprise applications to enhance automation and user experience",
      "Collaborated with cross-functional teams to translate business requirements into scalable, secure, and high-performance AI-native solutions",
      "Optimized application performance, API reliability, and deployment processes through code refactoring, testing, and continuous integration practices",
    ],
    skills: ["ReactJS", "FastAPI", "RESTful API", "LLMs", "AI Agents", "CI/CD"],
  },
  {
    position: "Full-Stack Developer",
    place: "PT. eBdesk Teknologi",
    period: "Jan 2026 - Jun 2026",
    jobs: [
      "Developed and maintained end-to-end web applications using ReactJS for frontend development and FastAPI for backend services",
      "Designed and implemented RESTful APIs, authentication mechanisms, and database integrations to support business requirements",
      "Built responsive and user-friendly interfaces while ensuring optimal application performance across devices",
      "Collaborated with product owners, designers, and fellow developers to deliver scalable and maintainable software solutions",
      "Performed debugging, testing, code reviews, and system optimization to improve application reliability and user experience",
    ],
    skills: [
      "ReactJS",
      "FastAPI",
      "RESTful API",
      "MongoDB",
      "PostgreSQL",
      "JWT",
    ],
  },
  {
    position: "Software Engineer",
    place: "Script Smelter Studios",
    period: "Jan 2026 - Mar 2026",
    jobs: [
      "Developed and maintained an MCP server used for structured and efficient web scraping processes",
      "Designed scraping architectures to automatically and periodically collect data from various sources",
      "Implemented data parsing and transformation logic to ensure scraped data meets system requirements",
      "Optimized server performance and stability to handle large-scale scraping operations",
      "Monitored, debugged, and continuously improved scraping processes and server infrastructure",
    ],
    skills: [
      "MCP Server",
      "Web Scraping",
      "Data Parsing",
      "System Architecture",
      "Performance Optimization",
    ],
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
];

const projects = [
  {
    images: [
      "/projects/1/1.png",
      "/projects/1/2.png",
      "/projects/1/3.png",
      "/projects/1/4.png",
      "/projects/1/5.png",
      "/projects/1/6.png",
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
    images: [
      "/projects/2/1.png",
      "/projects/2/4.png",
      "/projects/2/2.png",
      "/projects/2/3.png",
    ],
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
      "/projects/5/5.png",
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

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* theme                                                               */
/* ------------------------------------------------------------------ */

function initTheme() {
  const html = document.documentElement;
  const toggle = document.getElementById("theme-toggle")!;
  const sun = toggle.querySelector(".icon-sun")!;
  const moon = toggle.querySelector(".icon-moon")!;

  const saved = localStorage.getItem("theme")
    ? JSON.parse(localStorage.getItem("theme")!)
    : null;

  function apply(dark: boolean) {
    html.classList.toggle("dark", dark);
    // moon shown while in dark mode, sun while in light mode
    moon.classList.toggle("hidden", !dark);
    sun.classList.toggle("hidden", dark);
  }

  apply(saved ? saved === "dark" : true);

  toggle.addEventListener("click", () => {
    const dark = !html.classList.contains("dark");
    apply(dark);
    localStorage.setItem("theme", JSON.stringify(dark ? "dark" : "light"));
  });
}

/* ------------------------------------------------------------------ */
/* mobile menu                                                         */
/* ------------------------------------------------------------------ */

function initMenu() {
  const menu = document.getElementById("mobile-menu")!;
  const open = document.getElementById("menu-btn")!;
  const close = document.getElementById("menu-close")!;

  open.addEventListener("click", () => menu.classList.add("open"));
  close.addEventListener("click", () => menu.classList.remove("open"));
  menu.querySelectorAll(".mobile-link").forEach((link) => {
    link.addEventListener("click", () => menu.classList.remove("open"));
  });
}

/* ------------------------------------------------------------------ */
/* skills marquee                                                      */
/* ------------------------------------------------------------------ */

function renderSkills() {
  const chip = (s) =>
    `<div class="skill-chip glass">
        <span class="chip-icon"><img src="${s.image}" alt="${s.name}" loading="lazy" /></span>
        <span class="chip-name font-family-mono">${s.name}</span>
      </div>`;

  const half = Math.ceil(skills.length / 2);
  const rows = [skills.slice(0, half), skills.slice(half)];

  rows.forEach((row, i) => {
    const track = document.getElementById(`skills-row-${i + 1}`);
    if (!track) return;
    // duplicated once so the -50% translate loops seamlessly
    track.innerHTML = [...row, ...row].map(chip).join("");
  });
}

/* ------------------------------------------------------------------ */
/* experience timeline                                                 */
/* ------------------------------------------------------------------ */

function renderExperiences() {
  const container = document.getElementById("timeline");
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (x) => `<div class="timeline-item">
          <span class="timeline-dot"></span>
          <div class="timeline-card glass">
            <span class="timeline-period font-family-mono">[ ${x.period} ]</span>
            <h3 class="timeline-position">${x.position}</h3>
            <span class="timeline-place font-family-mono">@ ${x.place}</span>
            <ul class="timeline-jobs">
              ${x.jobs.map((y) => `<li>${y}</li>`).join("")}
            </ul>
            <div class="chip-row">
              ${x.skills.map((y) => `<span class="mini-chip">${y}</span>`).join("")}
            </div>
          </div>
        </div>`
    )
    .join("");
}

/* ------------------------------------------------------------------ */
/* projects                                                            */
/* ------------------------------------------------------------------ */

function renderProjects() {
  const container = document.getElementById("projects-grid");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (x, i) => `<article class="project-card glass">
          <div class="project-media swiper project-swiper">
            <div class="swiper-wrapper">
              ${x.images
                .map(
                  (y, j) =>
                    `<div class="swiper-slide">
                      <img src="${y}" alt="${x.title} screenshot ${j + 1}" loading="${i > 1 ? "lazy" : "eager"}" />
                    </div>`
                )
                .join("")}
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="project-body">
            <h3 class="project-title">${x.title}</h3>
            <p class="project-desc">${x.desc}</p>
            <div class="chip-row">
              ${x.techs.map((y) => `<span class="mini-chip">${y}</span>`).join("")}
            </div>
            <div class="project-links">
              <a target="${x.repo ? "_blank" : ""}" href="${x.repo || ""}"
                class="${x.repo ? "project-link" : "project-link-disable"}">
                <i data-lucide="github"></i> ${x.repo ? "Repository" : "Private"}
              </a>
              <a target="_blank" href="${x.demo}" class="project-link">
                <i data-lucide="external-link"></i> Live Demo
              </a>
            </div>
          </div>
        </article>`
    )
    .join("");

  createIcons();

  if (typeof Swiper === "undefined") {
    console.error("Swiper belum dimuat dari CDN!");
    return;
  }

  new Swiper(".project-swiper", {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

/* ------------------------------------------------------------------ */
/* typing effect                                                       */
/* ------------------------------------------------------------------ */

function initTyping() {
  const el = document.querySelector(".typed-role");
  if (!el) return;

  const roles = [
    "Software Engineer",
    "Fullstack Developer",
    "AI Native Engineer",
  ];

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    el.textContent = roles[0];
    return;
  }

  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = true;

  function tick() {
    const word = roles[roleIndex];

    if (deleting) {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(tick, 400);
      } else {
        setTimeout(tick, 45);
      }
    } else {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) {
        deleting = true;
        setTimeout(tick, 2200);
      } else {
        setTimeout(tick, 85);
      }
    }
  }

  setTimeout(tick, 2200);
}

/* ------------------------------------------------------------------ */
/* parallax                                                            */
/* ------------------------------------------------------------------ */

function initParallax() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const root = document.documentElement;
  let ticking = false;

  // per-section progress: --p goes -1 → 0 → 1 as the section's center
  // travels from below the viewport center to above it
  const sections = Array.from(document.querySelectorAll("main section"));

  function updateSectionProgress() {
    const vh = window.innerHeight;
    sections.forEach((s) => {
      const rect = s.getBoundingClientRect();
      const p = (rect.top + rect.height / 2 - vh / 2) / vh;
      s.style.setProperty(
        "--p",
        Math.max(-1.5, Math.min(1.5, p)).toFixed(4)
      );
    });
  }

  updateSectionProgress();

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        root.style.setProperty("--scroll-y", String(window.scrollY));
        updateSectionProgress();
        ticking = false;
      });
    },
    { passive: true }
  );

  // mouse parallax: -1..1 from the viewport center (mouse pointers only,
  // so touch scrolling doesn't jolt the scene)
  let mouseX = 0;
  let mouseY = 0;
  let mouseTicking = false;

  window.addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = (e.clientY / window.innerHeight) * 2 - 1;
      if (mouseTicking) return;
      mouseTicking = true;
      requestAnimationFrame(() => {
        root.style.setProperty("--mouse-x", mouseX.toFixed(3));
        root.style.setProperty("--mouse-y", mouseY.toFixed(3));
        mouseTicking = false;
      });
    },
    { passive: true }
  );
}

/* ------------------------------------------------------------------ */
/* scroll reveal                                                       */
/* ------------------------------------------------------------------ */

function initReveal() {
  const targets = document.querySelectorAll(
    ".section-head, .about-grid, .timeline-item, .project-card, .contact-panel"
  );
  // marquees fade in without a transform so their parallax translate is free
  const fadeTargets = document.querySelectorAll(".marquee");

  // replayable: the animation re-arms once the element fully leaves the
  // viewport, so it plays again on every visit. The two thresholds act as
  // hysteresis (show at ≥15% visible, reset only at 0%) to avoid flicker
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.15) {
          entry.target.classList.add("reveal-visible");
        } else if (!entry.isIntersecting) {
          entry.target.classList.remove("reveal-visible");
        }
      });
    },
    { threshold: [0, 0.15] }
  );

  targets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });

  fadeTargets.forEach((target) => {
    target.classList.add("reveal-fade");
    observer.observe(target);
  });
}

/* ------------------------------------------------------------------ */
/* boot                                                                */
/* ------------------------------------------------------------------ */

window.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMenu();
  renderSkills();
  renderExperiences();
  renderProjects();
  createIcons();
  initTyping();
  initParallax();
  initReveal();
});
