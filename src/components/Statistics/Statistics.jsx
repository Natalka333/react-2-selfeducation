import React from "react";
import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticItem } from './Statistics.styled';


const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
    return (
        <StatisticsContainer>
            <pStatisticItem>Good: {good}</pStatisticItem>

            <pStatisticItem>Neutral: {neutral}</pStatisticItem>

            <pStatisticItem>Bad:{bad}</pStatisticItem>

            <pStatisticItem>Total:{total}</pStatisticItem>

            <StatisticItem>Positive feedback: {positiveFeedback} %</StatisticItem>

        </StatisticsContainer>
    )
}

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
};