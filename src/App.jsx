import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Home from './components/Home';
import { decrement, increment } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>App Component</h1>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>Increase Count</button>

      <button disabled={count === 0} onClick={() => dispatch(decrement())}>
        Decrease
      </button>
      <Home />
    </div>
  );
}

export default App;
