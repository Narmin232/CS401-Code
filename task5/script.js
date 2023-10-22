const students = [
    {
        id: 1,
        username: "Anar",
        gender: 'Male',
        age: 25,
    },
    {
        id: 2,
        username: "Narmin",
        gender: 'Female',
        age: 20, },
    {
        id: 3,
        username: "Gulsen",
        gender: 'Female',
        age: 27,
    },
    
]

// const femaleStudents = students.filter(student => student.gender === 'Female')
// console.log(femaleStudents)

// const ageStudents = students.filter(student => student.age > 22)
// console.log(ageStudents);

// let sum = 0 ;
// for (let i = 0; i < students.length; i++) {
//     sum += students[i].age;
// }
// console.log(sum);

// students.map(Item => sum += Item.age )
// console.log(sum);
// const idStr = students.id;
// console.log(idStr)


// console.log(students.map(Item => Item.id));             

const usernameStudents = students.map(student => student.username )
console.log(usernameStudents);
