import * as React from 'react';
import {Color} from './Color';

/**
 * Отображает список цветов.
 *
 * @param {[{code, name, id, rating}]} colorList Список цветов.
 * @param {Function} onColorClick Колбэк на клак по цвету. 
 */
export const ColorList = ({colorList, onColorClick}) => {
    return (
        <div className="color-list">
            {
                colorList.map((color) => (
                    <Color
                        color={color}
                        onClick={onColorClick}
                    />
                ))
            }
        </div>
    )
}