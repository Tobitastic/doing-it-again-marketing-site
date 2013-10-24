/* Author: 

*/
$(document).ready(function(){
	//var hasHistory = false;
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
		/*
		if (hasHistory ){
			window.history.pushState({section:className},className,className+".html");
		}*/
	}
	$('nav#main-nav a').click(function(e){
		updateNav($(this).attr('href').substring(1));
		return true;
	});
	/*
	if ( window.history || window.history.pushState ){
		hasHistory = true;
		window.onpopstate = function(e){
			if ( window.location.hash != e.state.section) {
				updateNav(e.state && e.state.section);	
			}
		}
	}*/
	$("#jquery_jplayer_1").jPlayer({
		ready: function () {
			$(this).jPlayer("setMedia", {
				m4v: "http://handbasketproductions.com/DIAv1_Full_Trailer.mp4"
			});
		},
		swfPath: "js/libs/",
		supplied: "m4v",
		size: {
			width: "600px",
			height: "360px",
			cssClass: "jp-video-360p"
		},
		smoothPlayBar: true,
		keyEnabled: true,
		errorAlerts:true,
		wmode:"window",
		preload:'auto'
	});
	
	updateNav(hash);
});






















