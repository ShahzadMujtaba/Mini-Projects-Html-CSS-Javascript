const pannels = document.querySelectorAll('.panel')

pannels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClass()
        panel.classList.add('active')
    })
})
function removeActiveClass(){
  pannels.forEach(panel=>{
      panel.classList.remove('active')
  })
}