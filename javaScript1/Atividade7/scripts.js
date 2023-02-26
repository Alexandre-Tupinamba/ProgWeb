(() => {
    window.addEventListener("mousemove",(e)=>{
        MannyDots = document.getElementsByClassName("dot");
        if(MannyDots.length == 8){
            MannyDots[0].remove();
        };
        const dot = document.createElement("div");
        dot.className = "dot";
        dot.style.top = `${e.clientY - 4}px`;
        dot.style.left = `${e.clientX - 4}px `;
        document.body.appendChild(dot);
    })
})();