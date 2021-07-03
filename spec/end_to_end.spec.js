var spec_helper = require('./spec_helper')
var path = require('path')
describe('Interface command test positive scenarios :', () => {
    it('create_parking_lot', (done) => {
        spec_helper.run_command_with_input("create_parking_lot 6").then((res) => {
            var split = res.split(">>>");
            var result = split[split.length - 2];
            expect(result.indexOf("Created a parking lot with 6 slots") != -1).toBe(true)
            done()
        })
    })

    it('park', (done) => {
        spec_helper.run_command_with_input("create_parking_lot 6 \npark KA-01-HH-9999").then((res) => {
            var split = res.split(">>>");
            var result = split[split.length - 2];
            expect(result.indexOf("Allocated slot number: 1") != -1).toBe(true)
            done()
        })
    })

    it('leave', (done) => {
        spec_helper.run_command_with_input("create_parking_lot 6 \npark KA-01-HH-9999\nleave KA-01-HH-9999 1").then((res) => {
            var split = res.split(">>>");
            var result = split[split.length - 2];
            expect(result.indexOf("Registration number KA-01-HH-9999 with Slot Number 1 is free with Charge 10") != -1).toBe(true)
            done()
        })
    })
})

describe('Interface command test scenarios : when parking lot not defined', () => {
    it('park', (done) => {
        spec_helper.run_command_with_input("park KA-01-HH-9999").then((res) => {
            var split = res.split(">>>");
            var result = split[split.length - 2];
            expect(result.indexOf("Sorry, no parking lot found") != -1).toBe(true)
            done()
        })
    })

    it('leave', (done) => {
        spec_helper.run_command_with_input("leave KA-01-HH-9999 1").then((res) => {
            var split = res.split(">>>");
            var result = split[split.length - 2];
            expect(result.indexOf("Sorry, no parking lot found") != -1).toBe(true)
            done()
        })
    })
})

describe('Input file test scenarios :', () => {
    it('input file exists', (done) => {
        var filePath = path.resolve(__dirname, './fixture/input.txt')
        var arguments = [];
        arguments.push(filePath)
        spec_helper.run_command_with_argument(arguments).then((res) => {
            var output_lines = res.split("\n")
            var expected_array = ['Created a parking lot with 6 slots',
                'Allocated slot number: 1',
                'Allocated slot number: 2',
                'Allocated slot number: 3',
                'Allocated slot number: 4',
                'Allocated slot number: 5',
                'Allocated slot number: 6',
                'Registration number KA-01-HH-3141 with Slot Number 6 is free with Charge 30',
                'Slot No.\t\tRegistration No',
                '1\t\t\tKA-01-HH-1234',
                '2\t\t\tKA-01-HH-9999',
                '3\t\t\tKA-01-BB-0001',
                '4\t\t\tKA-01-HH-7777',
                '5\t\t\tKA-01-HH-2701',
                'Allocated slot number: 6',
                'Sorry, parking lot is full',
                'Registration number KA-01-HH-1234 with Slot Number 1 is free with Charge 30',
                'Registration number KA-01-BB-0001 with Slot Number 3 is free with Charge 50',
                'Registration number DL-12-AA-9999 not found',
                'Allocated slot number: 1',
                'Allocated slot number: 3',
                'Sorry, parking lot is full',
                'Slot No.\t\tRegistration No',
                '1\t\t\tKA-09-HH-0987',
                '2\t\t\tKA-01-HH-9999',
                '3\t\t\tCA-09-IO-1111',
                '4\t\t\tKA-01-HH-7777',
                '5\t\t\tKA-01-HH-2701',
                '6\t\t\tKA-01-P-333',''
            ]
                
            expect(output_lines).toEqual(expected_array)
            done()
        })
    })
})