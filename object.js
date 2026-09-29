let car =
{
    brand : "Tyota",
    model : 'x',
    year : 2020
}
car.color ="red"; //value update
console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);

let student =
{
    id : 23-52439-2,
    Name : 'Arikh Bin Eden' ,
    Cgpa : 3.14,
    depertment : 'Bsc CSE'
}
student.newCgpa =3.17;
for(let key in student)
{
    console.log(key, " =",student[key]);
}
console.log(student);

//Array in Object

let student = [
    {
        name: 'Arikh',
        id: 1
    },
    {
        name: 'Tanim',
        id: 2
    }
];

for (let i = 0; i < student.length; i++) {
    console.log(student[i]);
}

console.log(student);