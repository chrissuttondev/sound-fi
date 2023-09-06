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

//loop board

const loop1 = document.getElementById("loop1");

function playLoop1() {
    loop1.play();
}

const loop2 = document.getElementById("loop2");

function playLoop2() {
    loop2.play();
}

const loop3 = document.getElementById("loop2");

function playLoop3() {
    loop3.play();
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

//funtion for loop pads. Event listeners. play on loop when clicked. play end of loop on next click.
//loops can not overlap.


//form validation function 

function handleSubmit(event) {
    event.preventDefault();
    let p1 = form.elements['password'].value;
    let p2 = form.elements['confirm-password'].value;

    if (p1 !== p2) {
        let errorDiv = document.getElementById('errors');
        errorDiv.innerHTML = "<p>Please ensure your passwords match.</p>";
        errorDiv.style.display = 'block';
    } else {
        console.log('Validation successful!');
        form.submit();
    }
}

let form = document.getElementById('registration-form');
form.addEventListener('submit', handleSubmit);