/* global window */

let obj = require('./symbol');

window.addEventListener('load', function() {
    const el = this.document.querySelector('.timer');
    let timer = new Timer(el, 139);
});

class Timer {
    constructor(el, time) {
        this.time =  time;
        this.el = el;
        this.interval;
        this.render();
        this.start();
    }

    start() {
        this.interval = setInterval(this.tick, 1000);
    }
    stop() {
        clearInterval(this.interval);
    }

    render() {
        this.el.innerHTML = this.time;
    }

    tick = () => {
        this.time--;
        if(this.time <= 0) {
            this.stop();
        }
        this.render();
    }


}
