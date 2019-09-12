import * as React from 'react';

export const Color = ({code, selectable, onColorSelect, className}) => {
    const handleSelectColor = (e) => {
        onColorSelect(e.target.value);
    }

    return (
        <React.Fragment>
            <div className={className ? `color ${className}` : 'color'} style={{background: !!code ? code : '#ffffff'}}>
                {!!selectable && (
                    <input
                        type="color"
                        onChange={handleSelectColor}
                        className="pick-color"
                    />
                )}
            </div>
        </React.Fragment>
    )
}