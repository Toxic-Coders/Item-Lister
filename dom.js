var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

function addItem(e) {

    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var items = itemList.getElementsByTagName('li');
    var noItems = document.getElementById('added-items');

    if (Array.from(items).length = 0) {
        noItems.style.display = 'block';
    } else {
        noItems.style.display = 'none';
    }

    if (!newItem.length) {
        alert('You cannot add an empty item');

    } else {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(newItem));
        li.className = 'list-group-item';
        itemList.appendChild(li);

        var deleteBtn =  document.createElement('button')
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
        deleteBtn.appendChild(document.createTextNode('X'));

        li.appendChild(deleteBtn);
    }

}

function removeItem(e) {

    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function filterItems(e) {
    var text = e.target.value.toLowerCase();
    var items = itemList.getElementsByTagName('li');

    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }
        else {
            item.style.display = 'none';
        }
    })
}



