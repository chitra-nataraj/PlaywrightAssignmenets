function launchBrowser(browserName)
{
if(browserName.toLowerCase()==="Chrome")
{
console.log("launching chrome browser");

}
else{
    console.log("launching" + browserName + "browser");
    
}
}

function runTests(testType) {
    switch (testType.toLowerCase()) {
        case "smoke":
            console.log("Running Smoke Tests...");
            break;
        case "sanity":
            console.log("Running Sanity Tests...");
            break;
        case "regression":
            console.log("Running Regression Tests...");
            break;
        default:
            console.log("Unknown test type. Running Smoke Tests by default...");
    }
}
launchBrowser("firefox");
runTests("Sanity");