function loadAllContext() {

    function createIMG(src) {
        let image = document.createElement("img");
        image.src = src;

        return image;
    }

    let image = createIMG("file/mario.png");

    function createContainer(clasName) {
        let div = document.createElement("div");
        div.className = clasName;
        document.body.insertBefore(div, document.getElementById("scr"));
        return div;
    }

    let container = createContainer("container");

    function createButton(classList, text) {
        let button = document.createElement("button");
        for (let f of classList) {
            button.classList.add(f);
        }
        button.innerText = text;
        return button;

    }

    function createContainerImg(clasName) {
        let div = document.createElement("div");
        div.className = clasName;
        //document.body.insertBefore(div, document.getElementById("scr"));
        document.body.insertBefore(div, document.body.firstChild);
        return div;
    }

    createContainerImg("img-container");
    document.getElementsByClassName("img-container")[0].appendChild(image);

    let btn1 = createButton(["btn", "btn-start"], "Start");
    document.getElementsByClassName("container")[0].appendChild(btn1);

    let btn2 = createButton(["btn", "btn-stop"], "Stop");
    document.getElementsByClassName("container")[0].appendChild(btn2);

    let btn3 = createButton(["btn", "btn-reset"], "Reset");
    document.getElementsByClassName("container")[0].appendChild(btn3);

    let btn4 = createButton(["btn", "btn-jump"], "Jump");
    document.getElementsByClassName("container")[0].appendChild(btn4);

}

function action() {
    let elementStart = document.getElementsByClassName("btn-start")[0];
    let elementStop = document.getElementsByClassName("btn-stop")[0];
    let elementReset = document.getElementsByClassName("btn-reset")[0];
    let elementJump = document.getElementsByClassName("btn-jump")[0];

    let img = document.querySelector("img");
    let marg = parseInt(getComputedStyle(img).marginLeft);
    let margP = parseInt(getComputedStyle(img).paddingBottom);

    let interval = null;
    let isMove = false;

    elementStart.addEventListener("click", () => {
        if (!isMove) {
            interval = setInterval(() => {
                marg += 10;
                img.style.marginLeft = `${marg}px`;
            }, 40)
            isMove = true;
        }
    })

    elementStop.addEventListener("click", () => {
        isMove = false;
        clearInterval(interval);
    })

    elementReset.addEventListener("click", () => {
        isMove = false;
        marg = 0;
        img.style.marginLeft = `${marg}px`;
        clearInterval(interval);
    })
    let isJump = false;

    elementJump.addEventListener("click", () => {

        let flag = true;
        upIntervaL = setInterval(() => {
            if (flag) {
                margP += 10;
                img.style.paddingBottom = `${margP}px`;
                if (margP == 60) {
                    flag = false;
                    margP = 0;
                    img.style.paddingBottom = `${margP}px`;
                }
            }
        }, 40)
    })
}