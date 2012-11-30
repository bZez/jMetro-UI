/*
 * 
 * Part of article How to detect screen size and apply a CSS style
 * http://www.ilovecolors.com.ar/detect-screen-size-css-style/
 *
 */

$(document).ready(function() {

	if ((screen.width==1024) && (screen.height==768))
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "CSS/detect1024.css"});
	}
	else if ((screen.width==1920) && (screen.height==1080))
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect1920.css"});
	}
	else if ((screen.width==1600) && (screen.height==1200))
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect1600.css"});
	}
	else if ((screen.width==1680) && (screen.height==1050))
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect1680.css"});
	}
	else
	{
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect800.css"});
	}
});

