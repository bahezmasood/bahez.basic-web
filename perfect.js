// for learning the most important
// Base class
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method of the class
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  
    celebrateBirthday() {
      this.age++;
      console.log(`${this.name} is now ${this.age} years old. Happy Birthday!`);
    }
  }
  
  // Subclass (Inheritance)
  class Student extends Person {
    constructor(name, age, studentId) {
      super(name, age); // call the constructor of Person
      this.studentId = studentId;
    }
  
    study(subject) {
      console.log(`${this.name} is studying ${subject}.`);
    }
  
    showID() {
      console.log(`${this.name}'s student ID is ${this.studentId}.`);
    }
  }
  
  // Another class to demonstrate object interaction
  class Course {
    constructor(courseName, instructor) {
      this.courseName = courseName;
      this.instructor = instructor;
      this.students = [];
    }
    addStudent(student) {
      this.students.push(student);
      console.log(`${student.name} has been added to the course ${this.courseName}.`);
    }
  
    listStudents() {
      console.log(`Course: ${this.courseName}`);
      console.log("Students enrolled:");
      this.students.forEach((s, i) => {
        console.log(`${i + 1}. ${s.name} (ID: ${s.studentId})`);
      });
    }
  }
  
  // Creating objects
  const alice = new Student("Alice", 20, "S1234");
  const bob = new Student("Bob", 22, "S5678");
  
  const jsCourse = new Course("JavaScript Basics", "Prof. Smith");
  
  // Using object methods
  alice.greet();
  bob.greet();
  alice.study("JavaScript");
  bob.celebrateBirthday();
  
  // Adding students to course
  jsCourse.addStudent(alice);
  jsCourse.addStudent(bob);
  
  // Listing students
  jsCourse.listStudents();
// new way
class Cars {
    name="nissan";
place="japan";
model="2029";
typeOfCars(model="but",car="he"){
return  {model, car};
}
};
var car=new Cars();
var k=car.model;
var t = car.typeOfCars();
console.log(k);
console.log(t);
console.log(t.car)
console.log(t.model)
//]
class Cars{
constructor (name,model,city){
this.name=name;
this.model=model;
this.city=city;

}
 typeOfCars(newCity,newModel){


return "iam driving a "+this.name+" "+this.model+" "+this.city+" "+newCity+" "+newModel;
}



}
let v= new Cars("toyota","lat","2025");
let v1= new Cars("nissan", "pat" ,"4545");
let t =v1.typeOfCars();
console.log(t);






















