async function dataApiCall() {
    console.log("Start function");
    let op = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                { fName: "Akash" },
                { fName: "Chavan" }
            ]);
        }, 3000);
    });
    return op;
}
const fetchBtn = document.getElementById("fetchBtn");
const outputDiv = document.getElementById("output");
fetchBtn.addEventListener("click", async () => {
    fetchBtn.disabled = true;
    fetchBtn.textContent = "Loading...";
    outputDiv.textContent = "Fetching data, please wait...";
    let op = await dataApiCall();
    console.log("Data received:", op);
    outputDiv.innerHTML = op
        .map((item) => item.fName)
        .join(" ");
    fetchBtn.disabled = false;
    fetchBtn.textContent = "Get Data";
});