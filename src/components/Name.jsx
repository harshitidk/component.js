import React,{useState} from "react";
import '../sass/name.css';

function Name()
{
    const [name,setName] = useState("harshit");

    function changeName(event){
        setName(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={changeName} />
            <p>name : {name}</p>
        </div>
    )
}

export default Name;