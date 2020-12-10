import React from 'react';
import './App.css';
import Converter from './Converter';
import ConverterContext from './ConverterContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
    }
  }

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

        <div className="App-converters">
          <Converter
            cryptoName="$BTC"
            exchangeRate={0.5}
          />
          <Converter
            cryptoName="$ETH"
            exchangeRate={1.2}
          />
        </div>
      </div>
      </ConverterContext.Provider>
    );
  }
}

export default App;
