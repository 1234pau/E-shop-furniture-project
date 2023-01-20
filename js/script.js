const arrowLeft = document.querySelector(".arrowLeft")
const arrowRight = document.querySelector(".arrowRight")


const images = ["pngwing.com.png","pngwing.com(1).png", "pngwing.com(2).png", "pngwing.com(3).png"]

let nr = 0
const lengthOfArray = images.length

arrowLeft.addEventListener("click", ()=>{
  if(nr == 1 || nr == 2 || nr == 3 || nr == 4){
  const imageSrc = document.querySelector("#image").src= `assets/${images[nr--]}`
  }else if(nr == 0){
    const imageSrc = document.querySelector("#image").src= `assets/${images[0]}`
    return
  }else{
    return
  }
  console.log(nr)
  console.log("left")
})
console.log(lengthOfArray)
arrowRight.addEventListener("click", ()=>{
  
  
  if(nr === lengthOfArray-1){
    return
  }else{
    nr++

  }
  const imageSrc = document.querySelector("#image").src= `assets/${images[nr]}`
  console.log(nr)
  console.log("right")
})