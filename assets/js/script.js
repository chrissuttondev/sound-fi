console.log("welcome to sound fi");
//Function play auio pads or the buttons and set them up to allow more flexibility and less repetaive code
/* --------------------------------------------------------------
//Get audio tags
//let audioTags = document.getElementsByTagName("audio");
//console.log(audioTags);

//Get Buttons
let buttons = document.getElementsByTag("button");
console.log(buttons);

//Console logs audio tags. When same method used to get buttons console throws error 
//"script.js:9 Uncaught TypeError: document.getElementsByTag is not a function"

/*------------------------------------------------------------*/
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

//Play audio via button function. Play audio on associated button when button clicked.
function playPad(buttonId, audioId) {
    //get button and audio ids
    const button = document.getElementById(buttonId);
    const audio = document.getElementById(audioId);

    //If statement. Conditon to check if buttons and audio have been accessed in DOM
    if (button && audio) {
        button.addEventListener('click', () => {
            audio.play();
        });
    }
}
//Button ID Array to acces button html elements by ID
const buttonIds = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6",
    "btn-7", "btn-8", "btn-9", "btn-10", "btn-11", "btn-12", "dr-bt-1", "dr-bt-2", "dr-bt-3"];

//Audio ID Array to access audio html elements by ID
const audioIds = ["kick", "snare", "snare2", "hh1", "hh2", "cymbol", "vynil",
    "bleep1", "bleep2", "keys1", "keys2", "keys3", "dr1", "dr2", "dr3"];

//Set audio elements controls loop attribute to default as off when page loads
for (let i = 0; i < audioIds.length; i++) {
    const audioId = audioIds[i];
    const audio = document.getElementById(audioId);

    if (audio) {
        audio.loop = false;
    }

}

//Iterate through array(s) and set up event listener(s) 
// For loop https://learn.codeinstitute.net/courses/course-v1:CodeInstitute+LMR101+2021_T1/courseware/73e9c0413ead4a21b389e33c77706102/4fe6474cab114387ad0e72bf7ec1c201/14?activate_block_id=block-v1%3ACodeInstitute%2BLMR101%2B2021_T1%2Btype%40html%2Bblock%40273b80fa87814494a107e8365ccc22fe    
for (let i = 0; i < buttonIds.length; i++) {
    const buttonId = buttonIds[i];
    const audioId = audioIds[i];
    playPad(buttonId, audioId);
}

//js functionallity to add

/*funtion for loop pad play. Give user access to play / stop and loop. 
  need to access audio controls for audio element with id dr-bt-1 
  assign the loop control to the loop button and stop control to the
  stop button
  https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_loop
  */

function loopDrums(audioId) {
    const drums = document.getElementById(audioId);
    drums.loop = !drums.loop;
}

// Stop Audio function
function stopAudio(audioId) {
    const audioElement = document.getElementById(audioId);

    if(audioElement) {
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

/*when buttons triggered (clicked) will respond to being clicked immiedatly 
after and restart audio before it finishes playing. This will give more 
resonsivity and musicallity The will give the application functionality closer to
real word audio sample players and enhance user experience*/

/* key mapping
event listener. When user clicks a key on the keyboard a sound pad plays.
Keys mapped
z=1 x=2 c=3
a=4 s=5 d=6
q=7 w=8 e=9
r=10 t=11 y=12
*/



