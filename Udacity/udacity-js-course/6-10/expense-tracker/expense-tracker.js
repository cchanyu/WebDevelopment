const account = {
    name: 'Chanyu Choung',
    expenses: [],
    income: [],
    addExpense: function (description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function (description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncome = 0;
        let accountBalance = 0;

        this.expenses.forEach(function (expense) {
            totalExpenses = totalExpenses + expense.amount;
        })

        this.income.forEach(function(income) {
            totalIncome = totalIncome + income.amount;
        })

        accountBalance = totalIncome - totalExpenses;

        return `${this.name} has a balance of $${accountBalance}, $${totalIncome} in income. $${totalExpenses} in expense.`
    }
}

// Expense -> description, amount
// addExpense -> description, amount
// getAccountSummary -> total up all expenses -> Chanyu Choung has $1250 in expenses.

account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
console.log(account.getAccountSummary());