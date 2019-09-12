import * as React from 'react';
import PropTypes from 'prop-types';
import {Star} from './Star';

export class Rating extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            rating: 1
        }
    }

    handleStar = (rating) => {
        const {onRate} = this.props;

        onRate(++rating);
    }

    render() {
        const {totalStar, rating} = this.props;

        return (
            <div className="star-rating">
                {!!rating && [...Array(totalStar)].map((star, index) =>
                    <Star
                        key={index}
                        selected={rating - 1 >= index}
                        index={index}
                        onStar={this.handleStar}
                    />
                )}
            </div>
        )
    }
}

Rating.propTypes = {
    rating: PropTypes.number,
    totalStar: PropTypes.number.isRequired,
    onRate: PropTypes.func.isRequired
}