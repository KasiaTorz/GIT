/*If user click on the add button then text inside input field will be add to list of task*/


document.getElementById('add').addEventListener('click',function(){
    var value= document.getElementById('item').value;
    if (value) addItemToDo(value); /*if write task in input call function addItemToDo*/

});

function addItemToDo(text){
    var list=document.getElementById('todo');

    var item= document.createElement('li'); /*write in input task and add will create new li*/
    item.innerText=text;

    var buttons= document.createElement('div');
    buttons.classList.add('buttons');

    var remove=document.createElement('button');
    remove.classList.add('remove');


    var completed=document.createElement('button');
    completed.classList.add('competed');

    buttons.appendChild(remove);
    buttons.appendChild(completed);
    item.appendChild(buttons);
    list.appendChild(item);

}