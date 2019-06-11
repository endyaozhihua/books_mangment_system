/*$(document).ready(function(){

})*/
$(function(){
	var navigationTap = function () {
		$('#navigation li a').each(function(){
		$(this).on('click', function(e) {
		   $("#navigation li .active").removeClass('active');
           e.stopPropagation();
           $(this).addClass('active')
		})
	});
	}
	navigationTap();
	var dateArrowToggle = function () {
		$("#date_arrow").on("click", function(e){
			e.stopPropagation();
			var cls = $(this).attr("class");
			if(cls == "arrow_down"){
				$(this).removeClass("arrow_down").addClass("arrow_up");
				$("#date_list").show();
			}else {
				$(this).removeClass("arrow_up").addClass("arrow_down");
				$("#date_list").hide();
			}
	    });
		$(document).click(function () {
			$("#date_arrow").removeClass("arrow_up").addClass("arrow_down");
			$("#date_list").hide();
	   });
	}
	dateArrowToggle();
	var bannerToggle = function () {
       var timer = null;
       tiemr = setInterval(function () {
       	    $("#banner .img_box").animate({left:"-=1175px"},'slow',function () {
	        	if($("#banner .img_box").css('left') == "-2350px"){
	        		 $("#banner .img_box").css('left','0');
	        	}
       	    });
        }, 5000);
	}
    bannerToggle();
})