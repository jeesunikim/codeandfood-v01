 window.onscroll = function (e) {
	let scrollY = window.pageYOffset;
	let fixedNav = document.querySelector("nav.site-nav");
	console.log(fixedNav, 'fixedNav');

	if (scrollY > 90) {
		if(!fixedNav.classList.contains('fixed')) {
			fixedNav.classList.add('fixed');
		}
	}else{
		if(fixedNav.classList.contains('fixed')) {
			fixedNav.classList.remove('fixed');
		}
	}
};

function checkClass () {

}