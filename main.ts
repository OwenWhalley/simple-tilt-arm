input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . . . . .
        # # # # #
        # . . . #
        . # # # .
        `)
    music.playMelody("A G A B A G F - ", 120)
})
