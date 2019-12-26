money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
}

for (let i = 0; i < 2; i++) {
  expense = prompt("Введите обязательную статью расходов в этом месяце");
  sum = prompt("Во сколько обойдется?");

  if ( (typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(sum)) != null
  && expense != '' && sum != '' && expense.length < 50) {
    appData.expenses[expense] = sum;
    console.log('Done');
  }
}

appData.moneyPerDay = money/30;

alert("Ваш бюджет на день " + appData.moneyPerDay + " рублей");

if (appData.moneyPerDay < 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
  console.log("Высокий уровень достатка");
} else {
  console.log("Произошла ошибка");
}
console.log(appData);
