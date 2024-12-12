const ipbox=document.getElementById("inpbox");
const liscont=document.getElementById("list-cont");

function addTask(){
    if(ipbox.value==""){
        alert(`You must write something 😊`);

    }
    else{
        let li=document.createElement("li");
        li.innerHTML=ipbox.value;
        liscont.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    ipbox.value="";
    saveData();

}
liscont.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
});
// .classlist= provides list of the classes on that element

function saveData(){
    localStorage.setItem("data",liscont.innerHTML);

}
function showTask(){
    liscont.innerHTML=localStorage.getItem("data");
}
showTask();