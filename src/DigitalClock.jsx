import React,{useState,useEffect} from 'react'

const DigitalClock = () => {


    const [time,setTime] = useState(new Date());


    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        },1000);

        return() => {
            clearInterval();
        }

    },[]);








  return (
    <div>
        <h2>00:00:00</h2>
    </div>
  )
}

export default DigitalClock