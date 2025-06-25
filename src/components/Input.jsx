import React,{useState} from "react";

function Input(){
    const [count,setCount] = useState(4);
    const [todo, setTodo] = useState([
    { id: 1, text: "i will sleep" },
    { id: 2, text: "working on react" },
    { id: 3, text: "learn storytelling" }
])

    function handleAddTodo(event){
        const newtodo = document.getElementById("new-todo").value;
        if (!newtodo) return;
        document.getElementById("new-todo").value = "";
        const fixtodo = {id:count,text:newtodo}
        setTodo(todo=>[...todo,fixtodo]);
        setCount(prev => prev + 1);
    }

    function handleRemoveTodo(index){
        setTodo(todo.filter((_,i)=> i != index));
    }

    return(<div>
        <h2>my todo list</h2>
        <div className="todo">
            {todo.map((todos, index) => <div className="todo-list" key={todos.id}>
            <input className="checkbox" type="checkbox" onChange={() => handleRemoveTodo(index)} />
            <label>{todos.text}</label>
            </div>)}
        </div>
        <div className="add-button">
            <input id="new-todo" type="text" />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    </div>)
}

export default Input;