export const ConvertDate = (date) => {
    let convertedTime = date.split('T')[1];

    let convertedDate = date.split('T')[0].split('-').reverse().join("/")

    return convertedDate + " " + convertedTime;
}
