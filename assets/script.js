const menuBtn = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');
const navigation = document.querySelector('.navigation');
document.querySelector('.menuToggle').addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  closeBtn.classList.toggle('active');
  navigation.classList.toggle('active')
});