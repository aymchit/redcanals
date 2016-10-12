$(document).ready(function() {
 
    //rotation speed and timer
    var speed = 5000;
    //var run = setInterval('ptsRotate()', speed); 
    //var run1 = setInterval('omsRotate()', speed);   
	
	
	
	var item_width = $('#pastThumbSlides li').outerWidth(); 
    var left_value = item_width * (-1); 
         
    $('#pastThumbSlides li:first').before($('#pastThumbSlides li:last'));
     
    $('#pastThumbSlides ul').css({'left' : left_value});
 
 var lilength = $('#pastThumbSlides ul').children('li').length;
	$('#pastThumbSlides ul').css('width', lilength*item_width+'px')
	$('#pastThumbSlides ul li:eq(1)').css({'margin-right':0+'px'}).addClass('aa');
	
	/*for(i=0; i<lilength; i=i+1){		
		$("#pastThumbSlides ul li:eq("+i+")").attr('rel', i+1);		
		}
	
	
	var active =  $("#pastThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);*/
	
	
     
    $('#ptsNext').click(function() {
         $('#pastThumbSlides ul li').removeClass('aa');
        var left_indent = parseInt($('#pastThumbSlides ul').css('left')) - item_width;
         
        $('#pastThumbSlides ul').animate({'left' : left_indent}, 200, function () {
             
            $('#pastThumbSlides li:last').after($('#pastThumbSlides li:first'));                  
             
            $('#pastThumbSlides ul').css({'left' : left_value});
         
        });
            
			
		$('#pastThumbSlides ul li:eq(2)').addClass('aa');				
				
				var active =  $("#pastThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);	
			
			      
        return false;
         
    });   
 
 
 
 
 
 
    $('#ptsPrev').click(function() {
    $('#pastThumbSlides ul li').removeClass('aa');
        var left_indent = parseInt($('#pastThumbSlides ul').css('left')) + item_width;
 
        $('#pastThumbSlides ul').animate({'left' : left_indent}, 200,function(){    
 
            $('#pastThumbSlides li:first').before($('#pastThumbSlides li:last'));           
 
            $('#pastThumbSlides ul').css({'left' : left_value});
         
        });
		
			 $('#pastThumbSlides ul li:eq(0)').addClass('aa');
				
				
				var active =  $("#pastThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);	
			
        return false;
             
    });
 
  
/*$('#pose').click(
         
        function() {
            clearInterval(run);
        }
    ); 
       
	    $('#play').click(
         
   function(){
    $('#ptsNext').click();
}

    ); 
	
 $('#pastThumbSlides').hover(
         
        function() {
            clearInterval(run);
        }, 
        function() {
            run = setInterval('ptsRotate()', speed);   
        }
    ); 	
	
$('#ptsPrev, #ptsNext').hover(function() {
            clearInterval(run);
			//alert('aa');
        }, 
        function() {
            run = setInterval('ptsRotate()', speed);   
        });*/
    
		
/*---------------------------------------------------------*/	
/*---------------------------------------------------------*/		
/*---------------------------------------------------------*/

  var item_width1 = $('#otherMoviThumbSlides li').outerWidth(); 
    var left_value1 = item_width1 * (-1); 
         
    $('#otherMoviThumbSlides li:first').before($('#otherMoviThumbSlides li:last'));
     
    $('#otherMoviThumbSlides ul').css({'left' : left_value1});
 
 var lilength = $('#otherMoviThumbSlides ul').children('li').length;
	$('#otherMoviThumbSlides ul').css('width', lilength*item_width1+'px')
	$('#otherMoviThumbSlides ul li:eq(1)').css({'margin-right':0+'px'}).addClass('aa');
	
	/*for(i=0; i<lilength; i=i+1){		
		$("#otherMoviThumbSlides ul li:eq("+i+")").attr('rel', i+1);		
		}
	
	
	var active =  $("#otherMoviThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);*/
	
	
     
    $('#omsNext').click(function() {
         $('#otherMoviThumbSlides ul li').removeClass('aa');
        var left_indent = parseInt($('#otherMoviThumbSlides ul').css('left')) - item_width1;
         
        $('#otherMoviThumbSlides ul').animate({'left' : left_indent}, 200, function () {
             
            $('#otherMoviThumbSlides li:last').after($('#otherMoviThumbSlides li:first'));                  
             
            $('#otherMoviThumbSlides ul').css({'left' : left_value1});
         
        });
            
			
		$('#otherMoviThumbSlides ul li:eq(2)').addClass('aa');				
				
				var active =  $("#otherMoviThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);	
			
			      
        return false;
         
    });   
 
 
 
 
 
 
    $('#omsPrev').click(function() {
    $('#otherMoviThumbSlides ul li').removeClass('aa');
        var left_indent = parseInt($('#otherMoviThumbSlides ul').css('left')) + item_width1;
 
        $('#otherMoviThumbSlides ul').animate({'left' : left_indent}, 200,function(){    
 
            $('#otherMoviThumbSlides li:first').before($('#otherMoviThumbSlides li:last'));           
 
            $('#otherMoviThumbSlides ul').css({'left' : left_value1});
         
        });
		
			 $('#otherMoviThumbSlides ul li:eq(0)').addClass('aa');
				
				
				var active =  $("#otherMoviThumbSlides ul li.aa").attr('rel')
				$('#ptsButtons span').text(active+"/"+lilength);	
			
        return false;
             
    });
 
  
/*$('#pose').click(
         
        function() {
            clearInterval(run);
        }
    ); 
       
	    $('#play').click(
         
   function(){
    $('#omsNext').click();
}

    );
	
 $('#otherMoviThumbSlides').hover(
         
        function() {
            clearInterval(run1);
        }, 
        function() {
            run1 = setInterval('omsRotate()', speed);   
        }
    ); 	
	
$('#omsPrev, #omsNext').hover(function() {
            clearInterval(ru1n);
			//alert('aa');
        }, 
        function() {
            run1 = setInterval('omsRotate()', speed);   
        }); */
		
		
	   
	   
});
 
/*function ptsRotate() {
    $('#ptsNext').click();
}

 
function omsRotate() {
    $('#omsNext').click();
}
*/