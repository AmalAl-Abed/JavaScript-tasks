/*
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/

function subtract(n) {

    let sub=n;
    let i=n-1;

    while(i>0){
    sub= sub-i;//1
    i--;
    }
return sub;
          }

          let n = 5;
          console.log(subtract(n));
/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
function subtract(n) {

    let fac=n;
    let i=n-1;

    while(i>0){
    fac= fac*i;
    i--;
    }
return fac;
          }

          let n = 4;
          console.log(subtract(n));

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
function repeatStr(string, num) {
    let i = 0;
    while (i < num){
       document.write(`${string} `);
    i++;
  }

}

  let num = 4;
  let string = "yara";
  console.log(repeatStr(string, num));


/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
function muti2(num1, num2) {
        
    let i = num1+1 ;
    let result=num1;
    while (num1 < num2) {
     result=result+i;
     i++;
     num1++;
    }
  return result;
}

let num1 = 3;
let num2 = 6;
console.log(muti2(num1, num2));

/*
5
Create a function called repeatStr2
that takes 2 string parameters,
and return the first string number time
(of the lenght of the secend string) with space betweeen it
** Important: the continue condition should be [somthing!== 0]
** Important: You should't have extra space at the end
Ex: repeatStr2("ro","cc"); => "ro ro"
Ex: repeatStr2("ro","fff"); => "ro ro ro"
*/
function repeatStr2(st1, st2) {

    let i=0
    while (i < st2.length) {
      document.write(st1 + " ");
      i++;
    }
document.write(st1.trim());
  }

  let string1 = "ro";
  let string2 = "fff";

  repeatStr2(string1, string2);
 

/*
6
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/

function multiOf(num1, num2,num3) {
    let result=num1*(Math.pow(num2,num3));
  return result;
       }
 
       let num1 = 4;
       let num2 = 10;
       let num3 = 3;
     
     console.log(multiOf(num1, num2,num3));
/*
7
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
function muti2(num1, num2) {
        
    let i = num1+1 ;
    let result=num1;
    while (num1 < num2) {
     result=result*i;
     i++;
     num1++;
    }
  return result;
}

let num1 = 3;
let num2 = 6;
console.log(muti2(num1, num2));

/*
8
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
function numberBetweenUs(num1, num2) {
    if (num1 === num2 - 1) {
     console.log( "the entries are not right");
    }

   else if (num1 !== num2 - 1) {
      let x = num1 + 1;
      while (x < num2) {
        console.log(x++);
      }
    }
  }

  let num1 = 2;
  let num2 = 8;
numberBetweenUs(num1, num2);
/*
9
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/



function countDown(x) {
      

    while ( x >= 0) {
      if (x != 0) {
        console.log(`${x} ,`);
       
      }
       else if (x == 0) {
        console.log("done");
      }
      x--;
    }
   
  }
  countDown(5);


/*
10
Write a function called multiplication2
that takes two parameters
and return the multiplication of them
you need to use only sum
multiplication2(5,4) => 20
multiplication2(2,8) => 16
multiplication2(7,6) =>  42
*/
function multiplication2(num1, num2) {
    let sum = 0;
    let i = 0;
    while (i < num2) {
      sum = sum + num1;
      i++;
    }
    return sum;
  }
  let num1 = 2;
  let num2 = 8;
document.write(multiplication2(num1, num2));
/*
11
Write a function called mod2
that takes two parameters
and return the module of them
without using %
mod2(5,4) => 1
mod2(2,8) => 2
mod2(7,4) => 3
mod2(8,4) => 0
*/
function mod2(num1, num2) {
    let mod;

    if (num1 < num2) {
      return num1;
    } else if (num1 > num2) {
      if (num1 / 2 == num2) {
        return 0;
      } else if (num1 / 2 != num2) {
        mod = num1 - Math.floor(num1 / num2) * num2;
        return mod;
      }
    }
  }
  let num1 = 5;
  let num2 = 4;
  document.write(mod2(num1, num2));

/*
12
Write a function called repeatChar
that takes two parameters
and return the times that this char
without case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
repeatChar("schOol","o") => 2
repeatChar("school","a") => 0
repeatChar("School","s") => 1
try more case by yourself
*/



function repeatChar(str, char) {
  let i = 0;
  let x = str.toLowerCase();
  let counter=0;
  while (i < str.length) {
    if (x.charAt(i) == char) 
    counter++;
    i++;
  }
  return counter;
}
let string = "Amal";
let char = "a";
console.log(repeatChar(string, char));








// Advanced Part {for your benefits}

// Dont solve any question here if you didnt 
//finish all the question a bove with your pair

// This part you can try it and solve solo not with your pair

// This part is extra (and there is no help from the trainer) it is good to try it


/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/



/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/


/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/
