//Variable Declaration and Data Types
var name ='Arikh';
var age=20;
var Frvtgame=['GTA','FIFA','PUBG'];
console.log(name,age,Frvtgame);
console.log(typeof name);
console.log(typeof age);
console.log(typeof Frvtgame);
var something ;
var anything = null;
console.log(something == anything); //checkks varibale
console.log(something === anything);//checks variable and data type

//if else statement
if(age>18)
{
    console.log('You are eligible to vote');
}
else
{
    console.log('You are not eligible to vote');
}

//for loop
for(var i=0;i<10;i++)
{
    console.log('Hello ' +name);
}

//Array Methods
var games=[];
games [0]='GTA';
games [1]='FIFA';
games [2]='eFootball';
games [3]='PUBG';
games [4]='COC';

console.log(games);

for(var i=0;i<games.length;i++)
{
    console.log(games[i]);
}
console.log('Length of array is ' +games.length);

console.log(games[1]);

//last index of array
console.log(games[games.length-1]);
 
//games to index
console.log(games.indexOf('PUBG'));

//Adding and removing elements from array
games.push('COD');
console.log(games);

games.pop();
console.log(games);

games.shift();
console.log(games);

//sorted array
var sortedGames = games.sort();
console.log(sortedGames);

//splice method
var removedGames = games.splice(3,2);
console.log(removedGames);
console.log(games);

//functions declaretion

function subtract(a,b)
{
    return a-b;
}
console.log(subtract(10,5));

//function in variable ; function exprression
var add=function(a,b)
{
    return a+b;
}
var addition=add;
console.log(add(10,3));
console.log(addition(10,3));

//callback function

var food=['Pizza','Burger','Pasta','Noodles'];

food.forEach(displayFood);
function displayFood (food)
{
    console.log('Available Food : '+food);
}

//callback function with anonymous function
function oparation(a,b,callback)
{
    var c = a*b;
    var d = a+b;

    callback(c,d);
}
 console.log(oparation(10,5,function(c,d)
{
    console.log('Multipication of c and d is : ' + c*d);
}))

//callback in arrray
var names=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
function displayNames(names,callback)
{
    for(var i=0;i<names.length;i++)
    {
        callback(names[i]);
    }
}
displayNames (names, function (names) 
{
    console.log('To uppercase: ' + names.toUpperCase());
});
//objects in javascript
var person=
{
    name:'Arikh',
    age:20,
    gender:'Male',
    skills:['HTML','CSS','JS'],
    print : function()
    {
        console.log(this.name ,this.age , this.gender , this.skills);
    }
}

person.name='Orry';
person.print();








