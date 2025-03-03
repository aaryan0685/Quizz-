const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Lisbon",
        correct: "c",
    },
    {
        question: "Which language is primarily spoken in Brazil?",
        a: "Spanish",
        b: "Portuguese",
        c: "English",
        d: "French",
        correct: "b",
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultDisplay = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    quiz.innerHTML = `
        <div class="question">${currentQuestion.question}</div>
        <label>
            <input type="radio" name="answer" value="a"> ${currentQuestion.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b"> ${currentQuestion.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c"> ${currentQuestion.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d"> ${currentQuestion.d}
        </label>
    `;
}

function getSelectedAnswer() {
    const answers = document.querySelectorAll('input[name="answer"]');
    for (const answer of answers) {
        if (answer.checked) {
            return answer.value;
        }
    }
    return null;
}

function showResult() {
    resultDisplay.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

submitButton.addEventListener("click", () => {
    const answer = getSelectedAnswer();
    if (answer) {
        if (answer === quizData[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            quiz.innerHTML = "";
            submitButton.style.display = "none";
            showResult();
        }
    } else {
        alert("Please select an answer!");
    }
});

// Load the first question
loadQuestion();