import React from "react"

const FeedbackOptions = ({ options, handleClickFeedback }) => {
    return (
        <>
            {options.map((option => {
                return (
                    <button
                        key={option}
                        type="button"
                        onClick={() => handleClickFeedback(option)}>
                        {option}
                    </button>

                )
            }))}
        </>
    )
}

export default FeedbackOptions;