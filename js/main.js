$(document).ready(function() {
    $(".navbar a").click(function() {
       var id = $(this).attr("data-id");
       $("#content > div").hide(); 
       $(".div" + id).show(); 
    });
    $(".navbar li").click(function() {
    	$(".navbar li").removeClass('active');
    	$(this).addClass('active');
    });

});