const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")
const buttonRight = document.querySelector(".right")
const buttonleft = document.querySelector(".left")



const images = ["pngwing.com.png","pngwing.com(1).png", "pngwing.com(2).png", "pngwing.com(3).png", "pngwing.com(4).png", "pngwing.com(5).png"]

let nr = 0
const lengthOfArray = images.length
console.log(lengthOfArray)

arrowLeft.addEventListener("click", ()=>{
  if(nr === 0){
      return
    }else{
      buttonRight.style.fill = "#030303"
      nr--
    }
    if(nr === 0){
      buttonleft.style.fill = "grey"
    }
    const imageSrc = document.querySelector("#image").src= `assets/${images[nr]}`
  console.log(nr)
})

arrowRight.addEventListener("click", ()=>{
  if(nr === lengthOfArray-1){
    return
  }else{
    buttonleft.style.fill = "#030303"
    nr++
  }
  if(nr === lengthOfArray-1){
    buttonRight.style.fill = "grey"
  }
  const imageSrc = document.querySelector("#image").src= `assets/${images[nr]}`
  console.log(nr)
})