const navBtn = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.header__nav');
const mobilePhone = document.querySelector('.header__phone');
const noScroll = document.body;

navBtn.addEventListener('click', function () {
	mobileNav.classList.toggle('header__nav-active')
});

navBtn.addEventListener('click', function () {
	navBtn.classList.toggle('header__burger-active')
});

navBtn.addEventListener('click', function () {
	mobilePhone.classList.toggle('header__phone-active')
});

navBtn.addEventListener('click', function () {
	noScroll.classList.toggle('scroll')
});