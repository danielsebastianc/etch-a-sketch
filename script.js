const container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    const grid = document.createElement("div")
    grid.setAttribute("class", "grid")
    for (let j = 0; j < 16; j++) {
        const box = document.createElement("div")
        box.setAttribute("class", "grid-child")
        let opacity = 1
        box.addEventListener("mouseenter", ()=>{
            opacity -= 0.1
            box.style.opacity = opacity
        })
        grid.appendChild(box)
    }
    container.appendChild(grid)
}
