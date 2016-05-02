var productPage = document.getElementById("products");

newRequest.open("GET", "dogFood.json", true);
newRequest.send();

function buildDom(foodArray) {
	console.log(foodArray);

  for (var i = 0; i < foodArray.length; i++) {
  	// console.log(dogFoodArray);
  	// console.log(dogFoodArray[i]);
  	productPage.innerHTML += "<h2>" + foodArray[i].name + "</h2>";
 	var arrayType = foodArray[i].types;

    for (var j = 0; j < arrayType.length; j++) {
	  // console.log(arrayType[j].type);
	  productPage.innerHTML += "<h4>Type: " + arrayType[j].type + "</h4>";
	  var arrayVolumes = arrayType[j].volumes;

	  for (var a = 0; a < arrayVolumes.length; a++) {
	  productPage.innerHTML += "<p> size: " + arrayVolumes[a].name + "</p>" + "<p> price: " + arrayVolumes[a].price + "</p>";
  		}

  	}
  }
}

function initDog () {
  var data = JSON.parse(this.responseText);
  var dogFoodArray = data.dog_brands;
  buildDom(dogFoodArray);
}

newRequest.addEventListener("load", initDog);
newRequest2.addEventListener("load", initCat);

