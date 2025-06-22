import '../sass/toast.css';
import React,{useState} from 'react';

function Toast(props) {
  const [score, setScore] = useState(0);

  const decrease_score = () => setScore(score - 1);
  const reset_score = () => setScore(0);
  const increase_score = () => setScore(score + 1);

  return (
    <div className="toast">
      <div className="toast-minus" onClick={decrease_score}>-</div>
      <div className="toast-big" onClick={reset_score}>{score}</div>
      <div className="toast-plus" onClick={increase_score}>+</div>
    </div>
  );
}


export default Toast