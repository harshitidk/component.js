import React,{useState} from "react";

function Input(){
    const [todo, setTodo] = useState(["i will sleep","working on react","learn storytelling"])

    function handleAddTodo(event){
        const newtodo = document.getElementById("new-todo").value;
        document.getElementById("new-todo").value = "";
        setTodo([...todo,newtodo]);
    }

    // function handleRemoveTodo(){
    // }

    return(<div>
        <h2>my todo list</h2>
        <ul>
            {todo.map((todos, index) => <li key={index}>{todos}</li>)}
        </ul>
        <div className="add-button">
            <input id="new-todo" type="text" />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    </div>)
}

export default Input;