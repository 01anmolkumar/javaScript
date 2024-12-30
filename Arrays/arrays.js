// let markes =[99,22,33,44,12];
// console.log(markes)

       //for loop
// let heroes=["ironman","thor","hulk","shaktiman","spiderman","antman"];

// for(let idx=0; idx<heroes.length; idx++){
//     console.log(heroes[idx])
// }

     //for of loop

// let cities=["delhi","pune","mumbai","hydrabad","gurgaon"];
//    for(let city of cities){
//     console.log(city);
//    }


            //practice q1
// let markes=[85,97,44,37,76,60];
//     let sum=0;

//     for(let val of markes){
//         sum=sum+val;
//     }

//     let avg= sum/markes.length;
//     console.log(`avg marks of length =${avg}`)
       

       //practice q2
// let items=[250,645,300,900,50]
// for(let i=0; i<items.length;i++){
//     let offer=items[i]/10;
//     items[i]=items[i]-offer;
// }   
// console.log(items);
       
        //push

//let fooditems = ["potato","apple","litichi","tomato"];
// fooditems.push("chips","burger","paneer");
// console.log(fooditems);

            //pop
// console.log(fooditems)
// let deleteditems = fooditems.pop();
// console.log(fooditems);

         //concat
// let marvelheroes = ["thor","spiderman","ironman"];
// let dcheroes = ["superman","batman"];
// let indianheroes=["krish","shaktiman"]

// let heroes=marvelheroes.concat(dcheroes,indianheroes);
// console.log(heroes)

      //unshift method

// let marvelheroes = ["thor","spiderman","ironman"];  
// marvelheroes.unshift("antman");

// console.log(marvelheroes)

        //shift method

// let marvelheroes = ["thor","spiderman","ironman"];  
// let val=marvelheroes.shift("antman");

// console.log(val)
// console.log(marvelheroes)

            //slice
// let marvelheroes = ["thor","spiderman","ironman","antman","dr.strange"];

// console.log(marvelheroes);

// console.log(marvelheroes.slice(3))

         //splice


//let arr=[1,2,3,4,5,6,7];
    //add
// arr.splice(2,0,101);
// console.log(arr);

   //delet element
// arr.splice(2,1);
// console.log(arr);
   
     //replace 
// arr.splice(3,1,101);
// console.log(arr)  

   //practice question
let companies=["bloomberg","microsoft","uber","google","ibm","netflix"]
     //a
// let val=companies.shift();
// console.log("delet:",val);
// console.log(companies);

    //b
// companies.splice(2,1,"ola");
// console.log(companies)

    //c
companies.push("amazon");
console.log(companies)


