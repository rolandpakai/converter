import React from 'react';
import './App.css';
import Amount from './Amount.js';
import ConverterContext from './ConverterContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      isNegative: false,
      value: 0,
    }
  }

  _onChange = e => {

    let isNegative = false;
    let value = e.target.value;
    let error = false;

    if (value < 0) {
        isNegative = true;
        error = true;
    }

    this.setState({value, isNegative, error});
  };

  exchangeRate = () => {
    return Math.random() * 10000;
  }
  
  render() {
    return (
      <ConverterContext.Provider
      value={{theme: this.state.theme}}>
      <div className={`App-${this.state.theme}`}>
        <div className="App-header">
          <label>
              <span>Theme</span>
              <select
                onChange={event => this.setState({theme: event.target.value})}
                value={this.state.theme}>
                <option value="dark">Dark</option>
                <option value="light">Light</option>
              </select>
            </label>
        </div>

        <div className="App-converter">
          <Amount 
            name='euros'
            label='Euros'
            disabled={false}
            isNegative={this.state.isNegative}
            value={this.state.value}
            onChange={this._onChange}
          />
          <Amount 
            name='btc'
            label='$BTC'
            isNegative={this.state.isNegative}
            disabled={true}
            value={(this.state.value * this.exchangeRate()).toFixed(4)}
          />
        </div>
      </div>
      </ConverterContext.Provider>
    );
  }
}

export default App;
