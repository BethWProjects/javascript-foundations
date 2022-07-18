var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function() {

  it('should be a function', function() {
    assert.isFunction(Dragon);
  });

  it('should instantiate our good friend, Dragon', function() {
    var smaug = new Dragon();

    assert.instanceOf(smaug, Dragon);
  });

  it('should have name', function() {
    var dragon1 = new Dragon('Jeff');
    var dragon2 = new Dragon('Louisa');

    assert.equal(dragon1.name, 'Jeff');
    assert.equal(dragon2.name, 'Louisa');
    //a string is passed into a property of name.  both are instances
    //from our blueprint class Dragon
  });

  it('should have a rider', function() {
    var dragon = new Dragon('Saphira', 'Eragon');

    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
    //Eragon is being stored as the instance property of rider.
  });

  it('should greet their rider', function() {
    var dragon1 = new Dragon('Gray', 'Marley');
    var dragon2 = new Dragon('Sky', 'Susie');
// we are instantiating a new Dragon instance with two parameters of dragonName and person.
    var greeting1 = dragon1.greet();
    //our first dragon instance is going to run the greet method and store the
    //info in the variable greeting1. 
    var greeting2 = dragon2.greet();

    assert.equal(greeting1, 'Hi, Marley!');
    assert.equal(greeting2, 'Hi, Susie!');
  });

  it('should start off being hungry', function() {
    var dragon = new Dragon('Josh');

    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, false);
  });
});
