/**
 * Global is used to define constants and Enums which are used at globally
 * application level
 *
 * @namespace  appPortalApp
 * @class Global
 * @return  loginUsername
 * @descriprtion Global is used to define constants and Enums which are used at globally
 * application level
 */
'use strict';

/* exported Global */
var $scope = (function(){
  
})();
var Global = (function() {

	/**
	 * loginUsername is used for display username after login
	 *
	 * @property loginUsername
	 * @type json
	 */
	var loginUsername = {
			USERNAME : 'John Doe'
	};
   var userCredentials = {
   		USERID :''
   };
  var registerParent = true;

	var RestUrls = {
		DOMAIN : 'http://',
		APPLIBURL: ':3000/appLib',
		WORKBOARDAPPURL: ':3000/workboardApps',
		APPLIBRARYURL : ':3000/applications',
		DISCOVERYURL : ':3000/discovery',
		WORKBOARDURL : ':3000/workboards/',
		IPURL:':3000/ip',
		SHELFURL:':3000/shelf',
		CARDURL:':3000/card',
		PORTURL:':3000/port'
	};

	return {
		loginUsername : loginUsername,
		userCredentials : userCredentials,
    registerParent : registerParent,
		RestUrls :RestUrls
	};
})();
