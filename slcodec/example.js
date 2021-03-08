require('colors')
let codec = require('.')

let block = {
  id: 'request_write_fire_cfg',
  parameters: [
    { id: 'analysis_duration', value: 12 },
    { id: 'delta_temperature', value: 100 },
    { id: 'trigger_duration', value: 12 },
    { id: 'trigger_val', value: 100 },
    { id: 'redundancy', value: 3 }
  ]
}
console.log(block)
let payload = codec('SenlabT').encode(block)
console.log(payload.payload.toString('hex'))

let message = {
  FPort: 2,
  payload: Buffer.from('810041' + payload.payload.slice(2).toString('hex'), 'hex'),
  time: new Date('2000-01-01T00:00:00.000Z')
}
console.log(message)
let dataA = codec('auto').decode(message)
console.log(JSON.stringify(dataA, null, '  '))
