const SomeConstructor = function(name) {
  this.name = name;
}

SomeConstructor.prototype.flex = function() {
  console.log(`My name is ${this.name}, I am flexing my absent muscles! Look!`);
}

const instance = new SomeConstructor('Roggers');
instance.name // Returns Roggers
instance.flex() // Logs I am flexing my absent muscles! Look!

const object = Object.create(SomeConstructor.prototype, {
  name: { value: 'Pietje Puk' , writable: false }, // writable means whether it can be reassigned
});

object.name // Returns Pietje Puk
