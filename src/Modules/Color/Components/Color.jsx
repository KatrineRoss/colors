import * as React from 'react';

/**
 * Отображает превью цвета.
 *
 * @param {code, name, id, rating} color Информация о цвете.
 * @param {Function} onClick Колбэк на клик по цвету.
 * @param {string} className Имя класса. 
 */
export const Color = ({color, onClick, className}) => {
    const handleClick = () => {
        onClick(color);
    }

    return (
        <React.Fragment>
            <div
                className={className ? `color ${className}` : 'color'}
                style={{background: !!color && !!color.code ? color.code : '#b5f8ff'}}
                onClick={handleClick}
            ></div>
        </React.Fragment>
    )
}