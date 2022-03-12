import React, { useEffect, useState } from "react";
import "./app.css"

const COUNTDOWN_INITIAL_TIME_IN_SECONDS = 1 * 60;

function App(){
    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_INITIAL_TIME_IN_SECONDS);

    useEffect(()=>{
        if(secondsAmount>0){
            setTimeout(()=>{
                setSecondsAmount(state => state - 1);
            },1000);
        }else{
            alert("Chegou no zero!");
        }
    }, [secondsAmount]);

    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;


    return(
        <div className="container">
            <div>
                <span>{String(minutes).padStart(2, '0')}</span>
                <span>:</span>
                <span>{String(seconds).padStart(2, '0')}</span>
            </div>
        </div>
    )
}

export default App