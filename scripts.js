const playSound = (character) => {
    switch (character) {
        case 'w':
            audio = new Audio('sounds/crash.mp3')
            break;

        case 'a':
            audio = new Audio('sounds/kick-bass.mp3')
            break;

        case 's':
            audio = new Audio('sounds/snare.mp3')
            break;
    
        case 'd':
            audio = new Audio('sounds/tom-1.mp3')
            break;

        case 'j':
            audio = new Audio('sounds/tom-2.mp3')
            break;
    
        case 'k':
            audio = new Audio('sounds/tom-3.mp3')
            break;
        
        case 'l':
            audio = new Audio('sounds/tom-4.mp3')
            break;

        default:
            console.log(this.innerHTML)
            break;

    }
    return audio;
}



let drums = document.querySelectorAll('.drum');


for(var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        let instrument = playSound(this.innerHTML);
        instrument.play();

    });
};