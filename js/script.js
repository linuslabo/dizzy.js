/* Author: Linuslabo
*/
$(document).delegate('#try','click',function(){
	window.open('svg/presentation.svg');	
});

var svgNS = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";
var root = document.getElementById("root");
var canvas = document.getElementById("canvas");

var scH = $(document).height();
var scW = $(document).width();

$('#main').children('div').mouseenter(function(){
	$('#tip').html($(this).attr('alt'));	
}).mouseleave(function(){
	$('#tip').html("");
});

$('#what').toggle(function(e){
	e.stopPropagation();
	resizeBox($('#index'),1);
	$('#chapter').load('html/help.html');
	$('#textZone').fadeIn('slow');
}, function(e){
	e.stopPropagation();
	$('#textZone').fadeOut('slow');
	resizeBox($('#index'),0);
});

disableTextSelect($('body'));
/*
$('.floating').toggle(function(){
	$(this).animate({
	width: '86%'
  }, 800);
}, function(){
	$(this).animate({
	width: '600px'
  }, 800);
});
*/
function resizeBox ($floating, $big){
	if ($big == 1)
		$floating.animate({
			width: '86%'
		}, 800);
	else
		$floating.animate({
			width: '600px'
		}, 800);
}

$(window).bind('resize', function () {
	var $svg = $('#root');
	$svg.width($(document).width());
	$svg.height($(document).height());
});
$(window).resize();
$('#root').attr('style', 'width: "'+$(document).width()+'" height="'+$(document).width()+'"');

$(function(){
	
	var i=0;
	setInterval(function(){
		if(i<50) {
			//console.log('creata nuova rect');
			createRect({x: Math.random()*scW, y: Math.random()*scH});
			i++;
		} else {
			//console.log('rimossa e creata nuova rect');
			//$(canvas.firstChild).fadeOut('slow', function(){
				canvas.removeChild(canvas.firstChild);
			//});
			
			createRect({x: Math.random()*scW, y: Math.random()*scH});
		}
	}, 500);
	
	//createRect(cPoint);
});

function createRect(cPoint) {
	var newRect = document.createElementNS(svgNS,"rect");
	var width = Math.random()*600+60;
	newRect.setAttributeNS(null,"width",width);
	var height = Math.random()*400+60;
	newRect.setAttributeNS(null,"height",height);
	//console.log('x:'+cPoint.x+' y: '+cPoint.y);
	newRect.setAttributeNS(null,"x",cPoint.x-Math.random()*width);		
	newRect.setAttributeNS(null,"y",cPoint.y);	
	newRect.setAttributeNS(null,"fill-opacity",Math.random()*0.6+0.2);		
	var red = Math.round(Math.random() * 255);
	var green = Math.round(Math.random() * 255);
	var blue = Math.round(Math.random() * 255);
	newRect.setAttributeNS(null,"fill","rgb("+ red +","+ green+","+blue+")");
	canvas.appendChild(newRect);
}

function dummy(a){return a;}

/* Extra functions*/
function disableTextSelect($jObj) {
  return $jObj.each(function() {
    $(this).css({
      'MozUserSelect' : 'none'
    }).bind('selectstart select', function() {
      return false;
    }).mousedown(function() {
      return false;
    });
  });
};

function enableTextSelect($jObj) {
  return $jObj.each(function() {
    $(this).css({
      'MozUserSelect':''
    }).unbind('selectstart select').mousedown(function() {
      return true;
    });
  });
};




