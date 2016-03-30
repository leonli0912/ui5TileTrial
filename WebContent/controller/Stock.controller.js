sap.ui
		.define(
				[ 'jquery.sap.global', 'sap/m/MessageToast',
						'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ],
				function(jQuery, MessageToast, Fragment, Controller) {
					"use strict";

					var CController = Controller
							.extend(
									"ui5TileTrial.controller.Stock",
									{
										onInit : function() {

											var stockModel = new sap.ui.model.json.JSONModel();
											// stockModel.loadData("https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/test/test.xsjs");
											// stockModel.loadData("model/stock.json");

											var returndata;
											 $
													.ajax({
																type : "POST",
																dataType : 'json',
																data:returndata,
																url : "https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/stock.xsjs",
																crossDomain : true})
													.done(function(data) {
														console.log("done");
													})
													.fail(
															function(xhr,
																	textStatus,
																	errorThrown) {
																alert(xhr.responseText);
																alert(textStatus);
															});
															

											/*$
													.ajax(
															{
																url : "https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/stock.xsjs",
																jsonpCallback : 'processJSON',
																dataType : 'jsonp',
																type : 'POST',
																headers : {
																	"Access-Control-Allow-Origin" : "*"
																},
																crossDomain : true,
																username : 'i074178',
																password : 'Initial9',
																xhrFields : {
																	withCredentials : true
																}
															})
													.done(function(data) {
														console.log("done");
													})
													.fail(
															function(xhr,
																	textStatus,
																	errorThrown) {
																alert(xhr.responseText);
																alert(textStatus);
															});*/
											function processJSON(json){
												console.log("processing json");
												
											};
											this.getView().setModel(stockModel);
											var oTable = this
													.byId("idStockHistory");
											oTable.setModel(stockModel);

										},
										onPressBack : function(evt) {
											var oRouter = sap.ui.core.UIComponent
													.getRouterFor(this);
											oRouter.navTo("appHome");
										}

									});
				})