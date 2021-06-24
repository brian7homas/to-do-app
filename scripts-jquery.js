function newItem(){
  let li = $('#list');
  let inputValue = $('input').val()
  let text = li.append(document.createTextNode(inputValue))
  li.append(text)
}

