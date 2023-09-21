document.getElementById("checkGuess").addEventListener("click", function () {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const guessedNumber = parseInt(document.getElementById("guess").value);
    const gameResultElement = document.getElementById("gameResult");

    if (guessedNumber === randomNumber) {
        gameResultElement.innerText = "Wihh,, bener cuyy  " + randomNumber;
        gameResultElement.style.color = "green";
    } else {
        gameResultElement.innerText = "Yaahh,, salah :) \n Yang Benar Adalah " + randomNumber;
        gameResultElement.style.color = "red";
    }

    // document.getElementById("guess").disabled = true;
    // document.getElementById("checkGuess").disabled = true;
});
