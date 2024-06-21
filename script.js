document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const submitButton = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result');
    const totalQuestions = 100;
    
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateQuiz(questions, quizContainer) {
        shuffle(questions);
        let output = [];
        let currentQuestions = questions.slice(0, totalQuestions);

        currentQuestions.forEach((question, index) => {
            const options = question.options.map((option, i) =>
                `<label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>`
            ).join('');

            output.push(
                `<div class="question">
                    <h3>${index + 1}. ${question.question}</h3>
                    <div class="options">
                        ${options}
                    </div>
                </div>`
            );
        });

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultContainer) {
        const answerContainers = quizContainer.querySelectorAll('.options');
        let numCorrect = 0;

        questions.slice(0, totalQuestions).forEach((question, index) => {
            const answerContainer = answerContainers[index];
            const selector = `input[name=question${index}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            if (userAnswer === question.answer) {
                numCorrect++;
                answerContainer.style.color = 'green';
            } else {
                answerContainer.style.color = 'red';
            }
        });

        resultContainer.innerHTML = `${numCorrect} out of ${totalQuestions} correct`;
    }

    generateQuiz(questions, quizContainer);

    submitButton.addEventListener('click', () => {
        showResults(questions, quizContainer, resultContainer);
    });
});
