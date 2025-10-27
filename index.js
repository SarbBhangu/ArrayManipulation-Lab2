let shoppingList= []

function addItem(item) {
    shoppingList.push(item);
}

addItem('Apple');
addItem('Soda');
addItem('TV');
addItem('Milk');
addItem('Water');
console.log(shoppingList);

function removeLastItem() {
    shoppingList.pop();
}

removeLastItem();

console.log(shoppingList);

function displayList() {
    for (let i = 0; i < shoppingList.length; i++) {
        console.log(shoppingList[i]);
    }
}

displayList();

