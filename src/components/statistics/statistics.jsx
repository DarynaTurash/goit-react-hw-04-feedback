import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h2`
    font-size: 25px;
`;

const StatisticList = styled.ul`
list-style: none;
`;


export const Statistics = ( {good, neutral, bad, total, positivePercentage} ) => {
    return (
      <div>
        <Title>Statictics</Title>
        <StatisticList>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </StatisticList>
      </div>  
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired,
};