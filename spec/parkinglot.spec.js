var ParkingLot = require('../modules/ParkingLot')
var Car = require('../modules/Car')

describe('getSize :', () => {
    it('create parking lot', () => {
        var object = new ParkingLot(3)
        expect(object.getSize()).toBe(3)
    })
})

