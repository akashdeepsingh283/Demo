let playbut=document.querySelector(".playbut");
let beforebody=document.querySelector("body");
let afterbody=document.querySelector("body");
let namecard=document.querySelector("#namecard");
let player1=document.querySelector("#player1");
let player2=document.querySelector("#player2");
      
      
playbut.addEventListener("click",()=>{
      let player1name=player1.value;
      let player2name=player2.value;
      localStorage.setItem("player1",player1name);
      localStorage.setItem("player2",player2name);
      
      
      window.location.href = "second.html";
      
})
//write a function to get the name of the player and display it in other html page
// Path: script2.js