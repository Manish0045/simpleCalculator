import { useState } from 'react';
import './App.css';
import Keypad from './components/Keypad';

function App() {
  const [input, setInput] = useState('');
  const handleClick = (value) => {
    setInput(input + value);
  };
  const handleClear = () => {
    setInput("");
  };
  const handleEqual = () => {
    setInput(eval(input).toString());
  };
  return (
    <div className="App">
      <div className="calculator">
        <input className='display' type="text" value={input} readOnly />
        <Keypad handleClear={handleClear} handleClick={handleClick} handleEqual={handleEqual} />
      </div>
    </div>
  );
}

export default App;
