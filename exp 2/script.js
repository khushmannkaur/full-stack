// Initial balance
let balance = 0;

// Deposit function
function deposit() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Please enter a valid amount.";
        return;
    }

    balance += amount;
    document.getElementById("balance").textContent = balance;
    message.style.color = "green";
    message.textContent = "Amount deposited successfully!";
    document.getElementById("amount").value = "";
}


function withdraw() {
    let amount = Number(document.getElementById("amount").value);
    let message = document.getElementById("message");

    if (amount <= 0) {
        message.style.color = "red";
        message.textContent = "Please enter a valid amount.";
        return;
    }

    if (amount > balance) {
        message.style.color = "red";
        message.textContent = "Insufficient balance!";
        return;
    }

    balance -= amount;
    document.getElementById("balance").textContent = balance;
    message.style.color = "green";
    message.textContent = "Amount withdrawn successfully!";
    document.getElementById("amount").value = "";
}
