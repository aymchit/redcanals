// JavaScript Document

$(document).ready(function(){
	$('.zz').click(function(){
	
	var loadedcont= $(this).attr('href'),
	poptitle = $(this).attr('title');	
	
	var pageName = (function() {		
	return $('body').prepend("<div class='popin' style=' background:#FFF url(/images/progress.gif) no-repeat 50% 50%; position:fixed; left:50%; top:50%;  z-index:9999; padding:10px; border:1px solid #000;'><div id='kris'></div></div><div class='pop' style='position:fixed; left:0; top:0; width:100%; background-color:#000; opacity:0.4; filter:alpha(opacity=80); z-index:9998;'></div>"),
	 $('.pop').height($(window).height()+'px'),
	 $('.pop, .popin').hide(),
	 $('.pop').fadeTo( "slow", 0.7 ),
	 $('.popin').fadeIn('slow'),
	 $('.popin').fadeIn('slow').prepend('<a href="#" class="close" style=" background:url(/images/close.png) no-repeat 0 0; width:29px; height:29px; color:#FFF; text-indent:-99999px; position:absolute; display:block; right:0px; top:-30px;">close</a><h4 class="poptitle" style=" position:absolute; display:block; left:0px; top:-30px; color:#FFF; font-size:16px; font-weight:400;">'+poptitle+'</h4>');		  
	 } ());	
	 
	 
	
	 
	 
	 
	
	
	/*if($(this).hasClass('inline')){
		pageName
		$('#kris').text(loadedcont);
		$('.popin').css({'margin-left':'-'+$('.popin').width()/2+'px','margin-top':'-'+$('.popin').height()/2+'px'});
		$('.poptitle').css('width',$('.popin').width()+'px')	
		return false
		}*/
	if($(this).hasClass('youtube1')){
		pageName
		$('#kris').load(loadedcont, function(){			
		$('.popin').css({'margin-left':'-'+$('.popin').width()/2+'px','margin-top':'-'+$('.popin').height()/2+'px'});
		$('.poptitle').css('width',$('.popin').width()+'px');	
			});
		return false
		}
	if($(this).hasClass('homeappsgame')){
		pageName
		$('#kris').load(loadedcont, function(){			
		$('.popin').css({'margin-left':'-'+$('.popin').width()/2+'px','margin-top':'-'+$('.popin').height()/2+'px'});
		$('.poptitle').css('width',$('.popin').width()+'px');	
			});
		return false
		}	
		
	if($(this).hasClass('hiddenDiv')){
		pageName
		$('#kris').html($(loadedcont).clone()).show();
		$('.popin').css({'margin-left':'-'+$('.popin').width()/2+'px','margin-top':'-'+$('.popin').height()/2+'px'});
		$('.poptitle').css('width',$('.popin').width()+'px')	
		return false
		}
	
	
	});
	
	$('a.close, .pop').live('click', function(){ 
	  	$('.pop , .popin').fadeOut( 0.7);
		$('.pop , .popin').remove();
		return false;
	});
	
})