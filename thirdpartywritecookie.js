var COOKIE_NAME = "thirdpartycookie";
var EXTERNAL_COOKIE_NAME = "firstpartycookie";
var SESSION_COOKIE_NAME = "thirdpartysessioncookie";
var EXTERNAL_SESSION_COOKIE_NAME = "firstpartysessioncookie";
var LOCAL_NAME = "thirdpartylocal";
var EXTERNAL_LOCAL_NAME = "firstpartylocal";

// gives you every cookie, session and local available
function thirdPartyReadCookie() {

    var alertMsg = document.cookie;

	var sessionCookieValue = sessionStorage.getItem(SESSION_COOKIE_NAME);
	if (sessionCookieValue != null) {
		alertMsg = alertMsg + "\n" + SESSION_COOKIE_NAME + "=" + sessionCookieValue;
	}

	var externalSessionCookieValue = sessionStorage.getItem(EXTERNAL_SESSION_COOKIE_NAME);
	if (externalSessionCookieValue != null) {
		alertMsg = alertMsg + "\n" + EXTERNAL_SESSION_COOKIE_NAME + "=" + externalSessionCookieValue;
	}

	var localValue = localStorage.getItem(LOCAL_NAME) ;
	if (localValue != null) {
		alertMsg = alertMsg + "\n" + LOCAL_NAME + "=" + localValue;
	}

	var externalLocalValue = localStorage.getItem(EXTERNAL_LOCAL_NAME) ;
	if (externalLocalValue != null) {
		alertMsg = alertMsg + "\n" + EXTERNAL_LOCAL_NAME + "=" + externalLocalValue;
	}

    alert(alertMsg );

}

// Attempts to write the cookie, session and local called "third party"
function thirdPartyWriteCookie(){
	var ms_date = Date.now(); 

	var cookieValue = "setIn3rdPartyOn"+ ms_date;
	var cookieAlert =               COOKIE_NAME + " set to: " + cookieValue;
 
	sessionStorage.setItem(SESSION_COOKIE_NAME, cookieValue);
	var sessionCookieAlert = SESSION_COOKIE_NAME + " set to: " + cookieValue;

	var localAlert = LOCAL_NAME + " set to: " + cookieValue;
	localStorage.setItem(LOCAL_NAME, cookieValue);


	alert(cookieAlert + "\n" + sessionCookieAlert + "\n" + localAlert);
	document.cookie =        COOKIE_NAME + "=" + cookieValue + "; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";

}

// Attempts to delete the cookie, session and local called "third party". 
// i.e. clean-up after ourselves 
function thirdPartyDeleteCookie(){
	
	var newcookievalue = COOKIE_NAME + "=delete; expires=Thu, 18 Jun 2019 12:00:00 UTC; path=/";
	
	document.cookie = newcookievalue;
	sessionStorage.removeItem(SESSION_COOKIE_NAME);
	localStorage.removeItem(LOCAL_NAME);
	var alertstr = "deleted:  " + "\n- cookie:" + newcookievalue + "\n- session cookie: " + SESSION_COOKIE_NAME + "\n- local: "+ LOCAL_NAME ;

	alert(alertstr);
	
}

// Attempts to change the value of the cookie, session and local called "first party". 
// i.e. access items set in another context 
function thirdPartyUdpateCookie(){
	 ms_date = Date.now(); 
	var alertMsg;
	var cookieValue = "updatedIn3rdPartyOn"+ ms_date;

	document.cookie = EXTERNAL_COOKIE_NAME + "=" + cookieValue + "; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
	alertMsg = EXTERNAL_COOKIE_NAME + " set to: " + cookieValue;

	sessionStorage.setItem(EXTERNAL_SESSION_COOKIE_NAME, cookieValue);
	alertMsg = alertMsg + "\n" + EXTERNAL_SESSION_COOKIE_NAME + " set to: " + cookieValue;

	localStorage.setItem(EXTERNAL_LOCAL_NAME, cookieValue);
	alertMsg = alertMsg + "\n" + EXTERNAL_LOCAL_NAME + " set to: " + cookieValue;

	
	alert(alertMsg);
}