let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newPlayer=document.querySelector("#newplayers");
let player1name = localStorage.getItem("player1");
  let player2name = localStorage.getItem("player2");
  let winnerbox=document.querySelector("#winner");
        
// Display the data on the second page
function onload() {
  let player1name = localStorage.getItem("player1");
  let player2name = localStorage.getItem("player2");
  document.querySelector("#namecard").innerText = `${player1name} (X) vs ${player2name} (0)`;
}

onload(); // Call the onload function to display player names

let turn0=true;
let winpattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
     boxes.forEach((box) => {
      box.addEventListener("click",()=>{
            console.log("click");
            if (turn0) {
                  box.innerText="O";
                  turn0=false;
            }
            else{
                  box.innerText="X";
                  turn0=true;
            }
            box.disabled=true;
            checkWinner();
      })})
      const checkWinner = () => {
            for (let pattern of winpattern) {
              let pos1Val = boxes[pattern[0]].innerText;
              let pos2Val = boxes[pattern[1]].innerText;
              let pos3Val = boxes[pattern[2]].innerText;

          
              if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                   console.log("winner is",pos1Val);
                  let boss=pos1Val;
                    setTimeout(function(){
                      if(boss==="O"){
                        winnerbox.innerText=`winner is ${player2name}`;
                        // alert(`winner is ${player2name}`);
                      }
                      else{
                        // alert(`winner is ${player1name}`);
                        winnerbox.innerText=`winner is ${player1name}`;
                      }
                      for(box of boxes){
                        console.log(box.innerText);
                        box.innerText='';box.disabled=false;
                  }
                  turn0=true;
                },200);
                  return true;
                }
                else if (pos1Val != pos2Val && pos2Val != pos3Val) {
                  let isBoardFull = true;
                  for (let box of boxes) {
                    if (box.innerText === "") {
                      isBoardFull = false;
                      break;
                    }
                  }
                  if (isBoardFull) {
                    setTimeout(function() {
                      alert(`Winner is no one`);
                      for(box of boxes){
                        console.log(box.innerText);
                        box.innerText='';box.disabled=false;
                  }
                  turn0=true;

                    }, 200);
                    return false;
                  }
                }
              }
            
            }
          };
          reset.addEventListener("click",()=>{
            
            for(box of boxes){
                  console.log(box.innerText);
                  box.innerText='';box.disabled=false;
            }
            turn0=true;
  
            
          })
          newPlayer.addEventListener("click",()=>{
            window.location.href="firstpage.html";
          })
