sap.ui.controller("ui5TileTrial.controller.ObjectOviewPage",{
	handleHomePress:function(oEvt){
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		oRouter.navTo("appHome");
	}
})