import React, { useState } from 'react';

const Calculator = () => {
  const [mode, setMode] = useState('arithmetic');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const SERVER_URL = 'http://localhost:5000/api';

  const handleModeChange = (selectedMode) => {
    setMode(selectedMode);
    setNum1('');
    setNum2('');
    setResult('');
  };

  const calculate = async (op) => {
    let url = '';

    if (mode === 'factorial') {
      url = `${SERVER_URL}/fact?n1=${num1}`;
    } else if (mode === 'gcd') {
      url = `${SERVER_URL}/${op}?n1=${num1}&n2=${num2}`;
    } else {
      url = `${SERVER_URL}/calc?n1=${num1}&n2=${num2}&op=${op}`;
    }

    try {
      const res = await fetch(url);
      const text = await res.text();
      setResult(text);
    } catch (error) {
      setResult('Server error');
    }
  };

  return (
    <div style={styles.container}>
      <h2>MERN Calculator</h2>

      {/* Mode Selector */}
      <div style={styles.modeButtons}>
        <button onClick={() => handleModeChange('arithmetic')} style={mode === 'arithmetic' ? styles.activeButton : styles.modeButton}>Arithmetic</button>
        <button onClick={() => handleModeChange('factorial')} style={mode === 'factorial' ? styles.activeButton : styles.modeButton}>Factorial</button>
        <button onClick={() => handleModeChange('gcd')} style={mode === 'gcd' ? styles.activeButton : styles.modeButton}>GCD / LCM</button>
      </div>

      {/* Input Fields */}
      <div>
        <input
          type="number"
          placeholder="Enter number 1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={styles.input}
        />

        {mode !== 'factorial' && (
          <input
            type="number"
            placeholder="Enter number 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={styles.input}
          />
        )}
      </div>

      {/* Operation Buttons */}
      <div style={styles.buttons}>
        {mode === 'arithmetic' && (
          <>
            <button onClick={() => calculate('add')}>Add</button>
            <button onClick={() => calculate('sub')}>Subtract</button>
            <button onClick={() => calculate('mul')}>Multiply</button>
            <button onClick={() => calculate('div')}>Divide</button>
          </>
        )}
        {mode === 'factorial' && (
          <button onClick={() => calculate('fact')}>Factorial</button>
        )}
        {mode === 'gcd' && (
          <>
            <button onClick={() => calculate('gcd')}>GCD</button>
            <button onClick={() => calculate('lcm')}>LCM</button>
          </>
        )}
        <button onClick={() => { setNum1(''); setNum2(''); setResult(''); }}>Clear</button>
      </div>

      {/* Result Display */}
      <div style={styles.result}>
        <h4>Result:</h4>
        <p>{result}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: '340px',
    margin: '40px auto',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 12px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    fontFamily: 'Arial',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '10px',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    backgroundColor: '#f2f2f2',
    padding: '10px',
    borderRadius: '5px',
  },
  modeButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
  },
  modeButton: {
    flex: 1,
    margin: '0 5px',
    padding: '10px',
    backgroundColor: '#ddd',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  activeButton: {
    flex: 1,
    margin: '0 5px',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  }
};

export default Calculator;
