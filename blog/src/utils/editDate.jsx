function formatedDate(date) {

    const newDate = new Date(date);
    const dia = newDate.toLocaleDateString()

    return dia;
}

export default formatedDate;