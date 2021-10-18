
export function handleFormatDate(date){
    const data = new Date(date)
     const d = data.toLocaleDateString();
     const h = data.toLocaleTimeString()
    return d + ' ' + h;
}
