const mobileBars = document.getElementById('Mobile_bar');
const mobile = document.querySelector('ul');

mobileBars.addEventListener('click', () => {
  mobile.classList.toggle('hidden');
});
