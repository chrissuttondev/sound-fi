console.log("welcome to sound fi");
//Function play auio pads or the buttons and set them up to allow more flexibility and less repetaive code
/* --------------------------------------------------------------
//Get audio tags
let audioTags = document.getElementsByTagName("audio");
console.log(audioTags);

//Get Buttons
let buttons = document.getElementsByTag("button");
console.log(buttons);


Console logs audio tags. When same method used to get buttons console throws error 
"script.js:9 Uncaught TypeError: document.getElementsByTag is not a function"
------------------------------------------------------------*/
//Sound coustructor ta access audio files instead???
/*---------------------------------------------------------*/

//Play audio via button Function


//Audio ID Array to access audio html elements by ID
const audioIds = ["kick", "snare", "snare2", "hh1", "hh2", "cymbol", "vynil",
    "bleep1", "bleep2", "keys1", "keys2", "keys3"];

    //Button ID Array to acces button html elements by ID
const buttonIds = ["btn-1", "btn-2", "btn-3", "btn-4", "btn-5", "btn-6",
"btn-7", "btn-8", "btn-9", "btn-10", "btn-11", "btn-12", ]   










/*if (condition) {
    // code if true
} else {
    // code if false
}*/



//prevent loops from playing at the same time


//funtion for loop pads. Event listeners. play on loop when clicked. play end of loop on next click.


/* js functionallity to add

event listener. When user clicks a key on the keyboard a sound pad plays.
Keys mapped
z=1 x=2 c=3
a=4 s=5 d=6
q=7 w=8 e=9
r=10 t=11 y=12

eg. when key w is pressed playPadOne() function called

/* Solution to problem described in the comment above founh here.
https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp

audio can played immiedatley from start even while playing back.
eg https://www.myinstants.com/en/instant/ive-got-you-in-my-sight-52194/

*/



