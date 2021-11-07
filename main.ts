let Start = 0
let Started = false
let Elapsed = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
    Started = true
    basic.showIcon(IconNames.Chessboard)
})
input.onButtonPressed(Button.B, function () {
    Elapsed = Math.idiv(input.runningTime(), Start)
    Started = false
    basic.showNumber(Math.idiv(Elapsed, 1000))
    basic.showString(".")
    basic.showNumber(Elapsed % 100)
})
basic.forever(function () {
    if (Started) {
        led.toggle(2, 2)
        basic.pause(480)
    }
})
