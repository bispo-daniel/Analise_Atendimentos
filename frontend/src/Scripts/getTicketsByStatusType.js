export function get(tickets, statusType) {
    let arrayOfArrays = [];

    if(tickets) {
        tickets.filter(ticketObj => {
            if (ticketObj.status === statusType) {
                let newArray = [ticketObj.id, ticketObj.status.toUpperCase(), ticketObj.contact.name, ticketObj.contact.number, ticketObj.createdAt]
                arrayOfArrays.push(newArray)

                return arrayOfArrays;
            } else {
                return false;
            }
        })
    }

    return arrayOfArrays
}

