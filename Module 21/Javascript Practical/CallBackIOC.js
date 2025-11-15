function Download(url,processData) {
    console.log("Started Downloading from", url);
    setTimeout(function exec() {
        console.log("Completed Download after 5 secoond");
        const data="ABCDXYZ";
        processData(data);
        processData(data);
    }, 5000)
}

Download("www.siddhant.com", function processData(data) {
    console.log(data)
});