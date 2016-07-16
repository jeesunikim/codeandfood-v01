const nav = {
	windowHeight: window.innerHeight,
	wrapper: document.querySelector(".site-header .wrapper")
};

window.onscroll = function () {
	let scrollY = window.pageYOffset,
		navArr = nav.wrapper.getElementsByTagName("nav"),
		navArrList = Array.prototype.slice.call(navArr);
	console.log(scrollY, 'scrollY');
	if (scrollY > 120) {
		navArrList.forEach((v, i) => {
			navArrList[0].className += " show";
			navArrList[1].setAttribute("style", "display: none");
		});
	}else{
		navArrList.forEach((v, i) => {
			navArrList[0].className = "mobileNav";
			navArrList[1].setAttribute("style", "display: block");
		});
	}
};

function currentPageOffset () {

}