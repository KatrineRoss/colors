import * as React from 'react';
import {Color} from './Color';

export class AddColorModal extends  React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentColorName: null,
            currentColor: '#000000'
        }
    }

    handleSelectColor = (value) => {
        this.setState({currentColor: value});
    }

    handleColorNameChange = (e) => {
        this.setState({currentColorName: e.target.value});
    }

    handleAddColor = () => {
        const {onColorAdd, onClose} = this.props;
        const {currentColor, currentColorName} = this.state;

        onColorAdd(currentColorName, currentColor);
        onClose();
    }

    render() {
        const {onClose} = this.props;
        const {currentColorName, currentColor} = this.state;

        return (
            <div className="modal">
                <div className="modal-wrapper" onClick={onClose}></div>
                <div className="add-color-modal">

                    <Color
                        code={currentColor}
                        selectable
                        onColorSelect={this.handleSelectColor}
                        className="in-col"
                    />

                    <input
                        type="text"
                        placeholder="Enter color name..."
                        value={currentColorName}
                        onChange={this.handleColorNameChange}
                        className="in-col mt-2"
                    />

                    <button
                        className="btn in-col mt-1"
                        onClick={this.handleAddColor}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}