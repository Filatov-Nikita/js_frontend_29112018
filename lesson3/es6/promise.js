export default class Promise1 {
    constructor(callback) {
        this.callback = callback;
        this.state = 'pending';
        this.res = null;
        this.thenArr = [];
        this.current = 0;
        this.errCallback = null;
        this.callback(this.resolve, this.reject);
    }

    reject = (res) => {
        this.state = 'reject';
        this.res = res;
        if(!this.errCallback) {
            throw new Error('uncauth exception')
        }
        this.errCallback(this.res);
    }

    resolve = (res) => {
        if(this.current >= this.thenArr.length) return;
        this.state = 'resolve';
        this.res = res;
        let then = this.thenArr[this.current](this.res);
        this.current++;
        if(then instanceof Promise1) {
            then.thenArr = this.thenArr.filter((item, i, arr) => {
                return i >= this.current
            });
            then.errCallback = this.errCallback
        } else {
            this.resolve(then);
        }
    }

    then = (callback) => {
        this.thenArr.push(callback);
        return this;
    }

    catch = (errCallback) => {
        this.errCallback = errCallback;
        return this;
    }
}
