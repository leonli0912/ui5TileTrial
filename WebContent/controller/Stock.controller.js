sap.ui.define([ 'jquery.sap.global', 'sap/m/MessageToast',
		'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller' ], function(
		jQuery, MessageToast, Fragment, Controller) {
	"use strict";
	
	var CController = Controller.extend("ui5TileTrial.controller.Stock", {
		SERVICE_URL : "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/",
		onInit : function() {
			var stockModel = new sap.ui.model.json.JSONModel();
			// stockModel.loadData("https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/test/test.xsjs");
			// http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=AAPL&callback=?
			// stockModel.loadData("model/stock.json");
			var that = this;
			$.ajax({
				type : "GET",
				dataType : 'json',
				url : this.SERVICE_URL + "Customers?$format=json",
				// jsonpCallback:
				// 'processJson',
				contentType : "application/json",
				// dataType:
				// 'jsonp',
				success : function(json, that) {

					console.log("success...");
					var stockModel = new sap.ui.model.json.JSONModel();
					stockModel.setData(json.d.results);
					_setTableModel(stockModel);
					/*
					 * that.getView().setModel(stockModel); var stockModel =
					 * that.getView().getModel(); var oTable =
					 * that.byId("id_stockList"); oTable.setModel(stockModel);
					 */
				},
				error : function(e) {
					console.log(e.message);
				}
			});
			var _setTableModel = function(oModel) {
				that.getView().setModel(oModel);
				var oTable = that.byId("id_stockList");
				oTable.setModel(oModel);
			};

		},
		onPressHome : function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("appHome");
		},
		onPressAdd : function(oEvt) {
			var that = this;
			var entitySet = "Customers";
			var headers = {
				'Content-Type' : 'application/json',
				'Accept' : 'application/json'
			};
			var newPerson = {
				'Customer_id' : '005',
				'Customer_name' : 'employee5',
				'Customer_status' : 'Active',
				'Customer_type' : 'FTE'
			};
			var newUer = {
				"Auth" : "admin",
				"Customer_id" : "001",
				"Employee_id" : "w0001",
				"Password" : "",
				"Status" : "",
				"User_id" : "u0001"
			};
			var newCont_info = {

				"Employee_id" : "w0001",
				"End_date" : "20171231",
				"Attachment" : "",
				"Country" : "CN",
				"Document_number" : "",
				"Document_title" : "",
				"Document_type" : "",
				"Expire_date" : "20171231",
				"Publish_authority" : "",
				"Publish_date" : "",
				"Publish_place" : "",
				"Start_date" : "20160101"

			};
			var newEmployee_info = {
				"Employee_id" : "w0001",
				"End_date" : "20171231",
				"Begin_date" : "20160101",
				"Birth_country" : "CN",
				"Birth_place" : "Shanghai",
				"Birthday" : "19880912",
				"Email" : "ly95487532@163.com",
				"Ethnic" : "",
				"First_name" : "Tang",
				"Gender" : "Female",
				"Hire_date" : "20160101",
				"Id_number" : "w0001",
				"Id_type" : "11",
				"Language" : "cn",
				"Last_name" : "Tom",
				"Marital_begin" : "20160101",
				"Marital_status" : "active",
				"Nationality" : "cn",
				"Phone" : "13795487532",
				"Residence_type" : "long"
			};
			var newEmployment_info = {
				"Employee_id" : "w0001",
				"End_date" : "20171231",
				"Company" : "wills",
				"Employee_group" : "",
				"Grade" : "2",
				"Hr_manager" : "HR",
				"Line_manager" : "Manager",
				"Position" : "Developer",
				"Position_category" : "Dev",
				"Start_date" : "20160101"
			};
			// add customers
/*			var request = {
				requestUri : SERVICE_URL + "Customers",
				method : 'post',
				headers : headers,
				data : newPerson
			};
			OData.request(request, function(data, response) {

				console.log("post customers success");
			});*/
			
			// add users
			var request = {
				requestUri : this.SERVICE_URL + "Users",
				method : 'post',
				headers : headers,
				data : newUer
			};
			OData.request(request, function(data, response) {

				console.log("post users success");
			});
			
			// add cont_info
			var request = {
				requestUri : this.SERVICE_URL + "Cont_Infos",
				method : 'post',
				headers : headers,
				data : newCont_info
			};
			OData.request(request, function(data, response) {

				console.log("post cont_info success");
			});
			
			// add employee
			var request = {
				requestUri : this.SERVICE_URL + "Employee_Infos",
				method : 'post',
				headers : headers,
				data : newEmployee_info
			};
			OData.request(request, function(data, response) {

				console.log("post employee success");
			});
			
			// add employment
			var request = {
				requestUri : this.SERVICE_URL + "Employment_Infos",
				method : 'post',
				headers : headers,
				data : newEmployment_info
			};
			OData.request(request, function(data, response) {

				console.log("post employment success");
			});
			/*
			 * OData.read({ requestUri: serviceRoot, headers: { Accept:
			 * "application/json" } }, function(data,response) { var stockModel =
			 * new sap.ui.model.json.JSONModel();
			 * stockModel.setData(data.results); _setTableModel(stockModel); },
			 * function(err) { alert("Error occurred " + err.message); });
			 */

			/*
			 * var _setTableModel = function(oModel) {
			 * that.getView().setModel(oModel); var oTable = that
			 * .byId("id_stockList"); oTable.setModel(oModel); };
			 */
		}

	});
})