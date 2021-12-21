import "./App.css";
import React from 'react'
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import { Button } from "@material-ui/core";
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyBiw5earGkEMD0rbKlnjaISSs6CSzhUTXA",
  authDomain: "react-todo-8adb7.firebaseapp.com",
  projectId: "react-todo-8adb7",
  storageBucket: "react-todo-8adb7.appspot.com",
  messagingSenderId: "341670164251",
  appId: "1:341670164251:web:5a8e99c2e9cda2750405be",
};

const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase)

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
