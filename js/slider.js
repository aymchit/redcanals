$(document).ready(function() {
 
    //rotation speed and timer
    var speed = 5000;
    var run = setInterval('rotate()', speed);   
	
	
	
	
    var item_width = $('#slides li').outerWidth(); 
    var left_value = item_width * (-1); 
         
    $('#slides li:first').before($('#slides li:last'));
     
    $('#slides ul').css({'left' : left_value});
 
 var lilength = $('#slides ul').children('li').length;
	$('#slides ul').css('width', lilength*item_width+'px')
	$('#slides ul li:eq(1)').css({'margin-right':0+'px'}).addClass('aa');
	
	for(i=0; i<lilength; i=i+1){		
		$("#slides ul li:eq("+i+")").attr('rel', i+1);		
		}
	
	
	var active =  $("#slides ul li.aa").attr('rel')
				$('#buttons span').text(active+"/"+lilength);	
	
	
     
    $('#next').click(function() {
         $('#slides ul li').removeClass('aa');
        var left_indent = parseInt($('#slides ul').css('left')) - item_width;
         
        $('#slides ul').animate({'left' : left_indent}, 200, function () {
             
            $('#slides li:last').after($('#slides li:first'));                  
             
            $('#slides ul').css({'left' : left_value});
         
        });
            
			
		$('#slides ul li:eq(2)').addClass('aa');				
				
				var active =  $("#slides ul li.aa").attr('rel')
				$('#buttons span').text(active+"/"+lilength);	
			
			      
        return false;
         
    });   
 
 
 
 
 
 
    $('#prev').click(function() {
    $('#slides ul li').removeClass('aa');
        var left_indent = parseInt($('#slides ul').css('left')) + item_width;
 
        $('#slides ul').animate({'left' : left_indent}, 200,function(){    
 
            $('#slides li:first').before($('#slides li:last'));           
 
            $('#slides ul').css({'left' : left_value});
         
        });
		
			 $('#slides ul li:eq(0)').addClass('aa');
				
				
				var active =  $("#slides ul li.aa").attr('rel')
				$('#buttons span').text(active+"/"+lilength);	
			
        return false;
             
    });
 
  
/*$('#pose').click(
         
        function() {
            clearInterval(run);
        }
    ); 
       
	    $('#play').click(
         
   function(){
    $('#next').click();
}

    ); */
	
 $('#slides').hover(
         
        function() {
            clearInterval(run);
        }, 
        function() {
            run = setInterval('rotate()', speed);   
        }
    ); 	
	
$('#prev, #next').hover(function() {
            clearInterval(run);
			//alert('aa');
        }, 
        function() {
            run = setInterval('rotate()', speed);   
        });
		
	
	
	
	   
	   
});
 
function rotate() {
    $('#next').click();
}

