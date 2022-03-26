/* 1. Write a JavaScript program that accept two integers and
 * display the larger. Go to the editor */
/******* Start Your Code *********/
  
let a=prompt("enter the first number")
let b=prompt("enter the second number")

if (a>b){
  
  alert(a);

}

else{
  
  alert(b);
}

 /******* End Your Code ********* */

/* 2. Write a JavaScript conditional statement to find the sign
 of product of three numbers. Display an alert box with the 
 specified sign. Go to the editor 
Sample numbers : 3, -7, 2 
Output : The sign is - */
/******* Start Your Code *********/
let num1=prompt("enter the first number");
let num2=prompt("enter the second number");
let num3=prompt("enter the second number");
 let result=num1*num2*num3;

  
  alert(Math.sign(result));


 /******* End Your Code ********* */

/* 3. Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result. Go to the editor 
Sample numbers : 0, -1, 4 
Output : 4, 0, -1 */
/******* Start Your Code *********/
  
let x=prompt("enter the first number")
let y=prompt("enter the second number")
let z=prompt("enter the third number")

 
  if(x>y && x>z){
     if(y>z){
      document.write(x+" "+ y+ " "+z)
     }

     else
     document.write(x+" "+ z+ " "+y)
  }
else if(y>x && y>z){
  if(x>z){
      document.write(y+" "+ x+ " "+z)
     }

     else
     document.write(y+" "+ z+ " "+x)
  }

  else if(z>x && z>y){
  if(y>x){
      document.write(z+" "+ y+ " "+x)
     }

     else
     document.write(z+" "+ x+ " "+y)
  }
  
 /******* End Your Code ********* */


/*4. Write a JavaScript conditional statement to find the largest of five numbers. 
Display an alert box to show the result. Go to the editor 
Sample numbers : -5, -2, -6, 0, -1 
Output : 0 */

/******* Start Your Code *********/
let a=11,b=24,c=65,d=40,e=50,f=2;

if (a>b && a>c && a>d && a>f)
{
    console.log(a);
}
else if (b>a && b>c && b>d && b>f)
{
    console.log(b);
}
else if (c>a && c>b && c>d && c>f)
{
    console.log(c);
}
else if (d>a && d>c && d>b && d>f)
{
    console.log(d);
}
else
{
    console.log(f);
}
 /******* End Your Code ********* */

 /* 5.Write the if statement to display "Hello World" if x is greater than y, otherwise alert "Goodbye".*/
/******* Start Your Code *********/
let x=prompt("enter the first number")
let y=prompt("enter the second number")
if (x>y)
alert("hello world")
else
alert("goodbye")



 /******* End Your Code ********* */
