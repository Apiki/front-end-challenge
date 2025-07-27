export const formattedDate = (date: any) => {
    const dateFormatted = new Date(date).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
    });

    return dateFormatted
}