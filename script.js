const questionSequence = [
    CONFIG.first,
    CONFIG.second,
    CONFIG.third
];

let currentIndex = 0;

const questionEl = document.getElementById("story-question");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const nextBtn = document.getElementById("next-btn");
const loveMeter = document.getElementById("love-meter");
const loveMessage = document.getElementById("love-message");

function loadQuestion(index) {
    const q = questionSequence[index];
    if(!q) return;
    questionEl.textContent = q.text;
    yesBtn.textContent = q.yesBtn || "Yes";
    noBtn.textContent = q.noBtn || "No";
    nextBtn.textContent = q.nextBtn || "Next";
}

yesBtn.addEventListener("click", () => {
    loveMeter.value = 100;
    loveMessage.textContent = CONFIG.loveMessages.extreme;
});

noBtn.addEventListener("click", () => {
    loveMeter.value = 0;
    loveMessage.textContent = CONFIG.first.secretAnswer || "Hmm...";
});

nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex >= questionSequence.length) currentIndex = 0;
    loadQuestion(currentIndex);
});

loadQuestion(currentIndex);
