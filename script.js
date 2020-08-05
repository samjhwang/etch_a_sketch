const container_div = document.querySelector(".container");
const reset_button = document.querySelector("button");
function main()
{
    let n = prompt("What would you like your Grid size to be? Maximum is 100!")
    createGrid(n);
    reset_button.addEventListener('click', reset);
}
function createGrid(n)
{
    for (let i = 0; i < n** 2; i++) {
        const newDiv = document.createElement('div');
        container_div.appendChild(newDiv);
        newDiv.classList.add('newGrid');
        newDiv.style.width = `${1/n*100}%`;
        newDiv.style.height = newDiv.style.width;

        newDiv.addEventListener('mouseover', drawSketch);
    }

}
function drawSketch(e)
{
    e.target.style.backgroundColor = "black";
}

function reset()
{
    location.reload();
}

main();