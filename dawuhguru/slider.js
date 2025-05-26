/**
 * Tiny slider for module
 * Copyright (c) 2020 Gian MR
 * Gian MR Theme Custom Javascript
 *
 * @package wpberita
 */
(function( slider ) {
"use strict";
	var element = document.getElementById( 'moduleslide' );
	if ( typeof( element ) != 'undefined' && element != null ) {
		var slider = tns({
			container: '.wpberita-moduleslide',
			loop: true,
			gutter: 24,
			controlsText: ['&nbsp;', '&nbsp;'],
			items: 3,
			lazyload: true,
			swipeAngle: false,
			mouseDrag: true,
			autoplay: true,
			autoplayButtonOutput: false,
			nav: false,
			responsive : {
				0 : {
					items : 1,
				},
				250 : {
					items : 2,
				},
				400 : {
					items : 2,
				},
				600 : {
					items : 2,
				},
				1000 : {
					items : 3,
				}
			}
		});
	}
})( window.slider );
