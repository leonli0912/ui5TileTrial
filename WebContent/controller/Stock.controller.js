sap.ui.define([ 'jquery.sap.global', 'sap/m/MessageToast',
		'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ], function(
		jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	var CController = Controller.extend("ui5TileTrial.controller.Stock", {
		onInit:function(){
			var url ='';
			var oDataModel = sap.ui.model.odata.ODataModel(url);
			sap.ui.getCore().setModel(oDataModel);
		}
		
	});
})