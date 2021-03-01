import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {

    state = {
        activeOptionsIdx: 0,
    }

    setAciveIdx = (index) => {
        this.setState({activeOptionsIdx: index})
    }

    makeOptionClassName = (index) => {
        const optionClasses = ["ColorPicker__option"];

        if (index === this.state.activeOptionsIdx) {
            optionClasses.push("ColorPicker__option--active")
        }
        return optionClasses.join(' ')
    }
    
    render() {
        const {activeOptionsIdx} = this.state;
        const {options} = this.props;
        const {label} = this.props.options[activeOptionsIdx];
            
        return (
            <div className="ColorPicker">
            <h2 className="ColorPicker__title">Color Picker</h2>
            <p>Chosen: {label}</p>
            <div>
                {options.map(({ label, color }, index) => (
                        <button
                            key={label}
                            className={this.makeOptionClassName(index)}
                            style={{ backgroundColor: color }}
                            onClick={() => this.setAciveIdx(index)}
                        ></button>
                    )
                )}
            </div>
        </div>
        )
    }

}

export default ColorPicker;
