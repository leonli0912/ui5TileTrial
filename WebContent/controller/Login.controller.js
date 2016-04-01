sap.ui.define([ 'jquery.sap.global', 'sap/m/MessageToast',
		'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ], 
		function(jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	var CController = Controller.extend("ui5TileTrial.controller.Login", {
		onInit:function(){
			var oApp = this.getOwnerComponent().getModel("app");
			
		},
		onLogin:function(){

			var oUser = sap.ui.getCore().getModel("user");
			oUser.oData.login = true;
			sap.ui.getCore().setModel(oUser,"user");
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("appHome");
		
		}
	});
});