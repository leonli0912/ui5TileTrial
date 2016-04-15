sap.ui.controller("ui5TileTrial.controller.ObjectOviewPage", {
	SERVICE_URL : "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/",
	onInit : function() {
		var that = this;
		OData.read({
			requestUri : this.SERVICE_URL+"Cont_Infos",
			headers : {
				Accept : "application/json"
			}
		}, function(data, response) {
			
			var oJsonModel = new sap.ui.model.json.JSONModel();
			oJsonModel.setData(data);
			_setTableModel(oJsonModel,that);
		}, function(err) {
			alert("Error occurred " + err.message);
		});

/*		var oJsonModel = new sap.ui.model.json.JSONModel();
		oJsonModel.loadData("model/Cont_Info_sample.json", "", false);
		this.getView().setModel(oJsonModel, "Cont_info");*/
		var _setTableModel = function(oModel){
			that.getView().setModel(oModel, "Cont_info");
		}
	},
	handleHomePress : function(oEvt) {
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("appHome");
	}
})