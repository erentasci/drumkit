//We get the total number of buttons with the .drum class
let numberOfDrumButtons = document.querySelectorAll(".drum").length;


//We add event triggers as long as buttons with .drum class,
// so we add event trigger to each button separately

for(let i=0;i<numberOfDrumButtons;i++){

    // When button clicked,run this 
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        // Get button content through this.innerHTML 
        //(this here references the button inside the windows object)
        let buttonContent = this.innerHTML;

        makeSound(buttonContent);
        addButtonAnimation(buttonContent);

        
    })

}


// When keyboard down
document.addEventListener("keypress",function(event){

        makeSound(event.key);
        addButtonAnimation(event.key);
        
})


//It works according to the received button tag content
function makeSound(getKey){

    //Thanks to new Audio(), we can generate a new object from the audio object and run the sound with the help of the .play() function.

    switch(getKey){

        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");  
            tom2.play();
            break;
        
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        
        case "j":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        
        case "k":
            let kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        
        default:
            console.log(buttonContent);
            break;
            

    }

}

//We add animation that runs in 300 milliseconds on each button run
function addButtonAnimation(getKey){
    let selectedButton = document.querySelector("."+getKey);
    selectedButton.classList.add("pressed");
    setTimeout(()=>{
        // after 300 ms remove
        selectedButton.classList.remove("pressed");
    },300)

}