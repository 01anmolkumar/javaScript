// class toyotacar{
//     constructor(brand,mileage){
//         console.log("creat new object");
//         this.brand=brand;
//         this.mileage=mileage;
//     }
//     start(){
//         console.log("start")
//     }

//   stop(){
//     console.log("stop");
//   }  
  
 
// }

// let fortuner = new toyotacar("fortuner",10);//constructer
//  console.log(fortuner);
// let lexus = new toyotacar("lexus",12);//constructer
// console.log(lexus);


        //inhertance
// class person {
//   constructor(name){
//     this.species = "homo sapiens";
//     this.name = name;
//   }

//     eat(){
//         console.log("eat");
//     }

    
    
// } 



// class Engineer extends person{
//     constructor(name){
//         super(name);  //to invoke parent class constructor
           
//     }
//     work() {
//         super.eat(); 
//         console.log("solve problems,build something");
//     }
// }

// let engobj = new Engineer("Anmol shrivastava");


          //practice
let DATA = "secret information";

class user{
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    viewData(){
        console.log("data=",DATA);

    }
}

class admin extends  user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        DATA = "some new value";
    }
}

let student1 = new user("shradha","abc@email.com");
let student12 = new user("anmol","anmolshrivastava50@gmail.com")

let teacher1 = new user("Dean","dean@email.com");

let admin1 =new admin("admin","admin@email.com");