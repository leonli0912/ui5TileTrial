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
											/*$
													.ajax(
															{
																type : "POST",
																dataType : 'jsonp',
																url : "https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/test/test.xsjs",
																username : 'i074178',
																password : 'Initial9',
																crossDomain : true,
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
											this.getView().setModel(stockModel);
											var oTable = this
													.byId("idStockHistory");
											oTable.setModel(stockModel);

											oTable.placeAt("content");
										}

									});
				})