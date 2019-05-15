const UI = {
    loadingBar: document.querySelector('.loading .bar'),
    wordElement: document.querySelector('.word'),
    resultMessage: document.querySelector('h2'),
    gameAudio: document.getElementById('gameAudio'),
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
    difficultyTimer: function (difficulty) {
        if (difficulty === 'easy') {
            return 0.1;
        } else if (difficulty === 'medium') {
            return 0.3;
        } else if (difficulty === 'hard') {
            return 0.5;
        }
    },
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

const gameSounds = {
    audioContext: a = new AudioContext(),
    beep: function beep(vol, freq, duration) {
        let v = a.createOscillator();
        let u = a.createGain();
        v.connect(u);
        v.frequency.value = freq;
        v.type = "sine";
        u.connect(a.destination);
        u.gain.value = vol * 0.01;
        v.start(a.currentTime);
        v.stop(a.currentTime + duration * 0.001);
    },
    boop: function beep(vol, freq, duration) {
        let v = a.createOscillator();
        let u = a.createGain();
        v.connect(u);
        v.frequency.value = freq;
        v.type = "triangle";
        u.connect(a.destination);
        u.gain.value = vol * 0.01;
        v.start(a.currentTime);
        v.stop(a.currentTime + duration * 0.001);
    }
};

var constantGameStateChecker;

class Game {

    // var constantGameStateChecker = setInterval(()=>{this.checkGameState();},200);

    constructor() {
        this.generateNewWord();
        UI.difficultyButtons.buttonEasy.addEventListener('click', this.setDifficulty.bind(this));
        UI.difficultyButtons.buttonMedium.addEventListener('click', this.setDifficulty.bind(this));
        UI.difficultyButtons.buttonHard.addEventListener('click', this.setDifficulty.bind(this));

        document.addEventListener('keypress', this.checkKey.bind(this));

        /*
                setInterval(() => {
                    // this.addProgress(0.3);
                    this.checkGameState();
                }, 100)
        */


    }


    setDifficulty(e) {
        gameSounds.beep(10, 261.63, 100);
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
        this.generateNewWord();

    }

    generateLetters() {
        UI.wordElement.innerHTML = "";
        for (let i = 0; i < gameData.currentWord.length; i++) {
            UI.wordElement.innerHTML += `<div class="letter"></div>`;
        }
    }

    checkKey(e) {
        gameSounds.boop(10, 87.31, 150);
        let letterFound = false;
        for (let i = 0; i < gameData.currentWord.length; i++) {
            let letter = gameData.currentWord[i];

            if (letter === e.key) {
                UI.wordElement.children[i].innerHTML = letter;
                letterFound = true;
            }
        }

        !letterFound && gameData.difficulty === 'easy' ? this.addProgress(10) : false;
        !letterFound && gameData.difficulty === 'medium' ? this.addProgress(20) : false;
        !letterFound && gameData.difficulty === 'hard' ? this.addProgress(50) : false;
        this.checkGameState();
    }

    checkGameState() {
        if (this.gameLost()) {
            clearInterval(constantGameStateChecker);
            UI.gameAudio.src = 'sounds/lose.mp3';
            UI.gameAudio.load();
            UI.gameAudio.play();
            const randomIndex = Math.floor(Math.random() * gameData.looseResultMessage.length);
            UI.resultMessage.innerHTML = gameData.looseResultMessage[randomIndex];
            setTimeout(() => {
                this.generateNewWord();
                UI.gameAudio.pause();
                clearTimeout();
            }, 4000);
        } else if (this.gameWon()) {
            clearInterval(constantGameStateChecker);
            UI.gameAudio.src = 'sounds/win.mp3';
            UI.gameAudio.load();
            UI.gameAudio.play();
            if (gameData.difficulty === 'easy') {
                const randomIndex = Math.floor(Math.random() * gameData.winResultMessage.easy.length);
                UI.resultMessage.innerHTML = gameData.winResultMessage.easy[randomIndex];
            } else if (gameData.difficulty === 'medium') {
                const randomIndex = Math.floor(Math.random() * gameData.winResultMessage.medium.length);
                UI.resultMessage.innerHTML = gameData.winResultMessage.medium[randomIndex];
            } else if (gameData.difficulty === 'hard') {
                const randomIndex = Math.floor(Math.random() * gameData.winResultMessage.hard.length);
                UI.resultMessage.innerHTML = gameData.winResultMessage.hard[randomIndex];
            }
            setTimeout(() => {
                this.generateNewWord();
                clearTimeout();
            }, 4000);

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
        clearInterval(constantGameStateChecker);
        gameData.progress = 0;
        this.drawProgress();
        const randomWordIndex = Math.floor(Math.random() * gameData.possibleWords.length);
        gameData.currentWord = gameData.possibleWords[randomWordIndex];
        this.generateLetters();
        UI.resultMessage.innerHTML = "";
        constantGameStateChecker = setInterval(() => {
            this.addProgress(gameData.difficultyTimer(gameData.difficulty));
            this.checkGameState();
        }, 500);
    }


}


new Game();




