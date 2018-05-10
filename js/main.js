/*java script Date*/
var d = new Date();
document.getElementById("demo").innerHTML = d;

/*create data object*/
var data=(localStorage.getItem('todoList'))?JSON.parse(localStorage.getItem('todoList')): {
    todo:[],
    complete:[]
};
 renderToDoList();{
    
}

/*If user click on the add button then text inside input field will be add to list of task*/


document.getElementById('add').addEventListener('click',function(){
    var value= document.getElementById('item').value;
    if (value) {                       
     addItem(value);
    } 
});

     document.getElementById('item').addEventListener('keydown',function(e){
             var value = this.value;
             if (e.code === 'Enter' && value){
                 addItem(value);
             }
     });
    function addItem(value){
     addItemToDOM(value);
     document.getElementById('item').value='';

     data.todo.push(value);
     dataObjectUpDated();
}



  function renderToDoList(){
      if (!data.todo.length && !data.complete.length)
      return;

      for(var i=0; i<data.todo.length;i++){
       var value = data.todo[i];
       addItemToDOM(value,true);
      }

      for (var j=0; j< data.complete.length;j++){
          var value= data.complete[j];
          addItemToDOM(value,true);
      }
  }
 function dataObjectUpDated(){
  localStorage.setItem('todoList',JSON.stringify(data));
 }

 function removeItem() {
     var item=this.parentNode.parentNode;
     var parent=item.parentNode;
     var id= parent.id;
     var value=item.innerText;

     if(id ==='todo'){
         data.todo.splice(data.todo.indexOf(value),1);
         data.complete.push(value);
        } else{
            data.complete.splice(data.complete.indexOf(value),1);
            data.todo.push(value);
        }
     dataObjectUpDated();
     /*if to check item to add complete list*/
     var target = (id === 'todo') ? document.getElementById('complete'): document.getElementById('todo');
  
     parent.removeChild(item);  
     target.insertBefore(item,target.childNodes[0]);  
 }
function completeItem(){
    var item=this.parentNode.parentNode;
    var parent=item.parentNode;
    var id = parent.id;
    var value=item.innerText;
    data.todo.splice(data.todo.indexOf(value),1);
    data.complete.push(value);

    dataObjectUpDated();
/*statment if item is complete or uncompleted*/
var target = (id === 'todo') ? document.getElementById('complete'): document.getElementById('todo');
 parent.removeChild(item);
 target.insertBefore(item,target.childNodes[0]);
}

function addItemToDOM(text,complete){
    var list= (complete)? document.getElementById('complete'):document.getElementById('todo');

    var item= document.createElement('li'); /*write in input task and add will create new li*/
    item.innerText=text;

    var buttons= document.createElement('div');
    buttons.classList.add('buttons');

    var remove = document.createElement('button');
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

//section to do list//
