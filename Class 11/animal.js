//new file: animal.js
var Animal = function (name, sound) {
  this.name = name;
  this.sound = sound;
};

Animal.prototype.speak = function () {
  console.log(this.sound + "! My name is " + this.name + "!");
};

Animal.prototype.changeName = function (newName) {
    this.name = newNme;
}

var cat = new Animal ("Mittens", "Miao");
var pig = new Animal ("Charlie", "Oink");
var horse = new Animal ("Marie", "Neigh");

cat.speak(); //Mittens
pig.speak();
horse.speak();

cat.changeName("Silly");
cat.speak();
