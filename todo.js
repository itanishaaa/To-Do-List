const inputBox=document.getElementById("Input-Box");   //getting element 
const list=document.getElementById("input-items");
function addTask()               //code that will be executed when we click on that button
{
if (inputBox.value===''){
    alert("You must write something");
}
else{
let li=document.createElement("li");
li.innerHTML=inputBox.value;
list.appendChild(li);
let span=document.createElement("span");
span.innerHTML="\u00d7" 
li.appendChild(span);
}
inputBox.value="";
savedata()

}
list.addEventListener("click",function(e){ 
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }                                                     //on clicking this function will be executed
else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
}},
false );
function savedata(){                                      //for saving the data which dissapears on reloading
localStorage.setItem("data",list.innerHTML)
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();
