function Student(name,surname,year,marks,visiting){
    this.name = name;
    this.surname = surname;
    this.year = year;
    this.marks = marks;
    this.visiting = new Array(25);

}

Student.prototype.getAge = function(){

    let presentYear = new Date().getFullYear();
    return ` Student ${this.name} ${this.surname} is  ${presentYear - this.year} years old`;
}

Student.prototype.getAverageMarks = function () {
  
    let sumMarks = this.marks.reduce(function(number, mark) {
        return number + mark;
    }, 0);
    
    return ` Student ${this.name} ${this.surname} avarage mark is ${ Math.floor((sumMarks / this.marks.length)*10)/10}`;
};

 Student.prototype.present = function () {
    for (let i = 0; i < this.visiting.length; i++) {
        if (this.visiting[i] === undefined) {
            this.visiting[i] = true;
            break; 
        }
    }
};

Student.prototype.absent = function () {
    for (let i = 0; i < this.visiting.length; i++) {
        if (this.visiting[i] === undefined) {
            this.visiting[i] = false;
            break; 
        }
    }
};


Student.prototype.summary = function () {
    let averageMark = this.getAverageMarks();
    let count = 0;

    for (let i = 0; i < this.visiting.length; i++) {
        if (this.visiting[i] === true) {
            count++;
        }
    }

    let Rate = count /this.visiting.length;

    if (averageMark > 90 && Rate > 0.9) {
        return `${this.name} ${this.surname} - молодець`;
    } else if (averageMark > 90 || Rate > 0.9) {
        return `${this.name} ${this.surname} добре, але можна краще`;
    } else {
        return `${this.name} ${this.surname} ти редиска`;
    }
};

let HarryPotter = new Student( 'Harry','Potter',1980,[100,90,90,90,80,70,60]);
let RonWeasley = new Student('Ron','Weasley',1981,[80,70,65,75,60,55]);
let HermioneGranger = new Student('Hermione','Granger',1982,[90,100,95,100,89]);

HarryPotter.present();
HarryPotter.absent();
HarryPotter.absent();
HarryPotter.present();
HarryPotter.present();
HarryPotter.absent();

RonWeasley.present();
RonWeasley.absent();
RonWeasley.present();
RonWeasley.absent();
RonWeasley.present();
RonWeasley.absent();

HermioneGranger.present();
HermioneGranger.present();
HermioneGranger.present();
HermioneGranger.present();
HermioneGranger.present();
HermioneGranger.present();


console.log(HarryPotter.getAge());
console.log(RonWeasley.getAge());
console.log(HermioneGranger.getAge());


console.log(HarryPotter.getAverageMarks());
console.log(RonWeasley.getAverageMarks());
console.log(HermioneGranger.getAverageMarks());

console.log(HarryPotter.summary());
console.log(RonWeasley.summary());
console.log(HermioneGranger.summary());


