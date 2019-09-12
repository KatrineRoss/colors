import * as React from 'react';
import {ColorInfoView} from './ColorInfoView';
import {PropTypes} from 'prop-types';
import {AddColorButton} from './AddColorButton';
import {isEmpty} from '../../../Common/Utils/CommonUtils';
import {ColorReducers} from '../ColorReducers';
import {ColorActions} from '../ColorActions';

/**
 * Отрисовывает форму, содержащую список цветов.
 */
export class ColorsForm extends React.Component {
    static propsTypes = {
        colors: PropTypes.array.isRequired
    }

    static defaultProps = {
        colors: []
    }

    constructor(props) {
        super(props);

        this.state = {
            colors: [...props.colors],
            untitledCount: 0
        }
    }

    handleAddColor = (name, code) => {
        const {colors, untitledCount} = this.state;

        console.log(ColorReducers({}, ColorActions.addColor({
            id: [...code].splice(1, code.length - 1),
            name,
            code,
            rating: 1
        })));

        this.setState({
            colors: [...colors.concat(
                [{
                    name: !!name ? name : `untitled_${untitledCount}`,
                    code,
                    rating: 1,
                    id: [...code].splice(1, code.length - 1)
                }]
            )],
            untitledCount: !!name ? untitledCount : untitledCount + 1
        });
    }

    handleRateColor = (id, rating) => {
        const colors = [...this.state.colors];
        const editableIndex = colors.indexOf(colors.find((color) => color.id === id));

        if (editableIndex > -1) {
            colors[editableIndex].rating = rating;
        }

        this.setState(colors);
    }

    render() {
        const {colors} = this.state;

        return (
            <React.Fragment>
                <div className="main-header">
                    <AddColorButton onColorAdd={this.handleAddColor}/>
                </div>

                {!isEmpty(colors) && colors.map((color, index) => (
                    <ColorInfoView
                        key={index}
                        code={color.code}
                        name={color.name}
                        rating={Number(color.rating)}
                        id={color.id}
                        onRate={this.handleRateColor}
                    />
                ))}
            </React.Fragment>
        )
    }
}