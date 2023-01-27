// ELEMENTS ⬇
const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const buttonRight = document.querySelector(".right")
const buttonleft = document.querySelector(".left")
const containerItems = document.querySelector(".containerItems")
const hide = document.querySelector(".hide")
const imageCover = document.querySelector(".imageCover")
const imageCover2 = document.querySelector(".imageCover2")
const arrowRightCarusel = document.querySelector(".arrowRightCarusel")
const arrowLeftCarusel = document.querySelector(".arrowLeftCarusel")
const arrowRightCarusel2 = document.querySelector(".arrowRightCarusel2")
const arrowLeftCarusel2 = document.querySelector(".arrowLeftCarusel2")
const containerItemsCarusel = document.querySelector(".containerItemsCarusel")
const containerItemsCaruselSales = document.querySelector(".containerItemsCaruselSales")

// ELEMENTS ⬆
// image hero items
const images = ["pngwing.com.png", "pngwing.com(1).png", "pngwing.com(2).png", "pngwing.com(3).png", "pngwing.com(4).png", "pngwing.com(5).png"]

let nr = 0
const lengthOfArray = images.length

buttonleft.addEventListener("click", () => {
    if (nr === 0) {
        return
    } else {
        buttonRight.style.fill = "#030303"
        nr--
    }
    if (nr === 0) {
        buttonleft.style.fill = "grey"
    }
    const imageSrc = document.querySelector("#image").src = `assets/${images[nr]}`

})

buttonRight.addEventListener("click", () => {
    if (nr === lengthOfArray - 1) {
        return
    } else {
        buttonleft.style.fill = "#030303"
        nr++
    }
    if (nr === lengthOfArray - 1) {
        buttonRight.style.fill = "grey"
    }
    const imageSrc = document.querySelector("#image").src = `assets/${images[nr]}`

})

/*****************CUSTOME CARD ELEMENT******************/

const IMAGES = [{
        imagePath: "pngwing.com(5).png",
        nameOfImage: "Sofa",
        link: "sofa.html",
    },
    {
        imagePath: "pngwing.com(6).png",
        nameOfImage: "Chair",
        link: "chair.html",
    },
    {
        imagePath: "pngwing.com(2).png",
        nameOfImage: "Armchair",
        link: "armchair.html",

    },
]

function createCard(images) {
    const res = images.forEach((image) => {
        // link
        const link = document.createElement("a")
        link.href = `pages/${image.link}`
        containerItems.appendChild(link)
            // container div
        const divItem = document.createElement("div")
        divItem.classList.add("item")
        link.appendChild(divItem)
            // h2
        const nameOfItem = document.createElement("h2")
        nameOfItem.innerText = image.nameOfImage
        divItem.appendChild(nameOfItem)
            // container image div
        const containerImg = document.createElement("div")
        containerImg.classList.add("img")
        divItem.appendChild(containerImg)
            // image itself
        const imageTag = document.createElement("img")
        imageTag.src = `assets/${image.imagePath}`
        imageTag.alt = "imageTumbnail"
        imageTag.width = "400px"
        imageTag.height = "430px"
            // all of this are attached to containerImg
        containerImg.appendChild(imageTag)
    })
}

createCard(IMAGES)
let condition = true

hide.addEventListener("click", () => {
    containerItems.innerHTML = ""
    if (condition === true) {
        IMAGES.splice(0, 3)
        IMAGES.push({
            imagePath: "pngwing.com(5).png",
            nameOfImage: "Sofa",
            link: "sofa.html",
        }, {
            imagePath: "pngwing.com(6).png",
            nameOfImage: "Chair",
            link: "chair.html",
        }, {
            imagePath: "pngwing.com(2).png",
            nameOfImage: "Armchair",
            link: "armchair.html",

        }, {
            imagePath: "pngwing.com(9).png",
            nameOfImage: "Beds",
            link: "beds.html",

        }, {
            imagePath: "pngwing.com(10).png",
            nameOfImage: "Tables",
            link: "tables.html",
        }, {
            imagePath: "pngwing.com (11).png",
            nameOfImage: "Wardrobes",
            link: "wardrobes.html",
        }, )
        createCard(IMAGES)
        condition = false
    } else if (condition == false) {
        IMAGES.splice(-3)
        createCard(IMAGES)
        condition = true
    }
})

