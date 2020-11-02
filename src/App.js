import React from 'react';
import CalculatorDisplay from './componenets/CalculatorDisplay';
import './App.css';

const operatators = ["%", "/", "*", "-", "+"];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperator: "",
      mathExpression: "0",
    };
  }
  handleUpdate = (e) => {
    this.beepAudio.currentTime = 0;
    this.beepAudio.play();
    let { mathExpression } = this.state;
    if (mathExpression === "0" && !operatators.includes(e.target.value)) {
      this.setState({ mathExpression: e.target.value });
    } else {
      if (e.target.value !== "." && !operatators.includes(e.target.value)) {
        this.setState({ mathExpression: (mathExpression += e.target.value) });
      }
      this.handleExceptions(e);
    }
  };

  handleExceptions = (e) => {
    let { currentOperator, mathExpression } = this.state;
    if (operatators.includes(e.target.value)) {
      this.setState({
        currentOperator: (currentOperator += e.target.value),
        mathExpression: (mathExpression += e.target.value),
      });
      if (currentOperator[1] !== "-" && currentOperator[1] !== undefined) {
        this.replaceOperators(e.target.value);
      } else if (
        currentOperator[1] === "-" &&
        currentOperator[1] !== undefined
      ) {
        if (currentOperator[2] !== "-" && currentOperator[2] !== undefined) {
          this.replaceOperators(e.target.value);
        } else if (
          currentOperator[2] === "-" &&
          currentOperator[2] !== undefined
        ) {
          this.replaceOperators(e.target.value);
        }
      }
      if (currentOperator === "--") {
        this.replaceOperators(e.target.value);
      }
    } else {
      this.setState({ currentOperator: "" });
    }

    if (e.target.value === ".") {
      let splitted = mathExpression.split(/[\+\-\*\/\%]/);
      let currElem = splitted.pop();
      if (!currElem.includes(".")) {
        this.setState({ mathExpression: (mathExpression += e.target.value) });
      }
    }
  };

  replaceOperators = (replaceWith) => {
    let { currentOperator, mathExpression } = this.state;
    let newExpression = mathExpression.replace(currentOperator, replaceWith);
    this.setState({
      currentOperator: replaceWith,
      mathExpression: newExpression,
    });
  };

  evaluateExpression = () => {
    let { mathExpression } = this.state;
    let currAnswer = eval(mathExpression);
    this.setState({ mathExpression: currAnswer });
  };

  clearDisplay = () => {
    this.setState({ mathExpression: "0", currentOperator: "" });
  };

  render() {
    return (
      <div className="react-calculator">
        <div className="calculator-inner">
          <div className="display-wrap">
            <div id="display">{this.state.mathExpression}</div>
          </div>
          <CalculatorDisplay
            handleUpdate={this.handleUpdate}
            evaluateExpression={this.evaluateExpression}
            clearDisplay={this.clearDisplay}/>
          <audio
            id="beep"
            src="https://actions.google.com/sounds/v1/alarms/beep_short.ogg"
            ref={(audio) => {
              this.beepAudio = audio;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
