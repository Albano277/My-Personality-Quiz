console.log("script.js connected!");

// Select all question blocks
let questionBlocks = document.querySelectorAll(".question-block");
console.log(questionBlocks);

// Store the user's answers
let userAnswers = {};

// Go through each question block
questionBlocks.forEach(function(questionBlock) {

    // Select the answer buttons inside this question
    let buttons = questionBlock.querySelectorAll(".answer-btn");

    // Go through each answer button
    buttons.forEach(function(button) {

        // Listen for a click on each answer button
        button.addEventListener("click", function() {

            // Remove selected class from all buttons in this question
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            // Highlight the clicked button
            button.classList.add("selected");

            // Get the question ID and selected answer
            let questionID = questionBlock.parentElement.id;
            let answer = button.dataset.answer;

            // Store the user's answer
            userAnswers[questionID] = answer;
            console.log(userAnswers);
        });
    });
});
// Get the Show Results button
let showResultsButton = document.getElementById("show-result");

// Calculate and display the final result
function displayResult() {

    let totalScore = 0;

    // Go through each saved answer
    Object.values(userAnswers).forEach(function(answer) {
        if (answer === "A") {
            totalScore += 1;
        } else if (answer === "B") {
            totalScore += 2;
        } else if (answer === "C") {
            totalScore += 3;
        } else if (answer === "D") {
            totalScore += 4;
        }
    });

    console.log("Total Score:", totalScore);

    // Store the final vacation result
    let result = "";

    if (totalScore <= 6) {
        result = "Relaxing Beach Vacation";
    } else if (totalScore <= 9) {
        result = "City Explorer Vacation";
    } else if (totalScore <= 12) {
        result = "Adventure and Nature Vacation";
    } else {
        result = "Food and Culture Vacation";
    }

    // Display the result on the page
    document.getElementById("result-text").textContent = result;

    // Show the result container
    document.getElementById("result-container").style.display = "block";
}

// Call displayResult when the Show Results button is clicked
showResultsButton.addEventListener("click", displayResult);