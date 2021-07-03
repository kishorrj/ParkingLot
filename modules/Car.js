class Car {
    constructor(reg_no, colour) {
        this.reg_no = reg_no
        this.colour = colour
    }

    getRegNo() {
        return this.reg_no
    }

    getColour() {
        return this.colour
    }
}

module.exports = Car
