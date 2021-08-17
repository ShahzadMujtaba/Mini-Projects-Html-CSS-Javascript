const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
const pre = document.getElementById('pre')
const next = document.getElementById('next')
// console.log(circles)

let currentActive = 1

next.addEventListener('click',()=>{
   currentActive++
   if(currentActive>circles.length){
     currentActive= circles.length
   }
   update()
//    console.log(currentActive)
})

pre.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive = 1
    }
    update()
    console.log(currentActive)
})

function update(){
    circles.forEach((circle,index)=>{
        if(index<currentActive){
            circle.classList.add('active')
        }
        else{
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    console.log(((actives.length-1)/(circles.length-1))*100)
    progress.style.width=((actives.length-1)/(circles.length-1))*100+'%'
    console.log(currentActive)
    if(currentActive===1){
        pre.disabled=true
    }else if(currentActive===circles.length){
      next.disabled=true
    }
    else{
        pre.disabled=false
        next.disabled=false
    }
}