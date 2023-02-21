function ExampleConstructor() {

}

console.log('prototype of ExampleConstructor', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var testExample = new ExampleConstructor();

console.log('testExample:', testExample);

var isItInstance = testExample instanceof ExampleConstructor;
console.log('instance of testExample', isItInstance);
