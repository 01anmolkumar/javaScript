
function getdata(dataid){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataid);
            resolve("success");
        },2000)
    });
}


          //async-await
 async function getAlldata(){
     await getdata(1);
         console.log("getting data1....");
     await getdata(2);
          console.log("getting data2...."); 
    await getdata(3);
         console.log("getting data3....");
     await getdata(1);
        console.log("getting data4....");
    await getdata(2);
         console.log("getting data5....");
     await getdata(3);
         console.log("getting data6....");
 }

              //iife
 (async function (){
      await getdata(1);
            console.log("getting data1....");
      await getdata(2);
            console.log("getting data2...."); 
     await getdata(3);
         console.log("getting data3....");
    await getdata(2);
         console.log("getting data5....");
     await getdata(3);
         console.log("getting data6....");
  })();             


       //promise chain
// console.log("geating data1...");
// getdata(1)
// .then((res)=>{
//   console.log("geating data2....");
//   return getdata(2);  
// })
// .then((res)=>{
//     console.log("geating data2....");
//     return getdata(3);  
//   })
//   .then((res)=>{
//     console.log("geating data2...."); 
//   });


           //callback hell
//   getdata(1,()=>{
//     console.log("geating data2....");
//     getdata(1,()=>{
//         console.log("geating data2....");
//         getdata(1,()=>{
//             console.log("geating data2....");
//             getdata(1,()=>{
//                 console.log("geating data2....");                            
//    });
//   });
//  });
// });