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

/*
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
*/

/*
// Bind, call and apply
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if(style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and Gentlemen! I\'m ' + this.name + 
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. ');
        } else if(style === 'friendly') {
            console.log('Hey, what\'s up? I\'m ' + this.name + 
            ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. ' + 'Have a nice ' + 
        timeOfDay + '!');
        }
    }
};

var sebastiao = {
    name: 'Tiao',
    age: '75',
    job: 'fazendeiro'
};

john.presentation('formal', 'morning');


john.presentation.call(sebastiao, 'friendly', 'afternoon');
// The 'apply' method accept arrays
//john.presentation.apply(sebastiao, ['friendly', 'afternoon']);

// bind returns a function
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('evening');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2017 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages);
console.log(fullJapan);
*/

// Desafio easy
/*
// Constructor
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };
    
    Question.prototype.checkAnswer = function(ans) {
        if(ans === this.correct) {
            console.log('Correct answer!');
        } else {
            console.log('Wrong answer!');
        }
    };
    
    var q1 = new Question('Is javascript the coolest programming language in the world?', 
                            ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];
    
    var n = Math.floor(Math.random() * questions.length);
    
    questions[n].displayQuestion();
    
    var answer = parseInt(prompt('Please select the correct answer.'));
    
    questions[n].checkAnswer(answer);
})();
*/

// Desafio hard
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for(var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };
    
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;
        if(ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer!');
            sc = callback(false);
        }
        this.displayScore(sc);
    };

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('----------------------------------------------');
    };
    
    var q1 = new Question('Is javascript the coolest programming language in the world?', 
                            ['Yes', 'No'], 0);
    var q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Micheal', 'Jonas'], 2);
    var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
    
    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if(correct) {
                sc++;
            }
            return sc;
        };
    }
    var keepScore = score();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');

        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();