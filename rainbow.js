const button = document.getElementById("button")
const div = [document.getElementById("color1"), document.getElementById("color2"), document.getElementById("color3"), document.getElementById("color4"), document.getElementById("color5"), document.getElementById("color6"), document.getElementById("color7")]
const colors = ["red", "orange", "green", "blue", "yellow", "rebeccapurple", "violet"]
const intv = location.search.split("=")[1].split("%20")
const textValue = ["Happy", "Birthday", "To", "You", intv[0], intv[1], intv[2]]
const choose = new Set()

class Confetti {
    static confetti = [];
    static confettiCount = 300;
    static gravity = 0.5;
    static terminalVelocity = 5;
    static drag = 0.075;
    constructor(width = window.innerWidth, height = window.innerHeight) {
        this.width = width;
        this.height = height
    }

    static start() {
        console.log("STATIC", this.confetti);
    }
    init(){
        console.log("general", this.width, this.height)
    }
}

const change = () => {
    while (choose.size <= colors.length - 1) {
        const addColor = colors[Math.floor(colors.length * Math.random())]
        choose.add(addColor)

    }
    const intermediate = Array.from(choose);
    div.forEach((ele, ind) => { ele.innerText = textValue[ind]; ele.style.background = intermediate[ind] })
    setTimeout(() => {
        Confetti.start()
        new Confetti().init()
    }, 500)
}
button.addEventListener("click", change)
choose.clear()




//http://127.0.0.1:5500/index.html?pre=Mrs%20Kalai%20Manivaran