import '../sass/toast.css';
import React,{useState} from 'react';

function Toast(props){
    return(
        <div className="toast">
            <div className='toast-minus'>-</div>
            <div className='toast-big'>1</div>
            <div className='toast-plus'>+</div>
        </div>
    );
}

export default Toast