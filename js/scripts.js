---
---
function main() {

	$('.icon-menu').on('click', function () {

		if ($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0);
			$('body').css("overflow", "visible");
			$('.menu').animate({
				right: "-270px"
			}, 400);

			$('.oldNavWrapper').animate({
				right: "0px"
			}, 400);
			var thisObject = this;
			// $('nav ul').animate({right: "0px"}, 400);
			// setTimeout(function(){ $(".burger").toggleClass('open'); }, 400);
			// setTimeout({myFunction(this)}, 1200);	
			setTimeout(function () {

				// $('.footerBanner').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.locations').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.moreHelp').animate({
				// 	opacity: '1'
				// }, 400);
				// $('#map').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.body-container').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.banner').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.jumbotron').animate({
				// 	opacity: '1'
				// }, 400);
			
				$("body > :not(.oldNavWrapper, .menu)").animate({
						opacity: '1'
					}, 400);

				myFunction(thisObject);
			
			}, 800);
			// setTimeout(function () {$('body').css("background", "white");}, 1300);
		} else {
		$('body').css("background", "black");
			var bgWidth = $(window).width();
			$('body').css("max-width", bgWidth);
	
			myFunction(this);
			$(this).attr('data-click-state', 1);
			
			// $('.jumbotron').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.banner').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.body-container').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('#map').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.moreHelp').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.locations').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.footerBanner').animate({
			// 	opacity: '0.35'
			// }, 400);

			$("body > :not(.oldNavWrapper, .menu)").animate({
				opacity: '0.35'
			}, 400);


			setTimeout(function () {
				// $('nav ul').animate({right: "270px"}, 400);
				$('.oldNavWrapper').animate({
					right: "270px"
				}, 400);
				// $(".burger").toggleClass('open');	
				$('.menu').animate({
					right: "0px"
				}, 400);
				$('body').css("overflow", "hidden");
			}, 400);
		}
	});

	$('.icon-menuBottom').on('click', function () {


		if ($(this).attr('data-click-state') == 1) {
			$(this).attr('data-click-state', 0);
			// $('body').css("max-width", "1600px");

			$('body').css("overflow", "visible");
			$('.menu').animate({
				right: "-270px"
			}, 400);

			$('.newNavWrapper').animate({
				right: "0px"
			}, 400);

			var thisObject = this;

			// setTimeout(function(){ $(".burger").toggleClass('open'); }, 400);

			setTimeout(function () {

				// $('.footerBanner').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.locations').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.moreHelp').animate({
				// 	opacity: '1'
				// }, 400);
				// $('#map').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.body-container').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.banner').animate({
				// 	opacity: '1'
				// }, 400);
				// $('.jumbotron').animate({
				// 	opacity: '1'
				// }, 400);

				$('.newNavWrapper').animate({
					backgroundColor: 'rgba(255,255,255,0.95)'
				}, 400);
				
				$("body > :not(.newNavWrapper, .menu)").animate({
					opacity: '1'
				}, 400);
				
				
				
				
				// $('.burger').animate({color: '#000'},200);
				// $('.newNavWrapper').css("box-shadow", "1px 1px 5px lightgrey");
				$('.newNavWrapper img').attr("src", "{{ site.baseurl }}/images/fivestarlogo.svg");
				// $(".[name*='bar']").css("background-color", "black");
				$('.bar1, .bar2, .bar3').css("background-color", "black");
				// $('.bar2').css("background-color", "black");
				// $('.bar3').css("background-color", "black");
				myFunction(thisObject);
			}, 800);
			// setTimeout(function () {$('body').css("background", "white");}, 1300);
		} else {
			$('body').css("background", "black");
			$('.bar1, .bar2, .bar3').css("background-color", "white");
			// $(".[name*='bar']").css("background-color", "white");
			// $('.bar2').css("background-color", "white");
			// $('.bar3').css("background-color", "white");
			myFunction(this);
			var bggWidth = $(window).width();
			$('body').css("max-width", bggWidth);

			$(this).attr('data-click-state', 1);

			$('.newNavWrapper').animate({
				backgroundColor: 'rgba(255,255,255,0)'
			}, 400);
			// $('.newNavWrapper').css("box-shadow", "none");
			// $('.burger').animate({color: '#fff'},200);
			$('.newNavWrapper img').attr("src", "{{ site.baseurl }}/images/fivestarlogobefore.svg");

			// $('.jumbotron').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.banner').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.body-container').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('#map').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.moreHelp').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.locations').animate({
			// 	opacity: '0.35'
			// }, 400);
			// $('.footerBanner').animate({
			// 	opacity: '0.35'
			// }, 400);

			$("body > :not(.newNavWrapper, .menu)").animate({
				opacity: '0.35'
			}, 400);

			setTimeout(function () {
				$('body').css("overflow", "hidden");
				$('.newNavWrapper').animate({
					right: "270px"
				}, 400);
				// $(".burger").toggleClass('open');
				$('.menu').animate({
					right: "0px"
				}, 400);

			}, 400);

		}

	});

};

