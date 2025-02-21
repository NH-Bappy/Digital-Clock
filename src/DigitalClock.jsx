import React,{useState,useEffect} from 'react'

const DigitalClock = () => {


    const [time,setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval(intervalId);
        }

    },[]);



    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridiem = hours >= 12 ? "PM":"AM";

        hours = hours % 12 || 12;

        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");



        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }




  return (
    <div>
        <h2>{formatTime()}</h2>
    </div>
  )
}

export default DigitalClock