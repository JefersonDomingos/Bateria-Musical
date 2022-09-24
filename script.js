const playingClass = 'playing';
let crashRide = document.getElementById('crash-ride');
let hitHatTop = document.getElementById('hihat-top');
let animacoes = document.querySelector('.animacoes-none');

//animar prato Um
const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};

//animar Prato Dois
const animateHitHatClosed = () => {
    hitHatTop.style.top = '175px'
};

//tocar o som
const playSound = e => {
    const keyCode = e.keyCode;
    let keyElement = document.querySelector(`div[data-key="${keyCode}"]`);
    if(!keyElement) return;

    const audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
    audioElement.currentTime = 0;
    audioElement.play();

    switch(keyCode){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 75:
        case 73:
            animateHitHatClosed();
            break;
    };

    keyElement.classList.add(playingClass);
    keyElement.classList.add('clicando');
    animacoes.classList.add('animacoes');
};

const removeCrashRideTransition = e =>{
    if(e.propertyName !== 'transform') return;
    e.target.style.transform = 'rotate(1.8deg) scale(1.5)';
}

const removeHitHatTopTransition = e => {
    if(e.propertyName !== 'top') return;
    e.target.style.top = '170px';
};

const removeKeyTransition = e => {
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove(playingClass);
    e.target.classList.remove('clicando');
};


const drumKeys = Array.from(document.querySelectorAll('.key'));
    drumKeys.forEach(key => {
    key.addEventListener('transitionend', removeKeyTransition);
});

//removendo animação dos pratosUm e pratosDois;

crashRide.addEventListener('transitionend', removeCrashRideTransition);
hitHatTop.addEventListener('transitionend', removeHitHatTopTransition);

window.addEventListener('keydown', playSound);


