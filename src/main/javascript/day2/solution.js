function isWorkDay(day) {
  return day.getDay() % 6;
}
  
function getRecoverableHoursForADate(holiday) {
  if (isWorkDay(holiday)) {
    return 2;
  }
  return 0;
}
  
function toDate(year, holiday) {
  return new Date(holiday + "/" + year);
}
  
function countHours(year, holidays) {
  let hours = 0;
  for (const holiday of holidays) {
    hours += getRecoverableHoursForADate(toDate(year, holiday));
  }
  return hours
}