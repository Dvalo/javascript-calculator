import React from 'react';

class CalculatorDisplay extends React.Component {
    render() {
        return (
        <div id="calc-buttons">
            <div className="left-wrap">
            <button
                className="number-btn"
                id="seven"
                onClick={this.props.handleUpdate}
                value="7">7
            </button>
            <button
                className="number-btn"
                id="eight"
                onClick={this.props.handleUpdate}
                value="8">8
            </button>
            <button
                className="number-btn"
                id="nine"
                onClick={this.props.handleUpdate}
                value="9">9
            </button>
            <button
                className="number-btn"
                id="four"
                onClick={this.props.handleUpdate}
                value="4">4
            </button>
            <button
                className="number-btn"
                id="five"
                onClick={this.props.handleUpdate}
                value="5">5
            </button>
            <button
                className="number-btn"
                id="six"
                onClick={this.props.handleUpdate}
                value="6">6
            </button>
            <button
                className="number-btn"
                id="one"
                onClick={this.props.handleUpdate}
                value="1">1
            </button>
            <button
                className="number-btn"
                id="two"
                onClick={this.props.handleUpdate}
                value="2">2
            </button>
            <button
                className="number-btn"
                id="three"
                onClick={this.props.handleUpdate}
                value="3">3
            </button>
            <button
                className="number-btn"
                id="zero"
                onClick={this.props.handleUpdate}
                value="0">0
            </button>
            <button
                className="number-btn decimal-btn"
                id="decimal"
                onClick={this.props.handleUpdate}
                value=".">.
            </button>
            <button
                className="number-btn clear-btn"
                id="clear"
                onClick={this.props.clearDisplay}
                value="AC">C
            </button>
            </div>

            <div className="right-wrap">
            <div className="right-top-row">
                <button
                className="operator-btn"
                id="subtract"
                onClick={this.props.handleUpdate}
                value="-">-
                </button>
                <button
                className="operator-btn"
                id="divide"
                onClick={this.props.handleUpdate}
                value="/">&#247;
                </button>
            </div>

            <div className="right-middle-row">
                <div className="middle-left-wrap">
                <button
                    className="operator-btn"
                    id="add"
                    onClick={this.props.handleUpdate}
                    value="+">+
                </button>
                </div>

                <div className="middle-right-wrap">
                <button
                    className="operator-btn"
                    id="multiply"
                    onClick={this.props.handleUpdate}
                    value="*">X
                </button>
                <button
                    className="operator-btn"
                    id="modulus"
                    onClick={this.props.handleUpdate}
                    value="%">%
                </button>
                </div>
            </div>

            <div className="right-bottom-row">
                <button
                className="equal-btn"
                id="equals"
                onClick={this.props.evaluateExpression}
                value="=">=
                </button>
            </div>
            </div>
        </div>
        );
    }
}

export default CalculatorDisplay;