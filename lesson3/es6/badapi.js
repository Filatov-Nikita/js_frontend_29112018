function userReg(onSuccess, onError) {
    setTimeout(() => {
        if(Math.random() > 0.2) {
            onSuccess({
                msg: '+ registration',
                id: 1
            });
        } else {
            onError({msg: 'error registration'});
        }
    }, 500);
}

function userAuth(id, onSuccess, onError) {
    setTimeout(() => {
        if(Math.random() > 0.2) {
            onSuccess({
                msg: '+ auth ' + id,
                token: 'dasasdkmkllk'
            });
        } else {
            onError({msg: 'error auth'});
        }
    }, 500);
}

function userData(token, onSuccess, onError) {
    setTimeout(() => {
        if(Math.random() > 0.2) {
            onSuccess({
                msg: '+ data by token' + token,
                data: {
                    id: 1,
                    token: token,
                    name: 'some'
                }
            });
        } else {
            onError({msg: 'error get data'});
        }
    }, 500);
}

export {userReg, userAuth, userData}
