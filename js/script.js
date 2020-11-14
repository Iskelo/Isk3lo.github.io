
var x = window.matchMedia("(max-width: 700px)");


function openSlideMenu(x){
	document.getElementById('side-menu').style.width = '250px';
	
	if(x.matches){
		document.getElementById('side-menu').style.width = '100vw';		
	}else{
		document.getElementById('main').style.marginLeft = '250px';
		
	}
	
 }

 function closeSlideMenu(){
	document.getElementById('side-menu').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
	
 }