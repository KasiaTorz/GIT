//function to show tasks in input//
function showTasks(){
tasks.forEach(function(title){
    addNewTask(title);
});
}
//function to delete//
function deleteTask(task){
var liDelete = task.closest('li');
};

//function to complete//
function toggleTaskComplete(task){ 
    task.classList.toggle('btn-danger');
}
    
