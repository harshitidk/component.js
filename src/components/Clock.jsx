import React,{useState,useEffect} from 'react';

function Clock(){
    const [time,setTime] = useState(new Date());

    useEffect(()=> {
        const IntervalID = setInterval(() => {
        setTime(new Date());
    }, 1000);
    return () => {
        clearInterval(IntervalID);
    }
    },[]);

    function FormatDate(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours%12 || 12;

        return `${zeroterms(hours)}:${zeroterms(minutes)}:${zeroterms(seconds)} ${meridiem}`;
    }

    function zeroterms(value){
        return (value>9? "" : "0")+value;
    }

    return(
    <div className='clock-container'>
    {FormatDate()}
    </div>);
}

export default Clock;