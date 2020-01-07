let money, time;

function start() {
  money = +prompt("Ваш бюджет на месяц?");
  time = prompt("Введите дату в формате YYYY-MM-DD");

  while( isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?");
  }
}
start();

let appData = {
  budjet: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let expense = prompt("Введите обязательную статью расходов в этом месяце"),
      sum = prompt("Во сколько обойдется?");
    
      if ( (typeof(expense)) === 'string' && (typeof(expense)) != null && (typeof(sum)) != null
      && expense != '' && sum != '' && expense.length < 50) {
        appData.expenses[expense] = sum;
        console.log('Done');
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (money / 30).toFixed();
    alert("Ваш бюджет на день " + appData.moneyPerDay + " рублей");
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings === true) {
      let save = +prompt("Какова сумма накоплений?"),
          percent = +prompt("Под какой процент?");
  
      appData.monthIncome = save/100/12*percent;
      alert("Доход в месяц с вашего депозита " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let expense = prompt("Статья необязательных расходов");
      appData.optionalExpenses[i+1] = expense;
    }
  },
  chooseIncome: function() {
    let items = prompt('Что принесет дополнительный доход? (перечислете через запятую)');
    let item = prompt('Может что-то еще?');
    let text = [];
    if ((typeof(items)) === 'string' && (typeof(items)) != null && items != '') {
      appData.income = items.split(', ');
      if ((typeof(item)) === 'string' && (typeof(item)) != null && item != '') {
        appData.income.push(item);
      }
      appData.income.sort();
    }
    appData.income.forEach(function(item, index) {
      text.push((index + 1) + '. ' + item );
    });
    alert('Способы дополнительного заработка: ' + "\u000A" + text.join("\u000A"));
  },
  listProps: function() {
    let props = [];
    for (prop in appData) {
      props.push(prop);
    }
    console.log('Наша программа включает в себя данные: ' + props.join(', '));
  }
}

appData.chooseIncome();
appData.listProps();
console.log(appData);
