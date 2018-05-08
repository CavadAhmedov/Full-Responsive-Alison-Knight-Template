$(function(){


$(".fa-bars").click(function(){
	$(".navbar").toggleClass("hidden");
});
$(".navbar").mouseleave(function(){
	$(".navbar").toggleClass("hidden");
});

$(window).scroll(function(){
	if($(window).scrollTop() > 1000){
		$(".scroll-up").removeClass("hidden")
	}else{
		$(".scroll-up").addClass("hidden")
	}
})

});