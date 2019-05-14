const UI = {
    loadingBar: document.querySelector('.loading .bar'),
    wordElement: document.querySelector('.word'),
    resultMessage: document.querySelector('h2'),
    difficultyButtons: {
        buttonEasy: document.querySelector('.difficulty .easy'),
        buttonMedium: document.querySelector('.difficulty .medium'),
        buttonHard: document.querySelector('.difficulty .hard')
    }
};

const gameData = {
    currentWord: 'balionas',
    progress: 0,
    difficulty: 'easy',
    possibleWords: ['balionas', 'stalas', 'projektorius', 'lsd', 'pica', 'kebabas', 'alus'],
    looseResultMessage: ['Failure!', 'You are as smart as a potato', 'Congratulations, you are mentally challenged',
        'A kindergartner is smarter then you', 'You are a disgrace', 'You are a waste of oxygen'],
    winResultMessage: {
        easy: ['Oh wow, you are as smart as a kindergartner', 'Congratulations, you are almost as smart as a chimpanzee',
            'That\'s adorable'],
        medium: ['I guess you studied in school', 'Your mother is a kind lady', 'Congratulations, you actually won'],
        hard: ['Bullshit! You cheated!', 'Go buy a lottery ticket', 'Are you a Wizard?!', 'You lucky bastard']
    }

};

class Game {
    constructor() {
        UI.difficultyButtons.buttonEasy.addEventListener('click', this.setDifficulty.bind(this));
        UI.difficultyButtons.buttonMedium.addEventListener('click', this.setDifficulty.bind(this));
        UI.difficultyButtons.buttonHard.addEventListener('click', this.setDifficulty.bind(this));

        this.generateNewWord();

        document.addEventListener('keypress', this.checkKey.bind(this));

        setInterval(() => {
            this.addProgress(0.3);
            this.checkGameState();
        }, 100)
    }

    setDifficulty(e) {
        let pressedButton = e.target.className;

        if (pressedButton.includes('easy')) {
            gameData.difficulty = 'easy';

            UI.difficultyButtons.buttonEasy.classList.remove('inactive');
            UI.difficultyButtons.buttonEasy.classList.add('active');

            UI.difficultyButtons.buttonMedium.classList.remove('active');
            UI.difficultyButtons.buttonMedium.classList.add('inactive');

            UI.difficultyButtons.buttonHard.classList.remove('active');
            UI.difficultyButtons.buttonHard.classList.add('inactive');

        } else if (pressedButton.includes('medium')) {
            gameData.difficulty = 'medium';

            UI.difficultyButtons.buttonEasy.classList.remove('active');
            UI.difficultyButtons.buttonEasy.classList.add('inactive');

            UI.difficultyButtons.buttonMedium.classList.remove('inactive');
            UI.difficultyButtons.buttonMedium.classList.add('active');

            UI.difficultyButtons.buttonHard.classList.remove('active');
            UI.difficultyButtons.buttonHard.classList.add('inactive');

        } else if (pressedButton.includes('hard')) {
            gameData.difficulty = 'hard';

            UI.difficultyButtons.buttonEasy.classList.remove('active');
            UI.difficultyButtons.buttonEasy.classList.add('inactive');

            UI.difficultyButtons.buttonMedium.classList.remove('active');
            UI.difficultyButtons.buttonMedium.classList.add('inactive');

            UI.difficultyButtons.buttonHard.classList.remove('inactive');
            UI.difficultyButtons.buttonHard.classList.add('active');
        }

    }

    generateLetters() {
        UI.wordElement.innerHTML = "";
        for (let i = 0; i < gameData.currentWord.length; i++) {
            UI.wordElement.innerHTML += `<div class="letter"></div>`;
        }
    }

    checkKey(e) {
        let letterFound = false;
        for (let i = 0; i < gameData.currentWord.length; i++) {
            let letter = gameData.currentWord[i];

            if (letter === e.key) {
                UI.wordElement.children[i].innerHTML = letter;
                letterFound = true;
            }
        }
        if (!letterFound) {
            this.addProgress(10);
        }
        this.checkGameState();
    }

    checkGameState() {
        if (this.gameLost()) {
            let randomIndex = Math.floor(Math.random() * gameData.looseResultMessage.length);
            UI.resultMessage.innerHTML = gameData.looseResultMessage[randomIndex];
            setTimeout(this.generateNewWord(),3000);
        }

        if (this.gameWon()) {

            let randomIndex = Math.floor(Math.random() * gameData.looseResultMessage.length);

            if (gameData.difficulty === 'easy'){
                UI.resultMessage.innerHTML = gameData.winResultMessage.easy[randomIndex];
            } else if (gameData.difficulty === 'medium'){
                UI.resultMessage.innerHTML = gameData.winResultMessage.medium[randomIndex];
            } else if (gameData.difficulty === 'hard'){
                UI.resultMessage.innerHTML = gameData.winResultMessage.hard[randomIndex];
            }
            setTimeout(this.generateNewWord(),3000);
        }

    }

    addProgress(amount) {
        gameData.progress = Math.min(100, gameData.progress + amount);
        this.drawProgress();
    }

    drawProgress() {
        UI.loadingBar.style.width = `${gameData.progress}%`;
    }

    gameLost() {
        return gameData.progress === 100;
    }

    gameWon() {
        for (let letter of UI.wordElement.children) {
            if (letter.innerHTML === '') {
                return false;
            }
        }
        return true;
    }

    generateNewWord() {
        const randomWordIndex = Math.floor(Math.random() * gameData.possibleWords.length);
        gameData.currentWord = gameData.possibleWords[randomWordIndex];
        gameData.progress = 0;

        UI.resultMessage.innerHTML = "";
        this.drawProgress();
        this.generateLetters();
    }


}

new Game();




