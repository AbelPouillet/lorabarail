# Sensing Labs Codec

Documentation : http://sensing-labs.com/apis/slcodecs

## As a node library

- Your program is developped in node language.
- You need nodejs stable (https://nodejs.org/en/download/) and npm installed.

Use npm to install and maintain library.

```shell
$ npm install
```

Include codec in your code

```js
const slcodec = require('slcodec')
let messageA = {
  FPort: 3,
  payload: Buffer.from('0086043C0010000F0010', 'hex'),
  time: new Date('2017-02-15T09:44:57.958Z'),
}
let dataA = slcodec('SenlabA').decode(messageA)
```

## As a rest server

- No node language skill required.
- You need nodejs stable and npm installed
- For the testserver script, you need curl and jq installed

```shell
$ npm install
$ npm start

# test (using curl)
$ ./testserver.sh
```

Now your SLCodecs API is available on http://server:8080 url.

## As a docker server

- You need a working docker setup

```shell
# Build docker image only once and on codec update
$ docker build -t senlab/slcodec-server .
# Run docker image
$ docker run -p 8080:8080 -d senlab/slcodec-server

```

Now your SLCodecs API is available on http://server:8080 url.

Server port can be changed :

```shell
$ docker run -p <port>:8080 -d senlab/slcodec-server
```
