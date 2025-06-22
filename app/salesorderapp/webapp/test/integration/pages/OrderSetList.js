sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'nabyendu.app.salesorderapp',
            componentId: 'OrderSetList',
            contextPath: '/OrderSet'
        },
        CustomPageDefinitions
    );
});