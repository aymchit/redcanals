$(document).ready(function() {


	var findvideo1 = $('#asrSlides ul li:nth-child(1) a').attr('href');
		$('#addShowRillVideo2').attr('src',findvideo1);
		$('#asrSlides ul li:nth-child(1) a').addClass('asrSlidesA');
		var findvideo4Text = $('#asrSlides ul li:nth-child(1) span').text();
		$('.addInfoL').text(findvideo4Text);
			
		
			
////////////////////////////////
	
    var item_width = $('#asrSlides li:visible').outerWidth(); 
    var left_value = item_width * (-1); 
         
    $('#asrSlides li:visible:first').before($('#asrSlides li:visible:last'));
     
    $('#asrSlides ul').css({'left' : left_value});
 
    var lilength = $('#asrSlides ul').children('li:visible').length;
 
	$('#asrSlides ul').css('width', lilength*item_width+'px')
	
	
	
	var i = 0;
     
    $('#asrnext').click(function() {
		i = i+1;
        var left_indent = parseInt($('#asrSlides ul').css('left')) - item_width;
        $('#asrSlides ul').animate({'left' : left_indent}, 200, function () {
             
            $('#asrSlides li:visible:last').after($('#asrSlides li:visible:first'));                  
             
           $('#asrSlides ul').css({'left' : left_value});
         
        });
		
			      
        return false;
         
    });   
 
 
 
    $('#asrprev').click(function() {
		i = i+1;
        var left_indent = parseInt($('#asrSlides ul').css('left')) + item_width;
        $('#asrSlides ul').animate({'left' : left_indent}, 200,function(){    
 
            $('#asrSlides li:visible:first').before($('#asrSlides li:visible:last'));           
 
            $('#asrSlides ul').css({'left' : left_value});
         
        });
        return false;
             
    });
 
  
///////////////////////////////////////////////////


$('#asrSlides ul li').click( function(){
		$('#asrSlides ul li a').removeClass('asrSlidesA');
		$(this).find('a').addClass('asrSlidesA');
		var findvideo = $(this).find('a').attr('href');
		$('#addShowRillVideo2').attr('src',findvideo);
		
		var findvideo3Text = $(this).find('span').text();
		$('.addInfoL').text(findvideo3Text);
		
		return false
			
		});
		
		$('.addShowRillL ul li').click( function(){
			
		 $('.makerInfo').hide();	
			
		$('#asrSlides ul li').hide();		
		var asrSlidesLi = $(this).find('a').attr('rel');
		$('.'+asrSlidesLi).show();
		
		if($("#asrSlides ul li."+asrSlidesLi+"").length<4){
		$('#asrnext, #asrprev').hide();
		}	
		else{
		$('#asrnext, #asrprev').show();
		}
			
		var findText = $(this).find('a').text();
		$('.addShowRillR h3').text(findText);	
		
		$('.addShowRillL ul li').find('a').removeClass('addMakerActive');
		$(this).find('a').addClass('addMakerActive');
		
		$('.addMakerArrow').remove();
		$(this).append("<img src='../images/rightArrow.png' class='addMakerArrow' />");
		
		var findvideo2 = $('#asrSlides ul li:visible:eq(1) a').attr('href');
		$('#addShowRillVideo2').attr('src',findvideo2);
		$('#asrSlides ul li:visible a').removeClass('asrSlidesA');
		$('#asrSlides ul li:visible:eq(1) a').addClass('asrSlidesA');
		
		var findvideo2Text = $('#asrSlides ul li:visible:eq(1) span').text();
		$('.addInfoL').text(findvideo2Text);
		
		$('.aboutMakerBtn').show();
		var addMakerInfoPage = $(this).find('a').attr('href');
		var addMakerclass = $(this).find('a').attr('rel');
		$('.aboutMakerBtn').attr('href',addMakerInfoPage);
		$('.makerInfoBtn').attr('rel',addMakerclass);
		return false
					
		});	
		
		
/////////////////// maker info ////////////////		
		
	   $('.aboutMakerBtn').click(function(){
	   $('.makerInfo').fadeIn();
	   var addMakerInfoPage = $(this).attr('href');
	   $('.makerInfoLoader').load(addMakerInfoPage);
	   $('#addShowRillVideo2').attr('src','../images/blank.gif');
	   return false
	   });  	
		
	   $('.makerInfoBtn').click(function(){
	   $('.makerInfo').fadeOut();
	   var ss = $(this).attr('rel');
	    $('#addShowRillVideo2').attr('src',$('.'+ss +' .asrSlidesA').attr('href'));
		 return false
	   });  
	   
});
 
