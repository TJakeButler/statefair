const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideTicketHolders = () => {
    eventHub.addEventListener("sideTicketPurchased", customEvent => {
        console.log("The EVENT LISTENER HAS PICKED UP ON THE CUSOM EVENT FOR SIDE TICKET PURCHASED")
        contentTarget.innerHTML += `
        <div class="person gawker"></div>
        `
    })
}