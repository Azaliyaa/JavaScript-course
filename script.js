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

expense1 = prompt("Введите обязательную статью расходов в этом месяце");
sum1 = prompt("Во сколько обойдется?");
expense2 = prompt("Введите обязательную статью расходов в этом месяце");
sum2 = prompt("Во сколько обойдется?");

appData.expenses[expense1] = sum1;
appData.expenses[expense2] = sum2;

alert("Ваш бюджет на день " + money/30 + " рублей");

console.log(appData);
