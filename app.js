console.clear();
/* observator for animation */
const aboutBlocks = document.querySelectorAll('.about-block');
const cards = document.querySelectorAll('.card');
const header = document.querySelectorAll('.about-header');
const paragraphs = document.querySelectorAll('p');
const quoteText = document.querySelectorAll('.quote-text');
const hero = document.querySelectorAll('.hero');
const authorCon = document.querySelectorAll('.author-content');
const authors = document.querySelectorAll('.authors');

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

const active = (el) => {
  el.forEach((block) => {
    observer.observe(block);
  });
};

active(hero);
active(aboutBlocks);
active(cards);
active(header);
active(paragraphs);
active(quoteText);
active(authorCon);
active(authors);

/* hamburger and responsive menu */
const navBtn = document.getElementById('nav-button');
const navLinks = document.getElementById('links');
const search = document.getElementById('search');
const links = document.querySelectorAll('li');

let hamburgerOpen = false;

navBtn.addEventListener('click', () => {
  if (!hamburgerOpen) {
    navLinks.classList.add('responsive', 'animateLinks');
    search.classList.add('responsive', 'animateLinks');
    hamburgerOpen = true;
  } else {
    navLinks.classList = 'nav-links';
    search.classList = 'search';
    hamburgerOpen = false;
  }
});
