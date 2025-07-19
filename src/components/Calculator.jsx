import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const CalculatorContainer = styled.div`
  max-width: 320px;
  margin: 2rem auto;
  padding: 1.5rem;
  background: #f5f5f5;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const Display = styled.input`
  width: 100%;
  height: 60px;
  margin-bottom: 1rem;
  padding: 0 15px;
  font-size: 1.8rem;
  text-align: right;
  border: none;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1);
  color: #333;
`;

const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const CalcButton = styled.button`
  height: 60px;
  font-size: 1.2rem;
  border: none;
  border-radius: 8px;
  background: ${props => {
    if (props.operator) return '#2BC0E4';
    if (props.function) return '#ff6b6b';
    return '#ffffff';
  }};
  color: ${props => props.operator || props.function ? '#ffffff' : '#333'};
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  }
`;

const Calculator = () => {
  const [input, setInput] = useState('');
  const [lastResult, setLastResult] = useState(null);

  const handleClick = (value) => {
    if (input === 'Error') {
      setInput(value);
      return;
    }
    setInput(prev => prev + value);
  };

  const clear = () => {
    setInput('');
    setLastResult(null);
  };

  const backspace = () => {
    setInput(prev => prev.slice(0, -1));
  };

  const calculate = () => {
    try {
      // Safer alternative to eval
      const result = new Function('return ' + input)();
      if (isNaN(result) || !isFinite(result)) {
        throw new Error('Invalid calculation');
      }
      setInput(result.toString());
      setLastResult(result);
    } catch {
      setInput('Error');
    }
  };

  const handleKeyDown = (e) => {
    if (/[0-9+\-*/.=]/.test(e.key)) {
      handleClick(e.key);
    } else if (e.key === 'Enter') {
      calculate();
    } else if (e.key === 'Backspace') {
      backspace();
    } else if (e.key === 'Escape') {
      clear();
    }
  };

  return (
    <CalculatorContainer>
      <Display
        type="text"
        value={input}
        onKeyDown={handleKeyDown}
        readOnly
        placeholder="0"
      />
      <ButtonGrid>
        <CalcButton function onClick={clear}>AC</CalcButton>
        <CalcButton function onClick={backspace}>←</CalcButton>
        <CalcButton operator onClick={() => handleClick('/')}>÷</CalcButton>
        <CalcButton operator onClick={() => handleClick('*')}>×</CalcButton>
        
        <CalcButton onClick={() => handleClick('7')}>7</CalcButton>
        <CalcButton onClick={() => handleClick('8')}>8</CalcButton>
        <CalcButton onClick={() => handleClick('9')}>9</CalcButton>
        <CalcButton operator onClick={() => handleClick('-')}>-</CalcButton>
        
        <CalcButton onClick={() => handleClick('4')}>4</CalcButton>
        <CalcButton onClick={() => handleClick('5')}>5</CalcButton>
        <CalcButton onClick={() => handleClick('6')}>6</CalcButton>
        <CalcButton operator onClick={() => handleClick('+')}>+</CalcButton>
        
        <CalcButton onClick={() => handleClick('1')}>1</CalcButton>
        <CalcButton onClick={() => handleClick('2')}>2</CalcButton>
        <CalcButton onClick={() => handleClick('3')}>3</CalcButton>
        <CalcButton operator onClick={calculate}>=</CalcButton>
        
        <CalcButton onClick={() => handleClick('0')} style={{ gridColumn: 'span 2' }}>0</CalcButton>
        <CalcButton onClick={() => handleClick('.')}>.</CalcButton>
      </ButtonGrid>
    </CalculatorContainer>
  );
};

export default Calculator;