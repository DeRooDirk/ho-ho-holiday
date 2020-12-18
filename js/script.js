const nextButton = document.getElementById('next-btn');
const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');

let shuffledQuestions, currentQuestionIndex, correctCounter = 0;

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {
    console.log('Started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    correctCounter = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedbutton = e.target;
    const correct = selectedbutton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (selectedbutton.dataset = correct) {
        correctCounter++;
        console.log(correctCounter);
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        //adding page links
        goToPages();
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
    question: 'Never have I ever fallen asleep in class and woken up in a puddle of drool!',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ]
},
{
    question: 'Never have I ever told Bert what I really thought of an assignment!',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ]
},
{
    question: 'Never I have I ever picked my nose and wiped on the working table!',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ]
},
{
    question: 'Never have I ever given a funny nickname to Bert!',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ]
},
{
    question: 'Never have I ever copied from someone else repo/codePen/somewhere else!',
    answers: [
        { text: 'Yes', correct: true },
        { text: 'No', correct: false }
    ]
},
];

function restart() {
    startButton.innerText = 'Restart to play again!';
    startButton.classList.remove('hide');
}

const allPages = 'extra.html';

var delayInMilliseconds = 6000; //1 second


function goToPages() {
    if (!correctCounter) {
        startButton.innerText = 'You are VERY GOOD this year! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/extra.html', '_blank');
            restart();
        }, delayInMilliseconds);

    } else if (correctCounter === 1) {
        startButton.innerText = 'You are GOOD this year! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/recipe.html', '_blank');
            restart();
        }, delayInMilliseconds);
    } else if (correctCounter === 2) {
        startButton.innerText = 'You are very NAUGHTY this year! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/twitchTv.html', '_blank');
            restart();
        }, delayInMilliseconds);
    } else if (correctCounter === 3) {
        startButton.innerText = 'You are BAD this year! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/diceGame.html', '_blank');
            restart();
        }, delayInMilliseconds);
    } else if (correctCounter === 4) {
        startButton.innerText = 'You are VERY BAD this year! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/music-tv.html', '_blank');
            restart();
        }, delayInMilliseconds);
    }
    else if (correctCounter === 5) {
        startButton.innerText = 'BERT NEEDS TO TALK TO YOU! Click to get your gift!';
        startButton.classList.remove('hide');
        setTimeout(function () {
            window.open('./html/bonusGame.html', '_blank');
            restart();
        }, delayInMilliseconds);
    } else {
        startButton.innerText = 'You clicked the answer button more than once! Restart!!';
        startButton.classList.remove('hide');
    }
}
