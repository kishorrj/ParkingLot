var { ExitCommand, CreateParkingLot, RegistrationNumbersForCarsWithColour, slotNumberForRegistrationNumber, SlotNumbersForCarsWithColour, Park, Leave, Status } = require('../modules/Commands');
var commandFactory = require('../modules/CommandFactory')

describe('commandFactory methods different commands scenarios :', () => {
    it('create_parking_lot command', () => {
        expect(commandFactory("create_parking_lot 6") instanceof CreateParkingLot).toBe(true)
    })

    it('park command', () => {
        expect(commandFactory("park KA-01-HH-1234") instanceof Park).toBe(true)
    })

    it('leave command', () => {
        expect(commandFactory("leave KA-01-HH-1234 4") instanceof Leave).toBe(true)
    })

    it('status command', () => {
        expect(commandFactory("status") instanceof Status).toBe(true)
    })

    it('exit command', () => {
        expect(commandFactory("exit") instanceof ExitCommand).toBe(true)
    })
})

