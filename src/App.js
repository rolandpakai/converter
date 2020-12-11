import React from 'react';
import './App.css';
import Converter from './Converter';
import ConverterContext from './ConverterContext';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light',
      conversions: 0,
      premium: false,
    }
  }

  _onConversion = () => {
    console.log('App::_onConversion ');
    let conversions = this.state.conversions + 1;

    if(conversions > 5) {
      conversions = 1;
    }

    this.setState({ conversions });
  };

  _setPremium = () => {
    this.setState({premium: true})
  }

  render() {
    let freemium;

    if (this.state.premium) {
      freemium = <div className="App-freemium">💎 Premium conversion</div>
    } else {
      if (this.state.conversions == 5) {
        freemium = <div className="App-freemium"> 
          Freemium Advert! 
          <button
                className="App-premium-button"
                onClick={this._setPremium}
                type="button">
                Become Premium
              </button>
        </div>
      }
    }

    return (
      <ConverterContext.Provider
      value={{theme: this.state.theme}}>
      {freemium}
      <div className={`App App-${this.state.theme}`}>
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
            header={<h3>BTC > EUR</h3>}
            cryptoName="BTC"
            exchangeRate={0.5}
            onConversation={this._onConversion}
          />
          <Converter
            header={<h3>ETH > EUR</h3>}
            cryptoName="ETH"
            exchangeRate={1.2}
            onConversation={this._onConversion}
          />
        </div>
      </div>
      </ConverterContext.Provider>
    );
  }
}

export default App;
