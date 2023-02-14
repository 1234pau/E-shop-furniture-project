fetch('/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

setTimeout(() => {
    const color = localStorage.getItem("color")
    const heart = document.querySelector(".heartHome")
    const cart = document.querySelector(".cart")
    const openDialog = document.querySelector(".openDialog")
    const openDialogCart = document.querySelector(".openDialogCart")
    const closeModCart = document.querySelector(".closeModCart")
    const closeMod = document.querySelector(".closeMod")
    const containerOpenDialog = document.querySelector(".containerOpenDialog")
    const heartNotification = document.querySelector(".heartNotification")
        // const but = document.querySelector(".addToCart")
    const cartNotification = document.querySelector(".cartNotification")
    const quantity = document.querySelector(".quantity")
    const containerOpenDialogCart = document.querySelector(".containerOpenDialogCart")
    heart.style.color = color

    console.log(containerOpenDialogCart)
    console.log(containerOpenDialogCart.children.length)

    // function checkLengthItemsInModals(containerOpenDialog, heartNotification) {
    //     if (containerOpenDialog.children.length === 0) {
    //         heartNotification.style.visibility = "hidden"
    //     } else {

    //         heartNotification.style.visibility = "visible"
    //         heartNotification.innerHTML = containerOpenDialog.children.length
    //     }
    // }

    // checkLengthItemsInModals(containerOpenDialogCart, cartNotification)



    heart.addEventListener("click", () => {
        let saved = JSON.parse(localStorage.getItem('itemHeart'));
        containerOpenDialog.innerHTML = saved
        openDialog.showModal();
        // console.log("click heart")
    })
    closeMod.addEventListener("click", () => {
        openDialog.close();
        // console.log("close Heart")
    })

    cart.addEventListener("click", () => {
        let savedCart = JSON.parse(localStorage.getItem('itemCart'));
        containerOpenDialogCart.innerHTML = savedCart
        openDialogCart.showModal();
        quantity.innerHTML = containerOpenDialogCart.children.length

        // console.log("click cart")
    })
    closeModCart.addEventListener("click", () => {
        openDialogCart.close();
        // console.log("close Cart")
    })

}, 1000)