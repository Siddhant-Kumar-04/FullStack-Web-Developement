function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = Math.random() > 0.5;
            if (success) {
                resolve("Data fetched successfully!");
            }
            else
            {
                reject("Error fetching data.");
            }
        }, 2000);
    });
};


async function handleFetch() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}



handleFetch();

