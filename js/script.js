const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const buttonRight = document.querySelector(".right")
const buttonleft = document.querySelector(".left")
const containerItems = document.querySelector(".containerItems")
const hide = document.querySelector(".hide")
const imageCover = document.querySelector(".imageCover")

const images = ["pngwing.com.png", "pngwing.com(1).png", "pngwing.com(2).png", "pngwing.com(3).png", "pngwing.com(4).png", "pngwing.com(5).png"]

let nr = 0
const lengthOfArray = images.length

arrowLeft.addEventListener("click", () => {
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
    console.log(nr)
})

arrowRight.addEventListener("click", () => {
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
    console.log(nr)
})

/*****************CUSTOME CARD ELEMENT******************/

const IMAGES = [{
        imagePath: "pngwing.com(5).png",
        nameOfImage: "Sofa"
    },
    {
        imagePath: "pngwing.com(6).png",
        nameOfImage: "Chair"
    },
    {
        imagePath: "pngwing.com(2).png",
        nameOfImage: "Armchair",

    },
]

function createCard(images) {

    const res = images.forEach((image) => {

        // link
        const link = document.createElement("a")
        link.href = "#"
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
            nameOfImage: "Sofa"
        }, {
            imagePath: "pngwing.com(6).png",
            nameOfImage: "Chair"
        }, {
            imagePath: "pngwing.com(2).png",
            nameOfImage: "Armchair",

        }, {
            imagePath: "pngwing.com(9).png",
            nameOfImage: "Beds",

        }, {
            imagePath: "pngwing.com(10).png",
            nameOfImage: "Tables"
        }, {
            imagePath: "pngwing.com (11).png",
            nameOfImage: "Wardrobes"
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

function setRandomImageCover() {
    const random = Math.floor(Math.random() * imageCoverArr.length)
    imageCover.src = `assets/${imageCoverArr[random]}`
    console.log(random)
}
setRandomImageCover()