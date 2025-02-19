const container = document.querySelector(".container")
const changeGridBtn = document.querySelector("#change-grid")
const randomColorBtn = document.querySelector("#random-color")
const blackBtn = document.querySelector("#black")

const width = 800
const height = 800
let size = 16

changeGridBtn.addEventListener("click", ()=>{
    size = prompt("Change Grid Size(max 100): ")
    if(size > 100 || Number.isInteger(size) || size <= 0){
        alert("Invalid Grid Size: Please input a whole number between 1 and 100")
    }else{
        container.removeChild(container.firstChild)
        createGridBox(size)
    }
})


function createGridBox(size){
    const grid = document.createElement("div")
    grid.setAttribute("class", "grid")
    grid.style.width = `${width}px`;
    grid.style.height = `${height}px`;

    for (let i = 0; i < size; i++) {
        const boxWidth = width / size;
        const boxHeight = height / size;
        for (let j = 0; j < size; j++) {
            const box = document.createElement("div")
            box.setAttribute("class", "grid-child")
            box.style.width = `${boxWidth}px`;
            box.style.height = `${boxHeight}px`;
            let opacity = 1
            box.addEventListener("mouseover", ()=>{
                opacity -= 0.1
                box.style.opacity = opacity
            })
            grid.appendChild(box)
        }
    }

    container.appendChild(grid)
}

createGridBox(size)
