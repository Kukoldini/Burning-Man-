var menu = document.querySelector('.nav');
var button = document.querySelector('.burger-menu-button');

button.addEventListener('click', function() {
	if (!menu.classList.contains('show')) {
		menu.classList.remove('hide');
		menu.classList.add('show');
	} else {
		menu.classList.remove('show');
		menu.classList.add('hide');
	}
})