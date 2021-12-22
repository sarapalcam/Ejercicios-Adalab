'user strict';

const expiredAlert = () => {
    const alert = document.querySelector('.js_alert');
    alert.classList.remove("hidden");
  };
  
  setTimeout(expiredAlert, 15000);