let fullName = ''
class Person {
  constructor(
    firstName = 'John',
    lastName = 'Doe',
    age = 0,
    gender = 'Male',
    raceName = 'Speed'
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.gender = gender
    this.raceName = raceName
  }
  sayFullName() {
    return console.log(this.firstName + ' ' + this.lastName)
  }
  greetExtraTerrestrials() {
    console.log('Welcome to Planet Earth ' + this.raceName)
  }
}

let Jane = new Person('Jane', 'Doe', '0', 'Female', 'Madd Dogg')
Jane.sayFullName()
