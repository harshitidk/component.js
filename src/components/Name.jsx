import React,{useState} from "react";

function Name()
{
    const [name,setName] = useState("harshit");

    function changeName(event){
        setName(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={changeName} />
            <p>Name : {name}</p>
        </div>
    )
}

export default Name;