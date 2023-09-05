console.log("welcome to sound fi");

//Javascritp function for audio pads.
//https://www.w3schools.com/jsref/met_audio_play.asp

const x = document.getElementById("kick");

function playPadOne() {
    x.play();
} 

const y = document.getElementById("snare");

function playPadTwo() {
    y.play();
}

const b = document.getElementById("snare2");

function playPadThree() {
    b.play();
}

//
const hh1 = document.getElementById("hh1");

function playPadFour() {
    hh1.play();
}

const hh2 = document.getElementById("hh2");

function playPadFive() {
    hh2.play();

}

const cymbol = document.getElementById("cymbol");

function playPadSix() {
    cymbol.play();
}

const vynil = document.getElementById("vynil");

function playPadSeven() {
    vynil.play();
}

const bleep1 = document.getElementById("bleep1");

function playPadEight() {
    bleep1.play();
}

const bleep2 = document.getElementById("bleep2");

function playPadNine() {
    bleep2.play();

}

const keys1 = document.getElementById("keys1");

function playPadTen() {
    keys1.play();
}

const keys2 = document.getElementById("keys2");

function playPadEleven() {
    keys2.play();
}

const keys3 = document.getElementById("keys3");

function playPadTwelve() {
    keys3.play();
}
//audio section end

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


//form section

