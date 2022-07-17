const home = document.querySelector('.home');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const project = document.querySelector('.project');

// function scrolltoHome(){
//   document.querySelector('#home').scrollIntoView({
//     behavior: 'smooth',
//   });
//   skills.classList.remove('nav-active');
//   experience.classList.remove('nav-active');
//   project.classList.remove('nav-active');
//   home.classList.add('nav-active');
// }
// function scrolltoSkill(){
//   document.querySelector('#skills').scrollIntoView({
//     behavior: 'smooth',
//   });
//   home.classList.remove('nav-active');
//   experience.classList.remove('nav-active');
//   project.classList.remove('nav-active');
//   skills.classList.add('nav-active');
// }
// function scrolltoExperience(){
//   document.querySelector('#experience').scrollIntoView({
//     behavior: 'smooth',
//   });
//   skills.classList.remove('nav-active');
//   home.classList.remove('nav-active');
//   project.classList.remove('nav-active');
//   experience.classList.add('nav-active');
// }
// function scrolltoProject(){
//   document.querySelector('#project').scrollIntoView({
//     behavior: 'smooth',
//   });
//   skills.classList.remove('nav-active');
//   experience.classList.remove('nav-active');
//   home.classList.remove('nav-active');
//   project.classList.add('nav-active');
// }

const mediaDeviceWidth = window.screen.width;
window.onscroll = () => {
  // if(mediaDeviceWidth <= 800){
  //   if (window.scrollY >= 600 && window.scrollY < 1200) {
  //     console.log('ok');
  //   project.classList.remove('nav-active');
  //   experience.classList.remove('nav-active');
  //   home.classList.remove('nav-active');
  //   skills.classList.add('nav-active');
  //   }
  //   if (window.scrollY >= 2000 && window.scrollY < 1800){
  //     project.classList.remove('nav-active');
  //     skills.classList.remove('nav-active');
  //     home.classList.remove('nav-active');
  //     experience.classList.add('nav-active');
  //   }
  //   if (window.scrollY >= 1800){
  //     skills.classList.remove('nav-active');
  //     experience.classList.remove('nav-active');
  //     home.classList.remove('nav-active');
  //     project.classList.add('nav-active');
  //   }
  //   if (window.scrollY >= 0 && window.scrollY < 600){
  //     skills.classList.remove('nav-active');
  //     experience.classList.remove('nav-active');
  //     project.classList.remove('nav-active');
  //     home.classList.add('nav-active');
  //   }
  // }
  // if(mediaDeviceWidth >= 1280){
    if (window.scrollY >= 600 && window.scrollY < 1200) {
      // console.log('ok');
      project.classList.remove('nav-active');
      experience.classList.remove('nav-active');
      home.classList.remove('nav-active');
      skills.classList.add('nav-active');
    }
    if (window.scrollY >= 1200 && window.scrollY < 1800){
      project.classList.remove('nav-active');
      skills.classList.remove('nav-active');
      home.classList.remove('nav-active');
      experience.classList.add('nav-active');
    }
    if (window.scrollY >= 1750){
      skills.classList.remove('nav-active');
      experience.classList.remove('nav-active');
      home.classList.remove('nav-active');
      project.classList.add('nav-active');
    }
    if (window.scrollY >= 0 && window.scrollY < 600){
      skills.classList.remove('nav-active');
      experience.classList.remove('nav-active');
      project.classList.remove('nav-active');
      home.classList.add('nav-active');
    }
  // }
}