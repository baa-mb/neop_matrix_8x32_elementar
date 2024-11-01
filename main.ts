function setze_bst (nr: number) {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 7; y++) {
            // if (Math.floor(x % 8) == (x / 8)) {
            if (x % 2 == 0) {
                pos = (4 - x) * 8 + 7 - y
            } else {
                // pos = x * 8 + y - 7 * f
                pos = (4 - x) * 8 + y
            }
            if (bst[nr][y].charAt(x) == "1") {
                
                strip.setPixelColor(pos, neopixel.colors(NeoPixelColors.Orange))
                // strip.showRainbow(1, 360)
            } else {
                strip.setPixelColor(pos, neopixel.colors(NeoPixelColors.Black))
            }
        }
    }
    // strip.setPixelColor(15, neopixel.colors(NeoPixelColors.Red))
    strip.show()
}
input.onButtonPressed(Button.A, function () {
    setze_bst(2)
})
/**
 * Hier können Sie weitere Funktionen hinzufügen, die kontinuierlich ausgeführt werden sollen
 */
let anz_bst = 0
let pos = 0
let akt_bst = 0
let bst: string[][] = []
let strip: neopixel.Strip = null

let f = 0
// Definieren Sie das Buchstabenmuster
bst = [
[
"00000",
"01110",
"10001",
"10001",
"11111",
"10001",
"10001",
"10001"
],
[
"00000",
"11110",
"10001",
"10001",
"11110",
"10001",
"10001",
"11110"
],
[
"00000",
"11111",
"10000",
"10000",
"10000",
"10000",
"10000",
"11111"
],
[
"00000",
"11110",
"10001",
"10001",
"10001",
"10001",
"10001",
"11110"
],
[
"00000",
"11111",
"10000",
"10000",
"11111",
"10000",
"10000",
"11111"
],
[
"00000",
"11111",
"10000",
"10000",
"11111",
"10000",
"10000",
"10000"
],
[
"00000",
"01110",
"10001",
"10001",
"10000",
"10011",
"10001",
"01110"
],
[
"00000",
"10001",
"10001",
"10001",
"11111",
"10001",
"10001",
"10001"
],
[
"00000",
"11111",
"00100",
"00100",
"00100",
"00100",
"00100",
"11111"
],
[
"00000",
"00001",
"00001",
"00001",
"00001",
"00001",
"10001",
"01110"
]
]
// Initialisieren Sie den NeoPixel-Strip
strip = neopixel.create(DigitalPin.P0, 256, NeoPixelMode.RGB)

strip.setBrightness(128)

strip.clear()
let zeigen=true;
strip.show()
// Initialisierung
setze_bst(akt_bst)
basic.forever(function () {
    // strip.shift(16)
    strip.rotate(16)
    strip.show()
    basic.pause(200)
    anz_bst += 1
    if (anz_bst % 4 == 0) {
        
        akt_bst = (akt_bst + 1) % 10
        if (akt_bst == 0) {
            zeigen=false;    
        }   
        if (zeigen) {
            setze_bst(akt_bst)
        }
        
    }
})
