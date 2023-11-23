import React, { useEffect, useState } from 'react';

const words = [
    "Account Management",
    "Accounting",
    "Bar Coding",
    "Business Intelligence",
    "Capacity Planning",
    "Collaborative Workflows",
    "Customer Relationship Management",
    "EDI",
    "Engineer to Order",
    "Inventory",
    "Machine Integration",
    "Mobile Solutions",
    "MRP",
    "Multi-Level BOMs",
    "Order Management",
    "Plant Floor Automation",
    "Production",
    "Project Management",
    "Purchasing",
    "Quality",
    "Quoting",
    "Scheduling",
    "Shop Maintenance",
    "Shipping and Logistics",
    "Time and Attendance",
    "Tool Room",
    "Vendor Management"
];

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
