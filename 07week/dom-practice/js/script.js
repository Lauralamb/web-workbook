'use strict';

window.onload = function() {
  let count = document.getElementsByTagName ('ul');
  // console.log(count[0].children.length);

  let newh2 = document.createElement('h2');
  newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);  

  // let input = document.createElement ('input');
  // input.type = "text";
  // input.innerHTML = "type";
  // document.getElementsByTagName('ul')[0].after('input');

  createNewAddField();

//text box
function createNewAddField(){
  let newInput = document.createElement('input');
  newInput.setAttribute("id",'item-text');
  document.getElementsByTagName('ul')[0].after(newInput);
  let inputField = document.getElementById('item-text');
  inputField.setAttribute("placeholder", "Type to add item.");

  //add item button
let newButton = document.createElement('button');
newButton.setAttribute("id",'add-button');
document.getElementById('item-text').after(newButton);
newButton.innerHTML = "Add item"; //text on the button
newButton.onclick = addItemsExistingList;

//adds remove button
let removeButton = document.createElement('button');
removeButton.setAttribute("id",'remove-button');
document.getElementById('add-button').after(removeButton);
removeButton.innerHTML = "Remove item"; //text on the button
removeButton.onclick = removeItemsExistingList;

//I don't think i need this -  document.getElementById("add-item").appendChild(newInput);
// document.getElementById("add-item").appendChild(newButton);
}
// this adds new items to the list and works correctly
function addItemsExistingList(event){
  let userInput= document.getElementById('item-text').value;
  let listNode = document.getElementById('items');
  let liNode = document.createElement("LI");
  let  txtNode = document.createTextNode(userInput);
liNode.appendChild(txtNode);
listNode.appendChild(liNode);
document.getElementById('item-text').value=''; //resets input box to remove previous input
newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart"; //updates the count
}
//attempt to remove
// function removeItemsExistingList(event) {
  let items = document.querySelectorAll("#items li"),
  tab = [], liIndex;
  for (var i = 0; i < items.length; i++){
    tab.push(items[i].innerHTML);
  }
  for (var i = 0; i < items.length; i++){
    items[i].onclick = function(){
    liIndex = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + "INDEX =" + liIndex);
    };
  }
  function removeItemsExistingList(event) {
    items[liIndex].parentNode.removeChild(items[liIndex]);
    newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart"; //updates the count
  }


}
