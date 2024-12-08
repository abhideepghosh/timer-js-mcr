import "./styles.css";

(() => {
    const btnStart = document.querySelector('#start');
    const btnStop = document.querySelector('#stop');
    const btnReset = document.querySelector('#reset');
    const hoursInput = document.querySelector('.hours');
    const minutesInput = document.querySelector('.minutes');
    const secondsInput = document.querySelector('.seconds');
    let timerInterval;
    btnStart.addEventListener('click', () => {
        let hours = Number(hoursInput.value);
        let minutes = Number(minutesInput.value);
        let seconds = Number(secondsInput.value);
      
        if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
            alert("Not a number!");
            hoursInput.value = '00';
            minutesInput.value = '00';
            secondsInput.value = '00';
            return;
        }
        if(seconds > 59) {
            minutes += Math.floor(seconds / 60);
            seconds = seconds % 60;
        }
        if(minutes > 59) {
            hours += Math.floor(minutes / 60);
            minutes = minutes % 60;
        }
        btnStart.disabled = true;
        hoursInput.disabled = true;
        minutesInput.disabled = true;
        secondsInput.disabled = true;
        timerInterval = setInterval(() => {
            if(seconds > 0) {
                seconds--;
            }
            else if(minutes > 0) {
                minutes--;
                seconds = 59;
            }
            else if(hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            }
            else {
                clearInterval(timerInterval);
                alert(`Time's Up!`);
                btnStart.disabled = false;
                hoursInput.disabled = false;
                minutesInput.disabled = false;
                secondsInput.disabled = false;
                return;
            }
            hoursInput.value = String(hours).padStart(2, '0');
            minutesInput.value = String(minutes).padStart(2, '0');
            secondsInput.value = String(seconds).padStart(2, '0');
        }, 1000);
    });
    btnStop.addEventListener('click', () => {
        if(timerInterval) clearInterval(timerInterval);
        btnStart.disabled = false;
        hoursInput.disabled = false;
        minutesInput.disabled = false;
        secondsInput.disabled = false;

    });
    btnReset.addEventListener('click', () => {
        if(timerInterval) clearInterval(timerInterval);
        hoursInput.value = '00';
        minutesInput.value = '00';
        secondsInput.value = '00';
        btnStart.disabled = false;
        hoursInput.disabled = false;
        minutesInput.disabled = false;
        secondsInput.disabled = false;
    });
})();