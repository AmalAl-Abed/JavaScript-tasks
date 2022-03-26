console.log('Here is : ', 'array')



/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 --Answer:[ 1,7,9, 45]

 ["Str" "alex","moh"
--Answer:["Str" "alex","moh"]


 'the','fox' 'over' lazy, 'dog',  ]
--Answer:[the','fox','over','lazy', 'dog']
*/


/*
2
What the index of "Banana","Tomato"

var fruits=["Tomato","Banana","Watermelon"]
--Answer:index of banana is 1
index of tomato is 0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
--Answer: let arr=["mlokhaya","mansaf","lemon","bryani","msakhan"]
2- Favorite Sport (3)
--Answer: let arr=["tennis","swimming","running"]
3- Favorite Movie (4)
--Answer: let arr=["twilight","fast and furious","no way home","batman"]
*/


/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
function

Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

function firstOfArray(c){
    return c[0];
}
    
const arr=[1,4,6]    
console.log(`${firstOfArray(arr)}`)

  

/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function firstOfArray(c){
    return c[c.length-1];
    
    }
    
    let arrc=[1,3,4];
    console.log(firstofarray(arrc))

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0,5,7,9]
      for(var i=0; i<=2;i++){
    array.shift()
      }
array.push(10);
      var array2=[1,3,4,6,8]
   var result=array2.concat(array);
      console.log(`${result}`)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
let array2 = [5,9,-7,3.5];
console.log(array2.shift()); // Delete first element in array
console.log(array2.unshift()); // Add to the first of array
console.log(array2.pop()) // Delete from the last of array
console.log(array2.push()) // Add to the last of array

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(a){

    let arrsize= a.length;
    
     if( arrsize%2 == 0)
     return(`${a[(arrsize/2)-1]},${a[arrsize/2]}`);
    
    else
    return(`${a[Math.floor(arrsize/2)]}`);
          }
    
    let array=[1,2,4,5,5,9,8,3];
    console.log(middleOfArray(array))

/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird']
      animals[0]="zebra";
      animals[1]="elephant";
      animals.pop();

      console.log(animals)

/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(a,num){

    return a[num];
  }


  var arra=[1,3,5,6,8]
  console.log(indexOfArray(arra,2));

/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(a) {
    a.pop();
   console.log(a);
  }

  var nums = [1, 2, 3, 8, 9];
     arrayExceptLast(nums);
/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(a,add) {
    a.push(add);
   console.log(a);
  }

  var nums = [1, 2, 3, 8, 9];
  addToEnd(nums,5)

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(a) {
    sum = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i];
    }

    return sum;
  }
  var nums = [1, 2, 3, 8, 9];
  console.log(sumArray(nums));




  function sumArray(a) {
    sum = 0;
    let i = 0;
    while (i < a.length) {
      sum += a[i];
      i++;
    }

    return sum;
  }
  var nums = [1, 2, 3, 8, 9];
  console.log(sumArray(nums));


/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function minInArray(arr){
    let min=arr[0];

    for(let i=0 ; i< arr.length ;i++){
      if(min > arr[i]){
        min=arr[i]
      }

    }
    return min;
    }

    var nums =[1,2,3,8,9];
console.log(minInArray(nums));



function minInArray(arr) {
    let min = arr[0];
    let i = 0;
    while (i < arr.length) {
      i++;
      if (min > arr[i]) {
        min = arr[i];
      }
    }
    return min;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(minInArray(nums));

/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == num) {
        arr.splice(arr[i-1], 1);
      }
    }
    return arr;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(removeFromArray(nums,2));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function oddArray(arr) {
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i]%2 != 0) {
        odd.unshift(arr[i]);
      }
    }
    return odd;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(oddArray(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum=0;
    
    for (let i = 0; i < arr.length; i++) {
              sum+=arr[i];        
    }

    let avg = sum/arr.length;
    return avg;
  }

  var nums = [1, 2, 3, 8, 9];
  console.log(aveArray(nums));

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(arr) {
  var min = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (min.length > arr[i].length) {
      min = arr[i];
    }
  }
  return min;
}

var strings = ["mercer", "madrasa", "rashed266", "emad", "hala"];
console.log(shorterInArray(strings));
 arr[0][0]
/*
19
Create a function called repeatChara
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 8
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by yourself
*/
function stringg(string, char) {
  let counter = 0;
  let splitted = string.split(" ");

  for (let i = 0; i < splitted.length; i++) {

    for (let j = 0; j < splitted[i].length; j++) {

      if (splitted[i][j] == char){ 
                counter++;
      }
    }
  }
  return counter;
}

var string = "alex mercer madrasa rashed2 emad hala";
console.log(stringg(string, "a"));

/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function evenIndexOddLength(string) {
  let NewArr = [];
  let index=0
  for (let i = 0; i < string.length; i++) {
     if( i%2 == 0  &&  string[i].length%2 != 0){
      NewArr[index]=string[i];
      index++;
     }

  }
  return NewArr;
}

var string = ["alex","mercer","madrasa","rashed2","emadd","hala"]
console.log(evenIndexOddLength(string));

/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function powerElementIndex(arr) {
  let newArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) 
    {
      let x = Math.pow(arr[i], i);
      newArr[index] = x;
      index++;
    }
    return newArr;
  
}
var nums = [44, 5, 4, 3, 2, 10];
console.log(powerElementIndex(nums));
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


function evenNumberEvenIndex(arr) {
  let NewArr = [];
  let index=0
  for (let i = 0; i < arr.length; i++) {
     if( i%2 == 0  &&  arr[i]%2 == 0){
      NewArr[index]=arr[i];
      index++;
     }

  }
  return NewArr;
}

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
console.log(evenNumberEvenIndex(nums));