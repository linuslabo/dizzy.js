define(["sandbox"],function(e){function g(a){var d=$(a.target);d.detach();$(document).bind("mousemove",function(a){a=b.toCanvasCoordinates({x:a.pageX,y:a.pageY});d.removeAttr("transform");d.attr({x:a.x,y:a.y})});var c=void 0;$(b.svg.root()).delegate("g.group","mouseenter",function(a){c=a.target});$(b.svg.root()).delegate("g.group","mouseout",function(){c=void 0});$(document).bind("mouseup mouseleave",function(){$(document).unbind("mousemove mouseenter mouseout");$(b.svg.root()).undelegate("g.group",
"mouseenter mouseout");if(c===void 0){var a=b.findGroup(c);b.addPathNumber(a,23)}else b.removePathnumber(b.findGroup(d),23)});return!1}function h(){$("g.group",b.svg.root()).each(function(){for(var a=b.findGroup(this),d=a.numbers(),c=0;c<d.length;++c)f(a,d[c])})}function f(a,d){var c=b.svg.ellipse(a.dom(),b.WIDTH/2,b.HEIGHT/2,100,100,{fill:"green",stroke:"white"});c.addClass("pathnum");c.text(d);a.dom().append(c)}var b,i={depends:["zoom","pan"],start:function(){$(b.svg.root()).delegate("g.group",
"click",function(a){a=jQuery(a.target);a.is("g")||(a=a.closest("g"));var a=b.getGroup(a),d=b.addPathNumber(a);a.dom().append(f(a,d))});$(b.svg.root()).delegate(".pathNumber","mousedown",function(a){g(a)});$(b.svg.root()).addClass("path");h()},stop:function(){$(b.svg.root()).undelegate("g.group","click");$(b.svg.root()).undelegate(".pathNumber","mousedown");$(b.svg.root()).removeClass("path");$(".pathnum").remove()}};e.subscribe("dizzy.presentation.loaded",function(a){b=a.canvas});return{init:function(){e.publish("dizzy.modes.register",
{name:"tool-path",instance:i})},destroy:function(){}}});