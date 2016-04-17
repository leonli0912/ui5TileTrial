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

						this._toggleButtonsAndView(true);
									
					},
					onSavePage: function(){
						this._toggleButtonsAndView(false);
					},
					onUndo:function(){
						this._toggleButtonsAndView(false);
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
					_updateModel:function(oEntitySet){
						var that=this;
						var headers = {
								'Content-Type' : 'application/json',
								'Accept' : 'application/json'
							};
						var oCont_info = {

								"Employee_id" : "w0001",
								"End_date" : endDate,
								"Attachment" : "",
								"Country" : "CN",
								"Document_number" : "",
								"Document_title" : "",
								"Document_type" : "",
								"Expire_date" : endDate,
								"Publish_authority" : "",
								"Publish_date" : "",
								"Publish_place" : "",
								"Start_date" : startDate

							};
						var request = {
								requestUri : this.SERVICE_URL + oEntitySet,
								method : 'put',
								headers : headers,
								data : newUer
							};
						OData.request(request, function(data, response) {

							console.log("put "+ oEntitySet + " success");
						});
					},
					_toggleButtonsAndView : function(bEdit) {
						var oView = this.getView();

						// Show the appropriate action buttons
						oView.byId("id_edit").setVisible(!bEdit);
						oView.byId("id_save").setVisible(bEdit);
						oView.byId("id_undo").setVisible(bEdit);

						// Switch views
						this._switchViews(bEdit);
					},
					_switchViews : function(bEdit) {
						
						var oSection = this.byId("id_personalSection");
						var oBlockDispaly = oSection.getBlocks()[0];
						var oBlockEdit;
						oBlockDispaly.setVisible(!bEdit);
						
						if(oSection.getBlocks()[1]){
							oBlockEdit = oSection.getBlocks()[1];
							oBlockEdit.setVisible(bEdit);
						}else{
							jQuery.sap.require("ui5TileTrial.controller.controllerblocks.PersonalBlockEdit");
							oBlockEdit =  new ui5TileTrial.controller.controllerblocks.PersonalBlockEdit();
							var oBlockMappingPerson = oBlockDispaly.getMappings();
							var oSelectedView = oBlockDispaly.getSelectedView();
							oBlockEdit.setSelectedView(oSelectedView);
							for(i in oBlockMappingPerson){
								oBlockEdit.addMapping(oBlockMappingPerson[i]);
							}
							oSection.addBlock(oBlockEdit);	
						}

					}
				})