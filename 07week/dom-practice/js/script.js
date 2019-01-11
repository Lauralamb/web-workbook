'use strict';

window.onload = function() {
  //h2 header count - working
  let count = document.getElementsByTagName ('ul');
  let newh2 = document.createElement('h2');
  newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart";
  document.getElementsByTagName('h1')[0].after(newh2);  

  // create text input box for list
  createNewAddField();
  function createNewAddField(){
    let newInput = document.createElement('input');
    newInput.setAttribute("id",'item-text');
    document.getElementsByTagName('ul')[0].after(newInput);
    let inputField = document.getElementById('item-text');
    inputField.setAttribute("placeholder", "Type to add item.");
  
  //create button to add for list
  let newButton = document.createElement('button');
  newButton.setAttribute("id",'add-button');
  document.getElementById('item-text').after(newButton);
  newButton.innerHTML = "Add item"; //text on the button
  newButton.onclick = addItemsExistingList;
  }
  //create new li for list
  //makes add button functional with count working
  function addItemsExistingList(event){
    let userInput= document.getElementById('item-text').value;
    let listNode = document.getElementById('items');
    let liNode = document.createElement("LI");
    let  txtNode = document.createTextNode(userInput);
  liNode.appendChild(txtNode);
  listNode.appendChild(liNode);
  //resets input box to remove previous input
  document.getElementById('item-text').value=''; 
  newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart"; //updates the count
  }
  
  //create button to remove on each li
  let removeButton = document.createElement('button');
  removeButton.setAttribute("id",'remove-button');
  document.getElementById('add-button').after(removeButton);
  removeButton.innerHTML = "Remove item"; //text on the button
  removeButton.onclick = removeItemsExistingList;
  
  //make remove button work - you must click the button and then click the item to remove it.
  function removeItemsExistingList (){
    var listItems = document.getElementsByTagName("li"); 
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].onclick = function() {this.parentNode.removeChild(this);
      newh2.innerHTML = "You have " + count[0].children.length +  " items in your shopping cart"; //updates the count
    }
  }
}
}

//I did not realize that you wanted a button on each line - I must have missed that on the day I did remote class.


