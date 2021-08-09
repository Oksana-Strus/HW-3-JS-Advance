// Завдання 1.

// Створити клас Human із своїми властивостями та методами, які можуть бути у людини (вміння говорити, ходити, вага, колір шкіри і т.д.). 
// Від цього класу повинні наслідуватись 2 інших класи, клас Man, клас Woman. 
// Далі розширюєм функціонал – для Woman дати ще 2 класи наслідники Librarian і Nurse та прописати методи та властивості які притаманні таким професіям.
// Для Man – дати також 2 класи Hunter і Worker та прописати методи та властивості які притаманні таким професіям.

function Human(weight, height, skinColor, hairColor) {
    this.weight = weight,
        this.height = height,
        this.skinColor = skinColor,
        this.hairColor = hairColor
}
Human.prototype.talk = function () {
    console.log('I am talking')
}
Human.prototype.walk = function () {
    console.log('I am walking')
}

function Man(weight, height, skinColor, hairColor, superpower) {
    Human.call(this, weight, height, skinColor, hairColor);
    this.superpower = superpower
}
Man.prototype = Object.create(Human.prototype);
Man.prototype.constructor = Man;
Man.prototype.specifics = function () {
    console.log(this.superpower);
}

function Hunter(weight, height, skinColor, hairColor, superpower, weapon, trophies) {
    Man.call(this, weight, height, skinColor, hairColor, superpower),
        this.weapon = weapon,
        this.trophies = trophies
}

Hunter.prototype = Object.create(Man.prototype);
Hunter.prototype.constructor = Hunter;
Hunter.prototype.prizes = function () {
    console.log(this.weapon, this.trophies)
}

function Worker(weight, height, skinColor, hairColor, superpower, job, experience) {
    Man.call(this, weight, height, skinColor, hairColor, superpower),
        this.job = job,
        this.experience = experience
}

Worker.prototype = Object.create(Man.prototype),
    Worker.prototype.constructor = Worker,
    Worker.prototype.workInfo = function () {
        console.log(this.job, this.experience)
    }


function Woman(weight, height, skinColor, hairColor, power) {
    Human.call(this, weight, height, skinColor, hairColor),
        this.power = power;
}
Woman.prototype = Object.create(Human.prototype);
Woman.prototype.constructor = Woman;
Woman.prototype.specifics = function () {
    console.log(this.power)
}

function Librarian(weight, height, skinColor, hairColor, power, responsibilities, workDays) {
    Woman.call(this, weight, height, skinColor, hairColor, power),
        this.responsibilities = responsibilities,
        this.workDays = workDays
}

Librarian.prototype = Object.create(Woman.prototype);
Librarian.prototype.constructor = Librarian;
Librarian.prototype.workDetails = function () {
    console.log(this.responsibilities, this.workDays)
}

function Nurse(weight, height, skinColor, hairColor, power, vaccine, weekend) {
    Woman.call(this, weight, height, skinColor, hairColor, power),
        this.vaccine = vaccine,
        this.weekend = weekend
}

Nurse.prototype = Object.create(Woman.prototype);
Nurse.prototype.constructor = Nurse;
Nurse.prototype.workDetails = function () {
    console.log(this.vaccine, this.weekend)
}



let someMan = new Worker(80, 190, 'white', 'brunette', 'male', 'superPower', 'policeman', '10 years');
console.log(someMan);
someMan.specifics();
someMan.talk();
someMan.walk();
someMan.workInfo();
console.log(someMan instanceof Human);
console.log(someMan instanceof Man);




// Завдання 2.
// Створити клас Animal зі своїми властивостями та методами які можуть бути у всіх тварин (ходити, бігати, мати шерсть і т.д.)
// Від цього класу повинні наслідуватись 2 класи Herbivorous і Predator. 
// Далі розширюєм функціонал – для Herbivorous створити вид 2 тварин, а також для Predator.


function Animal(walk, run, swim, fur) {
    this.walk = walk,
        this.run = run,
        this.swim = swim,
        this.fur = fur
}

Animal.prototype.eyes = function () {
    console.log('I have big eyes')
}

Animal.prototype.limbs = function () {
    console.log('I have limbs')
}

function Herbivorous(walk, run, swim, fur, food) {
    Animal.call(this, walk, run, swim, fur),
        this.food = food
}

Herbivorous.prototype = Object.create(Animal.prototype);
Herbivorous.prototype.constructor = Herbivorous;
Herbivorous.prototype.eat = function () {
    console.log('I eat plants')
}


function Deer(walk, run, swim, fur, food, horns) {
    Herbivorous.call(this, walk, run, swim, fur, food),
        this.horns = horns
}

Deer.prototype = Object.create(Herbivorous.prototype);
Deer.prototype.constructor = Deer;
Deer.prototype.legs = function () {
    console.log("I have long legs")
}

function Giraffe(walk, run, swim, fur, food, neck) {
    Herbivorous.call(this, walk, run, swim, fur, food),
        this.neck = neck
}

Giraffe.prototype = Object.create(Herbivorous.prototype);
Giraffe.prototype.constructor = Giraffe;
Giraffe.prototype.spots = function () {
    console.log("I have many spots")
}

function Predator(walk, run, swim, fur, food) {
    Animal.call(this, walk, run, swim, fur),
        this.food = food
}

Predator.prototype = Object.create(Animal.prototype);
Predator.prototype.constructor = Predator;
Predator.prototype.eat = function () {
    console.log('I eat meat')
}

Predator.prototype.eat = function () {
    console.log('I eat meat')
}

function Lion(walk, run, swim, fur, food, claws) {
    Predator.call(this, walk, run, swim, fur, food),
        this.claws = claws
}

Lion.prototype = Object.create(Predator.prototype);
Lion.prototype.constructor = Lion;
Lion.prototype.fangs = function () {
    console.log("I have sharp fangs")
}

function Wolf(walk, run, swim, fur, food, home) {
    Animal.call(this, walk, run, swim, fur, food);
    this.home = home;
}

Wolf.prototype = Object.create(Predator.prototype);
Wolf.prototype.constructor = Wolf;
Wolf.prototype.flock = function () {
    console.log("I have own flock")
}