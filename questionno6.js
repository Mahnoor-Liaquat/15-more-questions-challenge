// Create an object named student with properties name, age, and grades. Add a method calculateAverage that calculates the average of the grades.

let student ={
    name: "Muzammil Ali",
    age: 18,
    grades: [85, 90, 75, 95],
  
    calculateAverage: function() {
      if (this.grades.length === 0) {
        return 0; 
      }
  
      const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
      const average = sum / this.grades.length;
  
      return average;
    }
  };
  const averageGrade = student.calculateAverage();
  console.log(`Student ${student.name} has an average grade of ${averageGrade}`);
  
  