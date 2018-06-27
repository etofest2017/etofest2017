var mult = [
	54037222      ,93013242		,60406355		,146043821		,105665328		,155673893		,28559511
	,96063688     ,93245423     ,67110186       ,137734846      ,63658207       ,155696373		,37624700
	,71872608     ,58874938     ,80883637       ,124918175      ,99694729       ,153887315
	,64773560     ,103700643    ,71340449       ,44336109       ,80907661       ,162708494
	,63266053     ,103796737    ,23283736       ,126060304      ,18462043       ,175370719
	,59584804     ,25622359     ,25463733       ,125807524      ,172859842      ,145775628
	,30032659     ,50531435     ,24611034       ,124510145      ,87852687       ,72823262
	,99006993     ,63082999     ,17746950       ,56389966       ,124022235      ,149148087
	,53812202     ,57472136     ,17900030       ,66221542       ,70678953       ,33329117
	,59362697     ,24051768     ,142728686      ,107491887      ,121054873      ,118120670
];

$(document).on("click",".btn-show-video",function(event) {
	$('.btn-show-video').text('Покажите мне какой-нибудь другой мультик');
	$('.btn-show-video-en').text('Show me another cartoon please');
	var randMult = Math.floor(Math.random() * mult.length);
	$('.video-frame').show().empty().append('<iframe class="embed-responsive-item" src="https://player.vimeo.com/video/'+mult[randMult]+'?autoplay=1&title=0&byline=0&portrait=0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	$(this).blur();	
	
	$('html, body').animate({
	    scrollTop: ($('.video-frame').offset().top)
	},300);
	
	return false;
});


