class Person {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
  }
}

let person1 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(person1.toString());

let person2 = new Person("Merry", "Fox", 33, "merry@gmail.com");
let person3 = new Person("Duck", "Hammer", 44, "duck-hammer@mail.com");
const people = [person2, person3];
console.log(people.join("\n"));
