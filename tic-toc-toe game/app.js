let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newgameBtn = document.querySelector("#new-btn");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trun0 = true; //playerx,player0

const winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = ()=>{
    true0 = true;
    enabledboxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(trun0){
            box.innerText ="0";
            trun0 = false;
        }else{
            box.innerText="x";
            trun0= true;
        }
        box.disabled = true;

        checkwinner ();
    });
});

const disabledboxes =() =>{
    for(let box of boxes){
        box.disabled = true;
    }
};
const enabledboxes =() =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

 showwinner = (winner) =>{
    msg.innerText = `congratulation, winner is ${winner}`
    msgcontainer.classList.remove("hide");
    disabledboxes();
 }

const checkwinner=()=>{
     for(let pattern of winpatterns) {
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val= boxes[pattern[1]].innerText;
        let pos3val= boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val != "" && pos3val !="" ){
            if(pos1val===pos2val && pos2val=== pos3val){
                showwinner(pos1val);
            }
        }
    }
};

newgameBtn.addEventListener("click",resetgame);
resetBtn.addEventListener("click",resetgame);