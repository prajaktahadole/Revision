import React, { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';


export const ReactCalendar = () =>{
    const [date, setDate] = useState(new Date());

    const onChange = date =>{
        setDate(date);
    };
       
    return (
       <div className='main'>
        <Calendar onChange={onChange}
        value={date}/>
       </div>
    )
}