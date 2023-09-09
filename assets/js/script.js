console.log("Welcome to Sound-Fi");
//Play audio via button function. Play audio on associated button when button clicked.
try {
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
    } catch {
    console.log('error');
}
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
    't': 'btn-7',
    'y': 'btn-8',
    'u': 'btn-9',
    'c': 'dr-bt-1',
    'v': 'dr-bt-2',
    'u': 'dr-bt-3',
};
//Keydown event listener and function
try {
    document.addEventListener('keydown', function (event) {
        const key = event.key.toLowerCase();
        const buttonId = keyMap[key];

        if (buttonId) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.click();
                button.style.backgroundColor='orange';
            }
        }
    });
} catch {
    console.log('error');
}
//Keydown event listener and function
try {
    document.addEventListener('keydown', function (event) {
        const key = event.key.toLowerCase();
        const buttonId = keyMap[key];

        if (buttonId) {
            const button = document.getElementById(buttonId);
            if (button) {
                button.click();
                button.style.backgroundColor='orange';
            }
        }
    });
} catch {
 

//Set audio elements controls loop attribute to default as off when page loads
try {
    for (let i = 0; i < audioIds.length; i++) {
        const audioId = audioIds[i];
        const audio = document.getElementById(audioId);

        if (audio) {
            audio.loop = false;
        }

    }
} catch {
    console.log('error');
}

// For loop itereates through audioId and buttonId array
try {
    for (let i = 0; i < buttonIds.length; i++) {
        const buttonId = buttonIds[i];
        const audioId = audioIds[i];
        playPad(buttonId, audioId);
    }
} catch {
    console.log('error');
}
try {
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
} catch {
    console.log('error');
}

// Event listener for loop button
try {
    document.getElementById("dr-lp-1").addEventListener('click', () => loopDrums('dr1'));
    document.getElementById("dr-lp-2").addEventListener('click', () => loopDrums('dr2'));
    document.getElementById("dr-lp-3").addEventListener('click', () => loopDrums('dr3'));
} catch {
    console.log(error);
}
//Event Listener for stop button
try {
    document.getElementById("dr-stop-1").addEventListener('click', () => stopAudio('dr1'));
    document.getElementById("dr-stop-2").addEventListener('click', () => stopAudio('dr2'));
    document.getElementById("dr-stop-3").addEventListener('click', () => stopAudio('dr3'));
} catch {
    console.log('error');
}
}
/*when buttons triggered (clicked) will respond to being clicked immiedatly
after and restart audio before it finishes playing. This will give more
resonsivity and musicallity The will give the application functionality closer to
real word audio sample players and enhance user experience*/


/*
source code
https://www.section.io/engineering-education/keyboard-events-in-javascript/#javascript-keyboard-events


*/
//method of playing audio could be more efiecent. Use JS to create and audio elemnent 
//when a keyboard character, mouse or touch screen is interacted with by a user (the event).
// set up event listener to capture the interaction
//up the even occouring create and audio element to play desired audio file.
//use appendChild to add audio element to the document.
////// source code https://tinyurl.com/zdcrxr6a /////////


////Loop false as default on page load alt method
//The above solution is ok. Need to access all of the audio tags attibutes globally
//https://www.developerdrive.com/manipulating-html5s-native-audio-with-javascript/

/*Sound coustructor ta access audio files instead? Less static html 
access more audio files and give more variation for user. Could have different 
kit or sound libraries. 

css color scheme change upon loading to refelct different moods
and keep user engaged. 

Link below is a tutorial to a projec that uses sound constructor and offers user 3 different 
kits / libaries.
https://medium.com/@iminked/build-a-drum-machine-with-javascript-html-and-css-33a53eeb1f73
Could expand on this idea and allow users to mix and match sounds and / or use math floor to select 
kits at random.
---------------------------------------------------------*/
/*funtion for loop pad play. Give user access to play / stop and loop. 
  need to access audio controls for audio element with id dr-bt-1 
  assign the loop control to the loop button and stop control to the
  stop button. 
  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_loop
  */

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

//source code;
//www.section.io/engineering-education/keyboard-events-in-javascript/#javascript-keyboard-events