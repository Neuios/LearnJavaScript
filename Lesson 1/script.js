let money = prompt('Ваш бюджет на месяц?','');
let time = prompt('Введите дату в формате YYYY-MM-DD','');

let impCosts = prompt('Введите обязательную статью расходов в этом месяце',''),
    cost = prompt('Во сколько обойдется?','');

let expenses = {
    impCosts: cost
};

let optionalExpenses = {

};

let income = [];

let appData = {
    money,
    time,
    expenses,
    optionalExpenses,
    income,
    saving: false
};

alert(money / 30);