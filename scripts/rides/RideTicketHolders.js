const contentTarget = document.querySelector(".rides")
const eventHub = document.querySelector("#state-fair")

export const RideTicketHolders = () => {
    eventHub.addEventListener("rideTicketPurchased", customEvent => {
        console.log("The EVENT LISTENER HAS PICKED UP ON THE CUSOM EVENT FOR RIDE TICKET PURCHASED")
        contentTarget.innerHTML += `
        <div class="person rider"></div>
        `
    })
}

