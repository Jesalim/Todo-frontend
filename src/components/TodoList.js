import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
// import "./TodoList.css";
import SignIn from "./signIn";
import SignUp from "./signUp";
import TodoForm from "./TodoForm";

const TodoList = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  const pendingTodo = [];
  const completedTodo = [];
  todos.forEach((item) => {
    if (item.isComplete === true) completedTodo.push(item);
    else pendingTodo.push(item);
  });

  return (
    <>
      <div className="todo-list">
        <div>
          {pendingTodo.length > 0 ? (
            pendingTodo.map((todo, index) => (
              <div className="todo-pending" key={index}>
                <TodoListItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                  submitUpdate={submitUpdate}
                  edit={edit}
                  setEdit={setEdit}
                />
              </div>
            ))
          ) : (
            <p>Todo list is empty</p>
          )}
        </div>

        {completedTodo.length > 0 && (
          <div className="todo-list">
            <h6>Completed Tasks</h6>
            <hr />
          </div>
        )}

        <div>
          {completedTodo.length > 0 &&
            completedTodo.map((todo, index) => (
              <div className="todo-completed" key={index}>
                <TodoListItem
                  todo={todo}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
                />
              </div>
            ))}


<div>
          
          <Routes>
              <Route path="/" element= {<SignUp/>}></Route>
              <Route path="/signIn" element= {<SignIn/>}></Route>
              <Route path="/TodoListItem" element= {<TodoListItem/>}></Route>
               <Route path="/TodoForm" element= {<TodoForm/>}></Route>
              {/* <Route path="/update" element= {<UpdateTodos/>}></Route> */}
          </Routes>
          </div>

        </div>
      </div>
    </>
  );
};

export default TodoList;