import React,{useState} from "react";

function Input(){
    const [count,setCount] = useState(4);
    const [todo, setTodo] = useState([
    { id: 1, text: "i will sleep" },
    { id: 2, text: "working on react" },
    { id: 3, text: "learn storytelling" }
]);

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

    function handleup(index){
        if (index>0){
            const updated = [...todo];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]]
            setTodo(updated);
        }
    }

    function handledown(index){
        if (index<todo.length-1){
            const updated = [...todo];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]]
            setTodo(updated);
        }
    }


    return(<div>
        <h2>my todo list</h2>
        <div className="todo">
        {todo.map((todos, index) => <div className="todo-list" key={todos.id}>
            <div className="svg-dad">
                <div className="up svg" onClick={()=>handleup(index)}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 15l6 -6l6 6" /></svg></div>
                <div className="down svg" onClick={()=>handledown(index)}><svg  xmlns="http://www.w3.org/2000/svg"  width="16"  height="16"  viewBox="0 0 20 20"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg></div>
            </div>
            <input className="checkbox" type="checkbox" 
            onChange={() => handleRemoveTodo(index)} />
            <label>{todos.text}</label>
            </div>)}
        </div>
        <div className="add-button">
            <input id="new-todo"
            type="text"
            onKeyDown={(event) => {
                if (event.key === "Enter") handleAddTodo();
            }} />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    </div>)
}

export default Input;