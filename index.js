const home = document.querySelector('.home');
const skills = document.querySelector('.skills');
const experience = document.querySelector('.experience');
const project = document.querySelector('.project');
const mediaDeviceWidth = window.screen.width;
const mediaMobile = window.matchMedia("(max-width: 720px)");
// const mediaTablet = window.matchMedia("(max-width: 1112px)");
const mediaLaptop = window.matchMedia("(max-width: 1920px)");

$(document).ready(function() {
  if (mediaMobile.matches){
    mediaMobileScroll();
  }  else if (mediaLaptop.matches){
    mediaLaptopScroll();
  }
  // else if (mediaTablet.matches){
  //   mediaTabletScroll();
  // }
});

function mediaMobileScroll(){
  console.log("mediaMobile");
  window.onscroll = () => {
      if (window.scrollY >= 1080 && window.scrollY < 2800) {
        project.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        home.classList.remove('nav-active');
        skills.classList.add('nav-active');
      }
      if (window.scrollY >= 2800 && window.scrollY < 4550){
        project.classList.remove('nav-active');
        skills.classList.remove('nav-active');
        home.classList.remove('nav-active');
        experience.classList.add('nav-active');
      }
      if (window.scrollY >= 4550){
        skills.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        home.classList.remove('nav-active');
        project.classList.add('nav-active');
      }
      if (window.scrollY >= 0 && window.scrollY < 1080){
        skills.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        project.classList.remove('nav-active');
        home.classList.add('nav-active');
      }
  }
}

// function mediaTabletScroll(){
//   console.log('mediaTablet');
//   window.onscroll = () => {
//       if (window.scrollY >= 600 && window.scrollY < 1200) {
//         project.classList.remove('nav-active');
//         experience.classList.remove('nav-active');
//         home.classList.remove('nav-active');
//         skills.classList.add('nav-active');
//       }
//       if (window.scrollY >= 1200 && window.scrollY < 1800){
//         project.classList.remove('nav-active');
//         skills.classList.remove('nav-active');
//         home.classList.remove('nav-active');
//         experience.classList.add('nav-active');
//       }
//       if (window.scrollY >= 1750){
//         skills.classList.remove('nav-active');
//         experience.classList.remove('nav-active');
//         home.classList.remove('nav-active');
//         project.classList.add('nav-active');
//       }
//       if (window.scrollY >= 0 && window.scrollY < 600){
//         skills.classList.remove('nav-active');
//         experience.classList.remove('nav-active');
//         project.classList.remove('nav-active');
//         home.classList.add('nav-active');
//       }
//   }
// }

function mediaLaptopScroll(){
  console.log('mediaLaptopScroll');
  window.onscroll = () => {
      if (window.scrollY >= 730 && window.scrollY < 1500) {
        project.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        home.classList.remove('nav-active');
        skills.classList.add('nav-active');
      }
      if (window.scrollY >= 1500 && window.scrollY < 2240){
        project.classList.remove('nav-active');
        skills.classList.remove('nav-active');
        home.classList.remove('nav-active');
        experience.classList.add('nav-active');
      }
      if (window.scrollY >= 2240){
        skills.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        home.classList.remove('nav-active');
        project.classList.add('nav-active');
      }
      if (window.scrollY >= 0 && window.scrollY < 730){
        skills.classList.remove('nav-active');
        experience.classList.remove('nav-active');
        project.classList.remove('nav-active');
        home.classList.add('nav-active');
      }
  }
}