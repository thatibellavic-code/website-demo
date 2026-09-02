// small interactions: year, mobile nav toggle
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle?.addEventListener('click', () => {
  if (!mainNav) return;
  const shown = mainNav.style.display === 'flex';
  mainNav.style.display = shown ? 'none' : 'flex';
  mainNav.style.flexDirection = 'column';
  mainNav.style.gap = '0.5rem';
});
