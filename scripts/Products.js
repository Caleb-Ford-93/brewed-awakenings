import { getProducts } from "./database.js"

const products = getProducts()

export const Products = () => {
    let html = `<ul>`

    for (const product of products) {
        html += `<li data-type="product"
                     data-name="${product.name}"
                     data-price="${product.price}">
                 ${product.name}</li>`
    }

    html += "</ul>"

    return html
}

document.addEventListener (
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.dataset.type === "product") {
            const priceInt = Math.round(Number(itemClicked.dataset.price) * 100)
            const displayPrice = (priceInt / 100).toFixed(2)
            window.alert(`${itemClicked.dataset.name} costs\n$${displayPrice}`)
        }
    }
)

