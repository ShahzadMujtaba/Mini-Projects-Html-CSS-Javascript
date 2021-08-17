const nodes = document.querySelectorAll('.box')
let main_img = document.querySelector('.image-box')
console.log(main_img)

nodes.forEach(node=>{
    node.addEventListener('click',()=>{
        // console.log(node.style.backgroundImage=main_img)
        const thumbname_image = node.style.backgroundImage 
        const img = main_img.style.backgroundImage 
        main_img.style.backgroundImage = thumbname_image
        node.style.backgroundImage  = img
        // node.classList.add('image-box')
    })
})