function isBusinessHours(): boolean {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = воскресенье, 1 = понедельник, …, 6 = суббота
  const hour = now.getHours();

  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6; // воскресенье или суббота
  const isWorkingDay = !isWeekend;
  const isWorkingTime = hour >= 9 && hour < 21; // с 9:00 до 18:00

  return isWorkingDay && isWorkingTime;
}

export default isBusinessHours;
