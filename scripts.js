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

const buttonAnimation = (key) => {
    const activeButton = document.querySelector('.' + key);
    console.log(activeButton.classList);

    activeButton.classList.add("pressed")

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}

for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        let instrument = playSound(this.innerHTML);
        instrument.play();
        buttonAnimation(this.innerHTML);
    });
};

document.addEventListener('keydown', function (event) {
    const keyPressed = event.key
    console.log(keyPressed);
    let instrument = playSound(keyPressed);
    instrument.play();
    buttonAnimation(keyPressed);
});