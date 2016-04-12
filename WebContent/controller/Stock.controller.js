sap.ui
    .define(
        ['jquery.sap.global', 'sap/m/MessageToast',
            'sap/ui/core/Fragment', 'sap/ui/core/mvc/Controller'
        ],
        function(jQuery, MessageToast, Fragment, Controller) {
            "use strict";

            var CController = Controller
                .extend(
                    "ui5TileTrial.controller.Stock", {
                        onInit: function() {
                            var oDataServerUrl = "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/";
                            var stockModel = new sap.ui.model.json.JSONModel();
                            // stockModel.loadData("https://s12hanaxs.hanatrial.ondemand.com/i074178trial/stock/test/test.xsjs");
                            // http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=AAPL&callback=?
                            // stockModel.loadData("model/stock.json");
                            var that = this;
                            $
                                .ajax({
                                    type: "GET",
                                    dataType: 'json',
                                    url: "http://120.27.144.171:8080/Odata/Cloud_Hr.svc/Customers?$format=json",
                                    // jsonpCallback:
                                    // 'processJson',
                                    contentType: "application/json",
                                    // dataType:
                                    // 'jsonp',
                                    success: function(
                                        json, that) {

                                        console
                                            .log("success...");
                                        var stockModel = new sap.ui.model.json.JSONModel();
                                        stockModel
                                            .setData(json.d.results);
                                        _setTableModel(stockModel);
                                        /*
                                         * that.getView().setModel(stockModel);
                                         * var stockModel =
                                         * that.getView().getModel();
                                         * var oTable =
                                         * that.byId("id_stockList");
                                         * oTable.setModel(stockModel);
                                         */
                                    },
                                    error: function(e) {
                                        console
                                            .log(e.message);
                                    }
                                });
                            var _setTableModel = function(
                                oModel) {
                                that.getView().setModel(oModel);
                                var oTable = that
                                    .byId("id_stockList");
                                oTable.setModel(oModel);
                            };

                        },
                        onPressHome: function() {

                            var oRouter = sap.ui.core.UIComponent
                                .getRouterFor(this);
                            oRouter.navTo("appHome");
                        },
                        onPressAdd: function(oEvt) {
                        	var that = this;
                            var serviceRoot = 'http://120.27.144.171:8080/Odata/Cloud_Hr.svc/Customers';
                            var headers = {
                                'Content-Type': 'application/json',
                                'Accept': 'application/json'
                            };
                            var newPerson = {
                                'Customer_id': '005',
                                'Customer_name': 'employee5',
                                'Customer_status': 'Active',
                                'Customer_type': 'FTE'
                            };
                            var request = {
                                requestUri: serviceRoot,
                                method: 'post',
                                headers: headers,
                                data: newPerson
                            };
                            OData.request(request, function(
                                data, response) {

                                console.log("post success");
                            });
                            OData.read({
                                        requestUri: serviceRoot,
                                        headers: {
                                            Accept: "application/json"
                                        }
                                    },
                                    function(data,
                                        response) {

                                        var stockModel = new sap.ui.model.json.JSONModel();
                                        stockModel
                                            .setData(data.results);
                                        _setTableModel(stockModel);
                                    },
                                    function(err) {
                                        alert("Error occurred " +
                                            err.message);
                                    });

                            var _setTableModel = function(
                                oModel) {
                                that.getView().setModel(oModel);
                                var oTable = that
                                    .byId("id_stockList");
                                oTable.setModel(oModel);
                            };
                        }

                    });
        })