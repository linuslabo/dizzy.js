define(["sandbox"],function(c){function d(a){a.stopPropagation();a.preventDefault();if(a.which!=1)return!1;$(b.svg.root()).bind("mousemove.dizzy.mode.line",function(a){a.stopPropagation();a.preventDefault();a=b.toViewboxCoordinates({x:a.pageX,y:a.pageY});e.attr({y2:a.y,x2:a.x})});var a=b.toViewboxCoordinates({x:a.pageX,y:a.pageY}),f=b.createGroup(),d=f.dom();b.getStrokeColor();e=$(b.svg.line(a.x,a.y,a.x,a.y,{stroke:b.getStrokeColor(),strokeWidth:5}));d.append(e);c.publish("dizzy.canvas.group.created.line",
{group:f})}var b,e,g={depends:["zoom","rightClick"],start:function(){b&&($(b.svg.root()).bind("mousedown.dizzy.mode.line",function(a){return d(a)}),$(b.svg.root()).bind("mouseup.dizzy.mode.line",function(){$(b.svg.root()).unbind("mousemove.dizzy.mode.line")}),$(b.svg.root()).addClass("editing drawing"))},stop:function(){b&&($(b.svg.root()).unbind("mousedown.dizzy.mode.line"),$(b.svg.root()).unbind("mouseup.dizzy.mode.line"),$(b.svg.root()).removeClass("editing drawing"))}};c.subscribe("dizzy.presentation.loaded",
function(a){b=a.canvas});return{init:function(){c.publish("dizzy.modes.register",{name:"tool-line",instance:g})},destroy:function(){}}});