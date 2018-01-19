/**
 *	request.js 
 */

var request = null;
function getXMLHttpRequest() {
	if( window.ActiveXObject ) {
		try {
			return new ActiveXObject( "Msxml2.XMLHTTP" );
		} catch( e ) {
			try {
				return new ActiveXObject( "Microsoft.XMLHTTP" );
			} catch( ee ) {
				return null;
			}
		}		
	} else {
		try {
			return new XMLHttpRequest();
		} catch( e ) {
			return null;
		}
	}
}
function sendRequest( callback, url, method, params ) {
	request = getXMLHttpRequest();	
	
	// callback
	request.onreadystatechange = callback;
	
	// method
	var httpMethod = method ? method : "GET";
	if( httpMethod != "GET" && httpMethod != "POST" ) {
		httpMethod = "GET";
	}
	
	// params
	httpParams = params == null || params == "" ? null : params;
	
	// url
	httpUrl = "GET" ? url + "?" + httpParams : url ;	

	request.open( httpMethod, httpUrl, true );
	request.setRequestHeader( "content-type", 
		"application/x-www-form-urlencoded" );
	request.send( httpMethod == "POST" ? httpParams : null )
}










