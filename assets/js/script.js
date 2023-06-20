// script.js
fetch('./assets/components/header.html')
    .then(response => response.text())
    .then(data => {
        const headerComponent = document.getElementById('header-component');
        headerComponent.innerHTML = data;
    })
    .catch(error => console.log(error));

fetch('./assets//components/resume.html')
    .then(response => response.text())
    .then(data => {
        const resumeComponent = document.getElementById('resume-component');
        resumeComponent.innerHTML = data;
        console.log(data);
    })
    .catch(error => console.log(error));

fetch('./assets//components/experience.html')
    .then(response => response.text())
    .then(data => {
        const experienceComponent = document.getElementById('experience-component');
        experienceComponent.innerHTML = data;
        console.log(data);
    })
    .catch(error => console.log(error));

/* CSS */
import('./assets/css/style.css')
    .then(() => {
        // CSS has been loaded
    })
    .catch(error => console.log(error));