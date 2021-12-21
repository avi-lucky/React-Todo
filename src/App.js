import "./App.css";
import React from 'react'
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { firebase, db } from "./firebase_config"

function App() {
  const [todoInput, setTodoInput] = useState("");

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
      </div>
    </div>
  );
}

export default App;
