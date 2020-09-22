input.onButtonPressed(Button.A, function () {
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
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.show()
        basic.pause(4000)
    }
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Orange))
        haloDisplay.show()
        basic.pause(1000)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(100)
    }
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index <= 6; index++) {
        haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(200)
        haloDisplay.clear()
        haloDisplay.show()
        basic.pause(200)
    }
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
    basic.pause(200)
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Green))
        haloDisplay.show()
        basic.pause(200)
    }
    basic.showIcon(IconNames.Happy)
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Orange))
        haloDisplay.show()
        basic.pause(150)
    }
    for (let index = 0; index <= 60; index++) {
        haloDisplay.setZipLedColor(index, kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(150)
    }
    basic.showIcon(IconNames.Heart)
    for (let index = 0; index <= 6; index++) {
        haloDisplay.setColor(kitronik_halo_hd.colors(ZipLedColors.Red))
        haloDisplay.show()
        basic.pause(200)
        haloDisplay.clear()
        haloDisplay.show()
        basic.pause(200)
    }
})
let haloDisplay: kitronik_halo_hd.ZIPHaloHd = null
haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
haloDisplay.clear()
haloDisplay.show()
basic.forever(function () {
	
})
