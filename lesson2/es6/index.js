// import obj from './module'
// console.log(obj.toString());
// let obj1 = 'asdad';

// for(some of obj1) {
//     console.log(some);

// }
class Timer{
    constructor() {
        this.tick = this.tick.bind(this);
    }

    tick() {
        console.log(this);

    }
    start() {
        setInterval(this.tick, 2);
    }
}

(new Timer()).start();

//console.log(1);
