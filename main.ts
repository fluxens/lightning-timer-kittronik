input.onButtonPressed(Button.A, function () {
    haloDisplay.clear()
    basic.showNumber(5)
    basic.pause(500)
    basic.showNumber(4)
    basic.pause(500)
    basic.showNumber(3)
    basic.pause(500)
    basic.showNumber(2)
    basic.pause(500)
    basic.showNumber(1)
    basic.pause(500)
    basic.clearScreen()
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.show()
        basic.pause(4000)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Orange))
        haloDisplay.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(500)
    }
    for (let index = 0; index <= 6; index++) {
        haloDisplay.clear()
        haloDisplay.show()
        basic.pause(200)
        haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(200)
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
    haloDisplay.clear()
    haloDisplay.show()
})
input.onButtonPressed(Button.AB, function () {
    haloDisplay.clear()
    haloDisplay.show()
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    haloDisplay.clear()
    basic.showNumber(5)
    basic.pause(200)
    basic.showNumber(4)
    basic.pause(200)
    basic.showNumber(3)
    basic.pause(200)
    basic.showNumber(2)
    basic.pause(200)
    basic.showNumber(1)
    basic.clearScreen()
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Orange))
        haloDisplay.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(200)
    }
    for (let index = 0; index <= 6; index++) {
        haloDisplay.clear()
        haloDisplay.show()
        basic.pause(200)
        haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(200)
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.clearScreen()
    haloDisplay.clear()
    haloDisplay.show()
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
kitronik_halo_hd.setBuzzerPin()
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.clear()
basic.showIcon(IconNames.Yes)
haloDisplay.show()
