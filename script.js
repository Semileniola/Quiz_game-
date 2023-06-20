// Quiz Game

// Quiz questions
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        answer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Jupiter", "Venus", "Saturn"],
        answer: 0
    },
    {
        question: "What is the symbol for the chemical element iron?",
        options: ["Ir", "Fe", "In", "I"],
        answer: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Function to display the current question
function displayQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');

    const question = questions[currentQuestion];
    questionElement.innerHTML = question.question;

    console.log(">>>", question)
    // Clear options and result
    optionsElement.innerHTML = '';
    resultElement.innerHTML = '';
    

    // Display answer options
    for (let i = 0; i < question.options.length; i++) {
        const optionButton = document.createElement('button');
       
        optionButton.innerText = question.options[i];
        optionsElement.appendChild(optionButton);

    }

    console.log('>>>>', question.options)


    // Hide next button
    nextButton.style.display = 'none';
}

// Function to check the selected answer
function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');

    if (selectedOption === question.answer) {
        resultElement.textContent = 'Correct!';
        score++;
    } else {
        resultElement.textContent = 'Wrong!';
    }

    // Disable option buttons
    const options = document.querySelectorAll('#options button');
    options.forEach((option) => {
        option.disabled = true;
    });

    // Show next button
    nextButton.style.display = 'block';
}

// Function to display the next question
function nextQuestion() {
    const nextButton = document.getElementById('next');

    // Enable option buttons
    const options = document.querySelectorAll('#options button');
    options.forEach((option) => {
        option.disabled = false;
    });

    // Move to the next question
    currentQuestion++;

    // Check if it's the last question
    if (currentQuestion === questions.length) {
        const container = document.getElementById('container');
        container.innerHTML = `<h2>Quiz Completed</h2>
                               <p>Your score: ${score}/${questions.length}</p>`;
    } else {
        // Display the next question
        displayQuestion();
    }

    // Hide next button
    nextButton.style.display = 'none';
}

// Start the quiz
displayQuestion();
