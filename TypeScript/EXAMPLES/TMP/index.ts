class HelloWorld {
  name = 'HelloWorldName';
  getName = function() {
    return this.name;
  };
}

let c = new HelloWorld();
console.log(c.getName());
