# ltica

Blink the LED from the Docker container on the Raspberry Pi.

## First

Install the docker.

```
sudo curl -sSL https://get.docker.com/ | sh
```

and, start the docker service.

```
sudo systemctl enable docker
sudo systemctl start docker
```

## Using node.js

`rpi-gpio` is better. Dockerfile is following.

```dockerfile
FROM node:12-slim

RUN apt-get update && \
    apt-get -y install node-gyp && \
    npm install rpi-gpio && \
    groupadd -g 997 gpio
```

JavaScript of the Blinking the LED.

```javascript
var gpio = require('rpi-gpio').promise;
var lite = false;
const ledport = 12;

gpio.setup(ledport, gpio.DIR_OUT).then(()=>{
    setInterval(intervalFunc, 500);
    gpio.write(ledport, true)
});

function intervalFunc() {
    gpio.write(ledport, lite);
    lite = ! lite;
}
```

Start the docker container.

```sh
docker run -it -d --rm \
    -v /sys:/sys \
    -v /home/pi:/home/pi \
    --name node-ltica \
    node-test \
    node js/ltica.js
```

`--privileged` options is not needed.

Enjoy !