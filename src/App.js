import './App.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './slices/counterSlice';

function App(props) {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const [ num, setNum ] = useState(0);
  const { count } = counter;
  return (
    <div className="counterWrapper">
      <div className="counterDisplay">
        {count}
      </div>
      <div className="counterButtons">
        <div onClick={() => dispatch(increment())} className="counterButton">
          +
        </div>
        <div onClick={() => dispatch(decrement())} className="counterButton">
          -
        </div>
        <div
        onClick={() => dispatch(incrementByAmount(Number(num, 10)))}
        className="counterButton">
          Increment by <input onChange={e => setNum(e.target.value)} value={num} />
        </div>
      </div>
    </div>
  );
};

export default App;