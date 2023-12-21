//strukturovane drzeni dat

/* let variable = 1;
variable = 3;
console.log(variable); //vypise 3


const course = {
    organizer: 'Czechitas',
    name: 'Automatizace: WDIO',
    teacher: 'Monika',
    students: [
        'Jana', 'Petra', 'Katka'
    ],
    time: {
        startDate: '2023-09-09',
        endDate: '2023-12-24'
    }
greetAllStudents: function(greeting) {
    for (const student of this.students) {
        console.log(`${greeting} ${student.name}`)
    };
}
};

console.log(course.name);
console.log(course.students.length);
console.log(course.time);
 */


// tridy zacinaji velkym pismenem

/* class Course {

    constructor(name, teacher, students) {
        this.name = name;
        this.teacher = teacher;
        this.students = students;
    }

    get name() {
        return this._name
    }

    get teacher() {
        return this._teacher
    }

    get students() {
        return this._students
    }

    set teacher() {
        this._teacher = teacher
    }

    addStudent() {
        this._students.push(student)
    }
}
 */
// první se dávají gettery a pak další metody(napr. async), gettery vetsinou na jeden radek
//vytvoření instance třídy viz nize
//page objecty by nemely obsahovat asertace

/* const testAutomation =  new Course('Automatizace', 'Monika', ['Jana', 'Petra', 'Katka']);
const JavaScript = new Course('JavaScript', 'Pepik', ['Jana', 'Petra', 'Katka']);

console.log(testAutomation);
console.log(JavaScript);
 */



//objekty

/* const testAutomation = {
    organizer: 'Czechitas',
    name: 'Automatizace: WDIO',
    teacher: 'Monika',
    students: [
        {
            name: 'Jana'
        },
        {
            name: 'Petra'
        },
        {
            name: 'Katka'
        }
    ],
    time: {
        startDate: '2023-09-09',
        endDate: '2023-12-24'
    },
    greetAllStudents: function(greeting) {
        for (const student of this.students) {
            console.log(`${greeting} ${student.name}`)
        };
    }
};

const javaScript = {
    organizer: 'Czechitas',
    name: 'JavaScript',
    teacher: 'Tonda',
    students: [
        {
            name: 'Jana'
        },
        {
            name: 'Petra'
        },
        {
            name: 'Katka'
        }
    ],
    time: {
        startDate: '2023-09-09',
        endDate: '2023-12-24'
    },
    greetAllStudents: function(greeting) {
        for (const student of this.students) {
            console.log(`${greeting} ${student.name}`)
        };
    }
}; */


//trida

/* class Course {

    constructor(name, teacher, students) {
        this._name = name;
        this._teacher = teacher;
        this._students = students;
    }

    getName() {
        return this._name;
    }

    get teacher() {
        return this._teacher;
    }

    get students() {
        return this._students;
    }

    set teacher(teacher) {
        this._teacher = teacher
    }

    addStudent(student) {
        this._students.push(student);
    }

    greetStudents(greeting) {
        for (const student of this._students) {
            console.log(`${greeting} ${student}`);
        }
    }

}

const testAutomation = new Course('Automatizace', 'Monika', ['Jana', 'Petra', 'Katka']);
const javaScript = new Course('JavaScript', 'Pepik', ['Jana', 'Petra', 'Katka']); */


class Course {

    constructor(name, teacher, students) {
        this._name = name;
        this._teacher = teacher;
        this._students = students;
    }

    getName() {
        return this._name;
    }

    get teacher() {
        return this._teacher;
    }

    get students() {
        return this._students;
    }

    set teacher(teacher) {
        this._teacher = teacher
    }

    addStudent(student) {
        this._students.push(student);
    }

    greetStudents(greeting) {
        for (const student of this._students) {
            console.log(`${greeting} ${student}`);
        }
    }

}


//dědičnost, vytvareni potomka k předkovi

/* class AutomationCourse extends Course {
    constructor(teacher, students, start, end) {
        super('Automatizace', teacher, students);
        this._start = start;
        this.end = end;
    }
    get remainingDays() {
        return 20;
    }
}

const testAutomation = new AutomationCourse('Monika',['Jana', 'Petra', 'Katka'], '2023-09-20', '2023-12-20');
console.log(testAutomation);
console.log(testAutomation.students);
testAutomation.greetStudents('Ahoj');
console.log(testAutomation.remainingDays);

const javaScript = new Course('JavaScript', 'Pepik', ['Jana', 'Petra', 'Katka']);
console.log(JavaScript);
console.log(JavaScript.remainingDays); */

//kompozice stránky
