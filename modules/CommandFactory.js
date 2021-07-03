var { ExitCommand, CreateParkingLot, Park, Leave, Status } = require('./Commands');

var CommandFactory = (input) => {

    var [commandText, ...remaining] = input.split(' ')
    var command_argument = remaining;

    switch (commandText) {
        case "create_parking_lot":
            return new CreateParkingLot(command_argument);

        case "park":
            return new Park(command_argument);

        case "leave":
            return new Leave(command_argument);

        case "status":
            return new Status(command_argument);

        case "info":
            console.log("\n NOTE : Use Following commands to use interface")
            console.log("\n1. Create parking lot of size n: create_parking_lot \n2. Park a car: park {car_number} \n3. Remove (Unpark) car from :leave {car_number} {hours} \n4. Print status of parking slot: status \n5. exit : exit from command interface\n")
            return null;

        case "exit":
            return new ExitCommand();

        default:
            console.log(`${commandText} command not found! For more details type : info `);
            return null;
    }
}

module.exports = CommandFactory;