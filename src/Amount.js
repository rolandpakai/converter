import React from 'react';

class Amount extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input 
                    type="number"
                    placeholder="0"
                    onChange={this.props.onChange}
                    className={this.props.isNegative ? 'negative' : ''}
                    disabled={this.props.disabled} 
                    id={this.props.name} 
                    name={this.props.name}
                    value={this.props.value}
                />
                <label htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        );
    }
}

export default Amount; 