export default function expEl() {
    const heart = document.querySelector(".heart")
    heart.addEventListener("click", () => {
        heart.style.color = "red"
    })
    console.log(heart)
}
expEl()