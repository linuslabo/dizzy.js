define(["sandbox"],function(a){var b,c;a.subscribe("dizzy.ui.toolbar.loaded",function(a){c=a.toolbar});a.subscribe("dizzy.presentation.loaded",function(a){b=a.canvas});a.subscribe("dizzy.ui.toolbar.clicked.tool-next",function(){b.next()});a.subscribe("dizzy.ui.toolbar.clicked.tool-previous",function(){b.previous()});a.subscribe("dizzy.ui.toolbar.clicked.mode.present-toggle-button",function(){c.find("#present-toggle-button").removeClass("mode");c.find(".toolbutton").not(":first-child, :last-child").toggle()});
a.subscribe("dizzy.ui.toolbar.clicked.present-toggle-button",function(){c.find("#present-toggle-button").addClass("mode");c.find(".toolbutton").not(":first-child, :last-child").toggle();a.publish("dizzy.ui.toolbar.clicked.mode.tool-default",{button:"tool-default"})});a.subscribe("dizzy.canvas.group.visited",function(){c&&$("#tool-goto-inp").val(b.activeGroupNumber)});a.subscribe("dizzy.ui.toolbar.clicked.tool-goto-go",function(){var a=parseInt($("#tool-goto-inp").val());!isNaN(a)&&a>0?b.gotoGroup(a):
$("#tool-goto-inp").val(b.activeGroupNumber)});return{init:function(){},destroy:function(){}}});