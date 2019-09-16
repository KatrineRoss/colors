import * as React from 'react';
import {ColorInfoView} from './ColorInfoView';
import {PropTypes} from 'prop-types';
import {AddColorButton} from './AddColorButton';
import {isEmpty} from '../../../Common/Utils/CommonUtils';
import {ColorReducers, ColorListReducers} from '../ColorReducers';
import {ColorActions, ColorListActions} from '../ColorActions';
import {store} from '../../../Common/Store/store';

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

    componentDidMount() {
        console.log(store.getState());
        const colors = [...store.getState().colors];

        this.setState({colors});
    }

    handleAddColor = (name, code) => {
        const colors = [...this.state.colors];
        const {untitledCount} = this.state;

        this.setState({
            colors: ColorListReducers(colors, ColorListActions.addColor({
                id: [...code].splice(1, code.length - 1).join(''),
                name: !!name ? name : `untitled_${untitledCount}`,
                code,
                rating: 1,
                timestamp: new Date()
            })),
            untitledCount: !!name ? untitledCount : untitledCount + 1
        });
    }

    handleRateColor = (id, rating) => {
        const colors = [...this.state.colors];
        const editableIndex = colors.indexOf(colors.find((color) => color.id === id));
        let newColor;

        if (editableIndex > -1) {
            newColor = ColorReducers(colors[editableIndex], ColorActions.rateColor(rating));

            colors[editableIndex] = newColor;
        }

        this.setState({colors});
    }

    handleRemoveColor = (id) => {
        const colors = [...this.state.colors];

        this.setState({
            colors: ColorListReducers(colors, ColorListActions.removeColor(id))
        });
    }

    render() {
        const {colors} = this.state;

        return (
            <div className="app-wrapper">
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
                        onRemove={this.handleRemoveColor}
                    />
                ))}
            </div>
        )
    }
}