const screenOne = document.querySelector(".screen1");
const screenTwo = document.querySelector(".screen2");
const screenThree = document.querySelector(".screen3");
const screenFour = document.querySelector(".screen4");
const resultScreenOne = document.querySelector(".result_screen1")
const playButton = document.querySelector(".play_button");
const gameMainContainer = document.querySelector(".game_main_container");
const gameMainContainer2 = document.querySelector(".game_main_container2");
const gameMainContainer3 = document.querySelector(".game_main_container3");
const checkButton = document.querySelector(".check_btn");
const checkButton2 = document.querySelector(".check_btn2");
const checkButton3 = document.querySelector(".check_btn3");
const tryAgainButton = document.querySelector(".try_again_btn");
const tryAgainButton2 = document.querySelector(".try_again_btn2");
const loseContainer = document.querySelector(".lose_container");
const loseContainer2 = document.querySelector(".lose_container2");
const loseContainer3 = document.querySelector(".lose_container3");
const winContainer = document.querySelector(".win_container");
const winContainer2 = document.querySelector(".win_container2");
const winContainer3 = document.querySelector(".win_container3");
const nextButton = document.querySelector(".next_btn");
const nextButton2 = document.querySelector(".next_btn2");
const resultContainer = document.querySelector(".result_container");
const resultContainer2 = document.querySelector(".result_screen2");
const resultContainer3 = document.querySelector(".result_screen3");
const resetBtn = document.querySelector(".reset_btn");
const resetBtn2 = document.querySelector(".reset_btn2");
const resetBtn3 = document.querySelector(".reset_btn3");

let randomThreeLetterWord = "";
let fillIndex = 0; 
let filledInputs = []; 
let level = 1;

// window.onload = function () {
//     const audio = document.getElementById("myAudio");
//     audio.loop = true;
//     audio.play().catch((error) => {
//         console.error("Error playing audio:", error);
//     });
// };

const threeLetterWords = ["CAT", "DOG", "SUN", "CAR", "HAT", "FOX", "BAT", "RED", "BOX", "PEN"];
const fourLetterWords = ["LION", "FISH", "BIRD", "TREE", "FLOW", "SNOW", "WIND", "MOON", "STAR", "ROCK"];
const fiveLetterWords = ["EAGLE", "APPLE", "RIVER", "STONE", "PLANT", "WATER", "CLOUD", "MOUNT", "BRAVE", "GRASS"];
let originalWord = "";

function shuffleWord(word) {
    const wordArray = word.split('');
    for (let i = wordArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    return wordArray.join('');
}
function getRandomThreeWord() {
    const randomIndex = Math.floor(Math.random() * threeLetterWords.length);
    originalWord = threeLetterWords[randomIndex];

    let shuffledWord = shuffleWord(originalWord);

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }
    const randomTextBox = document.querySelector(".random_text_box");
    randomTextBox.innerHTML = ''; // Clear previous inputs

    // Create shuffled inputs
    for (let i = 0; i < shuffledWord.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("randomInputBox", "animate__animated", i % 2 !== 0 ? "animate__fadeInDown" : "animate__fadeInUp");
        input.value = shuffledWord[i];
        input.maxLength = 1;
        input.readOnly = true;

        // Add click event to fill blank inputs one by one
        input.addEventListener("click", () => {
            fillBlankInput(input.value);
            input.style.display = 'none';
        });

        randomTextBox.appendChild(input);
    }

    // Reset the fill index for new words
    fillIndex = 0; 
    filledInputs = []; // Reset filled inputs for new words
    fillInputDiv(); // Reset input div with empty values
}



function fillInputDiv() {
    const giveInputs = document.querySelectorAll(".give_input");
    for (let i = 0; i < giveInputs.length; i++) {
        giveInputs[i].value = ''; // Ensure inputs are reset to empty
    }
}

function fillBlankInput(letter) {
    const giveInputs = document.querySelectorAll(".give_input");
    if (fillIndex < giveInputs.length) { // Check if there are empty inputs
        giveInputs[fillIndex].value = letter; // Fill the current blank input
        filledInputs[fillIndex] = letter; // Store the letter in filledInputs array
        fillIndex++; // Move to the next input
    }
}


function getRandomFourWord() {
    const randomIndex = Math.floor(Math.random() * fourLetterWords.length);
    originalWord = fourLetterWords[randomIndex];

    let shuffledWord = shuffleWord(originalWord);

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }

    const randomTextBox = document.querySelector(".random_text_box2");
    randomTextBox.innerHTML = ''; 

    for (let i = 0; i < shuffledWord.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("randomInputBox", "animate__animated", i % 2 !== 0 ? "animate__fadeInDown" : "animate__fadeInUp");
        input.value = shuffledWord[i];
        input.maxLength = 1;
        input.readOnly = true;

        input.addEventListener("click", () => {
            fillBlankInput2(input.value);
            input.style.display = 'none';
        });

        randomTextBox.appendChild(input);
    }

    fillIndex = 0; 
    filledInputs = []; 
    fillInputDiv2(); 
}

function fillInputDiv2() {
    const giveInputs = document.querySelectorAll(".give_input2");
    for (let i = 0; i < giveInputs.length; i++) {
        giveInputs[i].value = ''; 
    }
}

