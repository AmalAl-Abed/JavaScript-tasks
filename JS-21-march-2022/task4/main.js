
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/

function tellFortune(job, loc, pname, num) {
    document.write(
      `"You will be a ${job} in ${loc},and married to ${pname} with ${num}kids."`
    );
  }

  let job = "software engineer",
    loc = "Jordan",
    pname = "amal",
    num = 3;
  tellFortune(job, loc, pname, num);
/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(num) {
    let dog = num * 7;
    document.write(`"Your doggie is ${dog} years old in dog years!."`);
  }

  let age = 2;
  calculateDogAge(age)

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply(age , amount){
    text = 'You will need ' + amount*365*age + ' cups of tea to last you until the ripe old age of ' + age;
    return text;
}

document.write(calculateSupply(100 , 3));

/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
function greet(string){
    text = 'Hello ' + string;
    return text;
}

/*
5
what is the error:
function double(cat) {
  return 2 * x;
}

function double(7) {
  return 2 * 7;
}

function double('7') {
  return 2 * 'x';
}
*/

"the last one has an error"

/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

ANSWER==>
function double1(x) {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

ANSWER==>
function double2(x){
return 2 * x;}
}

function (x) double3 {
  return 2 * x;

ANSWER==>
function double3 (x) {
  return 2 * x;}

*/


/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(number){
    number = Math.pow(number , 3);
    return number;
}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/

function multiply(num1 , num2){
    number = num1 * num2;
    return number;
}
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
function canIGetADrivingLicense(number){
    text = "";
    if(number >= 20){
        text = "yes you can";
    }else{
        text = "no you can't"
    }
    return text;
}

/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
    
function sameLength(str1 , str2){
    flag = false;
    if(str1.length == str2.length){
        flag = true;
    }

    return flag;
}
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/

function largerNubmer(num1 , num2){
    result = num1;
    if(num2 > num1){
        result = num2;
    }

    return result;
}
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/

function smallerNubmer(num1 , num2 , num3){
    result = num1;
    if(result > num2){
        result = num2;
    }

    if(num3 < result){
        result = num3;
        }

    return result;
}


/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
function shorterString(str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];
    let val = arr[0].length;
    let x = " ";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length < val) {
        val = arr[i].length;
        x = arr[i];
      }
    }

    return x;
  }
  let str1 = "cat";
  let str2 = "school";
  let str3 = "car";
  let str4 = "by";
  let str5 = "github";
  console.log(shorterString(str1, str2, str3, str4, str5));

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function shorterString(str1, str2, str3, str4, str5) {
    let arr = [str1, str2, str3, str4, str5];
    let val = arr[0].length;
    let x = " ";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > val) {
        val = arr[i].length;
        x = arr[i];
      }
    }

    return x;
  }
  let str1 = "cat";
  let str2 = "school";
  let str3 = "car";
  let str4 = "by";
  let str5 = "github";
  console.log(shorterString(str1, str2, str3, str4, str5));
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number){
    result = true;
    
    if(number % 2 != 0){
        result = false;
    }

    return result;
}

/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
function isEven(number){
    result = true;
    
    if(number % 2 != 0){
        result = false;
    }

    return result;
}

/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
function positive(number){
    if(number > 0){
        return number;
    }else{
        return number * -1;
    }
}

/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(str1 , str2){
    text = str1 + ' ' + str2;
    return text;
}


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(str1 , str2 , str3 , str4 , str5){
    var nums= [str1 , str2 , str3 , str4 , str5]
    let sum = 0;
    for(let i =0;i < nums.length ; i++){
        sum += nums[i];

    }
    return sum/nums.length;
}


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/

function randomNumber(){
    return Math.random();
}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomNumber(num1,num2){
    return (Math.random() * num2) + 1;
}

let num1=2;
let num2=8;
console.log( randomNumber(num1,num2))

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversty(number){
    grade = "";
    if(number <= 100 && number >= 95 ){
        grade = "A";
    }else if(number <= 94 && number >= 85 ){
        grade = "B";
    }else if(number <= 84 && number >= 70 ){
        grade = "C";
    }else if(number <= 69 && number >= 50 ){
        grade = "D";
    }else if(number <= 49 && number >= 0 ){
        grade = "F";
    }

    return grade;

}

/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var number = 0;
    
    
function counter(){
    number++;
    return number;
}

/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/



var number = 0;
    
    
    function counter(){
        number++;
        return number;
    }
    
    function resetCounter(){
        text = number + ' and the counter rest now';
        number = 0;
        return text;
    }