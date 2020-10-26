// Import and invoke the ticket booth component function

import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideTicketHolders } from "./sideshows/SideTicketHolder.js";
import { TicketBooth } from "./TicketBooth.js";

TicketBooth();
FoodTicketHolders();
RideTicketHolders();
GameTicketHolders();
SideTicketHolders();