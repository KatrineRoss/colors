import * as React from 'react';
import {PropTypes} from 'prop-types';
import {AddColorModal} from './AddColorModal';

/**
 * Кнопка добавления нового цвета.
 */
export class AddColorButton extends React.Component {
    static propsTypes = {
        onColorAdd: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
    
        this.state = {
            showAddColorModal: false
        }
    }

    handleToggleAddColorModal = () => {
        this.setState((prevState) => ({showAddColorModal: !prevState.showAddColorModal}));
    } 

    render() {
        const {onColorAdd} = this.props;
        const {showAddColorModal} = this.state;

        return (
            <React.Fragment>
                <button
                    type="button"
                    title="Add color"
                    onClick={this.handleToggleAddColorModal}
                    className="btn"
                >
                    Add color
                </button>

                {showAddColorModal && (
                    <AddColorModal
                        onClose={this.handleToggleAddColorModal}
                        onColorAdd={onColorAdd}
                    />
                )}
            </React.Fragment>
        )
    }
}