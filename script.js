let money, time;
let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true
}

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while( isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
start();

function chooseExpenses() {
  for (let i = 0; i < 2; i++) {
    let expense = prompt("Введите обязательную статью расходов в этом месяце"),
    sum = prompt("Во сколько обойдется?");
  
    if ( (typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(sum)) != null
    && expense != '' && sum != '' && expense.length < 50) {
      appData.expenses[expense] = sum;
      console.log('Done');
    }
  }
}
chooseExpenses();

function detectDayBudget() {
  appData.moneyPerDay = (money / 30).toFixed();
  alert("Ваш бюджет на день " + appData.moneyPerDay + " рублей");
}
detectDayBudget();

function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
  } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
  } else {
    console.log("Произошла ошибка");
  }
}
detectLevel();

function checkSavings() {
  if (appData.savings === true) {
    let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

    appData.monthIncome = save/100/12*percent;
    alert("Доход в месяц с вашего депозита " + appData.monthIncome);
  }
}
checkSavings();

function chooseOptExpenses() {
  for (let i = 0; i < 3; i++) {
    let expense = prompt("Статья необязательных расходов");
    appData.optionalExpenses[i+1] = expense;
  }
}
chooseOptExpenses();

console.log(appData);
