let arrayWord = ["an", "ba", "cd", "df", "ec", "ff", "gg", "he", "j",
    "kh", "ls", "mf", "than", "tuan", "q", "p"
]

let count = 0

let word = document.getElementById("word")

let text = document.getElementById("input-text")

let subText = document.getElementById("sub-text")

let timer = document.getElementById("countdown-timer")

let play = document.getElementById("btn-play")

let score = document.getElementById("score")

let characters = document.getElementById("characters")

let btnWord = characters.querySelectorAll("button")

let btnAdd = document.getElementById("btn-add")

document.getElementById("input-text").disabled = true

function randomIndex() {
    let index = Math.floor(Math.random()*arrayWord.length)
    return index
}

function check() {
    if (text.value != "") {
        if (text.value == word.innerHTML) {
            word.innerHTML = arrayWord[randomIndex()]
            subText.innerHTML = "Ban da dung"
            subText.setAttribute("style", "opacity: 1; color: green;")
            count += 5 
            score.innerHTML = count
        } else {
            subText.innerHTML = "Ban da sai"
            subText.setAttribute("style", "opacity: 1; color: red;")
        }
        text.value = ""
        text.focus()
    }
}


function Key(event) {
    if (event.key === "Enter") {
        check()
    } else {
        const test = document.getElementById(event.key)
        test.setAttribute("style", "border-bottom: none")
        setTimeout(function () {
            test.removeAttribute("style")
        }, 100)
    }
}

function countDownTimer() {
    document.getElementById("input-text").disabled = false
    let time = 30
    count = 0
    timer.innerHTML = time
    score.innerHTML = count
    time--
    text.focus()
    text.addEventListener("keypress", Key)
    btnAdd.addEventListener("click", check)
    btnWord.forEach(
        function (item) {
            item.addEventListener("click", function clicked() {
                text.focus()
                text.value = text.value + item.innerText
                item.setAttribute("style", "border-bottom: none")
                setTimeout(
                    function () {
                        item.removeAttribute("style")
                    }, 100
                )
            })
        }
    )

    const intervalld = setInterval(
        function () {
            timer.innerHTML = time
            time--
            if (time < 0) {
                clearInterval(intervalld)
                text.removeEventListener("keypress", Key)
                // characters.removeEventListener("click", clicked)
                text.value = ""
                subText.setAttribute("style", "opacity: 1")
            }
        },
        1000
    )
}

play.addEventListener('click', countDownTimer)





















