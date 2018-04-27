/*create data object*/
var data= {
    todo:[],
    complete:[]
};


/*If user click on the add button then text inside input field will be add to list of task*/


document.getElementById('add').addEventListener('click',function(){
    var value= document.getElementById('item').value;
    if (value) {                       
     addItemToDo(value);
     document.getElementById('item').value = '';
     data.todo.push(value);

     console.log(data);
    } 

});

 function removeItem() {
     var item=this.parentNode.parentNode;
     var parent=item.parentNode;
     parent.removeChild(item);    
 }
function completeItem(){
    var item=this.parentNode.parentNode;
    var parent=item.parentNode;
    var id = parent.id;
    var value=item.innerText;
    data.todo.splice(data.todo.indexOf(value),1);
    data.complete.push(value);
   
/*statment if item is complete or uncompleted*/
   var target = (id === 'todo') ? document.getElementById('complete'): document.getElementById('todo');
 
 parent.removeChild(item);
 target.insertBefore(item,target.childNode[0]);

}

function addItemToDo(text){
    var list=document.getElementById('todo');

    var item= document.createElement('li'); /*write in input task and add will create new li*/
    item.innerText=text;

    var buttons= document.createElement('div');
    buttons.classList.add('buttons');

    var remove=document.createElement('button');
    remove.classList.add('remove');

/*event click on button to remove item*/
    remove.addEventListener('click', removeItem);



    var complete= document.createElement('button');
    complete.classList.add('complete');

/*event click  on button to complete item*/
    complete.addEventListener('click', completeItem);


    buttons.appendChild(remove);
    buttons.appendChild(complete);
    item.appendChild(buttons);

    list.insertBefore(item, list.childNodes[0]);

}