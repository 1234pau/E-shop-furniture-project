const containerChanger = document.querySelector(".armchairImage")
const changer = document.querySelector(".armchairImage h1")
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