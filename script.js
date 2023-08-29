let questions = [
    {
        "question": "Who invented HTML?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Homer Simpson",
        "right_answer": 3
    },
    {
        "question": "What is the name of the alien duo who are often seen in the series?",
        "answer_1": "Bort and Cort",
        "answer_2": "Zog and Blip",
        "answer_3": "Xur and Yar",
        "answer_4": "Kodos and Kang",
        "right_answer": 4
    },
    {
        "question": "In 'Lisa the Vegetarian' (Season 7, Episode 5), who helps Lisa embrace her vegetarian lifestyle?",
        "answer_1": "Paul McCartney",
        "answer_2": "John Lennon",
        "answer_3": "Ringo Starr",
        "answer_4": "George Harrison",
        "right_answer": 1
    },
    {
        "question": "In 'The Itchy & Scratchy & Poochie Show' (Season 8, Episode 14), which character is added to the Itchy & Scratchy cartoon show to boost its ratings?",
        "answer_1": "Roy",
        "answer_2": "Poochie",
        "answer_3": " Scratchy Jr.",
        "answer_4": "Snappy",
        "right_answer": 2
    },
    {
        "question": "What business does Homer start after his car is destroyed in a snowstorm?",
        "answer_1": "Snow shoveling service",
        "answer_2": "Ice cream truck",
        "answer_3": "Snow cone stand",
        "answer_4": "Snowmobile rental",
        "right_answer": 1
    },
    {
        "question": "In 'Radioactive Man' (Season 7, Episode 2), which role does Milhouse land in the film adaptation of the Radioactive Man comic?",
        "answer_1": "Radioactive Man",
        "answer_2": "Fallout Boy",
        "answer_3": "Dr. Crab",
        "answer_4": " Captain Squid",
        "right_answer": 2
    },
];

let currentQuestion = 6;

function init() {
    document.getElementById('total-questions').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('whole-card').innerHTML = `
        <div class="card quiz-card">
        <h3 class="finished">Finished quiz!</h3>
        <img src="img/trophy.png" class="trophy-image">
        <div class="card-body">
            <h5 class="card-title align-text"> You answered _ out of ${questions.length} questions correctly </h5>
            `;
    } else {
        document.getElementById('current-question').innerHTML = currentQuestion + 1;
        document.getElementById('question-text').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
}