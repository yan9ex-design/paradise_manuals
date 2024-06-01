//card
const cards = document.querySelectorAll('.guide-card');

cards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.style.width = '420px';
    card.style.height = '533px';
  });

  card.addEventListener('mouseout', () => {
    card.style.width = '387px';
    card.style.height = '500px';
  });
});

//title
const title = document.getElementById('title-guide');
const text = 'PROGRAMMERS GUIDE';
const charArray = text.split('');
let i = 0;
let timerId;

function animateText() {
  timerId = setInterval(() => {
    if (i === charArray.length) {
      clearInterval(timerId);
      return;
    }
    const charItem = charArray[i];
    title.innerHTML += charItem;
    i++;
  }, 60);
}
setTimeout(animateText, 1500);

// download page smooth
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');
  setTimeout(() => {
    header.classList.add('visible');
  }, 600);
});

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelector('.guide-card-wrap');
  setTimeout(() => {
    cards.classList.add('visible');
  }, 1000);
});   

//footer 

