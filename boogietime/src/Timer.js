import {useState, useEffect} from 'react'; 
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import SettingsButton from './SettingsButton';

const red = '#f54e4e';
const green = '#4aec8c';

function Timer(){
    const defaultTime = 75 * 60; // total time for countdown
    const [seconds, setSeconds] = useState(defaultTime); //seconds keeps track of remaining time in seconds
    const [isActive, setIsActive] = useState(false); // indicates whether timer is running or not

    useEffect(() => {
        let interval = null;
        if (isActive){
            interval = setInterval(() => {
                setSeconds(seconds => seconds > 0 ? seconds - 1 : 0);
            }, 1000);
        } else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    },[isActive, seconds]);

    const toggle = () => {
        setIsActive(!isActive);
    };

    const reset = () => {
        setSeconds(defaultTime);
        setIsActive(false);
    };
    
    const percentage = (seconds / defaultTime) * 100;
    const minutes = Math.floor (seconds / 60); //Math.floor rounds down to the nearest whole number
    const secs = seconds % 60; 

    return (
        <div>
            <CircularProgressbar 
                value={percentage} 
                text={`${percentage.toFixed(0)}%`} 
                styles = {buildStyles({
                    textColor: '#fff',
                    pathColor: 'red',
                    tailColor:'rgba(255,255,255,.2)',
                })}
            />
            <div style={{marginTop:'20px', fontSize: '24px', textAlign: 'center', color: '#fff'}}>
                {`${minutes}:${secs < 10 ? `0${secs}` : secs}`} {/* Formats the seconds to always be two digits */}
            </div>
            <div style={{marginTop:'20px'}}>
                {isActive ? (
                    <PlayButton onClick = {toggle} />
                ) : (
                    <PauseButton onClick = {toggle} />
                )}
                <SettingsButton onClick = {reset} /> 
            </div>
        </div>
    );
}

export default Timer; 