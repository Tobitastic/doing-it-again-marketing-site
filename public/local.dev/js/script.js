/* Author: 

*/
$(document).ready(function(){
	var hasHistory = false;
	function updateNav(className,ignoreStep){
		$('div[role=main]').removeClass();
		$('div[role=main]').addClass(className);
		$('nav#main-nav a').removeClass();
		$('nav#main-nav a[href*='+className+']').addClass('active');
		if (!ignoreStep&&hasHistory ){
			window.history.pushState({section:className},className,"index.html#"+className);
		}
	}
	$('nav#main-nav a').click(function(e){
		updateNav($(this).attr('href').substring(1));
		return true;
	});
	
	if ( window.history || window.history.pushState ){
		hasHistory = true;
		window.onpopstate = function(e) {
			if (e.state && window.location.hash != e.state.section) {
				updateNav((e.state && e.state.section)||'home',true);	
			}
		};
	}
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
		preload:'auto',
		solution:'flash,html'
	});
	
	var hash = window.location.hash;
	if ( hash ){
		hash = hash.substring(1);
		updateNav(hash);
	}
});






















