function studentInfo(name, age, grade) {
  this.name = name;
  this.age = age;
  this.grade = grade;

// Usando o 'this' para referenciar o objeto atual em uma função anônima
  this.data_anonymous = function() {
    setTimeout(function() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.grade);      
    }, 2000);
  }
//usando o 'this' para referenciar o objeto atual em uma função arrow
  this.data_anonymous = function() {
    setTimeout(() => {
      console.log(this.name, this.age, this.grade);
   
    }, 2000);
  }
}

const student1 = new studentInfo("Bruno", 40, "E");
const student2 = new studentInfo("Alice", 20, "A");

student1.data_anonymous(); // Output after 2 seconds: Alice 20 A
student2.data_anonymous(); // Output after 2 seconds: Alice 20 A

console.log(student1); // Output: studentInfo { name: 'Alice', age: 20, grade: 'A' }
console.log(student2); // Output: studentInfo { name: 'Bob', age: 22, grade: 'B' }


module.exports = {studentInfo};