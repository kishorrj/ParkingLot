var ParkingLot = require('./ParkingLot')

class Conductor {

    constructor() {
        this.parkingLot = null;
    }

    run(command) {
        if (command) {
            try {
                command.execute(this);
            }
            catch (error) {
                console.log(error.message)
            }
        }
    }
}

module.exports = new Conductor();
