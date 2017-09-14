jQuery(document).ready(function($) 
{	
	var $erosionBlue = $('.erosion-blue');
	var $erosionRock1 = $('.erosion-rock1');
	var $erosionRock2 = $('.erosion-rock2');
	var $erosionRock3 = $('.erosion-rock3');
	var $erosionRock4 = $('.erosion-rock4');
	var $erosionRock5 = $('.erosion-rock5');

	// tlErosion =  new TimelineMax({ paused: true });
	var controller = new ScrollMagic.Controller();
	tlErosion =  new TimelineMax({ paused: false })
	tlErosion.set([$erosionBlue], {autoAlpha: 0, yPercent: '-100'});

	// tlErosion
	// 	.set([$erosionBlue], {autoAlpha: 0, yPercent: '-100'})
	// 	.to([$erosionRock1], 0.5, {autoAlpha: 1})
	// 	.to([$erosionRock2], 0.5, {autoAlpha: 1})
	// 	.to([$erosionRock3], 0.5, {autoAlpha: 1})
	// 	.to([$erosionRock4], 0.5, {autoAlpha: 1})
	// 	.to([$erosionRock5], 0.5, {autoAlpha: 1})
	// 	.to([$erosionBlue], 0.5, {autoAlpha: 1, yPercent: '0'});
	
	// var ctrlErosion = new ScrollMagic.Controller({
	// 	globalSceneOptions: {
	// 		triggerHook: 'onEnter',
	// 		triggerElement: ".erosion-scene"
	// 	}
	// });

	// new ScrollMagic.Scene({
	//   offset: 500
	// })
	// .addTo(ctrlErosion)
	// .on("enter", function (e) {
	// 	tlErosion.play();	
	// });
	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionRock1, 0.5, {opacity: 1}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionRock2, 0.5, {opacity: 1, delay: 0.5}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionRock3, 0.5, {opacity: 1, delay: 1}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionRock4, 0.5, {opacity: 1, delay: 1.5}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionRock5, 0.5, {opacity: 1, delay: 2}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

	new ScrollMagic.Scene({
			triggerElement: ".erosion-scene"
		})
		.setTween($erosionBlue, 0.5, {autoAlpha: 1, yPercent: '0', delay: 2.5}) // trigger a TweenMax.to tween
		//.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
		.addTo(controller);

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
	
	var ctrlTassement = new ScrollMagic.Controller();
	var $tassementCourbe = $('section.tassement-scene svg#tassement-svg #courbe path');

	new ScrollMagic.Scene({
			triggerElement: 'section.tassement-scene', 
			triggerHook: 0.5
		})
		//.setTween(".fixed-map-wrapper svg #path-phoenix-nogales path", {autoAlpha: 0, yPercent: '30%', ease: Power0.easeInOut})
		.setClassToggle("section.tassement-scene svg#tassement-svg #courbe path", "is-drawn") 
		.offset( 0 ) //tip top
		//.addIndicators() // add indicators (requires plugin)
		.addTo(ctrlTassement);

	//$tassementCourbe.hide();

// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//
// ---------------------------------------------------------------------------------------------------------------------//

	var ctrlCrack = new ScrollMagic.Controller();
	var $crack2 = $('.crack2');

	new ScrollMagic.Scene({
			triggerElement: 'section.crack-scene', 
			triggerHook: 0.5
		})
		.setClassToggle(".crack2", "is-visible") 
		.offset( 0 ) //tip top
		//.addIndicators() // add indicators (requires plugin)
		.addTo(ctrlCrack);

});