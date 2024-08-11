import React, { useState } from 'react'

const Flashcard = ({ flashcard,num }) => {
    const [flip, setFlip] = useState(false)
    console.log(flashcard)
    return (
        <div className={`card ${flip ? 'flip' : ''}`} onClick={() => setFlip(!flip)}>
            <div className="front">
              {num +1}.  {flashcard.ques}
                <div className="flashcard-options">
                    {flashcard.options.map((option,idx) => {
                        return <div className="flashcard-option" key={idx}>{idx+1}. {option}</div>
                    })}
                </div>
            </div>
            <div className="back">Answer : {flashcard.ans}</div>
        </div>
    )
}

export default Flashcard