// --------------- Data divs front-end ---------------

let experience = document.getElementById("Experience");
let skills = document.getElementById("Skills");
let projects = document.getElementById("Projects");
let resume = document.getElementById("Resume");

let experienceHeader = document.getElementById("experienceHeader");
let skillsHeader = document.getElementById("skillsHeader");
let projectsHeader = document.getElementById("projectsHeader");
let resumeHeader = document.getElementById("resumeHeader");

let experienceData = document.getElementById("experienceData");
let skillsData = document.getElementById("skillsData");
let projectsData = document.getElementById("projectsData");
let resumeData = document.getElementById("resumeData");

setExpHeader();

function setExpHeader() {
    experienceHeader.style.color = "#64b9ba";
    experience.style.fontSize = "35px";
    experience.style.borderBottom = "4px solid #64b9ba"
    experienceData.style.opacity = "100";
    
    skills.style.fontSize = "22px";
    skillsHeader.style.color = "grey";
    skills.style.borderBottom = "none";
    skillsData.style.opacity = "0";
    
    projects.style.fontSize = "22px";
    projectsHeader.style.color = "grey";
    projects.style.borderBottom = "none";
    projectsData.style.opacity = "0";

    resume.style.fontSize = "22px";
    resumeHeader.style.color = "grey";
    resume.style.borderBottom = "none";
    resumeData.style.opacity = "0";
}

function setSkillsHeader() {
    experienceHeader.style.color = "grey";
    experience.style.fontSize = "22px";
    experience.style.borderBottom = "none";
    experienceData.style.opacity = "0";
    
    skills.style.fontSize = "35px";
    skillsHeader.style.color = "#64b9ba";
    skills.style.borderBottom = "4px solid #64b9ba"
    skillsData.style.opacity = "100";
    
    projects.style.fontSize = "22px";
    projectsHeader.style.color = "grey";
    projects.style.borderBottom = "none";
    projectsData.style.opacity = "0";

    resume.style.fontSize = "22px";
    resumeHeader.style.color = "grey";
    resume.style.borderBottom = "none";
    resumeData.style.opacity = "0";
}

function setProjecsHeader() {
    experienceHeader.style.color = "grey";
    experience.style.fontSize = "22px";
    experience.style.borderBottom = "none";
    experienceData.style.opacity = "0";
    
    skills.style.fontSize = "22px";
    skillsHeader.style.color = "grey";
    skills.style.borderBottom = "none";
    skillsData.style.opacity = "0";
    
    projects.style.fontSize = "35px";
    projectsHeader.style.color = "#64b9ba";
    projects.style.borderBottom = "4px solid #64b9ba"
    projectsData.style.opacity = "100";

    resume.style.fontSize = "22px";
    resumeHeader.style.color = "grey";
    resume.style.borderBottom = "none";
    resumeData.style.opacity = "0";
}

function setResumeHeader() {
    experienceHeader.style.color = "grey";
    experience.style.fontSize = "22px";
    experience.style.borderBottom = "none";
    experienceData.style.opacity = "0";
    
    skills.style.fontSize = "22px";
    skillsHeader.style.color = "grey";
    skills.style.borderBottom = "none";
    skillsData.style.opacity = "0";
    
    projects.style.fontSize = "22px";
    projectsHeader.style.color = "grey";
    projects.style.borderBottom = "none";
    projectsData.style.opacity = "0";

    resume.style.fontSize = "35px";
    resumeHeader.style.color = "#64b9ba";
    resume.style.borderBottom = "4px solid #64b9ba"
    resumeData.style.opacity = "100";
}
/*
    color: #64b9ba;
    font-size: 40px;
*/
experience.addEventListener("click", () => {
    setExpHeader();
})

skills.addEventListener("click", () => {
    setSkillsHeader();
})

projects.addEventListener("click", () => {
    setProjecsHeader();
})

resume.addEventListener("click", () => {
    setResumeHeader();
})


// --------------- Logos Front-end ---------------

let cpplogo = document.getElementById("cpplogoo");
let javalogo =  document.getElementById("javalogoo");
let pylogo = document.getElementById("pylogoo");
let dblogo = document.getElementById("dblogoo");

