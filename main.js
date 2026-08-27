let totalIncome = 40000;
let totalExpense = 0;
const addExpensebtn =
document.getElementById("addExpensebtn");
const expenseModal =
document.getElementById("expenseModal");
const closeModal =
document.getElementById("closeModal");
const expenseForm =
document.getElementById("expenseForm");
addExpensebtn.addEventListener("click",function(){
    expenseModal.style.display = "flex";
});
closeModal.addEventListtener("click", function(){
    expenseModal.style.display = "none";
});
expenseModal.addEventListener("click", function(event)
{
    if (event.target === expenseModal){
        expenseModal.style.display = "none";
    }
});
function updateDashboard() {
    document.getElementById("income").innerText = "₹" + totalIncome.toLocaleString();
    document.getElementById("expense").innerText = "₹" + totalExpense.toLocaleString();
    let balance = totalIncome - totalExpense;
    document.getElementById("balance").innerText = "₹" + balance.toLocaleString();
}
document
.getElementById("expenseForm")
.addEventListener("submit",function(event){
    event.preventDefault();
    let name = 
    document.getElementById("expenseName").value;
    let amount =
    Number(document.getElementById("expenseAmount").value);
    let date=
    document.getElementById("expenseDate").value;
    totalExpense += amount;
    let transactionList = 
    document.getElementById("transactionList");
    transaction.className ="transaction";
    transaction.innerHTML = `
    <div>
    <strong>${name}</strong>
    <p>${date}</p>
    </div>
    `;
     
    transactionList.prepend(transaction);
    updateDashboard();
    document.getElementById("expenseForm").reset();
    closeForm();
});
function searchTransactions() {
    let search = 
    document.getElementById("search")
    .value
    .tolowerCase();
    let transaction = document.querySelectorAll(".transaction");
    transactions.forEach(function(transaction) {
        let text = transaction.innerText.tolowerCase();
        if(text.includes(search)){
            transaction.style.display = "flex";
        } else {
            transaction.style.display = "none";
        }
    });
}
updateDashboard();













