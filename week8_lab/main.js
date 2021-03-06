/*** Object Constructors ***/
function Cat(name, age) {
  this.name = name;
  this.age = age;
  this.image = "cat.jpg";
  this.type = "Cat";
}

function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.image = "dog.jpg"
  this.type = "Dog";
}

function Bird(name, age) {
  this.name = name;
  this.age = age;
  this.image = "bird.jpg"
  this.type = "Bird";
}

/*** Global Variables ***/
var animals = [new Cat(), new Dog(), new Bird()];
var names = ["Toothless", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Bella", "Ruby", "Apples"];

/*** Functions ***/
// get a random index for an array from 0 to maxIndex (not inclusive)
function getRandomIndex(maxIndex) {
  return Math.floor(Math.random() * maxIndex);
}

// generates either a Cat, Dog, or Bird with a random name and random age
function generateRandomAnimal() {
  var randomIdx = getRandomIndex(animals.length);
  var randomAnimal = animals[randomIdx];

  if (randomAnimal instanceof Cat)
  {
    return new Cat(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Dog)
  {
    return new Dog(generateRandomName(), generateRandomAge());
  }
  else if (randomAnimal instanceof Bird)
  {
    return new Bird(generateRandomName(), generateRandomAge());
  }
}

// generates a random name from list of names
function generateRandomName() {
  var randomIdx = getRandomIndex(names.length);
  return names[randomIdx];
}

// generates a random age from 0 to 5
function generateRandomAge() {
  var randomIdx = getRandomIndex(5);
  return randomIdx;
}

/*** Document Load ****/
$(document).ready(function() {

  // generate a random animal when the document opens
  var animal = JSON.parse(localStorage.getItem("savedAnimal"));

  var hasSavedAnimal = false;

  if (animal == null)
  {
    $("#button").text("Save Animal");
    animal = generateRandomAnimal();
  }
  else
  {
    $("#button").text("Clear Animal");
    hasSavedAnimal = true;
  }
  // update the page based on the animal properties
  $("#animal-properties").text(animal.name + "  " + animal.age + "years old");
  $("#animal-img").attr("src", animal.image);

  $("#button").click(function() {
    if (hasSavedAnimal)
    {
        localStorage.removeItem("savedAnimal");
        $("button").css("display", "none");
        $("#paragraph").text("Cleared!");
    }
    else
    {
        localStorage.setItem("savedAnimal", JSON.stringify(animal));
        $("button").css("display", "none");
        $("#paragraph").text("Saved!");
    }

  })

});
























