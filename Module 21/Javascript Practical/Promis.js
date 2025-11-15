Promise.resolve("foo")
    .then(function (value) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                value += "bar";
                resolve(value);
            }, 10000);
        })
    }).then(function (value) {
        setTimeout(() => {
            value += "baz";
            console.log(value);
        }, 1);
        return value;
    }).then(function (value) {
        console.log(value)
    });