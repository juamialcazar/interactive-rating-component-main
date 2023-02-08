let score;

function updateScore(x) {
    score = x;
    console.log(score);
}

function submitScore(x) {
    document.getElementById("rtg-wrap").style.display = "none";
    document.getElementById("score-show").innerHTML = `You selected ${score} out of 5`;
    document.getElementById("score-wrap").style.display = "flex";
}