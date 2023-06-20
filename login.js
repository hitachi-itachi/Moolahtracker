const user = document.getElementById("user").value;
const pass = document.getElementById("password").value;
const submitButton1 = document.querySelector("#submit1");



submitButton1.addEventListener('click', function (e) {
    if (document.getElementById("password").value == "workshop"
        && document.getElementById("user").value == "workshop") {
        console.log("fuck")
        location.href = "file:///C:/Users/aLASTAIR/Documents/Moolahtracker/Moolahtracker/tracker.html";
    }
})

