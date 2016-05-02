var productPage = document.getElementById("products");
var newRequest = new XMLHttpRequest();
var newRequest2 = new XMLHttpRequest();

newRequest.open("GET", "dogFood.json", true);
newRequest.send();
newRequest2.open("GET", "catFood.json", true);
newRequest2.send();

function buildDom(foodArray) {
  for (var i = 0; i < foodArray.length; i++) {
 	var arrayType = foodArray[i].types;
 	var breedString= "";
 	if(foodArray[i].name === "Purrina" || foodArray[i].name === "Meow Meal"){
 		breedString = "Breeds:" ;
 	}
  	// console.log(dogFoodArray);
  	// console.log(dogFoodArray[i]);
  	productPage.innerHTML += "<h2>" + foodArray[i].name + "</h2>" + "<h4>" + breedString + "</h4>";

	if (foodArray[i].breeds) {
	  var breeds = foodArray[i].breeds;
	  for (var z = 0; z < breeds.length; z++) {
		console.log(breeds[z]);
		productPage.innerHTML += "<p>" + breeds[z] + "</p>";
	  }
 	}

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

function initCat () {
  var data = JSON.parse(this.responseText);
  var catFoodArray = data.cat_brands;
  buildDom(catFoodArray);
}

newRequest.addEventListener("load", initDog);
newRequest2.addEventListener("load", initCat);

