import styled from 'styled-components';
import PropTypes from 'prop-types';

const SectionContainer = styled.section`
    max-width: 500px;
    padding: 50px;
`;

export const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <h1>{title}</h1>
            {children}
        </SectionContainer>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};