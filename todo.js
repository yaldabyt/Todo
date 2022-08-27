import { handleCreatNewTodo } from "./MODULES/controller/handleCreatTodo.js";


//  QUERY TO DOM FOR GETTING ELEMENTS  //

const submitTodoButton = document.getElementById("submit");
submitTodoButton.addEventListener("click", handleCreatNewTodo)

