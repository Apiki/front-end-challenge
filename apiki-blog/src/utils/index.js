
export const getFormatedDate = (datetime) => {
    const date = new Date(datetime)
    const day = date.getDay() < 10 ? 
      '0' + date.getDay().toString() : 
      date.getDay().toString()
    const month = (date.getMonth() + 1) < 10 ?
      '0' + (date.getMonth() + 1).toString() :
      (date.getMonth() + 1).toString()
    const year = date.getFullYear().toString()
    return `${day}/${month}/${year}`
}