const projects = [
  {
    image: "assets/image/project01.webp",
    alt: "discover-designinc",
    title: "PV savings report '23",
    team: "with Daniel Orubo, Boluwatife Akindele, Oris Aigbokhaevbolo, Blessed Adudu, Ayodotun Ajala, Odunayo Eweniyi, Joshua Chibueze, Somto Ifezue.",
    description: `In late 2023, PiggyVest launched its Savings Report, a deep dive into Nigeria's financial habits...<br><br>
    As the sole designer, I collaborated with the Content Team to bring this project to life.`,
    year: "2023",
    skills: "Data visualization, Website design, Interaction design"
  }
];

const container = document.getElementById("project-container");

const projectHTML = projects.map(project => `
  <div class="project-wrap project-container">
    <div class="projec-image">
      <img src="${project.image}" alt="${project.alt}">
    </div>
    <div class="project_dis-wrap flex">
      <div class="project-discription">
        <h3>${project.title}</h3>
        <p class="p-dis">${project.team}</p>
        <p class="dis-more">${project.description}</p>
        <div class="live-wrap flex">
          <p>View Live Site</p>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="project-date">
        <div class="date-info">
          <p class="date-year">Year</p>
          <p>${project.year}</p>
        </div>
        <div class="skill-wrap date-info">
          <p class="date-year">Skills</p>
          <p class="skill-info">${project.skills}</p>
        </div>
      </div>
    </div>
  </div>
`).join('');

// Insert into the DOM
container.innerHTML = projectHTML;
