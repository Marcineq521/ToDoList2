const TasksList=document.querySelector(".tasks-list");
const TaskDeleteButton=document.querySelectorAll(".delete-task-btn");
const AddNewTaskInput=document.querySelector(".addTaskInput");
const AddNewTaskBtn=document.querySelector(".addTaskBtn");




function  Main(){
    if(AddNewTaskInput.value==''){
        alert("Write your task first :)")
    }else{
    const newTask=document.createElement('li');
    newTask.classList.add("tasks-list-element");
    const NewTaskText=document.createElement('span');
    NewTaskText.innerHTML=AddNewTaskInput.value;
    const newTaskDeleteButton=document.createElement('div');
    newTaskDeleteButton.innerHTML="X";
    newTaskDeleteButton.classList.add("delete-task-btn");
    const Line=document.createElement('div');
    Line.classList.add("line");
    TasksList.appendChild(newTask);
    newTask.appendChild(NewTaskText);
    newTask.appendChild(newTaskDeleteButton);
    newTask.appendChild(Line);
    AddNewTaskInput.value='';
    


    newTaskDeleteButton.addEventListener("click",DeleteTask);

    function DeleteTask(){

        newTask.remove();
       
       
    }
    
   

    newTask.addEventListener("click",()=>{
        NewTaskText.classList.toggle("done");
        newTask.classList.toggle("color");
    })
    }
    
    
    
}




AddNewTaskBtn.addEventListener("click",Main);


