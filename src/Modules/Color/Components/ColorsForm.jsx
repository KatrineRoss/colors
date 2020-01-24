import * as React from 'react';
import {PropTypes} from 'prop-types';
import {ColorReducers} from '../ColorReducers';
import {ColorActions, ColorListActions, SelectedColorActions} from '../ColorActions';
import {store} from '../../../Common/Store/store';
import {ColorList} from './ColorList';
import {Color} from './Color';

// interface Message {
//     name: string;
//     value?: number;
// }

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
            untitledCount: 0,
            selectedColor: null
        }
    }

    componentDidMount() {
        console.log(store.getState());
        const colors = [...store.getState().colors];

        this.setState({colors});

        store.subscribe(() => {
            this.setState({colors: [...store.getState().colors]});

            console.log('Colors count: ', store.getState().colors.length);
        });
    }

    componentWillUpdate() {
        store.subscribe(() => {
            let test1 = {name: 'test'};
            console.log(test1);
            this.setState({selectedColor: [...store.getState().selectedColor]})
        })
    }

    /**
     * Обработчик добавления цвета на форму.
     * 
     * @param {String} name Название цвета.
     * @param {String} code Код цвета.
     */
    handleAddColor = (name, code) => {
        const {untitledCount} = this.state;

        store.dispatch(ColorListActions.addColor(
            code,
            !!name ? name : `untitled_${untitledCount}`,
            1
        ));

        this.setState({
            untitledCount: !!name ? untitledCount : untitledCount + 1
        });
    }

    /**
     * Обработчик оценки цвета.
     * 
     * @param {Number} id Идентификатор
     */
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

        store.dispatch(ColorListActions.removeColor(id));
    }

    hadleColorClick = (selectedColor) => {
        store.dispatch(SelectedColorActions.selectColor(selectedColor));
    }

    render() {
        const {colors, selectedColor} = this.state;

        return (
            <div className="app-wrapper">
                <div className="color-list-section">
                    <ColorList
                        colorList={colors}
                        onColorClick={this.hadleColorClick}
                    />
                </div>

                <div className="color-constructor-section">

                </div>

                {!!selectedColor && (
                    <div className="color-info-section">
                        {selectedColor.map(color => 
                            <Color
                                color={color}
                                className="color-view"
                            />
                        )}
                    </div>
                )}
            </div>
        )
    }
}