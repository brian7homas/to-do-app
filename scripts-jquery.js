function newItem(){
  //create and validate text value
  let li = $('<li class="list-item"></li>');  
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  let inputValue = $('input').val()
  let text = li.append(document.createTextNode(inputValue))
  if(inputValue === ''){
    alert("You must write something");
  }else{
    let list = $('#list');
    list.append(text);
  }
  //functions
  function crossOut(){
    li.toggleClass('strike')
  }
  function deleteListItem(){
    li.addClass('delete')
  }
  
  //events
  li.dblclick(function(){
    console.log('double click')
    crossOut()
  });
  crossOutButton.click(function(){
    console.log('delete');
    deleteListItem()
  })
  //build and insert close button element and text node containing x  
  crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);
  //make list items sortable
  $('#list').sortable();
}

