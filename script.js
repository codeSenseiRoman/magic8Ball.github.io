const possibleAnswers = [
    'Yes!',
    'Of course!',
    'For sure!',
    'Why Not!',
    'No way José!',
    "I'd love to, BUT I can't!",
    'No!',
    'Nope!',
    'Oh heck no!',
    'NEVER!',
]

const magic8Ball = document.querySelector('#ballBackground');
const textArea = document.querySelector('#textArea');
magic8Ball.addEventListener('click', function(event) {
    const randomNumber = Math.floor(Math.random() * 10);
    const randomPick = possibleAnswers[randomNumber];
    if(randomNumber > 0 && randomNumber <= 4 ||
        randomNumber >= 8) {
            textArea.style.fontSize = '2em';
        } else if(randomNumber === 5) {
            textArea.style.fontSize = '1em';
        }
        else {
            textArea.style.fontSize = '4em';
        }
    textArea.textContent = randomPick;

})