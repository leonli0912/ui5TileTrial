sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";
 
	var GoalsBlock = BlockBase.extend("ui5TileTrial.controller.controllerblocks.PersonalBlock", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "ui5TileTrial.view.viewblocks.PersonalBlock",
					type: "XML"
				},
				Expanded: {
					viewName: "ui5TileTrial.view.viewblocks.PersonalBlock",
					type: "XML"
				}
			}
		}
	});
	return GoalsBlock;
}, true);