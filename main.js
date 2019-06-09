$('#btn').click(function () {
    var todo = $('#todo').val()
    $("#todo").val("")
    if (todo != "") {
      var todoList = $("#todo-list")
  
      var newTodo = $("<li>")
      var todoLable = $("<lable>")
      todoLable.text(todo)
      newTodo.append(todoLable)

      var checkBox = $('<input type="checkbox" /> ')
  
      var RemoveBtn = $("<button>")
      RemoveBtn.text("Remove")
  
      RemoveBtn.click(function () {
        newTodo.remove()
      })
      newTodo.prepend(checkBox)
      todoList.prepend(newTodo)
      
      if(checkBox.prop("checked")) {
        debugger
        todoLable.addClass("need-cross");
      }
      newTodo.append(RemoveBtn)
    }
  })
  
  $("#clear-btn").click(function () {
    var todoList = $('#todo-list')
    todoList.empty()
  })
    $("h2").css("color", "yellow");
  