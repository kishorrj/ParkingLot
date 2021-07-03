var Car = require('./Car')
var ParkingLot = require('./ParkingLot')

class CreateParkingLot {
    constructor(argument) {
        this.size = argument[0];
    }

    execute(conductor) {
        if (this.size <= 0) {
            throw new Error("Failed to create parking lot. Size can not be zero or negative")
        } else {
            if (conductor.parkingLot) {
                conductor.parkingLot = new ParkingLot(this.size);
                console.log("previous parking lot is deleted. Created a parking lot with " + this.size + " slots ")
            } else {
                conductor.parkingLot = new ParkingLot(this.size);
                console.log("Created a parking lot with " + this.size + " slots")
            }
        }
    }
}

class Park {
    constructor(argument) {
        this.car = new Car(argument[0], argument[1])
    }

    execute(conductor) {
        if (!conductor.parkingLot) {
            throw new Error("Sorry, no parking lot found")
        } else {
            conductor.parkingLot.park(this.car);
        }
    }
}


class Leave {
    constructor(argument) {
        this.reg_no = argument[0];
        this.hours = argument[1]
    }

    execute(conductor) {
        if (this.slot_no <= 0 && this.slot_no > conductor.parkingLot.getSize()) {
            throw new Error("Invalid slot no")
        }
        else if (!conductor.parkingLot) {
            throw new Error("Sorry, no parking lot found")
        } else {
            conductor.parkingLot.leave(this.reg_no, this.hours);
        }
    }
}


class Status {
    execute(conductor) {
        if (!conductor.parkingLot) {
            throw new Error("Sorry, no parking lot found")
        } else {
            conductor.parkingLot.status()
        }
    }
}

class ExitCommand {
    execute(conductor) {
        process.exit(0);
    }
}

module.exports = { ExitCommand, CreateParkingLot, Park, Leave, Status };