function initMap() {
	var uluru = {
		lat: 43.6629213,
		lng:-79.7277730
	};
	var uluruSecond = {
		lat: 43.7596190,
		lng:-79.4099279
	};
	var center_pos = {
		lat: 43.72,
		lng:-79.55
	};

	var contentString = "<h4>Fivestar Media Brampton</h4><div class='mapBox'><img src='{{ site.baseurl }}/images/brampton.jpg'><p><span>2 County Court Blvd., Suite 400</span><span>Brampton, ON</span><span>L6W 3W8</span><span>Canada</span><span>+1-416-464-6573</span></p></div>";
	var contentStringSecond = "<h4>Fivestar Media Toronto</h4><div class='mapBox'><img src='{{ site.baseurl }}/images/sheppard.jpg'><p><span>4711 Yonge Street, 10th Floor</span><span>Toronto, ON</span><span>M2N 6K8</span><span>Canada</span><span>+1-416-464-6573</span></p></div>";

	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 10,
		center: center_pos
	});

	var infowindow = new google.maps.InfoWindow({
		content: contentString
	  });

	  var infowindowSecond = new google.maps.InfoWindow({
		content: contentStringSecond
	  });

	var marker = new google.maps.Marker({
		position: uluru,
		map: map,
		// title: 'Fivestar Media Brampton'
	});
	var markerSecond = new google.maps.Marker({
		position: uluruSecond,
		map: map,
		// title: 'Fivestar Media Toronto'
	});

	marker.addListener('click', function() {
		infowindowSecond.close();
		infowindow.open(map, marker);
	});

	  markerSecond.addListener('click', function() {
		infowindow.close();
		infowindowSecond.open(map, markerSecond);
	  });
	}

$(document).ready(function () {
	main();
	if ($(document).scrollTop() >= 100) {
		$('.oldNav').css("display", "none");
		$('.newNavWrapper').addClass("slideNewNavDown");

		$('.bar1, .bar2, .bar3').css("background-color", "black");
		// $(".[name*='bar']").css("background-color", "black");
		// $('.bar2').css("background-color", "black");
		// $('.bar3').css("background-color", "black");
		// $('a i').css("display","inline");
	} else {
		$('.oldNav').css("display", "flex");
		$('.newNavWrapper').removeClass("slideNewNavDown");;
		// $('.newNav').css("display", "none");
		// $('a i').css("display","none");
	};

	$(window).resize(function() {
		var wWidth = $(window).width();
		$('body').css("max-width", wWidth);
		// if ($('.icon-menu').attr('data-click-state') == 0)
// {$('body').css("background", "white");}
// else
// {$('body').css("background", "white");}
$('body').css("background", "white");









	});

	$(window).scroll(function() {
		// var vH = $(document).height();
		if ($(document).scrollTop() >= 100) {

			$('.oldNav').css("display", "none");	
			$('.newNavWrapper').addClass("slideNewNavDown");

			// alert($(window).scrollTop());
			$('.bar1, .bar2, .bar3').css("background-color", "black"); //problem here with arrow color
			// $('.bar1').css("background-color", "black");
			// $('.bar2').css("background-color", "black");
			// $('.bar3').css("background-color", "black");
			// $('a i').css("display","inline");
		} else {
			$('.newNavWrapper').removeClass("slideNewNavDown");
			// $('.newNav ul li ul li').css("display", "none");	
			$('.oldNav').css("display", "flex");



			$('.bar1, .bar2, .bar3').css("background-color", "white");
			// $(".[name*='bar']").css("background-color", "white");
			// $('.bar1').css("background-color", "white");
			// $('.bar2').css("background-color", "white");
			// $('.bar3').css("background-color", "white");
			// $('a i').css("display","none");
		}
	});


});

// $(function()
// {

// });





// $(function() {
//     $('.footerText').matchHeight();
// });

// $(document).ready(main);

function myFunction(x) {
	x.classList.toggle("change");
}