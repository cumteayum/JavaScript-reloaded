const students = [
  {
    name:"Ishan",
    lang:"JavaScript"
  }, {
    name:"Papa",
    lang:"Python"
  }
];

function enrollStudents(std, callback) {
  setTimeout(() => {
    students.push(std);
    callback();
  }, 3000);
}

function getStudents() {
  setTimeout(() => {
    let str = "";
    students.forEach(function(student) {
      str += `<li>${student.name}</li>`
    });
    document.getElementById('stud').innerHTML = str;
  }, 1000);
}

let newStudent = {
  name:"Sunny",
  lang:"Java"
};

enrollStudents(newStudent, getStudents);
