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
function callAPI(request, parseResponse)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            parseResponse(xmlHttp.responseText);
    }
    xmlHttp.open("GET", request, true); // true for asynchronous
    xmlHttp.send(null);
}

function parseResponse(xmlResponse){
    console.log(xmlResponse);
    // parse response & raise flag - Abdullah
    // redirect - Hamza
    return xmlResponse;
}
