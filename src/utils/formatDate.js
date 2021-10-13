export default function FormatDate(date) {
	const newDate = new Date(date)
	return `${newDate.toLocaleDateString()} às ${newDate.toLocaleTimeString()}`
}
