import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>

            <p>Positive feedback: {positiveFeedback} %</p>

        </>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};