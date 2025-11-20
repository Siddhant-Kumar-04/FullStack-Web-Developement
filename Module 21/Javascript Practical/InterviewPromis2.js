function retry(promisfn, maxAttempt) {
    return new Promise(async (resolve, reject) => {
        let attempts = 0;
        async function attempt() {
            try {
                const result = await promisfn();
                resolve(result);
            }
            catch (error) {
                attempts++;
                if (attempts < maxAttempt) {
                    await attempt();
                } else {
                    reject(error);
                    
                }
            }
        }
        await attempt();
    });

    
}
const exampleRetryFunction = retry(
    async () => {
        console.log("Attempting....");
        throw new Error("Simulated error");
    },3
)

exampleRetryFunction
    .then(result => console.log("Success:", result))
    .catch(error => console.log("Failed:", error.message));