const tables = [
    {
        id: 1,
        table: 1,
        reservation: false,
        reservationDate: "N/A"
    },
    {
        id: 2,
        table: 2,
        reservation: true,
        reservationDate: "08/08/2022"
    },
    {
        id: 3,
        table: 3,
        reservation: false,
        reservationDate: "N/A"
    }
]
const orders = [
    {
        id: 1,
        tableID: 1,
        partyOf: 4,
        mealType: "Dinner",
        appetizer: true,
        entree: ["Steak", " Fish", " Burger", " Salad"],
        dessert: "Pie",
        drink: "Yes Please"
    },
    {
        id: 2,
        tableID: 2,
        partyOf: 2,
        mealType: "Dinner",
        appetizer: true,
        entree: ["Fish", " Salad"],
        dessert: "Creme Brulee",
        drink: "Tea"
    },
    {
        id: 3,
        tableID: 3,
        partyOf: 1,
        mealType: "Lunch",
        appetizer: false,
        entree: "Chicken",
        dessert: "N/A",
        drink: "Coke"
    }
]

let rendertoHTML = `<section class="ethan-section">`

for (const order of orders) {
    for (const table of tables) {
        if(table.table === order.tableID) {
            rendertoHTML += `<ul class="ethan-list">`
            rendertoHTML += `<h3 class="ethan-table">Table: ${table.table}</h3>`
            rendertoHTML += `<li>Party Of: ${order.partyOf}</li>`
            rendertoHTML += `<li>Table Reservation Date: ${table.reservationDate}</li>`
            rendertoHTML += `<li>Table Reservation?: ${table.reservation}</li>`
            rendertoHTML += `<li>Order Appetizer: ${order.appetizer}</li>`
            rendertoHTML += `<li>Order Entree(s): ${order.entree}</li>`
            rendertoHTML += `<li>Order Dessert: ${order.dessert}</li>`
            rendertoHTML += `<li>Order Drink: ${order.drink}</li>`
            rendertoHTML += `</ul>`
        }    
    }
}
rendertoHTML += `</section>`

document.querySelector('#ethan').innerHTML = rendertoHTML