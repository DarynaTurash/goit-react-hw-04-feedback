import styled from 'styled-components';
import PropTypes from 'prop-types';



const ListContainer = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const Button = styled.button`
    padding: 10px;
    min-width: 100px;
    border: none;
    border-radius: 6px;
    background-color: #CCEEEA;
    font-size: 15px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 250ms cubic-bezier(.17,.67,.83,.67);

    &:hover {
        background-color: #5DABA2;
        color: white;
        transform: scale(1.1);  
    }
    `;


export const FeedbackOptions = ( {options, onLeaveFeedback} ) => {
    return (
            <ListContainer>
            {options.map(option => 
            <li key={option}><Button type="button" onClick={() => onLeaveFeedback(option)}>{option}</Button></li>
            )}
            </ListContainer>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}