function fillBlankInput2(letter) {
    const giveInputs = document.querySelectorAll(".give_input2");
    if (fillIndex < giveInputs.length) { 
        giveInputs[fillIndex].value = letter; 
        filledInputs[fillIndex] = letter; 
        fillIndex++; 
    }
}





function getRandomFiveWord() {
    const randomIndex = Math.floor(Math.random() * fiveLetterWords.length);
    originalWord = fiveLetterWords[randomIndex];

    let shuffledWord = shuffleWord(originalWord);

    while (shuffledWord === originalWord) {
        shuffledWord = shuffleWord(originalWord);
    }

    const randomTextBox = document.querySelector(".random_text_box3");
    randomTextBox.innerHTML = ''; 

    for (let i = 0; i < shuffledWord.length; i++) {
        const input = document.createElement("input");
        input.type = "text";
        input.classList.add("randomInputBox", "animate__animated", i % 2 !== 0 ? "animate__fadeInDown" : "animate__fadeInUp");
        input.value = shuffledWord[i];
        input.maxLength = 1;
        input.readOnly = true;

        input.addEventListener("click", () => {
            fillBlankInput3(input.value);
            input.style.display = 'none';
        });

        randomTextBox.appendChild(input);
    }

    fillIndex = 0; 
    filledInputs = []; 
    fillInputDiv3(); 
}

function fillInputDiv3() {
    const giveInputs = document.querySelectorAll(".give_input3");
    for (let i = 0; i < giveInputs.length; i++) {
        giveInputs[i].value = ''; 
    }
}

function fillBlankInput3(letter) {
    const giveInputs = document.querySelectorAll(".give_input3");
    if (fillIndex < giveInputs.length) { 
        giveInputs[fillIndex].value = letter; 
        filledInputs[fillIndex] = letter; 
        fillIndex++; 
    }
}


playButton.addEventListener("click", () => {
    screenOne.classList.remove("flex");
    screenOne.classList.add("hidden");
    screenTwo.classList.remove("hidden");
    getRandomThreeWord(); 
    setTimeout(() => {
        gameMainContainer.classList.remove("hidden");
    }, 1200);
});

checkButton.addEventListener("click", () => {
    screenTwo.classList.add("hidden")
    resultScreenOne.classList.remove("hidden")
    gameMainContainer.classList.add("hidden")
    const resultContainer = document.querySelector(".result_container");
    const filledWord = filledInputs.join('');
    if (filledWord === originalWord) {
        loseContainer.classList.add("hidden")
        loseContainer.classList.remove("flex")
        winContainer.classList.remove("hidden")
        winContainer.classList.add("flex")
    } else {
        winContainer.classList.add("hidden")
        winContainer.classList.remove("flex")
        loseContainer.classList.remove("hidden")
        loseContainer.classList.add("flex")
    }
});

checkButton2.addEventListener("click", () => {
    screenThree.classList.add("hidden")
    resultContainer2.classList.remove("hidden")
    gameMainContainer2.classList.add("hidden")
    const filledWord = filledInputs.join('');
    console.log(filledWord)
    console.log(originalWord)
    if (filledWord === originalWord) {
        loseContainer2.classList.add("hidden")
        loseContainer2.classList.remove("flex")
        winContainer2.classList.remove("hidden")
        winContainer2.classList.add("flex")
    } else {
        winContainer2.classList.add("hidden")
        winContainer2.classList.remove("flex")
        loseContainer2.classList.remove("hidden")
        loseContainer2.classList.add("flex")
    }
})
checkButton3.addEventListener("click", () => {
    screenFour.classList.add("hidden")
    resultContainer3.classList.remove("hidden")
    gameMainContainer3.classList.add("hidden")
    const filledWord = filledInputs.join('');
    console.log(filledWord)
    console.log(originalWord)
    if (filledWord === originalWord) {
        loseContainer3.classList.add("hidden")
        loseContainer3.classList.remove("flex")
        winContainer3.classList.remove("hidden")
        winContainer3.classList.add("flex")
    } else {
        winContainer3.classList.add("hidden")
        winContainer3.classList.remove("flex")
        loseContainer3.classList.remove("hidden")
        loseContainer3.classList.add("flex")
    }
})


resetBtn.addEventListener("click", () => {
    getRandomThreeWord();
});
resetBtn2.addEventListener("click", () => {
    getRandomFourWord()
});
resetBtn3.addEventListener("click", () => {
    getRandomFiveWord()
});



tryAgainButton.addEventListener("click", () => {
    screenOne.classList.remove("hidden")
    screenOne.classList.add("flex")
    gameMainContainer.classList.add("hidden");
    resultScreenOne.classList.add("hidden")
})
tryAgainButton2.addEventListener("click", () => {
    screenOne.classList.remove("hidden")
    screenOne.classList.add("flex")
    gameMainContainer2.classList.add("hidden");
    resultContainer2.classList.add("hidden")
})

nextButton.addEventListener("click", () => {
    screenThree.classList.remove("hidden")
    resultScreenOne.classList.add("hidden")
    getRandomFourWord() 
    setTimeout(() => {
        gameMainContainer2.classList.remove("hidden");
    }, 1200);
});

nextButton2.addEventListener("click", () => {
    screenFour.classList.remove("hidden")
    resultContainer2.classList.add("hidden")
    getRandomFiveWord() 
    setTimeout(() => {
        gameMainContainer3.classList.remove("hidden");
    }, 1200);
})
