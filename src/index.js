import './styles/index.css';

const tabLinks = document.querySelectorAll('.tabs a');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);

    tabContents.forEach((content) => {
      content.style.display = 'none';
    });

    const selectedTab = document.getElementById(targetId);
    if (selectedTab) {
      selectedTab.style.display = 'flex';
    }
  });
});