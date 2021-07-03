const child_process = require("child_process");
const path = require('path')
const bin_path = path.resolve(__dirname, '../bin/parking_lot')
const utf8ArrayToStr = require('../modules/Utf8ArrayToStr')

run_command_with_input = function (command) {
    return new Promise((resolve, reject) => {
        const child = child_process.spawnSync(bin_path, [], { input: command })
        resolve(utf8ArrayToStr(child.stdout))
    })
}

run_command_with_argument = function (arguments) {
    return new Promise((resolve, reject) => {
        const child = child_process.spawnSync(bin_path,arguments)
        resolve(utf8ArrayToStr(child.stdout))
    })
}

module.exports = { run_command_with_input,run_command_with_argument }