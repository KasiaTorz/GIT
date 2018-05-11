function addNewTask(title){
    var taskLi= document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML=prepareTaskHTML(title);
    
    // add task to DOM//
taskContainer.appendChild(taskLi);
};

function prepareTaskHTML(title){
return'<div class="input-group">'+
                    '<span class="input-group-btn">'+
                      '<button class="btn btn-danger toggle-complete-btn" type="submit"><i class="fas fa-plus"></i></button>'+
                    '</span>'+
                    '<input type="text" class="form-control" placeholder="Title to do"value='+ title + '>'+
                    '<span class="input-group-btn">'+
                        '<button class="btn btn-success delete-task-btn" type="submit"><i class="far fa-check-circle"></i> </button>'+
                      '</span>'+
    '</div>';            
};
//function with addEventListener submit//
function addBindTaskEvents(){
    //on submit //
    newTaskForm.addEventListener('submit',function(event){
        event.preventDefault();
        

    })
}