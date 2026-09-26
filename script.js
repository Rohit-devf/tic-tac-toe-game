

let boxes=document.querySelectorAll(".box")
let reset=document.querySelector(".reset")
let turno = true;
let wow= document.querySelector("#wow")
let hide = document.querySelector(".hide")
let winPatterns=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
];
boxes.forEach((box)=>{
box.addEventListener("click",()=>{
if (turno===true){
    box.innerText = "X";
    turno = false;
}
else{
  box.innerText = "O";
    turno = true;
}
box.disabled=true
checkwinner();
});

})
const show = (p1) => {
    wow.innerText = `Congrats ✨ The winner is ${p1}`;
    hide.classList.remove("hide");

}
const checkwinner=()=>{
    for (let pattern of winPatterns){
           let p1=   boxes[pattern[0]].innerText;
           let p2= boxes[pattern[1]].innerText;
           let p3 = boxes[pattern[2]].innerText;
if(p1!==""&& p2!=="" && p3 !==""){
    if(p1===p2 && p2===p3){
console.log("winner",p1);
show(p1)

    }

    }
}

} 

reset.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turno = true;

    hide.classList.add("hide");

});
  
const ne = document.querySelector ("#newgame")

ne.addEventListener("click", () => {

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });

    turno = true;
hide.classList.add("hide");
});
