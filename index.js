let shoppingList= []

function addItem(item) {
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
    else {
        console.log(`${item} is already on the list`)
    }
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

function filterItems(searchTerm) {
    let results = [];
    for (let i = 0; i < shoppingList.length; i++) {
        if (shoppingList[i].toLowerCase().includes(searchTerm.toLowerCase())) {
            results.push(shoppingList[i]);
        }    
    }
    return results;

}

console.log(filterItems("m"))

const input = document.querySelector("#itemInput");
const addBtn = document.querySelector("#addBtn");
const removeBtn = document.querySelector("#removeBtn");
const list = document.querySelector("#list");

function renderList() {
    list.innerHTML = ""; 
    for (let i = 0; i < shoppingList.length; i++) {
        const li = document.createElement("li");
        li.textContent = shoppingList[i];
        list.appendChild(li);
    }
}