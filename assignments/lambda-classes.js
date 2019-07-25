// Classes

class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    };
    greeting(){
        return `Hello, my name is ${this.name} and I am from ${this.location}!`
    };
};

class Instructor extends Person {
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty;
        this.favLanguage = attributes.favLanguage;
        this.catchPhrase = attributes.catchPhrase;
    };
    demo(subject){
        return `Today we are learning about ${subject}.`
    };
    grade(subject, student){
        return `${student} receives a perfect score on ${subject}!`
    };
};

class Student extends Person {
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground;
        this.className = attributes.className;
        this.favSubjects = attributes.favSubjects;
    };
    listsSubjects() {
        this.favSubjects.forEach((element) => {
            console.log(this.name + "'s favorite subjects are:" + element);
        });
    };
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`
    };
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`
    };
};

class ProjectManager extends Instructor {
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName;
        this.favInstructor = attributes.favInstructor;
    };
    standUp(slackChannel){
        return `${this.name} announces to ${slackChannel} @channel standy times!`
    };
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}.`
    };
};

// Objects

const instructor1 = new Instructor({
    name: 'Brit Hemming',
    age: 'she will never tell',
    location: 'Ottawa',
    specialty: 'breakout sessions',
    favLanguage: 'Javascript',
    catchPhrase: 'it is time to do a breakout session!',
});

const instructor2 = new Instructor({
    name: 'Dan Frehner',
    age: '50ish',
    location: 'unknown',
    specialty: 'making funny videos',
    favLanguage: 'Python',
    catchPhrase: 'Thank you for watching this video',
});

const student1 = new Student({
    name: 'Jeffrey Whitaker',
    age: 30,
    location: 'Oregon',
    previousBackground: 'History student',
    className: 'Web22',
    favSubjects: ['history', 'coding', 'science'],
});

const student2 = new Student({
    name: 'Cameron Alvarado',
    age: 'mid 20s',
    location: 'Washington',
    previousBackground: 'unknown',
    className: 'Web22',
    favSubjects: ['psychology', 'cosmetics', 'underwater basked weaving'],
});

const pm1 = new ProjectManager({
    name: 'Jonathan Taylor',
    age: 28,
    location: 'Alabama',
    specialty: 'being chill',
    favLanguage: 'English',
    catchPhrase: 'cool',
    gradClassName: 'WEB20',
    favInstructor: 'Dan Frehner',
});

// Logs

console.log(instructor1.age);
console.log(instructor1.grade('JS IV', 'Jeff'));
console.log(student1.greeting());
student2.listsSubjects();
console.log(student2.PRAssignment('JS XXII'));
console.log(student1.sprintChallenge('plant psychology 101'));
console.log(pm1.standUp('Team_Jonathan'));
console.log(pm1.debugsCode('Jeff', 'Javascript III'));