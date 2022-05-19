// 5.	Time to Walk

function timeToWalk(steps, footprint, speedKmH){

    let metersWalk = steps * footprint;
    let speed = (speedKmH * 1000) / 3600; // convert the time in seconds
    let rest = Math.floor(metersWalk / 500) * 60; // convert the time in seconds
    let time = (metersWalk / speed) + rest;
    // console.log(time);

    let hours = Math.floor(time / 3600).toFixed(0).padStart(2, '0');
    let mins = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    let seconds = Math.ceil(time % 60).toFixed(0).padStart(2, '0');

    console.log(`${hours}:${mins}:${seconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);




