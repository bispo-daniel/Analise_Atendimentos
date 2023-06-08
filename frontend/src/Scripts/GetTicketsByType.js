function getTickets(tickets, statusType) {
    let arrayOfArrays = [];

    if(tickets) {
        tickets.filter(ticketObj => {
            if (ticketObj.type === statusType) {

                const date = ticketObj.createdAt

                let formattedDate = new Date(date).toLocaleString();

                let newArray = [ticketObj.number, ticketObj.type.toUpperCase(), ticketObj.clientName, ticketObj.telephone, formattedDate]
                arrayOfArrays.push(newArray)

                return arrayOfArrays;
            } else {
                return false;
            }
        })
    }

    return arrayOfArrays;
}

export default getTickets;