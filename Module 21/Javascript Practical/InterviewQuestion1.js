function PromisSome(promis1, promis2) {
    return new Promise((resolve, reject) => {
        let value1, value2;
        promise1.then((value) => {
            value1 = value;
             if(value1 !== undefined && value2 !== undefined) {
            resolve((value1 +value2));
        }
        })

       
        promise2.then((value) => {
            value2 = value;
            if(value1 !== undefined && value2 !== undefined) {
                resolve((value1 + value2));
            }
        })
    })
}

const promise1 = Promise.resolve(10);
const promise2 = Promise.resolve(10);

PromisSome(promise1, promise2).then((values) => { console.log("Addition of 2 Promise  is"+ values)})