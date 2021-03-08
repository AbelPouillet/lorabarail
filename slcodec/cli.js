var colors = require('colors')
var codec = require('.')

if (4 < process.argv.length) {
  console.log(('######## Senlab' + process.argv[2] + ' ########').green)
  console.log(
    'Port : '.grey + process.argv[3] + ' Payload : '.grey + process.argv[4]
  )
  let time
  if (process.argv[5]) time = new Date(process.argv[5])
  else time = new Date('2000-01-01T00:00:00.000Z')

  let message = {
    firmwareType: process.argv[2],
    FPort: parseInt(process.argv[3], 10),
    payload: Buffer.from(process.argv[4], 'hex'),
    time
  }

  let data = codec(process.argv[2]).decode(message)
  for (let i in data.measures) {
    data.measures[i].time = new Date(data.measures[i].timestamp)
  }
  console.log(JSON.stringify(data, null, '  '))
} else {
  console.log(
    'node cli.js <type letter : A T M H> <port> <payload> '.yellow +
      '[timestamp]'
  )
  console.log(
    'node cli.js A 3 0086043C0010000F0010 '.cyan +
      '2000-01-01T00:00:00.000Z'.grey
  )
}
