import Promise1 from './promise';

/* global Promise */
function userReg(){
    return new Promise1(function(resolve, reject){
        setTimeout(() => {
            if(Math.random() > 0.2){
                resolve({
                    msg: "+ registration",
                    id: 1
                });
            }
            else{
                reject({msg: "error in registration"});
            }
        }, 500);
    })

}

function userAuth(id){
    return new Promise1(function(resolve, reject){
        window.setTimeout(function(){
            if(Math.random() > 0.2){
                resolve({
                    msg: "+ auth " + id,
                    token: "ghegkjhjewhrklwejo"
                });
            }
            else{
                reject({msg: "error in auth"});
            }
        }, 500);
    });
}

function userData(token){
    return new Promise1(function(resolve, reject){
        window.setTimeout(function(){
            if(Math.random() > 0.2){
                resolve({
                    msg: "+ data by token " + token,
                    data: {
                        id: 1,
                        name: 'Some'
                    }
                });
            }
            else{
                reject({msg: "error in data"});
            }
        }, 500);
    });
}

export {userReg, userAuth, userData};
