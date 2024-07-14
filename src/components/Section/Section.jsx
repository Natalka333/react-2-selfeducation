import React from "react";
import PropTypes from 'prop-types';
import { SectionContainer, SectionTitle } from './Section.styled';

const Section = ({ title, children }) => {
    return (
        <SectionContainer>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </SectionContainer>
    )
}

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
}