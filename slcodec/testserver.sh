#!/bin/sh

hash curl 2>/dev/null || { echo >&2 "curl is not installed.  Aborting."; exit 1; }
hash jq 2>/dev/null || { echo >&2 "jq is not installed.  Aborting."; exit 1; }

HOST=codec.slbase.io
PORT=80
ORANGE='\033[0;33m'
BOLD='\e[1m'

echo -e ${BOLD}Testing SenlabA decoding on $HOST:$PORT
echo -e ${ORANGE} payload 0086043C0010000F0010
curl -s -X POST \
  http://$HOST:$PORT/senlabA/decodeMessage \
  -H 'content-type: application/json' \
  -d '{"port": 3,"payload": "0086043C0010000F0010","timestamp": "2017-02-15T09:44:57.958Z"}' | jq .
echo

echo -e ${BOLD}Testing SenlabT decoding on $HOST:$PORT
echo -e ${ORANGE} payload 014E326400BB0200
curl -s -X POST \
  http://$HOST:$PORT/senlabT/decodeMessage \
  -H 'content-type: application/json' \
  -d '{"port": 3,"payload": "014E326400BB0200","timestamp": "2017-02-15T09:44:57.958Z"}' | jq .
echo

echo -e ${BOLD}Testing SenlabM decoding on $HOST:$PORT
echo -e ${ORANGE} payload 02F24C81340000000A
curl -s -X POST \
  http://$HOST:$PORT/senlabM/decodeMessage \
  -H 'content-type: application/json' \
  -d '{"port": 3,"payload": "02F24C81340000000A","timestamp": "2017-02-15T09:44:57.958Z"}' | jq .
echo

echo -e ${BOLD}Testing SenlabH decoding on $HOST:$PORT
echo -e ${ORANGE} payload 0384193C017C2C002C002C002C002C
curl -s -X POST \
  http://$HOST:$PORT/senlabH/decodeMessage \
  -H 'content-type: application/json' \
  -d '{"port": 3,"payload": "0384193C017C2C002C002C002C002C","timestamp": "2017-02-15T09:44:57.958Z"}' | jq .

echo -e ${BOLD}Testing Bad Request on $HOST:$PORT
echo -e ${ORANGE} payload 0384193C017C2C002C002C002C002C
curl -s -X POST \
  http://$HOST:$PORT/senlabT/decodeMessage \
  -H 'content-type: application/json' \
  -d '{"port": 3,"payload": "0384193C017C2C002C002C002C002C","timestamp": "2017-02-15T09:44:57.958Z"}' | jq .
