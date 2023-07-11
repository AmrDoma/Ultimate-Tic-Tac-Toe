//////////////////
//SWITCHING PAGES
/////////////////

/////////////////////////////////
//DECLARATIONS
/////////////////////////////////////
let count=0;
let sets=[
    ['1','2','3'],['4','5','6'],['7','8','9'],['1','4','7'],['2','5','8'],['3','6','9'],['1','5','9'],['3','5','7']
]
let listx=[];
let listy=[];
let displaytext= document.getElementById("paragraph");
let buttonEl= document.getElementById("button");
let state="playing";
console.log(window.location.pathname);
///////////////////////////////////
//FUNCTIONS
//////////////////////////////////

if (window.location.pathname!="/index.html"){
buttonEl.addEventListener("click",function(){
    window.location.reload();
})
function containsall(arr,arr2){
    return arr.every(i=>arr2.includes(i));
}
}
let difficulty="easy";
function botmove(difficulty){
    let emptyspaces=Array.from(document.querySelectorAll(".box"));
    for (let i=0;i<emptyspaces.length;i++){
 if (emptyspaces[i].innerHTML!=""){
 emptyspaces.splice(i,1);
 i=-1;
 }
    } // getting empty spots
if (difficulty==0){
  
   let toplay = emptyspaces[Math.floor(Math.random()*emptyspaces.length)];
return toplay.id;
}
}
// else if(difficulty==2){
//     console.log(emptyspaces);
//     let scoree=minimax(0,true,emptyspaces);
// console.log(scoree);
// }
// }
// let scores={
//     "x":1,
//     "y":-1,
//     "draw":0
// }
// function minimax(depth,isMaximizing,emptyspaces){
//     let bestindex;
//     let winner;
//     if (state!="playing"){
//         if (state=="x"){
// winner="x";
//         }
//         else if (state=="o")
//          winner=="y";
//          else state=="draw";
//     }
//     else winner=null;
//     if (winner){
//         let score=scores[winner];
//         return score;
//     }
//     if (isMaximizing){
//         let bestScore=-Infinity;
//         for (let i=0;i<emptyspaces.length;i++){
//             let score=minimax(depth+1,false,emptyspaces);
//             if (score>bestScore){
//                 bestScore=score;
//             }
//         }
//         return bestScore;
//     }
//         else{
//             let bestScore=Infinity;
//             for (let i=0;i<emptyspaces.length;i++){
//                 let score=minimax(depth+1,true,emptyspaces);
//                 if (score<bestScore){
//                     bestScore=score;
//                 }
//             }
//             return bestScore;
//             }
       
//         }
    

/////////////////////////////////
//MAIN FUNCTION
////////////////////////////////
    function play(x){
        
        if (count!=-1){
    let selected = document.getElementById(x);
    if (!selected.innerHTML){
    let order = x.split("b");
    order=order[1];


    if (count%2==0){
        console.log(sets[0]);
     listx.push(order);
     console.log(listx)

    for (let i=0;i<sets.length;i++){
      if (containsall(sets[i],listx)){
      state="x";
      
      break;
    }
    }
        selected.innerHTML='<img src="x.png" height="100%" width="85%" alt="X">';
        count++;
  console.log(count);
    }
else{ 
    listy.push(order);
    for (let i=0;i<sets.length;i++){
        if (containsall(sets[i],listy)){
        state="y";
        break;
        }
      }
    selected.innerHTML='<img src="o.png" height="100%" alt="O">';
    paragraph.innerHTML='The bot has played. Your turn! <br><br><img src="x.png" height="50px" alt="X">'
    
    count++;
    console.log(count);
}


if (state=="x"){
    displaytext.innerText="Player wins!";
    count=-1;
buttonEl.style.display="block";
}
else if (state=="y"){
    displaytext.innerText="Bot wins!";
    count=-1;
    buttonEl.style.display="block";
}
if (count==9 && state=="playing"){
    displaytext.innerText="It's a draw!";
    state="draw";
    count=-1;
    buttonEl.style.display="block";
}  
if (count%2!=0){
    let aimove = botmove(0);
    play(aimove);
    } 
}
}
    }
