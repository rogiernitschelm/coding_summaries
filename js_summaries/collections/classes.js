class SuperModel {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const model = new SuperModel('Roggers', 'Bierhelm');
model.name // Returns Roggers Bierhelm

class Model extends SuperModel {
  static announceAwesomeness() {
    console.log('Oh my I am so awesome!');
  }

  get name() {
    return `${this.firstName} ${this.lastName}`;
  }
}

Model.announceAwesomeness(); // Logs Oh my I am so awesome!

class ModelWithConstructor extends SuperModel {
  constructor(title) {
    super(title);

    this._title = title;
  }

  set title (title) {
    this._title = title;
  }
}

const modelWithConstructor = new ModelWithConstructor("King");
modelWithConstructor.title // Returns King
