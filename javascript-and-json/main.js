var library = [
  {
    title: 'Brisingr',
    author: 'Christopher Paolini',
    isbn: '9789520438456'
  },
  {
    title: 'HALO: Ghosts of Onyx',
    author: 'Eric Nylund',
    isbn: '9781593979836'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    isbn: '978073939787'
  }
];

console.log('My library:', library);
console.log('library type:', typeof library);

var jsonLibrary = JSON.stringify(library);
console.log('JOSN library:', jsonLibrary);
console.log('type of JSON:', typeof jsonLibrary);

var student = '{"name":"Kristian Krog","studentId":"790671"}';
console.log('student and type of:', student, typeof student);

var parsedStudent = JSON.parse(student);
console.log('parsed student:', parsedStudent, typeof parsedStudent);
