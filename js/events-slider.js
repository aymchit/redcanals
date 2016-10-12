$(document).ready(function() {

			 var speed = 5000;
    var run = setInterval('rotate()', speed); 
////////////////////////////////
	
    var item_width = $('#tv-show-slider li:visible').outerWidth(); 
    var left_value = item_width * (-1); 
         
    $('#tv-show-slider li:visible:first').before($('#tv-show-slider li:visible:last'));
     
    $('#tv-show-slider ul').css({'left' : left_value});
 
    var lilength = $('#tv-show-slider ul').children('li:visible').length;
 
	$('#tv-show-slider ul').css('width', lilength*item_width+'px')
	$('#tv-show-slider ul li:eq(1)').addClass('aa');
	
	for(i=0; i<lilength; i=i+1){		
		$("#tv-show-slider ul li:eq("+i+")").attr('rel', i+1);		
		}
	
	
	var active =  $("#tv-show-slider ul li.aa").attr('rel')
				$('#tv-show-img-counter').text(active+"/"+lilength);	
	
	
	
	
	var i = 0;
     
    $('#tv-show-slider-next').click(function() {
		i = i+1;
		 $('#tv-show-slider ul li').removeClass('aa');
        var left_indent = parseInt($('#tv-show-slider ul').css('left')) - item_width;
        $('#tv-show-slider ul').animate({'left' : left_indent}, 200, function () {
             
            $('#tv-show-slider li:visible:last').after($('#tv-show-slider li:visible:first'));                  
             
           $('#tv-show-slider ul').css({'left' : left_value});
         
        });
		
		$('#tv-show-slider ul li:eq(2)').addClass('aa');				
				
				var active =  $("#tv-show-slider ul li.aa").attr('rel')
				$('#tv-show-img-counter').text(active+"/"+lilength);
			      
        return false;
         
    });   
 
 
 
    $('#tv-show-slider-prev').click(function() {
		i = i+1;
		$('#tv-show-slider ul li').removeClass('aa');
        var left_indent = parseInt($('#tv-show-slider ul').css('left')) + item_width;
        $('#tv-show-slider ul').animate({'left' : left_indent}, 200,function(){    
 
            $('#tv-show-slider li:visible:first').before($('#tv-show-slider li:visible:last'));           
 
            $('#tv-show-slider ul').css({'left' : left_value});
         
        });
		
		
		$('#tv-show-slider ul li:eq(0)').addClass('aa');				
				
				var active =  $("#tv-show-slider ul li.aa").attr('rel')
				$('#tv-show-img-counter').text(active+"/"+lilength);
				
        return false;
             
    });
 
  
///////////////////////////////////////////////////

	
 $('#tv-show-slider').hover(
         
        function() {
            clearInterval(run);
        }, 
        function() {
            run = setInterval('rotate()', speed);   
        }
    ); 	
	
$('#tv-show-slider-prev, #tv-show-slider-next').hover(function() {
            clearInterval(run);
			//alert('aa');
        }, 
        function() {
            run = setInterval('rotate()', speed);   
        });
		
	
	
	
	   
	   
});
 
function rotate() {
    $('#tv-show-slider-next').click();
}
