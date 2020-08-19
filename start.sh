#!/bin/sh

docker run -it -d --rm \
    -v /sys:/sys \
    -v /home/pi:/home/pi \
    --name node-ltica \
    node-test \
    node js/ltica.js