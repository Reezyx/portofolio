const home = document.querySelector('.home');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const project = document.querySelector('.project');

function scrolltoHome(){
  document.querySelector('#home').scrollIntoView({
    behavior: 'smooth',
  });
  skills.classList.remove('nav-active');
  experience.classList.remove('nav-active');
  project.classList.remove('nav-active');
  home.classList.add('nav-active');
}
function scrolltoSkill(){
  document.querySelector('#skills').scrollIntoView({
    behavior: 'smooth',
  });
  home.classList.remove('nav-active');
  experience.classList.remove('nav-active');
  project.classList.remove('nav-active');
  skills.classList.add('nav-active');
}
function scrolltoExperience(){
  document.querySelector('#experience').scrollIntoView({
    behavior: 'smooth',
  });
  skills.classList.remove('nav-active');
  home.classList.remove('nav-active');
  project.classList.remove('nav-active');
  experience.classList.add('nav-active');
}
function scrolltoProject(){
  document.querySelector('#project').scrollIntoView({
    behavior: 'smooth',
  });
  skills.classList.remove('nav-active');
  experience.classList.remove('nav-active');
  home.classList.remove('nav-active');
  project.classList.add('nav-active');
}