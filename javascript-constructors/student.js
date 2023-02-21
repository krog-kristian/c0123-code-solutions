/* exported Student */
function Student(firstName, lastName, subject) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.subject = subject;
}

var studentMethods = {
  getFullName: function () {
    var fullName = this.firstName + ' ' + this.lastName;
    return fullName;
  },
  getIntroduction: function () {
    var introduction = 'Hello, my name is ' + this.firstName + ' ' + this.lastName + ' and I am studying ' + this.subject + '.';
    return introduction;
  }
};

Student.prototype = studentMethods;
