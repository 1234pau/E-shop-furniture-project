const containerChanger = document.querySelector(".armchairImage")
const changer = document.querySelector(".armchairImage h1")
const items = document.querySelector(".items")

const valuechanger = changer.innerHTML
    // console.log(valuechanger)
    // console.log(containerChanger)
switch (valuechanger) {
    case "Chairs":
        containerChanger.style.backgroundImage = "url(/assets/r-architecture-TRCJ-87Yoh0-unsplash.jpg)"
        break
    case "Tables":
        containerChanger.style.backgroundImage = "url(/assets/szasa-amanda-9xXmOB2gafo-unsplash.jpg)"
        break
    case "Beds":
        containerChanger.style.backgroundImage = "url(/assets/francesca-tosolini-w1RE0lBbREo-unsplash.jpg)"
        break
    case "Sofas":
        containerChanger.style.backgroundImage = "url(/assets/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg)"
        break
    case "Wardrobes":
        containerChanger.style.backgroundImage = "url(/assets/roberto-nickson-ZXbDeof0nlQ-unsplash.jpg)"
        break
    case "Armchairs":
        containerChanger.style.backgroundImage = "url(/assets/di_an_h-g_8MrEZAvyE-unsplash.jpg)"
        break
    default:
        containerChanger.style.backgroundImage = "url(/assets/sven-brandsma-GZ5cKOgeIB0-unsplash.jpg)"
}

async function products() {
    const response = await fetch("/products.json")
    const data = await response.json()
    const forEachItem = (tipeOfItem) => {
            const res = tipeOfItem.forEach((item) => {
                // containerBestsellersItems
                const containerItems = document.createElement("div")
                items.appendChild(containerItems)
                containerItems.classList.add("containerItems")
                    // divImage
                const divImage = document.createElement("div")
                divImage.classList.add("divImage")
                containerItems.appendChild(divImage)
                    // svg
                const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3rem" class="heart" height="3rem" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>`
                divImage.innerHTML = svg
                    // imgContainer
                const imgContainer = document.createElement("div")
                imgContainer.classList.add("imgContainer")
                divImage.appendChild(imgContainer)
                    // image
                const img = document.createElement("img")
                img.classList.add("img")
                img.src = item.imageURL
                img.alt = "imageTumbnail"
                img.width = "400px"
                img.height = "400px"
                imgContainer.appendChild(img)
                    // h2
                const h2 = document.createElement("h2")
                h2.innerText = item.name
                divImage.appendChild(h2)
                    // span
                const span = document.createElement("span")
                span.innerText = item.price
                divImage.appendChild(span)
                    // button
                const button = document.createElement("button")
                button.innerText = item.textButton
                divImage.appendChild(button)
                    // all of this are attached to containerItemsCarusel
                items.appendChild(containerItems)
            })

            // console.log(data.armchairs[0])
        }
        // forEachItem(data.armchairs)
    switch (valuechanger) {
        case "Chairs":
            forEachItem(data.chairs)

            break
        case "Tables":
            forEachItem(data.tables)
            break
        case "Beds":
            forEachItem(data.beds)
            break
        case "Sofas":
            forEachItem(data.sofas)
            break
        case "Wardrobes":
            forEachItem(data.wardrobes)
                // getItem(data.wardrobes)
            break
        case "Armchairs":
            forEachItem(data.armchairs)
                // getItem(data.armchairs)
            break

    }
}
products()
const color = localStorage.getItem("color")
let cloneEl

function getItem() {
    setTimeout(() => {
            const openDialog = document.querySelector(".openDialog")
            const svg = [...document.querySelectorAll(".heart")].forEach((item) => {
                const containerItems = [...document.querySelectorAll(".containerItems")]
                for (let i = 0; i < containerItems.length; i++) {
                    item.addEventListener('click', () => {
                        const value = localStorage.setItem("color", "red")
                        item.style.color = color
                        if (containerItems[i].hasChildNodes(item)) {
                            const element = item.parentElement
                            cloneEl = element.cloneNode(true)
                            openDialog.appendChild(cloneEl)
                            localStorage.setItem("element", cloneEl)
                                // console.log(element)
                        } else {
                            console.log(false)
                        }
                        console.log("clone", cloneEl)
                    })
                    break
                }
            })
        },
        1000)
}
getItem()