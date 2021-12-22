'user strict';

// Crear una página con un botón que transcurridos 10 segundos te pregunte: "¿te has dormido?". Si pulsas en el botón la cuenta volverá a cero y otra vez, si transcurren 10 segundos sin pulsar volverá a preguntar de nuevo "¿te has dormido?"



const alarm  = document.querySelector('.js_msg');
const stopBtn = document.querySelector('.js_sleep_btn');

let acc = 0;
let timer;

const incrementCounter = () => {
    acc++;
    alarm.classList.remove("hidden");
}

function handleClickStopBtn(){
    clearInterval(timer);
    alarm.classList.add("hidden");
    acc = 0;
    timer = setInterval(incrementCounter, 10000);
}

timer = setInterval(incrementCounter, 10000);

stopBtn.addEventListener("click", handleClickStopBtn);
