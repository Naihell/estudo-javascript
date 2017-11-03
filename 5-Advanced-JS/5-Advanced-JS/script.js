/*
// Constructor
var john = {
    name: 'John',
    yearOfBirth: '1990',
    job: 'teacher'
}

// Por convencao, recomenda-se criar construtores com caixa alta
var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

// Nao e comum, mas tambem pode ser utilizado para declarar atributos
Person.prototype.calculateAge = function () {
    console.log(2017 - this.yearOfBirth);
};

var john = new Person('John', 1990, 'teacher');
var maria = new Person('Maria', 1995, 'nurse');
john.calculateAge();
maria.calculateAge();
*/

/*
// Funcoes que retornam funcoes
function interviewQuestion(job) {
    if(job === 'designer') {
        return function(name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    } else {
        return function(name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('John');
*/

/*
// IIFE - Immediately Invoked Function Expression
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);
*/

// Closures
function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) {
        var age = 2017 -yearOfBirth;
        console.log((retirementAge - age) + a); 
    };
}

var retirementUSA = retirement(66);
var retirementBrasil = retirement(65);
var retirementGermagy = retirement(65);

retirementUSA(1990);
retirementBrasil(1991);
retirementGermagy(1930);
//retirement(65)(1990);