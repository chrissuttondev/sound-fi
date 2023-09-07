console.log("welcome to sound fi");
// PAD ONE play pads on click
let kick = document.getElementById("kick");//calls the sound (audio tag with id kick)

//create function to play pad
function playPadOne() {
    kick.play();
}
// declare function and assign to btn-1.
let padOne = document.getElementById("btn-1");
padOne.addEventListener('click', playPadOne); //events listener calls function upon click

//PAD TWO
let snare = document.getElementById("snare");

function playPadTwo() {
    snare.play();
}

let padTwo = document.getElementById("btn-2");
padTwo.addEventListener('click', playPadTwo);

// PAD THREE
let snare2 = document.getElementById("snare2");

function playPadThree() {
    snare2.play();
}

let padThree = document.getElementById("btn-3");
padThree.addEventListener('click', playPadThree);
//

//PAD FOUR
let hh = document.getElementById("hh1");

function playPadFour() {
    hh1.play();
}

let padFour = document.getElementById("btn-4");
padFour.addEventListener('click', playPadFour);
//

//PAD FIVE
let hh2 = document.getElementById("hh2");

function playPadFive() {
    hh2.play();
}

let padFive = document.getElementById("btn-5");
padFive.addEventListener('click', playPadFive);
//

//PAD SIX
let cym = document.getElementById("cymbol");

function playPadSix() {
    cym.play();
}

let padSix = document.getElementById("btn-6");
padSix.addEventListener('click', playPadSix);
//

//PAD SEVEN
let vyn = document.getElementById("vynil");

function playPadSeven() {
    vyn.play();
}

let padSeven = document.getElementById("btn-7");
padSeven.addEventListener('click', playPadSeven);
//

//PAD EIGHT
let bleep1 = document.getElementById("bleep1");

function playPadEight() {
    bleep1.play();
}

let padEight = document.getElementById("btn-8");
padEight.addEventListener('click', playPadEight);
//

//PAD NINE
let bleep2 = document.getElementById("bleep2");

function playPadNine() {
    bleep2.play();
}

let padNine = document.getElementById("btn-9");
padNine.addEventListener('click', playPadNine);
//

//PAD TEN
let keys1 = document.getElementById("keys1");

function playPadTen() {
    keys1.play();
}

let padTen = document.getElementById("btn-10");
padTen.addEventListener('click', playPadTen);
//

//PAD ELEVEN
let keys2 = document.getElementById("keys2");

function playPadEleven() {
    keys2.play();
}

let padEleven = document.getElementById("btn-11");
padEleven.addEventListener('click', playPadEleven);
//

//PAD TWELVE
let keys3 = document.getElementById("keys3");

function playPadTwelve() {
    keys3.play();
}

let padTwelve = document.getElementById("btn-12");
padTwelve.addEventListener('click', playPadTwelve);
//

//LOOPS

let loop1 = document.getElementById("loop1");

function playLoop1() {
    loop1.play();
}

let padLoop1 = document.getElementById("lp-bt-1");
padLoop1.addEventListener('click', playLoop1);

let loop2 = document.getElementById("loop2");

function playLoop2() {
    loop2.play();
}

let padLoop2 = document.getElementById("lp-bt-2");
padLoop2.addEventListener('click', playLoop2);

let loop3 = document.getElementById("loop3");

function playLoop3() {
    loop3.play();
}

let padLoop3 = document.getElementById("lp-bt-3");
padLoop3.addEventListener('click', playLoop3);





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



