const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "rideTicket") {
        console.log("Ride Ticket Button was clicked")
        const rideEvent = new CustomEvent("rideTicketPurchased")
        console.log(rideEvent)
        eventHub.dispatchEvent(rideEvent)
    }
    
} )

eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "foodTicket") {
        console.log("Food Ticket Button was clicked")
        const foodEvent = new CustomEvent("foodTicketPurchased")
        console.log(foodEvent)
        eventHub.dispatchEvent(foodEvent)
    }
    
} )
eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "gameTicket") {
        console.log("Game Ticket Button was clicked")
        const gameEvent = new CustomEvent("gameTicketPurchased")
        console.log(gameEvent)
        eventHub.dispatchEvent(gameEvent)
    }
    
} )
eventHub.addEventListener("click", (clickEvent) => {
    if(clickEvent.target.id === "sideTicket") {
        console.log("Side Ticket Button was clicked")
        const sideEvent = new CustomEvent("sideTicketPurchased")
        console.log(sideEvent)
        eventHub.dispatchEvent(sideEvent)
    }
    
} )

export const TicketBooth = () => {
    contentTarget.innerHTML = `
    <div>
    <button id="rideTicket">Ride Ticket</button>
        </div>
    <div>
    <button id="foodTicket">Food Ticket</button>
        </div>
    <div>
    <button id="gameTicket">Game Ticket</button>
        </div>
    <div>
    <button id="sideTicket">Side Ticket</button>
        </div>
    `
}

