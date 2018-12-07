import * as BadApi from './badapi';

function handlerError(e) {
    console.log(e);
}

BadApi.userReg((res) => {
    console.log(res);
    BadApi.userAuth(res.id, (res) => {
        console.log(res);
        BadApi.userData(res.token, (res) => {
            console.log(res.data);
        },
        (e) => {
            handlerError(e);
        })
    }, (e) => {
        console.log(e.msg);
    });
}, (e) => {
    console.log(e.msg);
});
/**
 * постоянно приходится повторять ошибку
 * невозможно обрабоать исключение
 * далеко вправо уходит код
 *
 */
