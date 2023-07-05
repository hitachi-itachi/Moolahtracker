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

function addrow() {
    var date = document.getElementById('DateInput').value;
    var expense = document.getElementById('ExpenseInput').value;
    var amountspent = document.getElementById('AmountSpentInput').value;

    var table = document.getElementById('myTable');

    var newrow = table.insertRow(table.rows.length);

    var dateCell = newrow.insertCell(0);
    var ExpenseCell = newrow.insertCell(1);
    var amountspentCell = newrow.insertCell(2);

    dateCell.innerHTML = date;
    ExpenseCell.innerHTML = expense;
    amountspentCell.innerHTML = amountspent;


    document.getElementById("DateInput").value = "";
    document.getElementById("ExpenseInput").value = "";
    document.getElementById("AmountSpentInput").value = "";



}

