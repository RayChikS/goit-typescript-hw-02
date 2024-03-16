/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

function isWeekend(day: Weekday): boolean {
  return day === Weekday.SATURDAY || day === Weekday.SUNDAY;
}

const currentDay: Weekday = Weekday.MONDAY;
console.log(isWeekend(currentDay));

const anotherDay: Weekday = Weekday.SATURDAY;
console.log(isWeekend(anotherDay));
