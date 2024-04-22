

// // series 1

// const { question } = require("readline-sync");

// const input=require("readline-sync")
// let n =input.questionInt("enter a number")
// let x =input.questionInt("enter a number")
// let i=1;
// let sum=0; 
// while (i<=n) {sum=sum+x**i/i;
// i++;  
// }
// console.log(sum);
// series 2
// const input =require("readline-sync")
// let n=input.questionInt("entre a number n") 
// let x=input.questionInt("entre a number x") 
// let i=1;
// let sum=0;
// let j=1
// while(i<=n){
//     (sum=sum+x/i);
// }i=i+1;
// {
//     console.log(sum);
// }
// question 2 input

// const input =require("readline-sync")
// let i=1
// let n =input.questionInt("enter a number")
// s=0
// while(i<=n)
// {if
//     (i%2!=0)
//     {
//         s=s+i;
    
// }
// i++}
// console.log(s)

// 3rd queston loop 
// const input=require("readline-sync")
// let n=input.questionInt("enter a number")
// let i=input.questionInt("enter a number")
// p=0
// while(i<=n)
// {
//     p=p+i;
//     i++;
// }console.log(p)
// 4th question loop

// const input =require("readline-sync")
// let n=input.questionInt("enter a number")
// let s=0;
// let x=1;
// let i=1
// while(i<=n) 
// {(s=s+x/i);
// i++;
    
// }console.log(s)

// 6 th question in loop

// const input =require("readline-sync")
// let n=input.questionInt("enter a number")
// let s=0;
// let p =0;
//  while(n>0){
//     (r=n%10);s=s+r;
//   n=Math.floor (n/10);

// } if
// (s>0)
// {k=s%10;
//     p=p+k;
//    s=Math.floor (s/10);

// }else console.log(p)

// reverse question Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.


//c
// question 1 even  
// const input =require("readline-sync")
// let n = input.questionInt("enter a number")
// let i=1
// while(i<n){if(i%2==0)
//     console.log(i);
// i++;
// }
    
// name prin in  
// Take the number N and the name from the user as inputs, and print the name N times.



// const input =require("readline-sync")
// let n=input.questionInt("entre a number")
// let i =1;


// while(i<=n){
//     console.log("kuch bhi :")
//     i++
// }

// palidrome no .
// const input = require("readline-sync")
// let s=0;
// let x=input.questionInt("enter a number:");
// let k=x;

// while(k>0)
//     {r=k%10;
//         k=Math.floor(k/10);
//     s=(s*10)+r;
//     }if(x==s){
//         console.log("palindrome");
//     }
//   else
//   {
//     console.log("not palindrome");
// }


// 
// Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.



// // question 6
// // const input =require("readline-sync");

// // let a =input.questionInt("enter a number");
// // let b =input.questionInt("enter a number"); 
// //  var p=a*b;
// // while (a%b!=0)
// // {    
// // r=a%b;
// //  a=b;
// //  b=r;

// // }
// // let hcf=b;
// // let lcm=p/hcf;
// //     console.log(hcf,lcm);


// const input=require("readline-sync")
// let n=input.questionInt("enter a number:")
// let i=1;
// while(i<=n){
//     if(n%i==0){
//         let k=1
//         // if(k<i){
//         // if(i%k==0){

//         // }
//     // }
//         console.log(i);
//         i++
//     }else{
//         i++
//     }
// }




// Write a program to check if a number is a special type of number called a 'prime number'. A prime number is a number that is only divisible by 1 and itself, and it doesn't have any other factors.
// For example, the number 7 is a prime number because it can only be divided by 1 and 7 without leaving a remainder. However, the number 12 is not a prime number because it has other factors, such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)? Learn sieve algorithm
// // 

// const input = require("readline-sync");
// let x=input.questionInt("enter a number:");
// let i=1;
// let q=x;
// let m=1;

//   while(i<=q)

//    if(q%i==0){
   
   
//     (m=m*i)
//     i=i+1
  
//    }
//   else {i=i+1;
//   }
  
//   if(m==q)
//   {
//     console.log("prime ");
//   }
//   else{
//     console.log("notprime");
//   }


// Write a program to take a number from the user and then determine if that number is a special type of number called a 'perfect number'.
// A perfect number is a number where the sum of all its factors (excluding the number itself) is equal to the number itself. Print Yes if the number is a perfect number else print No.


// const input =require("readline-sync")

//  s=0;

// let n=input.questionInt("enter a number");
// let i = 1;
// let k=n;
// while(i<k)
// {//
//    if (k%i==0){
//     (s=s+i);
//     i=i+1
// }
//    else i=i+1

// }
// if(s==n){
//     console.log("perfact");
// }
// else{
//     console.log("notperfact");
// }

// Write a program that takes a number from the user and prints the number that is formed by reversing the digits of the number.


// const input = require("readline-sync")
// let s=0;
// let x=input.questionInt("enter a number:");
// let k=x;

// while(k>0)
//     {r=k%10;
//         k=Math.floor(k/10);
//     s=(s*10)+r;
//     }{
//         console.log(s);
//     }

// Write a program to print the sum of odd numbers up to N.

// const input =require("readline-sync")
// let i=1
// let n =input.questionInt("enter a number")
// s=0
// while(i<=n)
// {if
//     (i%2!=0)
//     {
//         s=s+i;
    
// }
// i++}
// console.log(s)

// Write a program to take two integers M, and N and print the sum of numbers in the range M to N.



// const input=require("readline-sync")
// let n=input.questionInt("enter a number")
// let i=input.questionInt("enter a number")
// p=0
// while(i<=n)
// {
//     p=p+i;
//     i++;
// }console.log(p)
// 4th question loop

// const input=require("readline-sync")
// let n =input.questionInt("enter a number")
// let i=2;
// while(i<n){if(i%2==0){console.log(i);
// }i++
// }

// Write a program to take a number from the user and print the number of digits in the given number. (can you do it without loop O(1) )


// const input=require("readline-sync")
// let a =input.questionInt("enter a number")
// d=0;
// i=1;
// while(a>0){
//     // r=a%10;
//     a=Math.floor(a/10);
//     d=d+i;
// }console.log(d)

// Take a number N from the user as input, and print even numbers up to N.


//  const input =require("readline-sync")
// let n = input.questionInt("enter a number")
// let i=1
// while(i<n){if(i%2==0)
//     console.log(i);
// i++;
// }

// series 0
/*const input =require("readline-sync")
let n=input.questionInt("enter a number")
let s=0;
let x=1;
let i=1
while(i<=n) 
{(s=s+x/i);
i++;
    
}console.log(s)*/

/*const input=require("readline-sync")
let n =input.questionInt("enter a number:-")
let p=0;
let s=0;
let a=n;
let m=n;
while(n>0)
{
 r=n%10;
 p=p+1;
 n=Math.floor(n/10);
}
while(m>0)
{
    r=m%10;
    s=s+r**p;
    m=Math.floor(m/10);

}
if(a==s){
    console.log("armstrong")
}
else{
    console.log("no armstrong")
}
*/




// function checkPalindrome(string) {
//     const len = string.lenght;

//     for (let i = 0; i < len / 2; i++) {
//         if (string[i] !== string[len - 1 - i]) {
//             return 'It is not a palindrome';
//         }
//     }
//     return 'It is a palindrome';
// }

// const string = question('Enter a string: ');

// const value = checkPalindrome(string);
// console.log(value);




