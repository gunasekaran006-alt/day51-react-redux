import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../redux/counterSlice';

function Home() {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Component {count}</h1>

      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default Home;
