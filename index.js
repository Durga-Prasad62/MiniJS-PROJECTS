let RandomBtn = document.querySelector(".randomColor")
let ApplyBtn = document.querySelector(".applyColor")
let InputText = document.querySelector(".enterColor")
let currentColor = document.querySelector(".colorValue")
let body = document.body 


 const colorArray = ["red","black","green","white","tomato","pink","yellow","purple","violet","orange","lightgrey","blue","skyblue","aqua","azure","brown"]

generateRandomfunction=()=>{
        const  count = Math .floor (Math.random()*colorArray.length)
        return colorArray[count]
  
}


changeColor=(color)=>{
    body.style.backgroundColor = color
    currentColor.innerText = color
}

handleRandombutton=()=>{
    let  color  = generateRandomfunction()
    changeColor(color)
    
}
handleApplybutton=()=>{
      const  color =   InputText.value
       changeColor(color)

}



RandomBtn.addEventListener("click",handleRandombutton)
ApplyBtn.addEventListener("click",handleApplybutton)





