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
    good: PropTypes.string.isRequired,
    neutral: PropTypes.string.isRequired,
    bad: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    positiveFeedback: PropTypes.string.isRequired,
}