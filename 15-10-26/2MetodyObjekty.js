// objekry

const firstName = 'john';
const lastName = 'doe';
const age = 30;

//pole
const student = ['john', 'doe', 30];

// objekty
const person = {
    firstName: 'john',
    lastName: 'doe',
    age: 35,
    introduction() {
        return `krestni jmeno: ${this.firstName}. Prijmeni ${person.lastName}. Vek: ${person.age}`
    }
};


const book = {
    tit: 'hp 1',
    aut: 'jk rowlng',
    year: 1999,
    pages: 197
}

const car = {
    carName: 'nissan',
    color: 'newred',
    year: "2013"
}

console.log(person.firstName);
console.log(person.lastName)
console.log(person.age)

console.log(person.introduction())

