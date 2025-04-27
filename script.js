const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('#nav-menu ul li a');

function openMenu() {
  navMenu.classList.add('active');
  menuToggle.classList.add('active');
  menuToggle.innerHTML = '&times;'; // Show '×'
}

function closeMenu() {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('active');
  menuToggle.innerHTML = '&#9776;'; // Show '☰'
}

menuToggle.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    closeMenu();
  } else {
    openMenu();
  }
});
// Close nav if clicked outside
document.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    closeMenu();
  }
});

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});


const projects = [
  {
    title: "Portfolio Website",
    description: "A sleek personal portfolio to showcase my work and skills.",
    image: "images/img 5.jpg",
    demoLink: "https://your-demo-link.com",
    githubLink: "https://github.com/your-portfolio",
  },
  {
    title: "Weather App",
    description: "Real-time weather app using OpenWeatherMap API.",
    image: "images/img 6.jpg",
    demoLink: "https://weather-app-demo.com",
    githubLink: "https://github.com/your-weather-app",
  },
  {
    title: "Task Manager",
    description: "Simple task manager built with vanilla JS and localStorage.",
    image: "images/img 3.jpg",
    demoLink: "https://taskmanager-demo.com",
    githubLink: "https://github.com/your-task-manager",
  },

  {
    title: "Task Manager",
    description: "Simple task manager built with vanilla JS and localStorage.",
    image: "images/img 1.jpg",
    demoLink: "https://taskmanager-demo.com",
    githubLink: "https://github.com/your-task-manager",
  },
  // Add more project objects here
];

const container = document.getElementById("projects-container");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
      <img src="${project.image}" alt="${project.title} Thumbnail">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="project-links">
          <a href="${project.demoLink}" target="_blank">Live Demo</a>
          <a href="${project.githubLink}" target="_blank">GitHub</a>
        </div>
      </div>
    `;

  container.appendChild(card);
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    status.style.color = "red";
    status.textContent = "Please fill in all fields.";
    status.style.opacity = "1";
    return;
  }

  // Simulate successful submission
  status.style.color = "green";
  status.textContent = "✅ Message sent successfully!";
  status.style.opacity = "1";

  document.getElementById("contactForm").reset();

  setTimeout(() => {
    status.style.opacity = "0";
  }, 4000);
});
 // Dynamic year
 document.getElementById("year").textContent = new Date().getFullYear();
      
 // Scroll to Top Button
 const scrollBtn = document.getElementById("scrollToTopBtn");
 window.onscroll = function () {
   scrollBtn.style.display = (document.documentElement.scrollTop > 100) ? "block" : "none";
 };

 scrollBtn.addEventListener("click", () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
 });
