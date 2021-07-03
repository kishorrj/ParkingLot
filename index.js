var conductor = require('./modules/Conductor')
var commandFactory = require('./modules/CommandFactory')
const fs = require('fs')

if (process.argv.length >= 3) {
  /**************************************************************************
   *    Process command from input file
   *    NOTE : read stream is used assuming input file is too large
   * ************************************************************************/
  filePath = process.argv[2]
  if (fs.existsSync(filePath)) {
    const readStream = fs.createReadStream(filePath, 'UTF-8')
    readStream.on('data', data => {
      var list = data.split('\n')
      list.map(line => {
        conductor.run(commandFactory(line))
      })
    })
  } else {
    console.error('input file not found: ' + filePath)
  }

} else {
  /*********************************************
   *    open command prompt interface
   * *******************************************/

  var { createInterface } = require('readline')
  var rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '>>> '
  })

  console.log('Parking Lot System [ Version 2.0.0 ]')
  console.log('For more type : info')
  rl.prompt()

  rl.on('line', input => {
    conductor.run(commandFactory(input))
    rl.prompt()
  })
}
