let btn1 = document.querySelector("#btn1");

// btn1.onclick = () =>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
//     alert("hello")
//}

     //event object
// let div=document.querySelector("div");
// div.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX,evt.clientY);
// };


          //event listeners
    //   btn1.addEventListener("click",(evt) =>{
    //     console.log("button1 was clicked-handeler1");
    //     console.log(evt)
    //     console.log(evt.type); 
    // });
    // btn1.addEventListener("click",() =>{
    //     console.log("button1 was clicked-handeler2");
         
    // });
   
    // btn1.addEventListener("click",() =>{
    //     console.log("button1 was clicked-handeler3");
         
    // });
   
    // btn1.addEventListener("click",() =>{
    //     console.log("button1 was clicked-handeler4");
        
    // });


            //practice question1
     let modebtn =document. querySelector("#mode")    
     let currmode = "light"; //dark    
            
     modebtn.addEventListener("click",() =>{
        if(currmode==="light"){
            currmode="dark";
            document.querySelector("body").style.backgroundColor ="black";
        }else{
            currmode = "light";
            document.querySelector("body").style.backgroundColor ="white";
        }
        console.log(currmode);
     })



  
    