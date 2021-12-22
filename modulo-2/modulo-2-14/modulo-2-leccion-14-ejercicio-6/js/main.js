'user strict';

const timerCont = document.querySelector('.js_timer');
const stopBtn = document.querySelector('.js_stop_btn');
const continueBtn = document.querySelector('.js_continue_btn');

let acc = 0;
let timer;

const incrementAndShowCounter = () => {
    acc++
    timerCont.innerHTML = acc;
}

function handleClickStopBtn(){
    clearInterval(timer);
}

function handleClickContinueBtn(){
    timer = setInterval(incrementAndShowCounter, 1000);
}

stopBtn.addEventListener("click", handleClickStopBtn);
continueBtn.addEventListener("click", handleClickContinueBtn);