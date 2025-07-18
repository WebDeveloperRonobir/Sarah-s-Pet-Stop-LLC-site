	// Swticher Cookie Base
	/**
	 * Styleswitch stylesheet switcher built on jQuery
	 * Under an Attribution, Share Alike License
	 * By Kelvin Luck ( http://www.kelvinluck.com/ )
	 * Thanks for permission! 
	 **/

	$(document).ready(function() {
	    $('.styleswitch').click(function() {
	        switchStylestyle(this.getAttribute("href"));
	        return false;
	    });
	    var c = readCookie('style');
	    if (c) switchStylestyle(c);
	});

	function switchStylestyle(styleName) {
	    $('link[rel*=style][title]').each(function(i) {
	        this.disabled = true;
	        if (this.getAttribute('title') == styleName) this.disabled = false;
	    });
	    createCookie('style', styleName, 365);
	}

	function createCookie(name, value, days) {
	    if (days) {
	        var date = new Date();
	        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	        var expires = "; expires=" + date.toGMTString();
	    } else var expires = "";
	    document.cookie = name + "=" + value + expires + "; path=/";
	}

	function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for (var i = 0; i < ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	    }
	    return null;
	}

	function eraseCookie(name) {
	    createCookie(name, "", -1);
	}

	// DEMO Swticher Base
	$('.demo_changer .demo-icon').click(function() {

	    if ($('.demo_changer').hasClass("active")) {
	        $('.demo_changer').animate({
	            "left": "-300px"
	        }, function() {
	            $('.demo_changer').toggleClass("active");
	        });
	    } else {
	        $('.demo_changer').animate({
	            "left": "0px"
	        }, function() {
	            $('.demo_changer').toggleClass("active");
	        });
	    }
	});

	// Selector (MODULE #4)
	function selectpicker() {
	    $(window).on('load', function() {
	        $('.selectpicker').selectpicker({
	            'selectedText': 'cat'
	        });
	    });
	};