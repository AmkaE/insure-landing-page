const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconHambuger = document.querySelector('.icon-hamburger');
const iconClose = document.querySelector('.icon-close');
const navLinks = document.querySelector('.nav .nav--links');

hamburgerMenu.addEventListener('click', () => {
	iconHambuger.classList.toggle('hide');
	iconClose.classList.toggle('show');

	navLinks.classList.toggle('flex');
});
