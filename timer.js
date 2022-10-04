import emitter from 'events';

// Формат даты ЧЧ:ММ ГГГГ-ММ-ДД

let [time, date] = process.argv.splice(2);

let ms = Date.parse(`${date}T${time}`);
let current = Date.now();

if (ms) {
  console.log(ms);
} else {
  console.log('Неверный формат даты');
}

class Timer {
  constructor({ dateFrom, dateTo }) {
    this.from = from;
    this.to = to;
  }
  createTimer() {}
}
