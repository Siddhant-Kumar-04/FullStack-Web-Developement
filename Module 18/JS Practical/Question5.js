const students = {

  name: "Alice",

  age: 22,

  major: "Computer Science",

  GPA: 3.8,

  isEnrolled: true

};

function displayStudentInfo(students) {
    for (const x in students) {
        console.log("Property:  " + x + ", Value: " + students[x]);
    }

}

function ForEachdisplayStudentInfo() {
    students.forEach(student => {
        console.log("ID: " + student.id + ", Name: " + student.firstName + " " + student.lastName + ", Age: " + student.age + ", Grade: " + student.grade);
    })

}

displayStudentInfo(students);
ForEachdisplayStudentInfo();