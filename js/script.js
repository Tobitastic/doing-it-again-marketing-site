/* Author: 

*/
$(document).ready(function(){
	var hash = window.location.hash;
	if ( !hash ){
		hash = 'home';
	}else{
		hash = hash.substring(1);
	}
	function updateNav(className){
		$('div[role=main]').removeClass();
		$('div[role=main]').addClass(className);
		$('nav#main-nav a').removeClass();
		$('nav#main-nav a[href*='+className+']').addClass('active');
	}
	$('nav#main-nav a').click(function(e){
		updateNav($(this).attr('href').substring(1));
		return true;
	});
	updateNav(hash);
});






















