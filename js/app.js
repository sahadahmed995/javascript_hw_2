let btn = document.querySelector(".headding")

let heddin = document.querySelector(".body")

let span = document.querySelector("span")

let number = 1
function colorChange () {
    if (number == 1) {
        heddin.className = "body_change body"
        
        span.className = "rotate"
        
        number = number - 1
    }else if (number == 0) {
        heddin.className = "body"

        span.className = ""

        number = number + 1
    }
}

btn.addEventListener("click", colorChange)

console.log(number)