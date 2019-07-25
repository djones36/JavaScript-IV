// CODE here for your Lambda Classes
//<=== Classes ===>//

//Parent
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`) 
    }
}

class Instructor extends Person {
    constructor(instAttributes){
        super(instAttributes)
        this.specialty = instAttributes.specialty;
        this.favLanguage = instAttributes.favLanguage;
        this.catchPhrase = instAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}.`) 
    }
    grade(Student, subject){
        console.log(`${Student.name} receives a perfect score on ${subject}.`) 
    }
}

class ProjectManager extends Instructor{
    constructor(pmAttributes){
        super(pmAttributes)
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to @${channel}, standy times!`) 
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student}'s code on ${subject}.`)
    }
}

class Student extends Person{
    constructor(stdAttributes){
        super(stdAttributes)
        this.previousBackground = stdAttributes.previousBackground;
        this.className = stdAttributes.className;
        this.favSubjects =stdAttributes.favSubjects;
    }
    listSubjects(){
        this.favSubjects.forEach(subjects => {
            console.log(subjects)
        });
    }
    prAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`) 
    }
    sprintChallenge(subject){
        console.log( `${this.name} has begun sprint challenge on ${subject}`)
    }
}
    
//<=== Objects ===>//

//Instructors

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const mike = new Instructor({
    name: 'Mike',
    location: 'Portland',
    age: 54,
    favLanguage: 'Python',
    specialty: 'Back-end',
    catchPhrase: `I code for fun.`
});

const sarah = new Instructor({
    name: 'Sarah',
    location: 'Mexico',
    age: 32,
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Code till you drop!`
});

//Project Manager

const brandon = new ProjectManager({
    name: 'Brandon',
    location: 'California',
    age: 23,
    gradClassName: 'WEB17',
    favInstructor: 'Brit',
    favLanguage: 'HTML',
    specialty: 'Front-end',
    catchPhrase: `Code till you drop!`
});

const kaily = new ProjectManager({
    name: 'Kaily',
    location: 'California',
    age: 23,
    gradClassName: 'WEB09',
    favInstructor: 'Mike',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `Coding tomorrow!`
});

const kevin = new ProjectManager({
    name: 'Kevin',
    location: 'Ohio',
    age: 25,
    gradClassName: 'WEB20',
    favInstructor: 'Brit',
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `Coding tomorrow!`
});

//Students

const john = new Student({
    name: 'John',
    age: 25,
    location: 'FL',
    previousBackground: 'Collector of Cats',
    className: 'Web28',
    favSubjects: ['CSS', 'Html', 'JavaScript'],
});

const billy = new Student({
    name: 'Billy',
    age: 20,
    location: 'WA',
    previousBackground: 'Dog walker',
    className: 'Web27',
    favSubjects: ['Python', 'C++', 'Html'],
});

const gail = new Student({
    name: 'Gail',
    age: 89,
    location: 'Port',
    previousBackground: 'Debt Collector',
    className: 'Web29',
    favSubjects: ['Python', 'Java', 'C++'],
});

console.log(billy)
//Person method test
gail.speak()
//Instructor method test
fred.demo('Java')
fred.grade(billy, 'Java')

//PM method test
brandon.standUp('Web22')
brandon.debugsCode('Gail', 'Web22')

//Students
john.listSubjects('java')
john.prAssignment('HTML')
john.sprintChallenge('CSS')
