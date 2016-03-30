sap.ui.define([ 'jquery.sap.global', 'sap/m/MessageToast',
		'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ], function(
		jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	var CController = Controller.extend("ui5TileTrial.controller.Stock", {
		onInit:function(){
			
			var stockModel = new sap.ui.model.json.JSONModel();
			//stockModel.loadData("https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/test/test.xsjs");
			stockModel.loadData("model/stock.json");
			this.getView().setModel(stockModel);
			var oTable=this.byId("idStockHistory");
			oTable.setModel(stockModel);

			oTable.placeAt("content");
		}
		
	});
})