sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'nabyendu/app/salesorderapp/test/integration/FirstJourney',
		'nabyendu/app/salesorderapp/test/integration/pages/OrderSetList',
		'nabyendu/app/salesorderapp/test/integration/pages/OrderSetObjectPage'
    ],
    function(JourneyRunner, opaJourney, OrderSetList, OrderSetObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('nabyendu/app/salesorderapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheOrderSetList: OrderSetList,
					onTheOrderSetObjectPage: OrderSetObjectPage
                }
            },
            opaJourney.run
        );
    }
);