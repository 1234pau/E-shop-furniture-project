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
    const openDialog = document.querySelector(".openDialog")
    heart.style.color = color

    heart.addEventListener("click", () => {
        openDialog.showModal();
        // console.log(cloneEl)
        console.log("click heart")
    })
    openDialog.addEventListener("click", () => {
        openDialog.close();
    })
}, 1000)