define(["sandbox"],function(h){function s(){$(f.svg.root()).delegate(".group","click.dizzy.mode.text.edit",function(a){a.stopImmediatePropagation();var c=$(this).children("text");if(c.size()>0)if(a.stopPropagation(),j){var b=f.getGroup(this);f.centerGroup(b,{duration:100,complete:function(){var e=i(c);g=b;q(b,e)}})}else m();else r(a);return!1});$(f.svg.root()).bind("click.dizzy.mode.text.new",function(a){a.which==1&&r(a)})}function r(a){if(j){a.stopPropagation();var c={x:a.pageX,y:a.pageY},b=f.createGroup(),
e=b.dom(),k=$(f.svg.other(e,"text")),d=$(f.svg.other(k,"tspan")),c=f.toViewboxCoordinates(c);k.attr({"font-family":p?p:"serif","font-size":(o?o:200)+"px",x:c.x,y:c.y,stroke:f.getStrokeColor(),fill:f.getFillColor()});k.append(d);e.append(k);g=b;q(b,{x:a.pageX,y:a.pageY-45});h.publish("dizzy.canvas.group.created.text",{group:b})}else m()}function i(a){if(a!=void 0){var c=a[0],a={},b=c.getScreenCTM(),e=document.getElementsByTagName("svg")[0].createSVGPoint();bbox=c.getBBox();e.x=bbox.x;e.y=bbox.y;a.nw=
e.matrixTransform(b);e.x+=bbox.width;a.ne=e.matrixTransform(b);e.y+=bbox.height;a.se=e.matrixTransform(b);e.x-=bbox.width;a.sw=e.matrixTransform(b);c={x:a.nw.x,y:a.nw.y};if(c.x||c.y)b=a.sw.y-a.nw.y,n.width(a.ne.x-a.nw.x),n.height(b),d.css({top:c.y,left:c.x});return c}}function t(a,c){if(c.size()!==0){var b=c.children("tspan").last();if(a.which===13){var e=!0,k=/^[\s]+$/;c.children("tspan").each(function(){$(this).text()!=""&&!k.test($(this).text())&&(e=!1)});if(e)return!1;b=c.children("tspan").last();
b.text()==""&&b.text(" ");var b=$(f.svg.other(c,"tspan")),d=l?l:c.attr("x");b.attr("x",d).attr("dy",window.getComputedStyle(b[0],null).getPropertyValue("font-size"));return!1}else if(a.which===46||a.which===0&&a.keyCode===46)return!1;else if(a.which===8)return d=b.text(),d.length!==0&&(b.text(d.substr(0,d.length-1)),i(c)),d.length===0&&c.children("tspan").length>1&&b.remove(),!1}return!0}function q(a,c){var b=a.dom().find("text");b.children("tspan");d.bind("contextmenu",function(b){b.preventDefault();
return!1});$(document).bind("keypress.dizzy.editor",function(e){var a=b;e.preventDefault();if(e.which!=13){var c=a,a=a.children().last(),d=a.text();e.which!==0&&e.which!==8&&a.text(d+String.fromCharCode(e.which));i(c)}return!0});$(document).bind("keydown.dizzy.editor",function(a){return t(a,b)});$("#tool-textMode-bigger").bind("click",function(){var a=b.attr("font-size"),a=parseFloat(a.substring(0,a.length-2));a+=a>100?a/20:a>30?3:1;b.attr("font-size",a+"px");b.children("tspan").not(":first-child").attr("dy",
a+"px");o=a;i(b)});$("#tool-textMode-smaller").bind("click",function(){var a=b.attr("font-size"),a=parseFloat(a.substring(0,a.length-2));a-=a>100?a/20:a>30?3:1;b.attr("font-size",a+"px");b.children("tspan").not(":first-child").attr("dy",a+"px");o=a;i(b)});$("#tool-textMode-family").bind("change",function(){var a=$("#tool-textMode-family option:selected").val();b.attr("font-family",a);p=a;i(b)});$("#tool-textMode-italic").bind("click",function(){b.attr("font-style")=="italic"?b.removeAttr("font-style"):
b.attr("font-style","italic");i(b)});$("#tool-textMode-bold").bind("click",function(){b.attr("font-weight")=="bold"?b.removeAttr("font-weight"):b.attr("font-weight","bold");i(b)});$("#tool-textMode-underline").bind("click",function(){b.attr("text-decoration")=="underline"?b.removeAttr("text-decoration"):b.attr("text-decoration","underline");i(b)});$("#tool-textMode-center").bind("click",function(){var a=b.attr("text-anchor"),c=parseInt(b.attr("x")),d=b.children().first()[0].getComputedTextLength();
a=="middle"?(b.removeAttr("text-anchor"),b.children().attr("x",c),l=c):(b.attr("text-anchor","middle"),l=c+d/2,b.children().attr("x",l));i(b)});d.show();d.css({top:c.y,left:c.x});j=!1}function m(){if(g){var a=g.dom().children().first().children("tspan");if(a.length==0)f.removeGroup(g);else if(a.length==1){var a=a.text(),c=/^[\s]+$/;a==""||c.test(a)?f.removeGroup(g):h.publish("dizzy.canvas.group.text.edited",{textGroup:g})}else h.publish("dizzy.canvas.group.text.edited",{textGroup:g});l=g=void 0}$(document).unbind("keypress.dizzy.editor");
$(document).unbind("keydown.dizzy.editor");$(".invisible").removeClass("invisible");d.hide();d.unbind("contextmenu");$("#tool-textMode-bigger").unbind();$("#tool-textMode-smaller").unbind();$("#tool-textMode-family").unbind();$("#tool-textMode-italic").unbind();$("#tool-textMode-bold").unbind();$("#tool-textMode-underline").unbind();$("#tool-textMode-center").unbind();n.width(271);n.height(65.43600463867188);j=!0}var f,n,d,j=!1,g,l=void 0,p,o;h.subscribe("dizzy.presentation.loaded",function(a){f=
a.canvas});h.subscribe("dizzy.presentation.transform.do",function(){j=!1});h.subscribe("dizzy.io.mouse.wheel",m);h.subscribe("dizzy.presentation.transform.tracker.go",m);h.subscribe("dizzy.ui.toolbar.color.fill.changed",function(a){g&&g.dom().children().first().attr("fill",a.color)});h.subscribe("dizzy.ui.toolbar.color.stroke.changed",function(a){g&&g.dom().children().first().attr("stroke",a.color)});var u={depends:["zoom","pan","rightClick"],start:function(){f&&(j=!0,s(),$(f.svg.root()).addClass("editing textmode"))},
stop:function(){f&&($(f.svg.root()).unbind(),$(f.svg.root()).undelegate("g.group"),m(),$(f.svg.root()).removeClass("editing textmode"))}};return{init:function(){$.get("html/textBBox.html").success(function(a){d=$(a);d.css({MozUserSelect:"none"}).bind("selectstart select",function(){return!1});n=d.find("#text-wrapper");d.hide();$("#container").append(d);h.publish("dizzy.ui.textbox.loaded")}).error(function(a){console.error("Could not load textbox: "+a)}).complete(function(){h.publish("dizzy.modes.register",
{name:"tool-text",instance:u})})},destroy:function(){d&&d.remove()}}});