var student = {
  firstName: 'Kristian',
  lastName: 'Krog',
  age: '31'
};

console.log('object student:', student);

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;

student.previousOccupation = 'Specimen Tech';

console.log('value of livesInIrvine:', student.livesInIrvine);

console.log('value of previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Hyundai',
  model: 'Ioniq plug-in',
  year: 2019
};

console.log('vehicle object:', vehicle);

vehicle['color'] = 'black';

vehicle['isConvertible'] = false;

console.log('value of vehicle color:', vehicle['color']);

console.log('value of isConvertible:', vehicle['isConvertible']);

console.log('updated vehicle object', vehicle);

var pet = {
  name: 'Kaleo',
  type: 'Doge'
};

console.log('the object pet', pet);

delete pet.name;

delete pet.type;

console.log('the object pet:', pet);
