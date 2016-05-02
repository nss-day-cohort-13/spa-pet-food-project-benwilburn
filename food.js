var productPage = document.getElementById("products");
var newRequest = new XMLHttpRequest() /*
	Description:
	XMLHttpRequest is an API that provides client functionality for transferring data between a client and a server. It provides an easy way to retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just a part of the page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

	XMLHttpRequest was originally designed by Microsoft and adopted by Mozilla, Apple, and Google. It's now being standardized at the WHATWG. Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML, and it supports protocols other than HTTP (including file and ftp).

	Syntax:
	var myRequest = new XMLHttpRequest();
*/


newRequest.open("GET", "dogFood.json", true);
newRequest.send();

function init () {
  var data = JSON.parse(this.responseText);
  var dogFoodArray = data.dog_brands;
  for (var i = 0; i < dogFoodArray.length; i++) {
  	productPage.innerHTML += "<p>" + dogFoodArray[i].name + "</p>"
  }
}

newRequest.addEventListener("load", init);

