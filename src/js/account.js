const mobileNavUl = document.getElementById('mobileManu');
const mobileBars = document.getElementById('mobileBars');
const mobilebarsClose = document.getElementById('closeBars');

//* MOBILE BRAS
const droupDunManu = () => {
  mobileNavUl.classList.toggle('left-0');
  mobileNavUl.classList.toggle('left-full');

  mobileBars.classList.add('hidden');
  mobilebarsClose.classList.remove('hidden');
};

//*MOBILE CLOSE BRAS
const mobilebarsCloseApllyFun = () => {
  mobileNavUl.classList.toggle('left-0');
  mobileNavUl.classList.toggle('left-full');

  mobilebarsClose.classList.add('hidden');
  mobileBars.classList.remove('hidden');
};

mobileBars.addEventListener('click', droupDunManu);
mobilebarsClose.addEventListener('click', mobilebarsCloseApllyFun);

// PASSWORD SHOW CHAKBOK CLICK

const chackBox = document.getElementById('boxShowCheckBox');
const typepasswords = document.getElementById('passwords');
const passwordShow = () => {
  if (typepasswords.type === 'password') {
    typepasswords.type = 'text';
  } else {
    typepasswords.type = 'password';
  }
};

chackBox.addEventListener('click', passwordShow);
