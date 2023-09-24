'use strict';

/*let hasDriversLicense=false;
const passTest=true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('i can drive');

//const interface='Audio';


function logger(){
    console.log('my name is shilpi');
}
logger();
logger();
logger(); //invoking/running/calling function

function fruitProcessor(apples,oranges){
    
    const juice=`juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice=fruitProcessor(5,0);
console.log(appleJuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice=fruitProcessor(2,4);
console.log(appleOrangeJuice);


function calcAge1(birthyear){
    /*const age=2037-birthyear;
    return 2037-birthyear;

}
const age1=calcAge1(1991);
console.log(age1);

const  calcage2=function (birthyear){
    return 2037-birthyear;
}
const age2=calcage2(1991);
console.log(age1,age2);


const  calcage2=function (birthyear){
    return 2037-birthyear;
}
//Arrow Function

const calcage3=birthyear=>2037-birthyear;
const age3=calcage3(1991);
console.log(age3);

const yearsuntilretirement=(birthyear,firstname)=> {
    const age=2037-birthyear;
    const retirement=65-age;
    //return retirement;
    return `${firstname} retires in ${retirement} years`;
}
console.log(yearsuntilretirement(1991,'jonas'));
console.log(yearsuntilretirement(1990,'bob'));

function cutfruitpieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applepieces=cutfruitpieces(apples);
    const orangepieces=cutfruitpieces(oranges);
    
    const juice=`juice with ${applepieces} pieces of apples and ${orangepieces} pieces of oranges.`;
    return juice;
}

console.log(fruitProcessor(2,3));

const calcage=function(birthyear){
    return 2037-birthyear;
}

const yearsuntilretirement=function (birthyear,firstname) {
    const age=calcage(birthyear);
    const retirement=65-age;
    if(retirement>0){
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
        
         
    }else{
        
        console.log(`${firstname} has already retired`);
        return -1;
        
    }
}
console.log(yearsuntilretirement(1991,'shilpi'));
console.log(yearsuntilretirement(1950,'abc'));


const friend1='m';
const friend2='s';
const friend3='p';

const friends=['mi','st','pe'];
console.log(friends);

const y=new Array(1991,1984,2008,2020);
console.log(y);

console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='ja';
console.log(friends);

const shilpi=['shilpi','biswal', 2023-2004,'student',friends];
console.log(shilpi);

//exercise
function calcage(birthyear){
    return 2037-birthyear;
}

const years=[1990,1967,2002,2010,2018];
const age1=calcage(years[0]);
const age2=calcage(years[1]);
const age3=calcage(years[2]);
console.log(age1,age2,age3);

const ages=[calcage(years[0]),calcage(years[1]),calcage(years[2])];
console.log(ages);


const friends=['mi','st','pe'];
const newlength=friends.push('ja');
console.log(friends);
console.log(newlength);
friends.unshift('jo');
console.log(friends);
friends.pop();
const popped=friends.pop();
console.log(popped);
console.log(friends);
friends.shift();
const shifted=friends.shift();
console.log(shifted);
console.log(friends);
console.log(friends.indexOf('st'));
console.log(friends.includes('pe'));

if(friends.includes('st')){
    console.log('you have a friend called st');
}


//OBJECTS
const shilpi={
    firstname:'shilpi',
    lastname: 'biswal',
    age:2023-2004,
    job:'student',
    friends:['mi','st','pe']

};
console.log(shilpi);


const shilpi={
    firstname:'shilpi',
    lastname: 'biswal',
    age:2023-2004,
    job:'student',
    friends:['mi','st','pe']

};
console.log(shilpi.lastname);
console.log(shilpi['age']);

const namekey='name';
console.log(shilpi['first'+namekey]);
console.log(shilpi['last'+namekey]);

//const interestedin=prompt('what do you want to know about shilpi? Choose between firstname,lastname,age,job and friends');


/*if(shilpi[interestedin]){
    console.log(shilpi[interestedin]);
}else{
    console.log('wrong request,choose among given options');
}


shilpi.location='mumbai';
shilpi['twitter']='@shilpibiswal';
console.log(shilpi);

//challenge
console.log(`${shilpi.firstname} has ${shilpi.friends.length} friends, and her best friend is called ${shilpi.friends[0]}`);


const shilpi={
    firstname:'shilpi',
    lastname: 'biswal',
    birthyear: 2004,
    job:'student',
    friends:['mi','st','pe'],
    hasdriverslicense: true ,

    //calcage: function(birthyear){
    //    return 2037-birthyear;
    //}
    calcage: function(){
        this.age=2037-this.birthyear;
        console.log(this);
        return 2037-this.birthyear;
    },
    getsummary: function(){
        return `${this.firstname} is a ${this.calcage()} year old ${shilpi.job} and she has ${this.hasdriverslicense? 'a':'no'} drivers license`;
    }
};
//in dot notation
console.log(shilpi.getsummary());
//in bracket notation
//console.log(shilpi['calcage'](2004));



//loops
for(let rep=1;rep<=10;rep++){
    console.log(`lifting weights repetition ${rep}` );
}


const shilpi=[
    'shilpi',
     'biswal',
    2023-2004,
    'student',
    ['mi','st','pe'],
    true

];

const types=[];

for(let i=0;i<shilpi.length;i++){
    console.log(shilpi[i], typeof shilpi[i]);

    //types[i]=typeof shilpi[i];
    types.push(typeof shilpi[i]);
}
console.log(types);

const years=[1991,2007,1969,2022];
const ages = [];
for(let i=0;i<years.length;i++){
    ages.push(2037-years[i]);
}
console.log(ages);

//continue and break
console.log('---ONLY STRINGS---');
for(let i=0;i<shilpi.length;i++){
    if(typeof shilpi[i]!='string')continue;
    console.log(shilpi[i], typeof shilpi[i]);

}

console.log('---NO OTHER ELEMENTS FOLLOWING A NUMBER---');
for(let i=0;i<shilpi.length;i++){
    if(typeof shilpi[i]==='number')break;
    console.log(shilpi[i], typeof shilpi[i]);

}
console.log(shilpi.length);


//looping backwards

const shilpi=[
    'shilpi',
     'biswal',
    2023-2004,
    'student',
    ['mi','st','pe'],
    true

];
for(let i=shilpi.length-1;i>=0;i--){
    console.log(i,shilpi[i]);
}

//loops inside loops

for(let exercise=1;exercise<=3;exercise++){
    console.log(`---Starting exercise ${exercise}` );
    for(let rep=1;rep<6;rep++){
        console.log(`Exercise ${exercise} : lifting weight repetition ${rep}`);
    }
}
*/
//while loop

for(let rep=1;rep<=10;rep++){
    console.log(`lifting weights repetition ${rep}` );
}

let rep=1;
while(rep<=10){
    console.log(`WHILE:lifting weights repetition ${rep}`);
    rep++;
}

let dice=Math.trunc(Math.random() * 6)+1;
console.log(dice);

while(dice!=6){
    console.log(`You rolled a ${dice}`);
    dice=Math.trunc(Math.random() * 6)+1;
    if(dice==6) console.log('loop is going to end');
}







