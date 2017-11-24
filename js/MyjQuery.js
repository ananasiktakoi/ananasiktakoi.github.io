$().ready(function() {
	$("#btn").click(function(event) {
		$("p").animate({fontSize:"60px"}, 3000);
		$("#imgKEK").slideUp(3000);
		$("p").wrap("<i></i>");
	});
	$("#btn2").click(function(event) {
		$("p").animate({fontSize:"30px"}, 3000);
		$("#imgKEK").slideDown(3000);
		$("p").wrap("<ins></ins>");
	});
});