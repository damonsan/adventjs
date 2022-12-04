function countHours(year, holidays) {
    return holidays.map(holiday => new Date([holiday, "/", year].concat())).filter(holiday => holiday.getDay() % 6).length * 2;
  }