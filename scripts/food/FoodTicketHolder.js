const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        console.log("The EVENT LISTENER HAS PICKED UP ON THE CUSOM EVENT FOR FOOD TICKET PURCHASED")
        contentTarget.innerHTML += `
        <div class="person eater"></div>
        `
    })
}