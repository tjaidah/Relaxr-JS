
$(document).ready(function(){
	
	$(".readmore").click(function(){
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless").show();
 	});

 	$(".readless").click(function(){
 		$("#show-this-on-click").slideUp();
 		$(".readless").hide();
 		$(".readmore").show();
 	});

 	$(".learnmore").click(function(event){
 		event.preventDefault();
 	});

 	$(".learnmore").click(function(){
 		$("#learnmoretext").slideToggle();
 		$(".learnmore").hide();
 	});

 	$(".readmore").click(function(event){
	event.preventDefault();
	});

	$(".readless").click(function(event){
	event.preventDefault();
	});
	
 });


