import * as React from 'react';
import {Color} from './Color';
import {Rating} from '../../Rating/Components/Rating';

export const ColorInfoView = ({code, name, rating, id, onRate}) => {
    const handleRate = (rating) => {
        onRate(id, rating);
    }

    return (
        <div className="color-block">
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