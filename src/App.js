import Button from './components/Button';
import Input from './components/Input';

import { useState } from 'react';
import { Container, Content, Row, Column, ColumnBottom } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');


  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  };

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  };

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('-');
    } else {
      const subtraction = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(subtraction));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleDivNumbers = () => {
    if (firstNumber === '0' || currentNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('/');
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setFirstNumber('0');
      setOperation('');
    }
  };

  const handleMultiplyNumbers = () => {
    if (firstNumber === '0' || currentNumber === '0') {
      setFirstNumber(String(currentNumber));
      setCurrentNumber('0');
      setOperation('x');
    } else {
      const multiply = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multiply));
      setFirstNumber('0');
      setOperation('');
    }
  };


  const handleEquals = () => {
    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumbers();
          break;

        case '-':
          handleMinusNumbers();
          break;

        case '/':
          handleDivNumbers();
          break;

        case 'x':
          handleMultiplyNumbers();
          break;

        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Column>--</Column>
        <Input value={currentNumber}></Input>
        <Row>
          <Button label="x" onClick={handleMultiplyNumbers}></Button>
          <Button label="/" onClick={handleDivNumbers}></Button>
          <Button label="C" onClick={handleOnClear}></Button>
          <Button label="." onClick={() => handleAddNumber('.')}></Button>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')}></Button>
          <Button label="8" onClick={() => handleAddNumber('8')}></Button>
          <Button label="9" onClick={() => handleAddNumber('9')}></Button>
          <Button label="-" onClick={handleMinusNumbers}></Button>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')}></Button>
          <Button label="5" onClick={() => handleAddNumber('5')}></Button>
          <Button label="6" onClick={() => handleAddNumber('6')}></Button>
          <Button label="+" onClick={handleSumNumbers}></Button>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')}></Button>
          <Button label="2" onClick={() => handleAddNumber('2')}></Button>
          <Button label="3" onClick={() => handleAddNumber('3')}></Button>
          <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
        </Row>
        <ColumnBottom>--</ColumnBottom>
      </Content>
      
    </Container>
  );
}

export default App;
