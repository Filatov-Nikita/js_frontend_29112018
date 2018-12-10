import * as Promapi from './promapi'

Promapi.userReg()
.then((res) => {
    console.log(res);
    return Promapi.userAuth(res.id);
})
.then((res) => {
    console.log(res);
    return Promapi.userData(res.token);
})
.then((res) => {
    console.log(res);
    return 1;
})
.then((res) => {
    console.log(res);
});

// import * as BadApi from './badapi';
// import {divide} from './exception';

// try {
//     divide(1, 0);
// }
// catch(e) {
//     console.log(e);
// }

// function handlerError(e) {
//     console.log(e);
// }

// BadApi.userReg((res) => {
//     console.log(res);
//     BadApi.userAuth(res.id, (res) => {
//         console.log(res);
//         BadApi.userData(res.token, (res) => {
//             console.log(res.data);
//         },
//         (e) => {
//             handlerError(e);
//         })
//     }, (e) => {
//         console.log(e.msg);
//     });
// }, (e) => {
//     console.log(e.msg);
// });
/**
 * постоянно приходится повторять ошибку
 * невозможно обрабоать исключение
 * далеко вправо уходит код
 *
 */
