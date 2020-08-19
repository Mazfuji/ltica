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
