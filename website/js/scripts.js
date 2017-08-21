$(document).ready(function(){
    	
				    if ($(window).scrollTop() >= 300)
        			{
            			$('.newNav').addClass("slideNewNavDown");
            			$('nav').css("display","none");
            			$('a i').css("display","inline");
        			} 
        			else
        			{
            			$('.newNav').removeClass("slideNewNavDown");;
            			$('nav').css("display","inline");
            			$('a i').css("display","none");
        			};
				});

			$(function()
			{
    			$(window).scroll(function ()
    			{
        			var vH = $(window).height();
        			if ($(window).scrollTop() >= 300)
        			{
            			$('.newNav').addClass("slideNewNavDown");
            			$('nav').css("display","none");
            			$('a i').css("display","inline");
        			} 
        			else
        			{
            			$('.newNav').removeClass("slideNewNavDown");;
            			$('nav').css("display","inline");
            			$('a i').css("display","none");
        			}
    			});
    		});

function initMap() {
        var uluru = {lat: 43.8398911, lng: -79.5649135};
        var center_pos = {lat: 43.8398911, lng: -79.5509140};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: center_pos
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

var main = function() {

$('.icon-menu').on('click',function()
{
	$('body').css("background", "black");
	if($(this).attr('data-click-state') == 1)
		{

$(this).attr('data-click-state', 0);
$('body').css("max-width", "1600px");
$('body').css("overflow","visible");
$('.menu').animate({right: "-280px"}, 400); 

$('nav').animate({right: "0px"}, 400);

			$('nav ul').animate({right: "0px"}, 400);
			setTimeout(function(){ $(".burger").toggleClass('open'); }, 400);

			setTimeout(function(){ 		

				$('.footerBanner').animate({opacity: '1'}, 200);			
				$('.locations').animate({opacity: '1'}, 200);			
				$('.moreHelp').animate({opacity: '1'}, 200);			
				$('#map').animate({opacity: '1'}, 200);			
				$('.container-fluid').animate({opacity: '1'}, 200);			
				$('.banner').animate({opacity: '1'}, 200);			
				$('.jumbotron').animate({opacity: '1'}, 200);			

			}, 1200);
}
	else
		{
			let bgWidth = $(window).width();
			$('body').css("max-width", bgWidth);
	
			$(this).attr('data-click-state', 1);
			$('.jumbotron').animate({opacity: '0.35'}, 200);			
			$('.banner').animate({opacity: '0.35'}, 200);			
			$('.container-fluid').animate({opacity: '0.35'}, 200);			
			$('#map').animate({opacity: '0.35'}, 200);			
			$('.moreHelp').animate({opacity: '0.35'}, 200);			
			$('.locations').animate({opacity: '0.35'}, 200);			
			$('.footerBanner').animate({opacity: '0.35'}, 200);			

		setTimeout(function(){ 		
			$('nav ul').animate({right: "280px"}, 400);
			$('nav').animate({right: "280px"}, 400);
			$(".burger").toggleClass('open');	
			$('.menu').animate({right: "0px"}, 400); 
			$('body').css("overflow","hidden");
		}, 400);
	}
});


$('.icon-menuBottom').on('click',function()
{
	$('body').css("background", "black");
	if($(this).attr('data-click-state') == 1)
		{
			$(this).attr('data-click-state', 0);

			$('body').css("max-width", "1600px");
			$('body').css("overflow","visible");
			$('.menu').animate({right: "-280px"}, 400); 
			
			$('.newNav').animate({right: "0px"}, 400);
			
						setTimeout(function(){ $(".burger").toggleClass('open'); }, 400);
			
						setTimeout(function(){ 			
			
							$('.footerBanner').animate({opacity: '1'}, 200);			
							$('.locations').animate({opacity: '1'}, 200);			
							$('.moreHelp').animate({opacity: '1'}, 200);			
							$('#map').animate({opacity: '1'}, 200);			
							$('.container-fluid').animate({opacity: '1'}, 200);			
							$('.banner').animate({opacity: '1'}, 200);			
							$('.jumbotron').animate({opacity: '1'}, 200);			
							$('.newNav').animate({backgroundColor: 'rgba(255,255,255,0.95)'}, 200);			
							$('.icon-menuBottom').animate({color: '#000'},200);
							$('.newNav').css("box-shadow","1px 1px 5px lightgrey");
							$('.newNav img').attr("src","./images/fivestarlogo.svg");
						}, 1200);
	}
	else
		{
			let bgWidth = $(window).width();
			$('body').css("max-width", bgWidth);


$(this).attr('data-click-state', 1);
$('.newNav').animate({backgroundColor: 'rgba(255,255,255,0)'}, 200);			
$('.newNav').css("box-shadow","none");
$('.icon-menuBottom').animate({color: '#fff'},200);
$('.newNav img').attr("src","./images/fivestarlogobefore.svg");

$('.jumbotron').animate({opacity: '0.35'}, 200);			
$('.banner').animate({opacity: '0.35'}, 200);			
$('.container-fluid').animate({opacity: '0.35'}, 200);			
$('#map').animate({opacity: '0.35'}, 200);			
$('.moreHelp').animate({opacity: '0.35'}, 200);			
$('.locations').animate({opacity: '0.35'}, 200);			
$('.footerBanner').animate({opacity: '0.35'}, 200);			

setTimeout(function()
{ 		
	$('body').css("overflow","hidden");
	$('.newNav').animate({right: "280px"}, 400);
$(".burger").toggleClass('open');
$('.menu').animate({right: "0px"}, 400);

}, 400);

}

})

};

// $(function() {
//     $('.footerText').matchHeight();
// });

$(document).ready(main);
