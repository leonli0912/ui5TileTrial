sap.ui.define([ 'jquery.sap.global', 'sap/m/MessageToast',
		'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ], function(
		jQuery, MessageToast, Fragment, Controller) {
	"use strict";

	var CController = Controller.extend("ui5TileTrial.controller.SplitApp", {
		SERVICE_URL : "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/",
		onInit : function() {
			var oSplitApp = this.byId("idSplitApp");

			var oObjectView = sap.ui.view({

				viewName : "ui5TileTrial.view.ObjectOviewPage",
				type : sap.ui.core.mvc.ViewType.XML
			});
			var oEmpListView = sap.ui.view({

				viewName : "ui5TileTrial.view.EmployeeList",
				type : sap.ui.core.mvc.ViewType.XML
			});
			var oDetailedPage = new sap.m.Page("idDetailPage",{
				showHeader:false
			});
			oDetailedPage.addContent(oObjectView);

			var oMasterPage = new sap.m.Page("idMasterPage",{
				id:"idEmployeeList",
				title:"Employees",
				icon:"sap-icon://action",
				showNavButton:true, 
				navButtonPress:"onPressHome",
				showHeader:false
			});
			oMasterPage.addContent(oEmpListView);
			oSplitApp.addMasterPage(oMasterPage);
			oSplitApp.addDetailPage(oDetailedPage);
		},
		onPressHome : function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("appHome");
		}

	});
})