// detect if website is naughty

var API_KEY = "cb8f3c674efccfb2d758dd44d94955c7b32079b8";

// get URL from click or on request
function getUrl {
// hamza todo
}

// make the API request
function makeRequest(url) {
    var request = "http://api.mywot.com/0.4/public_link_json2?hosts=".concat(url, "&callback=process&key=", API_KEY);
    console.log(request);
    return request;
}

// call the API
function callAPI(request) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", request, false ); // false for synchronous request
    xmlHttp.send( null );
    var response = xmlHttp.responseText;
    console.log(response);
    return response;
}

// parse response for 401 adult content flag
function isFlagged {
//Abdullah todo
}

// redirect the page
function redirect {
// hamza todo
}
