

var x = window.matchMedia("(max-width: 768px)");


function openSlideMenu(x) {
	document.getElementById('side-menu').style.width = '250px';
	//document.getElementById('main').style.marginLeft = '250px';
	if (x.matches) {
		document.getElementById('side-menu').style.width = '100vw';
		//document.body.style.overflow = 'hidden';	
	} else {
		document.getElementById('main').style.marginLeft = '250px';
	}

}

function closeSlideMenu() {
	document.getElementById('side-menu').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';

}