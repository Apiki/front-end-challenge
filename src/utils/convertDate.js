export default function convertDate(date) {
  date = new Date(date)
  return date.toLocaleDateString()
}