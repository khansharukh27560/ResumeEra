import React, { useState } from 'react';
import Popup from 'reactjs-popup';

const quizData = [
    {
        question: "What is the capital of India?",
        options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        answer: "Delhi",
        category: "Geography"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Venus", "Mars", "Jupiter"],
        answer: "Mars",
        category: "Science"
    },
    {
        question: "Who wrote the play 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
        answer: "William Shakespeare",
        category: "Literature"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale",
        category: "Biology"
    },
    {
        question: "Which language is primarily used for web development?",
        options: ["Python", "C++", "JavaScript", "Java"],
        answer: "JavaScript",
        category: "Technology"
    }
];

const NewFile = () => {
    const [quiz] = useState(quizData);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    // Store selected option index for each question
    const [selectedOptions, setSelectedOptions] = useState(Array(quizData.length).fill(null));

    const handleClickNext = () => {
        if(currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            // console.log('currentQuestionIndex:-', ?currentQuestionIndex)
            // console.log('quiz[currentQuestionIndex]:-',quiz[currentQuestionIndex])
        } 
    }


    const getResult = () =>{
        let correct=0;
        let wrong=0;
        quizData.forEach((q,index)=>{
            
            if(selectedOptions === -1)
                return
            q.options[selectedOptions[index]] === q.answer ? correct++ : wrong++;
        })
        return {correct, wrong}
    }
    const {correct, wrong} = getResult();

    // Set selected option index for current question
    const handleChange = (optionIndex) => {
        setSelectedOptions(prev => {
            const updated = [...prev];
            updated[currentQuestionIndex] = optionIndex;
            return updated;
        });
    }

    const handleBack = () =>{
        if(currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        } 
    }

    return (
        <div>
            <h1>Quiz App</h1>
            <h2>Q{currentQuestionIndex + 1}: {quiz[currentQuestionIndex].question}</h2>
            <ol>
                {quiz[currentQuestionIndex].options.map((option, index) => (
                    <li key={index}>
                        <input
                            type="radio"
                            name={`option-${currentQuestionIndex}`}
                            value={option}
                            onChange={() => handleChange(index)}
                            checked={selectedOptions[currentQuestionIndex] === index}
                            style={{width:'fit-content', margin:'auto'}}
                        />
                        {option}
                    </li>
                ))}
            </ol>
            <button
                style={{
                    display: currentQuestionIndex === 0 ? 'none' : 'block',
                    cursor: 'pointer',
                }}
                onClick={handleBack}
            >
                Previous question
            </button>
            {currentQuestionIndex === quiz.length - 1 ? (
                <Popup
            
                    trigger={
                        <button
                            style={{
                                cursor: 'pointer',
                            }}
                        >
                            Submit
                        </button>
                    }
                    position="right center"
                    modal
                >
                    {close => (
                        <div>
                            <h3>Quiz Submitted!</h3>
                            <div>
                                <p>Correct Answers: {correct}</p>
                                <p>Wrong Answers: {wrong}</p>
                                <p>Total Questions: {quiz.length}</p>
                                <p>Percentage: {(correct / quiz.length) * 100}%</p>
                            </div>
                            <button onClick={close}>Close</button>
                        </div>
                    )}
                </Popup>
            ) : (
                <button
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={handleClickNext}
                >
                    Next
                </button>
            )}
        </div>
    );
};
export default NewFile;
