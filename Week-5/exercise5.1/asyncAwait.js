function doTask1(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
             res("Task 1 Resolved");
        }, time)
    });
}

function doTask2(time){
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Task 2 Resolved");
        }, time)
    })
}

function doTask3(time){
    return new Promise((res, rej) => {
        res("Task 3 Resolved");
    }, time)
}

//getting response using async-await functionality
/*
async function getAsyncResponse(time){
    const response1 = await doTask1(time);
    console.log(response1); //Task 1 Resolved

    const response2 = await doTask2(time);
    console.log(response2); //Task 2 Resolved

    const response3 = await doTask3(time);
    console.log(response3); //Task 3 Resolved
}

getAsyncResponse(1000); //calling async functions
*/
//----------------------------------------------------------------


//asynchronous operation using async/await and generators
async function* generator(time1, time2, time3){

    const response1 = await doTask1(time1);
    yield response1;

    const response2 = await doTask2(time2);
    yield response2;

    const response3 = await doTask3(time3);
    yield response3;

    return "all promises are consumed";

}

let value = generator(1000, 2000, 3000);
value.next().then(data => console.log(data)); //{ value: 'Task 1 Resolved', done: false }
value.next().then(data => console.log(data)); //{ value: 'Task 2 Resolved', done: false }
value.next().then(data => console.log(data)); //{ value: 'Task 3 Resolved', done: false }
value.next();