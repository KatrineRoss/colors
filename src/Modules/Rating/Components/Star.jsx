import * as React from 'react';

export const Star = ({selected, onStar, index}) => {
    return (
        <div 
            className={selected ? 'selected star' : 'star'}
            onClick={() => {onStar(index)}}
        >
        </div>
    );
}