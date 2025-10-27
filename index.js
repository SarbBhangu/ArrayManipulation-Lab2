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



