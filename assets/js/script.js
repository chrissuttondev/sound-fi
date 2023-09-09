console.log("Welcome to Sound-Fi");
//Play audio via button function. Play audio on associated button when button clicked.

    function playPad(buttonId, audioId) {
        //get button and audio ids
        const button = document.getElementById(buttonId);
        const audio = document.getElementById(audioId);

        //If statement. Conditon to check if buttons and audio have been accessed in DOM
        
        if (button && audio) // also works with && {
            button.addEventListener('click', () => {
                audio.play();
            });
        }

    console.log('error');

//Button ID Array to acces button html elements by ID
const buttonIds = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6",
    "btn-7", "btn-8", "btn-9", "btn-10", "btn-11", "btn-12", "dr-bt-1", "dr-bt-2", "dr-bt-3"];

//Audio ID Array to access audio html elements by ID
const audioIds = ["kick", "snare", "snare2", "hh1", "hh2", "cymbol", "vynil",
    "bleep1", "bleep2", "keys1", "keys2", "keys3", "dr1", "dr2", "dr3"];


//Keydown map pairings. Object to be accessed via function
const keyMap = {
    'd': 'btn-1',
    'f': 'btn-2',
    'g': 'btn-3',
    'h': 'btn-4',
    'j': 'btn-5',
    'k': 'btn-6',
    'e': 'btn-7',
    'r': 'btn-8',
    't': 'btn-9',
    'c': 'dr-bt-1',
    'v': 'dr-bt-2',
    'b': 'dr-bt-3',
};
//Keydown event listener and function

    document.addEventListener('keydown', function (event) {
        const key = event.key.toLowerCase();
        const buttonId = keyMap[key];

        if (buttonId) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.click();
               
            }
        }
    });

//Set audio elements controls loop attribute to default as off when page loads
    for (let i = 0; i < audioIds.length; i++) {
        const audioId = audioIds[i];
        const audio = document.getElementById(audioId);

        if (audio) {
            audio.loop = false;
        }

    }

// For loop itereates through audioId and buttonId array
    for (let i = 0; i < buttonIds.length; i++) {
        const buttonId = buttonIds[i];
        const audioId = audioIds[i];
        playPad(buttonId, audioId);
    }

    function loopDrums(audioId) {
        const drums = document.getElementById(audioId);
        drums.loop = !drums.loop;
    }

// Stop Audio function
    function stopAudio(audioId) {
        const audioElement = document.getElementById(audioId);

        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    }

// Event listener for loop button
    document.getElementById("dr-lp-1").addEventListener('click', () => loopDrums('dr1'));
    document.getElementById("dr-lp-2").addEventListener('click', () => loopDrums('dr2'));
    document.getElementById("dr-lp-3").addEventListener('click', () => loopDrums('dr3'));

//Event Listener for stop button
    document.getElementById("dr-stop-1").addEventListener('click', () => stopAudio('dr1'));
    document.getElementById("dr-stop-2").addEventListener('click', () => stopAudio('dr2'));
    document.getElementById("dr-stop-3").addEventListener('click', () => stopAudio('dr3'));

  

