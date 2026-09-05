const leavesContainer =
    document.getElementById("leaves");


function createLeaf() {

    const leaf =
        document.createElement("div");

    leaf.classList.add("cherry-leaf");


    const size =
        Math.random() * 22 + 16;


    const opacity =
        Math.random() * 0.45 + 0.4;

    const duration =
        Math.random() * 5 + 8;


    const left =
        Math.random() * 100;


    const wind =
        Math.random() * 300 - 150;


    leaf.style.left =
        `${left}vw`;

    leaf.style.setProperty(
        "--size",
        `${size}px`
    );

    leaf.style.setProperty(
        "--opacity",
        opacity
    );

    leaf.style.setProperty(
        "--duration",
        `${duration}s`
    );

    leaf.style.setProperty(
        "--wind",
        `${wind}px`
    );


    leavesContainer.appendChild(leaf);


    setTimeout(() => {
        leaf.remove();
    }, duration * 1000 + 500);
}



setInterval(() => {

    createLeaf();

}, 700);


for (let i = 0; i < 8; i++) {

    setTimeout(
        createLeaf,
        i * 300
    );

}