const students = [

  { id: 1, firstName: "John", lastName: "Doe", age: 20, grade:"A" },

  { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade:"B" },

    {
        id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade:"A"
    },

];

function addStudent(id, firstName, lastName, age, grade) {
  // Check if ID already exists
  const exists = students.some(student => student.id === id);
  if (exists) {
    console.log(`Student with ID ${id} already exists!`);
    return;
  }
  students.push({ id, firstName, lastName, age, grade });
  console.log(` Student ${firstName} ${lastName} added successfully.`);
}

// b. Update Student Information
function updateStudent(id, updatedInfo) {
  const student = students.find((student) => student.id === id);
  console.log(student);
  if (!student) {
    console.log(` Student with ID ${id} not found.`);
    return;
  }
  Object.assign(student, updatedInfo);
  console.log(`Student with ID ${id} updated successfully.`);
}

// c. Delete a Student
function deleteStudent(id) {
  const index = students.findIndex(student => student.id === id);
  if (index === -1) {
    console.log(` Student with ID ${id} not found.`);
    return;
  }
  const removed = students.splice(index, 1);
  console.log("****************************************");
  console.log(removed);
  console.log(` Student ${removed[0].firstName} ${removed[0].lastName} deleted successfully.`);
}

// d. List All Students
function listAllStudents() {
  console.log(" List of all students:");
  students.forEach(student => {
    console.log(
      `ID: ${student.id}, Name: ${student.firstName} ${student.lastName}, Age: ${student.age}, Grade: ${student.grade}`
    );
  });
}

// e. Find Students by Grade
function findStudentsByGrade(grade) {
  const filtered = students.filter(student => student.grade === grade);
  console.log(`Students with grade '${grade}':`);
  filtered.forEach(student => {
    console.log(`${student.firstName} ${student.lastName} (ID: ${student.id})`);
  });
  if (filtered.length === 0) {
    console.log(`No students found with grade '${grade}'.`);
  }
}

// f. Calculate Average Age
function calculateAverageAge() {
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const avgAge = totalAge / students.length;
  console.log(` Average age of students: ${avgAge.toFixed(2)}`);
}

// ---------------------------
// Example Usage
// ---------------------------
addStudent(4, "Alice", "Williams", 21, "B");
updateStudent(2, { age: 23, grade: "A" });
deleteStudent(3);
listAllStudents();
findStudentsByGrade("A");
calculateAverageAge();
