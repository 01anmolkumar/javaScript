    //id
// let button=document.getElementById("myid");
// onsole.dir(button);'old heading'


   //class
// let headings= document.getElementsByClassName("heading");
// console.dir(headings);
// console.log(headings);


      //tag
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs)

    // queryselector

// let firestel=document.querySelector("p");//1s telement  
// console.dir(firestel)

// let firestall=document.querySelectorAll("p");
// console.dir(firestall)

//let heading= document.querySelector("h1");



//practice q1
// let h2 = document.querySelector("h2")
// console.dir(h2.innerText)

// h2.innerText = h2.innerText +"from apna college student";//concate

    // practice q2
   // method-1
// let divs =document.querySelectorAll(".box")
//  divs[0].innerText = "new unique value 1";
//  divs[1].innerText = "new unique value 1";
//  divs[2].innerText = "new unique value 3";

 // method-2

 let divs = document.querySelectorAll(".box");
 let idx=1;
 for(div of divs) {
    div.innerText = `new unique value ${idx}`;
    idx++;
 }

