//function-> 2 number, sum
//  function sum(x,y){
    
//     s=x+y;
//     return s;
//  }

//  let val = sum(3,4);
//  console.log(s)


     //sum funstion
// function sum(a,b){
//     return a+b;
// }

// //multiplication function
// function mul(a,b){
//     return a*b;
// }


      //arrow functions
// const arrowsum = (a,b) => {
//     console.log(a+b);
// }; 


     //practic q1
// const countvow = (str)=>{
//     let count=0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            
//         }
//         count++;
//     }
//     return count;
// }
   
      //for each loop

// let arr = ["pune","delhi","mumbai"];

// arr.forEach((val) => {
//     console.log(val);
// });


    //practice question
// let nums = [2,3,4,5,6];

// nums.forEach((num) =>{
// console.log(num*num);
// });

      //map 
// let num = [67,52,39]
// num.map ((val) =>{
// console.log(val);
// });


   //ex=1
// let nums=[67,52,39];

// let newarr = nums.map((val)=>{
//    return val*val;
// });
//    console.log(newarr); 

   //filter
// let arr = [1,2,3,4,5,6,7];

// let evenarr = arr.filter((val)=>{
//    return val%2==0;
// });

// console.log(evenarr);

     //reduce
// let arr =[1,2,3,4];

// const output = arr.reduce((res,curr)=>{
//   return res+curr;
// });

// console.log(output);

      //prctice q1
// let marks=[99,45,91,33,45,95];

// let newmarkes =marks.filter((val)=>{
//    return val>90;
// })
// console.log(newmarkes)

   //practice q2
let n = prompt("enter a number:");

let arr=[];

for(let i=1;i<=n;i++){
   arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((res,curr)=>{
   return res+curr;
});
console.log("sum=",sum);

let factorial=arr.reduce((res,curr)=>{
   return res*curr;
});
console.log("factorial=",factorial);