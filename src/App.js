import "./App.css";
import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { db } from "./firebase_config";
import firebase from "firebase";
import TodoListItem from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []); // blank to run only on first launch

  function getTodos() {
    db.collection("todos").onSnapshot(function(querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos").add({
      inProgress: true,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todoInput,
    });

    setTodoInput("");
  }

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h1>React Todo</h1>
        <form>
          <TextField
            id="standard-basic"
            label="Write a Todo"
            value={todoInput}
            style={{ maxWidth: "300px", width: "90vw" }}
            onChange={(e) => setTodoInput(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            onClick={addTodo}
            style={{ display: "none" }}
          >
            Default
          </Button>
        </form>

        {todos.map((todo) => (
          <TodoListItem
            todo={todo.todo}
            inprogress={todo.inProgress}
            id={todo.id}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
