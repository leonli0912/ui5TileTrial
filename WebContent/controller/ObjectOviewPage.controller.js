sap.ui.controller("ui5TileTrial.controller.ObjectOviewPage",{
	onInit:function(){
		var oJsonModel = new sap.ui.model.json.JSONModel();
		oJsonModel.loadData("model/Cont_Info_sample.json");
		sap.ui.getCore().setModel(oJsonModel, "Cont_info");
	},
	handleHomePress:function(oEvt){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("appHome");
	}
})