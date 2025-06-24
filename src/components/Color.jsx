import React,{useState} from "react";
import '../sass/name.css';

function Color(){
    const [color,setColor] = useState("#ffffff");

    function handleColorChange(event)
    {
        setColor(event.target.value);
    }

    return(<div className="colorPickerContainer">
        <h1>Color Picker</h1>
        <div className="colorDisplay" style={{backgroundColor: color}}>
            <p>Selected Color : {color}</p>
        </div>
        <label>Select a Color :</label>
        <input className="colorPickerBox" type="color" value={color} onChange={handleColorChange} />
    </div>)
}

export default Color;