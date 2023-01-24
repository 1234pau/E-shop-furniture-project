const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const buttonRight = document.querySelector(".right")
const buttonleft = document.querySelector(".left")
const containerItems = document.querySelector(".containerItems")
const hide = document.querySelector(".hide")
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
            imagePath: "pngwing.com.png",
            nameOfImage: "Chair"
        },
        {
            imagePath: "pngwing.com(1).png",
            nameOfImage: "Sofa"
        },
        {
            imagePath: "pngwing.com(2).png",
            nameOfImage: "Armchair",

        },


    ]
    //IMAGES.length = 3

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
        imageTag.height = "500px"
            // all of this are attached to containerImg
        containerImg.appendChild(imageTag)
    })
}

createCard(IMAGES)
    //console.log("outside", IMAGES.length)
let condition = true

hide.addEventListener("click", () => {
        containerItems.innerHTML = ""
        setTimeout(() => {
            window.location.hide(true);
        }, 200);
        //console.log("outside", condition)
        if (condition === true) {
            IMAGES.pop()
            IMAGES.pop()
            IMAGES.pop()

            IMAGES.push({
                    imagePath: "pngwing.com.png",
                    nameOfImage: "Chair"
                }, {
                    imagePath: "pngwing.com(1).png",
                    nameOfImage: "Sofa"
                }, {
                    imagePath: "pngwing.com(2).png",
                    nameOfImage: "Armchair",

                }, {
                    imagePath: "pngwing.com(3).png",
                    nameOfImage: "Beed",

                }, {
                    imagePath: "pngwing.com(4).png",
                    nameOfImage: "Coach"
                }, {
                    imagePath: "pngwing.com(5).png",
                    nameOfImage: "Otoman"
                }, )
                // console.log("if statement", IMAGES.length)
                // console.log("object", IMAGES)
                // console.log("inside", condition)
            createCard(IMAGES)
            condition = false
        } else if (condition == false) {
            IMAGES.pop()
            IMAGES.pop()
            IMAGES.pop()
            createCard(IMAGES)
                //console.log("else if statement", IMAGES.length)
            condition = true
        }

    })
    // window.addEventListener("load", (event) => {
    //     console.log("component is fully loaded");
    // });
    // document.addEventListener("DOMContentLoaded", (event) => {
    //     console.log("component is fully loaded");
    // });
    // document.addEventListener("readystatechange", (event) => {
    //     console.log("component is fully loaded");
    // });