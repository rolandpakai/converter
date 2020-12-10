import React from 'react';
import Amount from './Amount';

export default class Converter extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          value: 0,
          isNegative: false,
          error: false,
        };
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

    render() {
        return (
            <div className="App-converter">
                <div>
                    {this.props.header}
                </div>
                <Amount 
                    name='eur'
                    label='EUR'
                    disabled={false}
                    isNegative={this.state.isNegative}
                    value={this.state.value}
                    onChange={this._onChange}
                />
                <Amount 
                    name={this.props.cryptoName}
                    label={this.props.cryptoName}
                    isNegative={this.state.isNegative}
                    disabled={true}
                    value={(this.state.value * this.props.exchangeRate).toFixed(4)}
                />
            </div>
        )
    }
}