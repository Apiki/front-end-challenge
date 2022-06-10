export function parseData(data: string) {
    let somenteData = data.substring(0, data.indexOf('T'))
    let ano = somenteData.split("-")[0]
    let mes = somenteData.split('-')[1]
    let dia = somenteData.split('-')[2]
    return `${dia}-${mes}-${ano}`
}