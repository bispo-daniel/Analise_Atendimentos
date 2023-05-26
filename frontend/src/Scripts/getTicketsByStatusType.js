export function get(tickets, statusType) {
    let arrayOfArrays = [];

    if(tickets) {
        tickets.filter(ticketObj => {
            if (ticketObj.status === statusType) {

                const date = ticketObj.createdAt

                let formattedDate = new Date(date).toLocaleString();

                let newArray = [ticketObj.id, ticketObj.status.toUpperCase(), ticketObj.contact.name, ticketObj.contact.number, formattedDate]
                arrayOfArrays.push(newArray)

                return arrayOfArrays;
            } else {
                return false;
            }
        })
    }

    return arrayOfArrays
}