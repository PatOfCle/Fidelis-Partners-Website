import React, { useEffect, useState } from 'react';

const words = ["Inventory", "Scheduling", "Order Management", "Account Management", "Purchasing", "Order Placement", "EDI", "Multi-Level BOMs", "Capacity Planning", "MRP", "Production", "Business Intelligence", "Time and Attendance", "Bar Coding", "Quality", "Quoting", "Project Management", "Plant Floor Automation", "Collaborative Workflows", "Shop Maintenance", "Machine Integration"];

function shuffleArray(array) {
    // Create a copy of the array and shuffle it using Fisher-Yates algorithm
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function WordGenerator() {
    const [shuffledWords, setShuffledWords] = useState(shuffleArray(words));
    const [currentWordIndex, setCurrentWordIndex] = useState(-1);
    const [currentWord, setCurrentWord] = useState('');
    const [currentLetterIndex, setCurrentLetterIndex] = useState(0);

    const generateWord = () => {
        if (currentWordIndex < 0 || currentLetterIndex < shuffledWords[currentWordIndex].length) {
            setCurrentWord(prevWord => prevWord + shuffledWords[currentWordIndex][currentLetterIndex]);
            setCurrentLetterIndex(currentLetterIndex + 1);
        } else {
            setTimeout(() => {
                setCurrentWord('');
                setCurrentLetterIndex(0);
                setCurrentWordIndex((currentWordIndex + 1) % shuffledWords.length); // Loop through shuffled words
            }, 1350); // Delay before moving to the next word
        }
    };

    useEffect(() => {
        const timer = setTimeout(generateWord, 80); // Adjust the delay as needed for letter animation

        return () => clearTimeout(timer);
    }, [currentWord, currentLetterIndex, currentWordIndex, shuffledWords]);

    useEffect(() => {
        // Start generating the first word when the component mounts
        setCurrentWordIndex(0);
    }, []);

    return (
        <div className="word-container">
            <div className="word-display">{currentWord}</div>
            {/* <div className="word-display">word</div> */}
        </div>
    );
}

export default WordGenerator;
