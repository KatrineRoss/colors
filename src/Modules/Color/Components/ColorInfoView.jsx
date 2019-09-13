import * as React from 'react';
import {Color} from './Color';
import {Rating} from '../../Rating/Components/Rating';

export const ColorInfoView = ({code, name, rating, id, onRate, onRemove}) => {
    const handleRate = () => {
        onRate(id, rating);
    }

    const handleRemove = () => {
        onRemove(id);
    }

    return (
        <div className="color-block">
            <button
                type='button'
                className='small-btn'
                onClick={handleRemove}
            >
                <i className='fa fa-close'/>
            </button>

            <Color code={code} />

            <div className="color-name">{name}</div>

            <Rating
                totalStar={5}
                rating={rating}
                onRate={handleRate}
            />
        </div>
    )
}