const dates = ["2019-01-01", "2019-01-02", "2019-01-03"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

 function formatDates(elemets) {
    const parts = elemets.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
 }