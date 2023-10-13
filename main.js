var form  = document.getElementById('addForm');
var itemLst =document.getElementById('item');

//form submit event

form.addEventListener('submt', addItem);

//Deleteevent
itemLst.addEventListener('click', removeItem);

//add item
function addItem(e){
    e.preventDefault();

    // console.log(1)

    // Get input value
    var newItem = document.getElementById('item');

    //Create new li element
    var li = document.createElement('li');

    //Add class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create del button element
    var deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append  text Node
    deleteBtn.appendChild(document.createTextNode('x'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    
    itemLst.appendChild(li);
}
    //Remove Item
    function removeItem(e){
        console.log(1);
    }

