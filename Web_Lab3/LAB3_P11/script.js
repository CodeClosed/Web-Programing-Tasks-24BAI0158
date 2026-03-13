// Function to calculate simple interest
function simpleInterest(){

    // Get input values from HTML fields
    let p = document.getElementById("principle").value;
    let r = document.getElementById("rate").value;
    let t = document.getElementById("time").value;

    // Variable to store simple interest
    let si;

    // Simple Interest formula
    // SI = (P × R × T) / 100
    si = (p * r * t) / 100;

    // Display the calculated result on the webpage
    document.getElementById("output").innerHTML =
        "Simple Interest: " + si;
}