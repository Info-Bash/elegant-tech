
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function openTab (tabName){
  for (tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for (tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab")
}



var skills = [
  { name: "HTML5", icon: "fab fa-html5", percentage: "95%" },
  { name: "CSS", icon: "fab fa-css3-alt", percentage: "95%" },
  { name: "JavaScript", icon: "fab fa-js", percentage: "80%" },
  { name: "TailwindCSS", icon: "fa fa-wind", percentage: "85%" },
  { name: "Bootstrap", icon: "fab fa-bootstrap", percentage: "90%" },
  { name: "PHP", icon: "fab fa-php", percentage: "75%" },
  { name: "MongoDB", icon: "fas fa-database", percentage: "80%" },
  { name: "NodeJS", icon: "fab fa-node-js", percentage: "75%" },
  { name: "ExpressJS", icon: "fab fa-node", percentage: "70%" },
  { name: "React", icon: "fab fa-react", percentage: "70%" },
  { name: "WordPress", icon: "fab fa-wordpress", percentage: "85%" },
  { name: "Wix", icon: "fas fa-laptop-code", percentage: "75%" },
];

var currentSkillSet = 0;
var skillsPerPage = 4;
var totalSkillSets = Math.ceil(skills.length / skillsPerPage);

function updatePagination() {
  document.getElementById("skillsPagination").innerText = `${currentSkillSet + 1}/${totalSkillSets}`;
}

function loadSkills() {
  var skillsContainer = document.getElementById("skillsContainer");
  skillsContainer.innerHTML = "";
  var start = currentSkillSet * skillsPerPage;
  var end = start + skillsPerPage;
  var skillsToDisplay = skills.slice(start, end);

  skillsToDisplay.forEach(function (skill) {
    var skillDiv = document.createElement("div");
    skillDiv.classList.add("skills-data");

    skillDiv.innerHTML = `
      <div class="skills-names">
        <i class="${skill.icon} skills-icon"></i>
        <span class="skills-name">${skill.name}</span>
      </div>
      <div class="skills-bar" data-width="${skill.percentage}"></div>
      <div><span class="skills-percentage">${skill.percentage}</span></div>
    `;

    skillsContainer.appendChild(skillDiv);
  });

  
  setTimeout(() => {
    document.querySelectorAll('.skills-bar').forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;
    });
  }, 100);

  updatePagination();
  document.getElementById("prevBtn").disabled = currentSkillSet === 0;
  document.getElementById("nextBtn").disabled = end >= skills.length;
}


function prevSkills() {
  if (currentSkillSet > 0) {
    currentSkillSet--;
    loadSkills();
  }
}

function nextSkills() {
  if ((currentSkillSet + 1) * skillsPerPage < skills.length) {
    currentSkillSet++;
    loadSkills();
  }
}

loadSkills();
