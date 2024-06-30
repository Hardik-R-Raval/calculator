import React, { useState } from 'react';

const buttons = [
  { id: 'clear', value: 'AC' },
  { id: 'divide', value: '/' },
  { id: 'multiply', value: '*' },
  { id: 'seven', value: '7' },
  { id: 'eight', value: '8' },
  { id: 'nine', value: '9' },
  { id: 'subtract', value: '-' },
  { id: 'four', value: '4' },
  { id: 'five', value: '5' },
  { id: 'six', value: '6' },
  { id: 'add', value: '+' },
  { id: 'one', value: '1' },
  { id: 'two', value: '2' },
  { id: 'three', value: '3' },
  { id: 'equals', value: '=' },
  { id: 'zero', value: '0' },
  { id: 'decimal', value: '.' },
];

function Calculator() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');

  const handleClick = (value) => {
    if (value === 'AC') {
      setInput('');
      setOutput('0');
    } else if (value === '=') {
      try {
        const result = eval(input);
        setOutput(result.toString());
      } catch (e) {
        setOutput('Error');
      }
    } else {
      if (input === '' && value === '0') return;
      if (input === '' && (value === '*' || value === '/')) return;
      setInput((prev) => prev + value);
      setOutput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  return (
    <div id="calculator" className="container">
      <div id="display" className="bg-dark text-white p-3">
        {output}
      </div>
      <div className="button-container">
        {buttons.map((button) => (
          <button
            key={button.id}
            id={button.id}
            className={`btn btn-secondary m-1 ${button.id === 'equals' ? 'btn-primary' : ''}`}
            onClick={() => handleClick(button.value)}
          >
            {button.value}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
