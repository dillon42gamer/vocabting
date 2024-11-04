let totalQuestions = 0;
let correctAnswers = 0;

function updatePercentage() {
    const percentageDisplay = document.getElementById('percentageDisplay');
    const percentage = totalQuestions === 0 ? 0 : (correctAnswers / totalQuestions) * 100;
    percentageDisplay.textContent = `Percentage: ${percentage.toFixed(2)}%`;
}

document.getElementById('quizSubmit').addEventListener('click', function() {
    totalQuestions++;
    const userAnswer = document.getElementById('quizInput').value.trim();
    if (userAnswer.toLowerCase() === currentWord.toLowerCase()) {
        correctAnswers++;
    }
    updatePercentage();
});
