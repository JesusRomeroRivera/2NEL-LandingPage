const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

const entrepreneurButton = document.getElementById('user-1');
const freelancerButton = document.getElementById('user-2');
const investorButton = document.getElementById('user-3');

const userImgs = document.getElementById('user-img');

const entrepeneurContent = document.getElementById('content-1');
const freelancerContent = document.getElementById('content-2');
const investorContent = document.getElementById('content-3');

entrepreneurButton.addEventListener("click", ()=>{
  userImgs.classList.add('emprendedor');  
  userImgs.classList.remove('freelancer');
  userImgs.classList.remove('investor');

  entrepreneurButton.classList.add('active');
  freelancerButton.classList.remove('active');
  investorButton.classList.remove('active');

  entrepeneurContent.classList.add('active');
  freelancerContent.classList.remove('active');
  investorContent.classList.remove('active');
})
freelancerButton.addEventListener("click", ()=>{
  userImgs.classList.remove('emprendedor');  
  userImgs.classList.add('freelancer');
  userImgs.classList.remove('investor');
  
  entrepreneurButton.classList.remove('active');
  freelancerButton.classList.add('active');
  investorButton.classList.remove('active');

  freelancerContent.classList.add('active');
  entrepeneurContent.classList.remove('active');
  investorContent.classList.remove('active');
})
investorButton.addEventListener("click", ()=>{
  userImgs.classList.remove('emprendedor');  
  userImgs.classList.remove('freelancer');
  userImgs.classList.add('investor');
  entrepreneurButton.classList.remove('active');
  freelancerButton.classList.remove('active');
  investorButton.classList.add('active');

  investorContent.classList.add('active');
  freelancerContent.classList.remove('active');
  entrepeneurContent.classList.remove('active');
})
