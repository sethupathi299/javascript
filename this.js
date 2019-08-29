
// let People = () => (person, age => {
//     this.person = person
//     this.age = age
//     this.info = function () {
//         setTimeout(() => {
//             console.log(this.person + " is " + this.age + " years old")
//         }, 3000)
//     }
// });
// let person1 =  People('John', 21)
// person1.info();

getPerson = (person, age) => {
    this.person = person;
    this.age = age;
    setPerson(this.person, this.age);
}
setPerson = (person, age) => {
    console.log(this.person + " is " + this.age + " years old")
}
getPerson('sethupathi', 21)
