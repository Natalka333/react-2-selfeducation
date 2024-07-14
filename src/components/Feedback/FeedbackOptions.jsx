import React from "react"
import PropTypes from 'prop-types';
import { ButtonFeedback, ContainerFeedback } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, handleClickFeedback }) => {
    return (
        <>
            <ContainerFeedback>
                {options.map((option => {
                    return (

                        <ButtonFeedback
                            key={option}
                            type="button"
                            onClick={() => handleClickFeedback(option)}>
                            {option}
                        </ButtonFeedback>



                    )
                }))}
            </ContainerFeedback>
        </>
    )
}

export default FeedbackOptions;


FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    handleClickFeedback: PropTypes.func.isRequired,
}