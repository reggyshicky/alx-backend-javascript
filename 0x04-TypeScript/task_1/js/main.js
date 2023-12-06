"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTeacher = void 0;
var teacher1 = {
    firstName: "Hedo",
    lastName: "Hedo",
    fullTimeEmployee: true,
    location: "Kondele",
    contract: false
};
console.log(teacher1);
var director1 = {
    firstName: "foolo",
    lastName: "foolo",
    fullTimeEmployee: true,
    location: "Kondele",
    numberOfReports: 17
};
var printTeacher = function (firstName, lastName) { return "".concat(firstName[0], ". ").concat(lastName, ";"); };
exports.printTeacher = printTeacher;
console.log((0, exports.printTeacher)('john', 'doe'));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return StudentClass;
}());
function createStudent(cStudent, firstName, lastName) {
    return new cStudent(firstName, lastName);
}
var student1 = createStudent(StudentClass, 'reggy', 'reeee');
console.log(student1);
