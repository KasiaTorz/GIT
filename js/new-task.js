function addNewTask(title){
    var taskLi= document.createElement('li');
    taskLi.classList.add('single-task');
    taskLi.innerHTML=prepareTaskHTML(title);

    // events on button to toggle and remove
    var toggleCompleteBtn= taskLi.querySelector('.toggle-complete-btn');
    var deleteBtn= taskLi.querySelector('.delete-task-btn');
    toggleCompleteBtn.addEventListener('click',function(){
        toggleTaskComplete(this);
    });
    deleteBtn.addEventListener('click', function(){
        deleteTask(this);
    });

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
        var title = this.querySelector('input').value;
        addNewTask('title')
    if(title){
        addNewTask(title);
    }

    })
}