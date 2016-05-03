var dogProductPage = document.getElementById("dogProducts");
var catProductPage = document.getElementById("catProducts");
var newRequest = new XMLHttpRequest();
var newRequest2 = new XMLHttpRequest();

newRequest.open("GET", "dogFood.json", true);
newRequest.send();
newRequest2.open("GET", "catFood.json", true);
newRequest2.send();

function buildDogDom(foodArray) {
  for (var i = 0; i < foodArray.length; i++) {
 	var arrayType = foodArray[i].types;
    for (var j = 0; j < arrayType.length; j++) {
      var arrayVolumes = arrayType[j].volumes;
      // console.log(arrayType[j].type);
      // productPage.innerHTML += "<h4>Type: " + arrayType[j].type + "</h4>";

      for (var a = 0; a < arrayVolumes.length; a++) {
        // productPage.innerHTML += "<p> size: " + arrayVolumes[a].name + "</p>" + "<p> price: " + arrayVolumes[a].price + "</p>";

        dogProductPage.innerHTML += "<tr><td>" + foodArray[i].name + "</td>" +
                                   "<td>" + arrayType[j].type + "</td>" +
                                   "<td>" + arrayVolumes[a].name + "</td>" +
                                   "<td>" + arrayVolumes[a].price + "</td></tr>";
      }
    }
  }
 }

function buildCatDom(foodArray) {
  for (var i = 0; i < foodArray.length; i++) {
  var catBreed = foodArray[i].breeds;
    for (var b = 0; b < catBreed.length; b++) {
      var arrayType = foodArray[i].types;
      for (var j = 0; j < arrayType.length; j++) {
        var arrayVolumes = arrayType[j].volumes;
        // console.log(arrayType[j].type);
        // productPage.innerHTML += "<h4>Type: " + arrayType[j].type + "</h4>";

        for (var a = 0; a < arrayVolumes.length; a++) {
          // productPage.innerHTML += "<p> size: " + arrayVolumes[a].name + "</p>" + "<p> price: " + arrayVolumes[a].price + "</p>";

            catProductPage.innerHTML += "<tr><td>" + foodArray[i].name + "</td>" +
                                     "<td>" + catBreed[b] + "</td>" +
                                     "<td>" + arrayType[j].type + "</td>" +
                                     "<td>" + arrayVolumes[a].name + "</td>" +
                                     "<td>" + arrayVolumes[a].price + "</td></tr>";
        }
      }
    }
  }
 }

function initDog () {
  var data = JSON.parse(this.responseText);
  var dogFoodArray = data.dog_brands;
  buildDogDom(dogFoodArray);
}

function initCat () {
  var data = JSON.parse(this.responseText);
  var catFoodArray = data.cat_brands;
  buildCatDom(catFoodArray);
}

newRequest.addEventListener("load", initDog);
newRequest2.addEventListener("load", initCat);

