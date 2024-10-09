import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const percentage = 66;

function Timer(){
    return (
        <div>
            <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>
    );
}

export default Timer; 