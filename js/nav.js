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
        // const but = document.querySelector(".addToCart")
    const containerOpenDialogCart = document.querySelector(".containerOpenDialogCart")
        // console.log(containerOpenDialogCart)
        // console.log(closeMod)
        // console.log(but)
    heart.style.color = color


    heart.addEventListener("click", () => {
        let saved = JSON.parse(localStorage.getItem('itemHeart'));
        containerOpenDialog.innerHTML = saved
        openDialog.showModal();
        console.log("click heart")
    })
    closeMod.addEventListener("click", () => {
        openDialog.close();
        console.log("close Heart")
    })

    cart.addEventListener("click", () => {
        let savedCart = JSON.parse(localStorage.getItem('itemCart'));
        containerOpenDialogCart.innerHTML = savedCart
        openDialogCart.showModal();

        console.log("click cart")
    })
    closeModCart.addEventListener("click", () => {
            openDialogCart.close();
            console.log("closeCart")
        })
        // console.log(heart)
        // console.log(closeMod)
        // console.log(closeModCart)

}, 1000)