export function GetDate(date: string | Date): string {
  const newDate = new Date(date)

  return `${newDate.toLocaleDateString()} às ${newDate.toLocaleTimeString()}`
}
