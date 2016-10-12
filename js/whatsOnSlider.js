// JavaScript Document

var rotateSpeed = 2000;
var currentTab = 0;
var numTabs;
var autoRotate;
var run = setInterval('rotateTabs()', rotateSpeed);
function openTab(clickedTab) {
   var thisTab = $(".rotatornav a").index(clickedTab);
   $(".rotatornav a").removeClass("aa");
   $(".rotatornav a:eq("+thisTab+")").addClass("aa");
   $("#text-rotator span").hide();
   $("#text-rotator span:eq("+thisTab+")").show();
   currentTab = thisTab;
}

function rotateTabs() {
   var nextTab = (currentTab == (numTabs - 1)) ? 0 : currentTab + 1;
   openTab($(".rotatornav a:eq("+nextTab+")"));
}


$(function(){
	var rlength = $('#text-rotator span').length;
	$('#text-rotator').append("<div class='rotatornav'><div>")
	for(i=0; i<rlength; i=i+1){
		var ii = i+1;
	$('.rotatornav').append("<a href='#'>"+ii+"</a>");
	}

	 numTabs = $(".rotatornav a").length;

   $(".rotatornav a").click(function() {
      openTab($(this)); return false;
	  })

	$('#text-rotator').hover(

        function() {
            clearInterval(run);
        },
        function() {
            run = setInterval('rotateTabs()', rotateSpeed);
        }
    );

});