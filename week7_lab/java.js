function owl(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'owl';
  this.image = 'owl.jpg';
}

function fox(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'fox';
  this.image = 'fox.jpg';
}

function otter(name, age) {
  this.name = name;
  this.age = age;
  this.type = 'otter';
  this.image = 'otter.jpg';
}

var animals = [new owl(), new fox(), new otter()];

var names = ['George', 'Felicia', 'Frankfurt'];

function generateRandomIndex(maxIndex) {
    return Math.floor(Math.random() * maxIndex);
}

function generateRandomName() {
    var randomIndex = generateRandomIndex(names.length);
    return randomIndex;
}

function generateRandomAge() {
    return generateRandomIndex(10);
}

function generateRandomAnimal() {
    var randomIdx = generateRandomIndex(animals.length);
    var randomAnimal = animals[randomIdx]
    if (randomAnimal instanceof owl) {
        return new owl(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof fox) {
        return new fox(generateRandomName(), generateRandomAge());
    }
    if (randomAnimal instanceof otter) {
        return new otter(generateRandomName(), generateRandomAge());
    }
}

$(document).ready(function() {
    var animal = generateRandomAnimal();
    $('#title').text(animal.name + " is " + animal.age + " years old ");
    $('#pic').attr("src", animal.image);
});

























