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
    const closeMod = document.querySelector(".closeMod")
    const closeModCart = document.querySelector(".closeModCart")
    heart.style.color = color

    heart.addEventListener("click", () => {
        openDialog.showModal();
        console.log("click heart")
    })
    cart.addEventListener("click", () => {
        openDialogCart.showModal();
        console.log("click cart")
    })
    closeMod.addEventListener("click", () => {
        openDialog.close();
    })
    closeModCart.addEventListener("click", () => {
        openDialogCart.close();
    })

}, 1000)