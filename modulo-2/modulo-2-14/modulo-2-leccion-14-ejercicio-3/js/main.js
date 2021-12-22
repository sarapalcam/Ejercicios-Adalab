'user strict';

let counter = 0;

const incrementAndShowCounter = () => {
    counter++
    const timer = document.querySelector('.js_time');
    if (counter < 60){
        timer.innerHTML = `Escrito hace ${counter} segundos`;
    } else if (counter === 60){
        timer.innerHTML = `Escrito hace un minuto`;
    } else if (counter > 60){
        timer.innerHTML = `Escrito hace un minuto y ${counter - 60} segundos`;
    } else if (counter === 119){
        counter = 0;
        timer.innerHTML = "";
    }
}

setInterval(incrementAndShowCounter, 1000);
