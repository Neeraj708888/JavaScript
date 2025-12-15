// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);
// a = 30;
// console.log(a);

// let a = 10;
// console.log(a);
// a = 20;

// setTimeout(()=> {
//     console.log('2 second: ', a); // 20  but print 30 that is a problem
// }, 2000);

// a = 30;
// console.log(a); // 30
// let a = 10;
// console.log(a);
// a = 20;
// let promise = new Promise((resolve, reject)=> {
//     setTimeout((a)=> {
//         resolve(a); // here work only first condition
//         // reject('Promise is rejected...');
//     }, 2000, a);
// });
// console.log(promise); // return promise-object
// promise.then((data) => console.log(data)
// ).catch((err)=> console.log(err, 'some issues')
// );
// a = 30;
// console.log(a);


// real  API with Promise

// // we need to handle 2 - promise in a single API
// let url = 'https://dummy.restapiexample.com/api/v1/employees';
// let user = fetch(url).then((res)=> {return res.json()}).then((data)=> console.log(data)).catch((err)=> console.log(err));
// console.log(user);


// promise chaining with resolved
// let promise = new Promise((resolve, reject)=>  setTimeout(()=> resolve(10)))
// promise.then(data => {return data*10}).then(data => console.log(data)).catch(err => console.log(err));
// console.log(promise);

// // promise chaining with rejected
// let promise = new Promise((resolve, reject)=> 
//     setTimeout(()=> {reject(10)}, 2000));
// promise.then(data => {console.log('then block', data);
// }).then(data => console.log(data)).catch(err => console.log('catch block: ', err));
// console.log(promise);

// finally block runs in both scenrio resolve and reject
let promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        reject(10)
        // resolve(10);
    }, 2000);
});
promise.finally(() => {
    console.log('Final Block')
}).then(data => {
    console.log('then block', data);
    }).then(data => console.log(data)).catch(err => console.log('catch block: ', err));


// promise.then(data => {console.log('then block', data);
// }).then(data => console.log(data)).catch(err => console.log('catch block: ', err));