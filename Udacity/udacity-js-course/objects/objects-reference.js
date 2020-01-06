let myAccount = {
    name: 'Chanyu Choung',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount;
}

let addIncome = function (account, income) {
    account.income = account.income + income;
}

let resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Your name is ${account.name}, and you have a balance of $${balance}, expense of $${account.expenses}, with income $${account.income}.`
}

addIncome(myAccount, 2000);
addExpense(myAccount, 2.5);
addExpense(myAccount, 300);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));