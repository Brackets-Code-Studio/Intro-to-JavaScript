//new file class11/dog.js and try it out in Chrome JS console
var dog = {
  name: "Pancake",
  legs: 4,
  isAwesome: true,
  isDirty: true
};

dog.bark = function () {
  console.log("Woof woof! My name is " + this.name + "!");
};

dog.shower = function () {
   if(this.isDirty) {
      this.isDirty = false;
      console.log("Woof woof! I am clean now.");
   } else {
      console.log("Woof woof! Already clean. No shower please.");
   }
};

dog.bark();
dog.shower();
dog.shower();
