import { getEmployees, getOrders } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li data-type="employee"
                     data-id ="${employee.id}"
                     data-name="${employee.name}"
                     data-pph="${employee.hourlyRate}"
                 >${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "employee") {
            const orders = getOrders()
            let numberOfProducts = 0
            for (const order of orders) {
                if(order.employeeId === parseInt(itemClicked.dataset.id))
                    numberOfProducts++
            }
            window.alert(`${itemClicked.dataset.name} has sold ${numberOfProducts} products`)
        }
    }
)