let date = new Date('Dec 31 2022 00:00:00')

function timerJS(){
    let now = new Date();
    str = date - now;   

    let days = Math.trunc(str / 1000 / 60 / 60 / 24)
    let hours = Math.trunc(str / 1000 / 60 / 60) % 24;
    let minut = Math.trunc(str / 1000 / 60) % 60;
    let second = Math.trunc(str / 1000) % 60;

    document.querySelector('.numbers__days').innerText = days;
    document.querySelector('.numbers__hour').innerText = numbersnol(hours);
    document.querySelector('.numbers__minutes').innerText = numbersnol(minut);
    document.querySelector('.numbers__second').innerText = numbersnol(second);

}

timerJS()

setInterval(timerJS, 1000)

function numbersnol(nal){
    if(nal <= 9){
        return '0' + nal
    }else{
        return nal
    }
}
