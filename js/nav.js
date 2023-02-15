fetch('/nav.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#replace_with_navbar");
        let newelem = document.createElement("div");
        newelem.classList.add("navDivContainer");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })

setTimeout(() => {
    const heart = document.querySelector(".heartHome")
    const cart = document.querySelector(".cart")
    const openDialog = document.querySelector(".openDialog")
    const openDialogCart = document.querySelector(".openDialogCart")
    const closeModCart = document.querySelector(".closeModCart")
    const closeMod = document.querySelector(".closeMod")
    const containerOpenDialog = document.querySelector(".containerOpenDialog")
    const heartNotification = document.querySelector(".heartNotification")
    const cartNotification = document.querySelector(".cartNotification")
    const quantity = document.querySelector(".quantity")
    const containerOpenDialogCart = document.querySelector(".containerOpenDialogCart")
    const amount = document.querySelector(".amount")

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
        quantity.innerHTML = containerOpenDialogCart.children.length // populate the quantity spam information
            // console.log("click cart")
    })
    closeModCart.addEventListener("click", () => {
        openDialogCart.close();
        // console.log("close Cart")
    })

}, 1000)