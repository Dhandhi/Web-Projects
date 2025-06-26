
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const user_list=document.getElementById("User_list");
const task=document.querySelector('input');
const full_list=document.querySelector('ol');
let mistake=document.getElementById("mistake");
btn1.addEventListener("click",()=>{
    console.log(task.value);
    if(task.value==""){
       mistake.innerText="Enter the task first!";
    }
    else{
        mistake.innerText="Tasks";
        const list_item=document.createElement('li');
        list_item.innerText=task.value;
        full_list.appendChild(list_item);
        task.value="";
    }
})
btn2.addEventListener("click",()=>{
    if(full_list.lastElementChild){
        full_list.lastElementChild.remove();
    }
    else{
        mistake.innerText="No task exist";
    }
})
btn3.addEventListener('click',()=>{
    if(!full_list.lastElementChild){
        mistake.innerText="You have no task to complete";
    }
    else{
        mistake.innerText="Congratulation";
    }
})