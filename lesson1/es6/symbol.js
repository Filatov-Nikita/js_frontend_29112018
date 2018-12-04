let forPasport = Symbol();

let user = {
    firstName: 'Name',
    lastName: 'Last',
    [Symbol()]: 467382497328473982
};
console.log(user);

for(let key in user){
    console.log(`${key}: ${user[key]}`);
}

console.log(user[forPasport]);

let someObj = {
    to: 10,
    [Symbol.iterator]: function(){
        let current = 0;
        let stop = this.to;

        return {
            next(){
                if(current <= stop){
                    return {
                        done: false,
                        value: current++
                    }
                }
                else{
                    return {
                        done: true
                    }
                }
            }
        }
    }
};
console.log(someObj);

for(let some of someObj){
    console.log(some);
}

