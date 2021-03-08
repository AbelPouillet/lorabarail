var restify = require('restify')
var codec = require('.')

// standard configuration
const url_path_wo_final_slash = ''
const server_port = 8080

// codec-gui configuration
// const url_path_wo_final_slash = '/codec'
// const server_port = 8066

function decodeMessage(req, res, next) {
  let message = {
    FPort: parseInt(req.body.port, 10),
    time: new Date(req.body.timestamp),
    payload: Buffer.from(req.body.payload, 'hex')
  }
  let decoded = codec(req.params.type).decode(message)
  res.json(decoded)
  next()
}

function encodeRequest(req, res, next) {
  let encoded = codec(req.params.type).encode(req.body)
  res.json({
    deviceType: req.params.type,
    port: encoded.FPort,
    payload: encoded.payload.toString('hex')
  })
  next()
}

function describe(req, res, next) {
  res.json(codec(req.params.type.toLowerCase()).describe())
  next()
}

function version(req, res, next) {
  codec('version').then(ret => {
    res.json(ret)
  })
  next()
}

var server = restify.createServer()
server.name = 'SLCodec REST Server'
server.use(
  restify.bodyParser({
    mapParams: true
  })
)

server.get(url_path_wo_final_slash + '/version', version)
server.post(url_path_wo_final_slash + '/:type/decodeMessage', decodeMessage)
server.post(url_path_wo_final_slash + '/:type/encodeRequest', encodeRequest)
server.get(url_path_wo_final_slash + '/:type', describe)

server.listen(server_port, function() {
  console.log('%s listening at %s', server.name, server.url)
})
