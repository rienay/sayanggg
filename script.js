const messages = [
    "Ciusss?",
    "kok gamauuu siii",
    "Aku mw coklatt",
    "kamu gamauu??",
    "Satu ajaaa",
    "Yahh sediiii.",
    "Sangat sedih akutuu",
    "satuu coklatt ajaaa",
    "yawda dehhh",
    "coklattttt ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}