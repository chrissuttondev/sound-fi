# Sound - Fi
Sound-Fi is web application that emulates a drum machine or sample player. It provides the user with a simple and intuitive interface to perform music. 
A user can trigger sounds using, mouse, keyboard or touchscreen device.

## Features

The main page has two sections. The first of which features nine sample pads. When a user interacts with the pads by clicking, tapping or pressing a corresponding
keyboard key, a short one shot audio sample is played back. The pads are labelled with their corresponding keyboard keys so that is quick and easy for the user to 
learn how to use the application.

<p align="center">
<img src="https://github.com/chrissuttondev/sound-fi/assets/136370848/82d02f0f-da31-4347-ac06-1abb76dcd926"/>
</p>

The lower section allows the user to play three different drum beats via the pads. It also features additional controls for each drum beat pad. These are loop and stop. 
Loop allows the user to play the drum beats on a continuos loop and the stop control allows for stopping of playback.

 <p align="center">
<img src="https://github.com/chrissuttondev/sound-fi/assets/136370848/e9a658ab-f7f9-43f9-8097-028448c03cff"/)
</p>

The main page also features a 'create account' button which links to another page with a form.

The form, which is of course for demonstration purposes only, encourages the user to create and account for early access to updates. If a user does not wish to create and account there is a button to return to the main page.

 <p align="center">
<img src="https://github.com/chrissuttondev/sound-fi/assets/136370848/85128d01-99da-4840-ae94-24e96f11d6e7"/)
 </p>

Upon completing the form and selecting register the user is taken to another page that displays a thank you message and button to return to the main page. 

 <p align="center">
<img src="https://github.com/chrissuttondev/sound-fi/assets/136370848/3365044a-3e48-4a59-a436-56918b0c70f3"/>
 </p>

## Bugs and fixes

### Audio playback and responsivity

When a user clicks a button or presses a key to trigger audio playback, there is not a noticeable delay between the trigger and the audio playback. However, 
it would be preferable for the audio to respond to an instant second click or double click, by restarting playback from its 
immediate start point. This will give more responsivity and musicality and will give the application functionality closer to real world audio sample players 
and enhance user experience. A solution for this had not yet be realized. 
An example of this desired functionality is shown <a href="https://www.myinstants.com/en/instant/ive-got-you-in-my-sight-52194/">here.</a>

### Using Javascript to Play Audio
  
The method of playing audio could be more efficient. The html audio elements are  played by Javascript when a user interacts with a html button. Both of these collections of html elements sit static in the html document.  It would be more efficient utilize JavaScript to create and audio element and place it on the page. For example, when a keyboard character, mouse or touch screen is interacted with by a user an event listener could capture the interaction and call a  function to create to play desired audio file. Implementing this idea in the project as so far been unsuccessful.
An example of the above outlined idea is available <a href="https://www.developerdrive.com/manipulating-html5s-native-audio-with-javascript">here</a>


### Touch Screen Responsivity
 
When using the application on touch screen devices it is fully functional but lacks the responsivity on mouse or keyboard clicks. Although still fun and engaging the lag between pad press and audio play is not conducive to a user playing music in time.

### Pad light up on press / click

When a user interacts with a button in the application via a mouse click or tap on touch screen the pads momentarily light up / change color. This feature is not working when a user is playing with a computer keyboard. It was assumed the click() method used in the function called by the keyboard event listener would handle this. Attempts were made to access and manipulate the CSS with in this function with no solution being realized as yet. A small but import feature that is lacking.    

## Technologies Used

### Languages
- HTML: Markup language for creating the website's structure.
- CSS: Styling language to design the website's appearance.

### Libraries
- Google Fonts: Used to access and apply font styles to the website.
- Font Awesome: Provides a library of icons for use in the project.

### Platforms
- GitHub: Utilized for version control, code storage, and site deployment.
- CodeAnywhere: Chosen as the development environment for the project.

## Validation
### HTML
Html Code was passed through W3C official validator. No errors were returned.
### CSS
CSS Code was passed through the Jigsaw official validator. No errors were returned.
### Javascript
No errors were found when passing through the official Jshint validator

## Future Features and Functionality

### Javascript Sound constructor to access audio files. 
Using a Javascript sound constructor would give more flexibility and could be used to make a larger sound library available and give more variation for user. 

### Kit Change Feature
Implementing a feature for a user to change between different libraries of sounds would provide a better user experience. Javascript could be used to manipulate 
the css, styling, such as the color scheme upon loading a new kit or library, which could reflect a different moods based on the mood and feel of audio.
This idea could be further expanded. For example users could mix and match sounds and create there own kit. kits could even be generated at  random using the 
JS Math.floor() and Math. random() methods. 

## Deployment
The site was deployed to GitHub pages. The steps to deploy are as follows:
In the GitHub repository, navigate to the Settings tab
From the source section drop-down menu, select the Master Branch
Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

## References 

<a href="https://marcusmcb.github.io/JS-Drum-Machine/">JS-Drum-Machine</a> 
<br>
<a href="https://www.codewithfaraz.com/content/161/build-a-quiz-application-with-html-css-and-javascript-step-by-step-guide">
Code with Faraz Quiz App tutorial
</a>
<br>
<a href="https://medium.com/@iminked/build-a-drum-machine-with-javascript-html-and-css-33a53eeb1f73">
Build A Drum Machine with JavaScript, CSS and HTML – tutorial by Iban Lopez
</a>
<br>
<a href="https://www.developerdrive.com/manipulating-html5s-native-audio-with-javascript/">
Kim S. Teeple - Manipulating HTML Native Audio with Javascript
</a>


## Credits 

Audio sourced from <a href="https://splice.com/">Splice</a> Samples free for commercial use.

# Contact

 chrissutton1789@gmail.com 
