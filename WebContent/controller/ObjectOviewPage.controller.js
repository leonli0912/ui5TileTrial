sap.ui
		.controller(
				"ui5TileTrial.controller.ObjectOviewPage",
				{
					SERVICE_URL : "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/",
					_formFragments : {},
					onInit : function() {
						// init model
						this._initModel("Cont_Infos");
						this._initModel("Employee_Infos");
						this._initModel("Employment_Infos");

					},
					handleHomePress : function(oEvt) {
						var oRouter = sap.ui.core.UIComponent
								.getRouterFor(this);
						oRouter.navTo("appHome");
					},
					onEditPage : function() {
						/*
						 * var oBlock = this.byId("personalblock"); var
						 * oBlockMeta = oBlock.getMetadata();
						 * oBlockMeta.setView("Collapsed","ui5TileTrial.view.viewblocks.PersonalBlock");
						 * oBlockMeta.setView("Expanded","ui5TileTrial.view.viewblocks.PersonalBlock");
						 * oBlock.init(); this._toggleButtonsAndView(true);
						 */
						var oSection = this.byId("id_personalSection");
						var oBlockEditClass = new sap.uxap.BlockBase.extend(
								"ui5TileTrial.controller.controllerblocks.PersonalBlockEdit",
								{
									metadata : {
										views : {
											Collapsed : {
												viewName : "ui5TileTrial.view.viewblocks.PersonalBlockEdit",
												type : "XML"
											},
											Expanded : {
												viewName : "ui5TileTrial.view.viewblocks.PersonalBlockEdit",
												type : "XML"
											}
										}
									}
								});
						var oBlockEditControl = new oBlockEditClass();
						oSection.addBlock(oBlockEditControl);
					},
					_initModel : function(oEntitySet) {
						var that = this;
						OData.read({
							requestUri : this.SERVICE_URL + oEntitySet,
							headers : {
								Accept : "application/json"
							}
						}, function(data, response) {

							var oJsonModel = new sap.ui.model.json.JSONModel();
							oJsonModel.setData(data);
							_setTableModel(oJsonModel, that);
						}, function(err) {
							alert("Error occurred " + err.message);
						});

						/*
						 * var oJsonModel = new sap.ui.model.json.JSONModel();
						 * oJsonModel.loadData("model/Cont_Info_sample.json",
						 * "", false); this.getView().setModel(oJsonModel,
						 * "Cont_info");
						 */
						var _setTableModel = function(oModel) {
							that.getView().setModel(oModel, oEntitySet);
						}
					},
					_toggleButtonsAndView : function(bEdit) {
						var oView = this.getView();

						// Show the appropriate action buttons
						oView.byId("id_edit").setVisible(!bEdit);
						oView.byId("id_save").setVisible(bEdit);
						oView.byId("id_undo").setVisible(bEdit);

						// Set the right form type
						// this._showFormFragment(bEdit ? "Change" : "Display");
					},
					_showFormFragment : function(sFragmentName) {
						var oPage = this.getView().byId("page");

						oPage.removeAllContent();
						oPage.insertContent(this
								._getFormFragment(sFragmentName));
					},
					_getFormFragment : function(sFragmentName) {
						var oFormFragment = this._formFragments[sFragmentName];

						if (oFormFragment) {
							return oFormFragment;
						}

						oFormFragment = sap.ui.xmlfragment(this.getView()
								.getId(), "sap.ui.layout.sample.SimpleForm354."
								+ sFragmentName);

						return this._formFragments[sFragmentName] = oFormFragment;
					},
				})