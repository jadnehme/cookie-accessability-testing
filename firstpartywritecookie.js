var LOCAL_NAME = "firstpartylocal";
var EXTERNAL_LOCAL_NAME =  "thirdpartylocal";
var COOKIE_NAME = "firstpartycookie";
var EXTERNAL_COOKIE_NAME = "thirdpartycookie";
var SESSION_COOKIE_NAME = "firstpartysessioncookie";
var EXTERNAL_SESSION_COOKIE_NAME = "thirdpartysessioncookie";


function firstPartyReadCookie() {
    var alertMsg = document.cookie;
	var externalLocalValue = localStorage.getItem(EXTERNAL_LOCAL_NAME);

	var sessionCookieValue = sessionStorage.getItem(SESSION_COOKIE_NAME);
	if (sessionCookieValue != null) {
		alertMsg = alertMsg + "\n" + SESSION_COOKIE_NAME + "=" + sessionCookieValue;
	}

	var externalSessionCookieValue = sessionStorage.getItem(EXTERNAL_SESSION_COOKIE_NAME);
	if (externalSessionCookieValue != null) {
		alertMsg = alertMsg + "\n" + EXTERNAL_SESSION_COOKIE_NAME + "=" + externalSessionCookieValue;
	}

	var localValue =  .getItem(LOCAL_NAME) ;	
	if (localValue != null) {
		alertMsg = alertMsg + "\n" + LOCAL_NAME + "=" + localValue;
	}
	if (externalLocalValue != null) {
		alertMsg = alertMsg + "\n" + EXTERNAL_LOCAL_NAME + "=" + externalLocalValue;
	}

    alert(alertMsg );

}

function firstPartyWriteCookie(){

	var ms_date = Date.now(); 

	var cookieValue = "setIn1stPartyOn"+ ms_date;
	var cookieAlert =               COOKIE_NAME + " set to: " + cookieValue;
 
	sessionStorage.setItem(SESSION_COOKIE_NAME, cookieValue);
	var sessionCookieAlert = SESSION_COOKIE_NAME + " set to: " + cookieValue;

	var localAlert = LOCAL_NAME + " set to: " + cookieValue;
	localStorage.setItem(LOCAL_NAME, cookieValue);


	alert(cookieAlert + "\n" + sessionCookieAlert + "\n" + localAlert);
	document.cookie =        COOKIE_NAME + "=" + cookieValue + "; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";

}



function firstPartyDeleteCookie(){
	
	var newcookievalue = COOKIE_NAME + "=delete; expires=Thu, 18 Jun 2019 12:00:00 UTC; path=/";
	
	document.cookie = newcookievalue;
	sessionStorage.removeItem(SESSION_COOKIE_NAME);
	localStorage.removeItem(LOCAL_NAME);
	var alertstr = "deleted:  " + "\n- cookie:" + newcookievalue + "\n- session cookie: " + SESSION_COOKIE_NAME + "\n- local: "+ LOCAL_NAME ;

	alert(alertstr);


}

function firstPartyUdpateCookie(){
	 ms_date = Date.now(); 
	var alertMsg;
	var cookieValue = "updatedIn1stdPartyOn"+ ms_date;

	document.cookie = EXTERNAL_COOKIE_NAME + "=" + cookieValue + "; expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/";
	alertMsg = EXTERNAL_COOKIE_NAME + " set to: " + cookieValue;

	sessionStorage.setItem(EXTERNAL_SESSION_COOKIE_NAME, cookieValue);
	alertMsg = alertMsg + "\n" + EXTERNAL_SESSION_COOKIE_NAME + " set to: " + cookieValue;

	localStorage.setItem(EXTERNAL_LOCAL_NAME, cookieValue);
	alertMsg = alertMsg + "\n" + EXTERNAL_LOCAL_NAME + " set to: " + cookieValue;

	
	alert(alertMsg);
}
