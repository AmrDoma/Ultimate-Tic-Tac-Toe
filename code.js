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
///////////////////////////////////
//FUNCTIONS
//////////////////////////////////
console.log(window.URL)
buttonEl.addEventListener("click",function(){
    window.location.reload();
})
function containsall(arr,arr2){
    return arr.every(i=>arr2.includes(i));
}

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
        paragraph.innerHTML='Player two\'s turn! <br><br><img src="o.png" height="50px" alt="O">'
        count++;
    }
        else {
            listy.push(order);
            for (let i=0;i<sets.length;i++){
                if (containsall(sets[i],listy)){
                state="y";
                break;
                }
              }
            selected.innerHTML='<img src="o.png" height="100%" alt="O">';
            paragraph.innerHTML='Player one\'s turn! <br><br><img src="x.png" height="50px" alt="X">'
            count++;
        }

if (state=="x"){
    displaytext.innerText="Player 1 wins!";
    count=-1;
buttonEl.style.display="block";
}
else if (state=="y"){
    displaytext.innerText="Player 2 wins!";
    count=-1;
    buttonEl.style.display="block";
}
if (count==9 && state=="playing"){
    displaytext.innerText="It's a draw!";
    count=-1;
    buttonEl.style.display="block";
}   
}
}
}
