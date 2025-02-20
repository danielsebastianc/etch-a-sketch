const container = document.querySelector(".container")
const changeGridBtn = document.querySelector("#change-grid")
const randomColorBtn = document.querySelector("#random-color")
const blackBtn = document.querySelector("#black")

const width = 800
const height = 800
let size = 16
let currentColorMode = "black"

randomColorBtn.addEventListener("mouseenter", ()=>{
    randomColorBtn.style.backgroundColor = randomHSLA()
    randomColorBtn.style.color = "black"
})

randomColorBtn.addEventListener("mouseleave", ()=>{
    randomColorBtn.style.backgroundColor = "white"
})

changeGridBtn.addEventListener("click", ()=>{
    let newSize = prompt("Change Grid Size(max 100): ")
    newSize = parseInt(newSize, 10);
    if(isNaN(newSize) || newSize > 100 || newSize <= 0 || !Number.isInteger(newSize)){
        alert("Invalid Grid Size: Please input a whole number between 1 and 100")
    }else{
        size = newSize;
        container.removeChild(container.firstChild)
        createGridBox(size, currentColorMode)
    }
})

blackBtn.addEventListener("click", ()=>{
    currentColorMode = "black";
    container.removeChild(container.firstChild)
    createGridBox(size, currentColorMode)
})

randomColorBtn.addEventListener("click", ()=>{
    currentColorMode = "random"
    container.removeChild(container.firstChild)
    createGridBox(size, currentColorMode)
})

function randomHSLA(){
    return `hsla(${~~(360 * Math.random())}, 70%,  72%, 0.8)`
}

function createGridBox(size, currentColorMode){
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
            let opacity = 0
            box.addEventListener("mouseover", (e)=>{
                opacity += 0.1
                box.style.opacity = opacity
                if(currentColorMode == "random"){
                    e.target.style.backgroundColor = randomHSLA()
                }else{
                    e.target.style.backgroundColor = "black"
                }
            })
            grid.appendChild(box)
        }
    }
    container.appendChild(grid)
}

createGridBox(size, currentColorMode)
