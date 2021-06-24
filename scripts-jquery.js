function newItem(){
  let li = $('<li class="list-item"></li>');
  let inputValue = $('input').val()
  let text = li.append(document.createTextNode(inputValue))
  
  
  if(inputValue === ''){
    alert("You must write something");
  }else{
    let list = $('#list');
    list.append(text);
  }
  
  function crossOut(){
    li.toggleClass('strike')
  }
  
  $('.list-item').dblclick(function(){
    crossOut()
  });
  
  //3
  $('#list').append(document.createElement('crossOutButton'));
  $('crossOutButton').append(document.createTextNode("X"));
  $('crossOutButton').appendTo('.list-item');
}

