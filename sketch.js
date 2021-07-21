var student = {

  name : "Sunakshi",
  grade: 8,
  roll_no: 20,
  favourite_subject: "coding",
  marks : [20, 30, 30, 30]
};


function setup() {
  createCanvas(400, 400);

  console.log(student);
  console.log(student.name);
  console.log(student.marks);
  student.roll_no = 30;
  console.log(student);
}

function draw() {
  background(220);
}