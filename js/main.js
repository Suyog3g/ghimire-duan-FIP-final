const navIcon = document.querySelector('#nav-icon1');
const burgerCon = document.querySelector('#burger-con');
const seeMoreBtn = document.getElementById("see-more-btn");
const popover = document.getElementById("popover");
const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const closeBtn2 = document.getElementById('close-btn2');
const adContent = [
  {title: "Zima", content: "Our new Zima comes in a variety of flavors, including blueberry, Lemon and green apple. Zima is made with natural ingredients, including real fruit juices and cane sugar. Zima is a low-calorie beverage, with only 90 calories per serving and 0g of fat."}
];



seeMoreBtn.addEventListener('click', () => {
  const titleElem = document.querySelector('.popup-title');
  const contentElem = document.querySelector('.popup-content');
  titleElem.textContent = adContent[0].title;
  contentElem.textContent = adContent[0].content;
  popup.classList.remove('hidden');
});

closeBtn2.addEventListener('click', () => {
  popup.classList.add('hidden');
});

navIcon.addEventListener('click', function() {
  navIcon.classList.toggle('open');
  burgerCon.classList.toggle('show');
});

const submitBtn = document.querySelector('#submit input[type="submit"]');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault(); // prevent the form from submitting
  overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  overlay.style.display = 'none';
});

window.addEventListener('load', () => {
  overlay.style.display = 'none';
});
