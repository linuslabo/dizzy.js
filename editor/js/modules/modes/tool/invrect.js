define(["sandbox"],function(d){function e(a){a.stopPropagation();a.preventDefault();if(a.which!=1)return!1;$(b.svg.root()).bind("mousemove.dizzy.mode.line",function(a){a.stopPropagation();a.preventDefault();var a=b.toViewboxCoordinates({x:a.pageX,y:a.pageY}),d=Math.max(20,Math.abs(a.x-f)),e=Math.max(20,Math.abs(a.y-g));a.x-f<0&&c.attr({x:f-d});c.attr({width:d});a.y-g<0&&c.attr({y:g-e});c.attr({height:e})});var a=b.toViewboxCoordinates({x:a.pageX,y:a.pageY}),h=b.createGroup(),e=h.dom();b.getStrokeColor();
c=$(b.svg.rect(a.x,a.y,0,0,{width:20,height:20,strokeWidth:3,stroke:"black","fill-opacity":0,"stroke-opacity":0}));c.addClass("invisibleRect");f=a.x;g=a.y;e.append(c);d.publish("dizzy.canvas.group.created.invrect",{group:h})}var b,c,f,g,i={depends:["zoom","rightClick"],start:function(){b&&($(b.svg.root()).bind("mousedown.dizzy.mode.line",function(a){return e(a)}),$(b.svg.root()).bind("mouseup.dizzy.mode.line",function(){$(b.svg.root()).unbind("mousemove.dizzy.mode.line")}),$(b.svg.root()).addClass("editing drawing"))},
stop:function(){b&&($(b.svg.root()).unbind("mousedown.dizzy.mode.line"),$(b.svg.root()).unbind("mouseup.dizzy.mode.line"),$(b.svg.root()).removeClass("editing drawing"))}};d.subscribe("dizzy.presentation.loaded",function(a){b=a.canvas});return{init:function(){d.publish("dizzy.modes.register",{name:"tool-invrect",instance:i})},destroy:function(){}}});