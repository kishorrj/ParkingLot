var MinHeap = require('./MinHeap')

class ParkingLot {

    constructor(size) {
        this.parkedSlots = new Map()
        this.availableSlots = new MinHeap()
        this.size = size

        for (var i = 1; i <= size; i++) {
            this.availableSlots.insert(i)
        }
    }

    getSize() {
        return this.size
    }

    park(car) {
        if (this.availableSlots.isEmpty()) {
            throw new Error('Sorry, parking lot is full')
        } else {
            if (this.parkedSlots.has(car.getRegNo())) {
                throw new Error(
                    `Car is already parked at slot no:  ${(this.parkedSlots.get(car.getRegNo()) + 1)}`)
            } else {
                var allocate_pos = this.availableSlots.extractMin()
                this.parkedSlots.set(car.getRegNo(), allocate_pos - 1)
                console.log('Allocated slot number: ' + allocate_pos)
            }
        }
    }

    leave(reg_no, hours) {
        if (this.availableSlots.getSize() == this.size) {
            throw new Error("Parking slot is empty. No any car is parked")
        }
        if (!this.parkedSlots.has(reg_no)) {
            throw new Error(`Registration number ${reg_no} not found`)
        } else {
            var slot_no = this.parkedSlots.get(reg_no)
            this.parkedSlots.delete(reg_no)
            this.availableSlots.insert(slot_no + 1)
            console.log(`Registration number ${reg_no} with Slot Number ${slot_no + 1} is free with Charge ${this.getCharges(hours)}`)
        }
    }

    status() {
        console.log('Slot No.\t\tRegistration No')
        const printableMap = new Map([...this.parkedSlots.entries()].sort((a, b) => a[1] - b[1]))
        for (let [key, value] of printableMap) {
            console.log(value + 1 + '\t\t\t' + key)
        }
    }

    getCharges(hours) {
        if (hours <= 2) {
            return 10
        }
        return ((hours - 2) * 10) + 10
    }
}

module.exports = ParkingLot
