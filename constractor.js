class car 
{
    constructor (name,id)
    {
        this.name= name;
        this.id = id;
    }
}
let car1 = new car ("Toyota",101);
let car2 = new car ("Honda",102);
let car3 = new car ("TATA",101);

console.log(car1.name,car1.id);
console.log(car2.name,car1.id);
console.log(car3.name,car1.id);