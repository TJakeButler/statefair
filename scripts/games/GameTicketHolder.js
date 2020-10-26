const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        console.log("The EVENT LISTENER HAS PICKED UP ON THE CUSTUM EVENT FOR GAME TICKET PURCHASED")
        contentTarget.innerHTML += `
        <div class="person player"></div>
        `
    })
}

