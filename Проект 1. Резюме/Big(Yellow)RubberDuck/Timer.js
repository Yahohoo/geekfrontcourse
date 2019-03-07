window.onload = function () {
    function startTimer() {
        let end = new Date(2019, 1, 28);
        let now = new Date();
        let days = Math.floor((end)/(1000 * 60 *60 *24)) - Math.floor((now)/(1000 * 60 *60 *24));
        let weeks = Math.floor(days/7);
        if (weeks < 0){
            weeks =  0;
        }
        let day = days % 7 + 1;
        if (day < 0){
            day = 0;
        }
        let message = String(weeks);
        if (weeks === 1){
            message += ' Неделя '
        }else {
            if ((weeks <= 4) && (weeks !==0)){
                message += ' Недели '
            }else{
                message += ' Недель '
            }
        }
        message += String(day);
        if (day === 1){
            message += ' День'
        }else {
            if ((day <= 4) && (day !== 0)){
                message += ' Дня'
    }else{
        message += ' Дней'
    }
}
        let tmr = document.getElementById("timer");
        tmr.textContent = message;
    }

    startTimer()
};

