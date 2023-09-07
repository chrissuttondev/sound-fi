console.log("welcome to sound fi");
//get audio, place in array and call array sounbLibOne.
let audioFiles = document.getElementsByClassName('audio');
console.log(audioFiles);


//get audio form html
let audioSamples = document.getElementsByTagName("audio");
console.log(audioSamples); //console displays html collection
//place audio in array
let soundLibOne = Array.from(audioSamples);
console.log(soundLibOne); //console displays array [o] through [0]

//function to play a sound via the pads
let kick =document.getElementById("kick");//calls the sound (audio tag with id kick)

//create function to play pad
function playPadOne() {
    kick.play();
}
//declare function and assign to btn-1.
let padOne = document.getElementById("btn-1");
padOne.addEventListener('click', playPadOne) //events listener calls function upon click











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


