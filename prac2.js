//Total Marks
let marks = [20,30,40,50,60];
let total=0;
for( let i=0; i<marks.length;i++)
{
    total+=marks[i];
}
console.log(total);
//Avg Marks
let avg =total/marks.length;
console.log(avg);

//Heighest marks
let heighest= marks[0];
for (let i=0;i<marks.length;i++)
{
    if ( marks [i]>marks[i-1])
    {
       heighest=marks[i];
    }
    console.log(heighest);
}

//PASS Fail
let flag = false;
for(let i=0;i<marks.length;i++)
{
if(marks[i]>10)
{
    flag=true;
}
}
if(flag)
{
    console.log("Pass");
}
else
{
    console.log('Fail')
}