// update the categories section every time when press "All Categories" button
setTimeout(() => {
    window.location.hide(true);
}, 200);

// random image for cover section
const imageCoverArr = ["sven-brandsma-GZ5cKOgeIB0-unsplash.jpg", "francesca-tosolini-lTILrQvFbIc-unsplash.jpg", "francesca-tosolini-lLDh9JppH2c-unsplash.jpg", "francesca-tosolini-w1RE0lBbREo-unsplash.jpg"]

function setRandomImageCover(element) {
    const random = Math.floor(Math.random() * imageCoverArr.length)
    element.src = `assets/${imageCoverArr[random]}`
    console.log(random)
}
setRandomImageCover(imageCover)
setRandomImageCover(imageCover2)

// Event listener for scrolling behavior on arrows

arrowRightCarusel.addEventListener("click", function() { scrollRight(containerItemsCarusel) })
arrowLeftCarusel.addEventListener("click", function() { scrollLeft(containerItemsCarusel) })
arrowRightCarusel2.addEventListener("click", function() { scrollRight(containerItemsCaruselSales) })
arrowLeftCarusel2.addEventListener("click", function() { scrollLeft(containerItemsCaruselSales) })

function scrollRight(el) {
    el.scrollBy(500, 0);
}

function scrollLeft(el) {
    el.scrollBy(-500, 0);
}

// image carusel

/* <div class="containerBestsellersItems">
<div class="imageAndPrice">
<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>
<div class="imgContainer">
<img src="assets/pngwing.com.png" alt="item">
</div>
<h2>Name of the Item</h2>
<span>$56</span>
<button>Add to cart</button>
</div>
</div> */


const IMAGES_CARUSEL = [{
        imagePath: "pngwing.com(5).png",
        nameOfImage: "Sofa",
        price: "$56",
        textButton: "Add to cart"
    },
    {
        imagePath: "pngwing.com(6).png",
        nameOfImage: "Chair",
        price: "$560",
        textButton: "Add to cart"
    },
    {
        imagePath: "pngwing.com(2).png",
        nameOfImage: "Armchair",
        price: "$42",
        textButton: "Add to cart"

    },
    {
        imagePath: "pngwing.com(1).png",
        nameOfImage: "Armchair",
        price: "$50",
        textButton: "Add to cart"
    },
    {
        imagePath: "pngwing.com(10).png",
        nameOfImage: "Table",
        price: "$156",
        textButton: "Add to cart"
    },
    {
        imagePath: "pngwing.com(9).png",
        nameOfImage: "Beds",
        price: "$236",
        textButton: "Add to cart"

    }
]

function createCardCarusel(images, el1) {
    const res = images.forEach((image) => {
        // containerBestsellersItems
        const containerBestsellersItems = document.createElement("div")
        containerBestsellersItems.classList.add("containerBestsellersItems")
        el1.appendChild(containerBestsellersItems)
            // imageAndPrice
        const imageAndPrice = document.createElement("div")
        imageAndPrice.classList.add("imageAndPrice")
        containerBestsellersItems.appendChild(imageAndPrice)
            // svg
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 24 24"><path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"/></svg>`
        imageAndPrice.innerHTML = svg
            // imgContainer
        const imgContainer = document.createElement("div")
        imgContainer.classList.add("imgContainer")
        imageAndPrice.appendChild(imgContainer)
            // image
        const img = document.createElement("img")
        img.src = `assets/${image.imagePath}`
        img.alt = "imageTumbnailCarusel"
        img.width = "400px"
        img.height = "400px"
        imgContainer.appendChild(img)
            // h2
        const h2 = document.createElement("h2")
        h2.innerText = image.nameOfImage
        imageAndPrice.appendChild(h2)
            // span
        const span = document.createElement("span")
        span.innerText = image.price
        imageAndPrice.appendChild(span)
            // button
        const button = document.createElement("button")
        button.innerText = image.textButton
        imageAndPrice.appendChild(button)
            // all of this are attached to containerItemsCarusel
        el1.appendChild(containerBestsellersItems)
    })
}
createCardCarusel(IMAGES_CARUSEL, containerItemsCarusel)
createCardCarusel(IMAGES_CARUSEL, containerItemsCaruselSales)

console.log(containerItemsCaruselSales)