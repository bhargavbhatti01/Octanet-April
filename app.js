function add_item() {

    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if (item.value != "") {
  
      let make_li = document.createElement("LI");
      let checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      make_li.appendChild(checkbox);
      make_li.appendChild(document.createTextNode(item.value));
  
      list_item.appendChild(make_li);
  
      item.value = "";
      checkbox.addEventListener('click', function() {
        this.parentNode.classList.toggle('strikethrough');
      });
  
      //make_li.onclick = function() {
        //this.classList.toggle("completed");
      //}
  
    } else {
      alert("Please add a value to item");
    }
  }
  