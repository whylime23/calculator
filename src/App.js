/* eslint-disable react/jsx-no-target-blank */
import React, { Component } from 'react'
import './App.css'

const OPERATORS = ['+', '/', '-', '*']
// const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

const isOperator = (value) => OPERATORS.includes(value);
// const isNumber = (value) => NUMBERS.includes(value);

const Button = (props) => {
  const { value, handleClick, className } = props;
  return (
    <div className={ className || 'col button-single'} onClick={handleClick}>
      { value }
    </div>
  );
};

class App extends Component {
  state = {
    calcMemory: "",
    calcInput: "",
    error: false
  };

  handleNumberClick = (value) => {
    if (this.state.error) {
      this.setState({
        calcInput: value,
        calcMemory: value,
        error: false
      });
      return;
    }
    if (this.state.calcInput.length < 13) {
      if (isOperator(this.state.calcInput[this.state.calcInput.length - 1])) {
        this.setState({
          calcInput: value,
          calcMemory: this.state.calcMemory + value
        });
      }
      else {
        this.setState({
          calcInput: this.state.calcInput + value,
          calcMemory: this.state.calcMemory + value
        });
      }
    }
    else {
      this.setState({
        calcInput: "",
        calcMemory: 'Digit limit met',
        error: true
      });
    }
  };

  handleCE = () => {
    this.setState ({
      calcInput: ""
    });
  };

  handleAC = () => {
    this.setState ({
      calcInput: "",
      calcMemory: ""
    });
  };

  handleOperator = (operator) => {
    if (this.state.error) {
      return;
    }
    if (!isOperator(this.state.calcMemory[this.state.calcMemory.length - 1])) {
      this.setState ({
        calcInput: operator,
        calcMemory: this.state.calcMemory + operator
      });
    };
  };

  handleEquals = () => {
    let answer = eval(this.state.calcMemory);
    if (!Number.isInteger(answer)) {
      answer = answer.toFixed(2)
    }
    this.setState ({
      calcInput: answer
    });
  };

  render () {
    return (
      <div id='container'>
        <div className='cal-body'>
          <div className='header'>
            <h6>Electronic Calculator</h6>
          </div>
          <div className='display'>
            <div className='mem-input'>
              {this.state.calcMemory ? this.state.calcMemory : '0'}
            </div>
            <div className='act-input'>
              {this.state.calcInput ? this.state.calcInput : '0'}
            </div>
          </div>
          <div className='buttons-all'>
            <div className='container'>
              <div className='row first-row'>
                <div className='col button-single button-special' id='AC' onClick={() => this.handleAC()}>
                  AC
                </div>
                <div className='col button-single button-special' id='CE' onClick={() => this.handleCE()}>
                  CE
                </div>
                <div className='col button-single' id='divide' onClick={() => this.handleOperator('/')}>
                  ÷
                </div>
                <div className='col button-single' id='multiply' onClick={() => this.handleOperator('*')}>
                  x
                </div>
              </div>
              <div className='row second-row'>
                <Button value={7} handleClick={() => this.handleNumberClick('7')} />
                <Button value={8} handleClick={() => this.handleNumberClick('8')} />
                <Button value={9} handleClick={() => this.handleNumberClick('9')} />
                <div className='col button-single' id='minus' onClick={() => this.handleOperator('-')}>
                  -
                </div>
              </div>
              <div className='row third-row'>
                <Button value={4} handleClick={() => this.handleNumberClick('4')}/>
                <Button value={5} handleClick={() => this.handleNumberClick('5')}/>
                <Button value={6} handleClick={() => this.handleNumberClick('6')}/>
                <div className='col button-single' id='plus' onClick={() => this.handleOperator('+')}>
                  +
                </div>
              </div>
              <div className='row fourth-row'>
              <Button value={1} handleClick={() => this.handleNumberClick('1')}/>
              <Button value={2} handleClick={() => this.handleNumberClick('2')}/>
              <Button value={3} handleClick={() => this.handleNumberClick('3')}/>
                <div className='col button-single' />
                <div className='button-single' id='equals' onClick={this.handleEquals}>
                  =
                </div>
              </div>
              <div className='row fifth-row'>
                <Button
                  value={0}
                  handleClick={() => this.handleNumberClick(0)}
                  className="button-single col-9 button-zero"
                />
                <div className='col button-single' onClick={() => this.handleNumberClick('.')}>
                  .
                </div>
                <div className='col button-single' />
              </div>
            </div>
          </div>
        </div>
        <div className='footer container-fluid'>
          Designed and coded by <a className='emily-link' href='https://www.freecodecamp.com/whylime23' target='_blank'>Emily Taylor</a> using CodePen and Chrome web developer tools.
        </div>
      </div>
    )
  }
}

export default App
