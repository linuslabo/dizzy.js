define(["sandbox"],function(b){return{init:function(){$(document).bind("mousewheel",function(c,a){b.publish("dizzy.io.mouse.wheel."+(a<0?"up":"down"),{delta:a,event:c})})},destroy:function(){$(document).unbind("mousewheel")}}});