document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("quiz-container");
    const submitButton = document.getElementById("submit-answer");
    const feedbackDiv = document.getElementById("feedback");

    function checkAnswer() {
        const correctAnswer = "4";
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        if (!selectedOption) {
            feedbackDiv.style.display = "block";
            feedbackDiv.textContent = "Please select an answer!";
            feedbackDiv.style.color = "#dc3545";
            return;
        }

        const userAnswer = selectedOption.value;

        feedbackDiv.style.display = "block";

        if (userAnswer === correctAnswer) {
            feedbackDiv.textContent = "Correct! Well done.";
            feedbackDiv.style.color = "#28a745";
        } else {
            feedbackDiv.textContent = "That's incorrect. Try again!";
            feedbackDiv.style.color = "#dc3545";
        }
    }

    submitButton.addEventListener("click", checkAnswer);
});
