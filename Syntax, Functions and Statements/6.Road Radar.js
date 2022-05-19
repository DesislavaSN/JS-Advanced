// 6.	Road Radar

function roadRader(speed, area){
    let difference = 0;
    let status = "";
    let residential = 20;
    let city = 50;
    let interstate = 90;
    let motorway = 130;

    if (speed <= 20 && area == 'residential') {
        console.log(`Driving ${speed} km/h in a ${residential} zone`);
    } else if(speed > 20 && area == 'residential') {
        difference = speed - 20;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status}`);
    } else if (speed <= 50 && area == 'city') {
        console.log(`Driving ${speed} km/h in a ${city} zone`);
    } else if (speed > 50 && area == 'city'){
        difference = speed - 50;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status}`);
    } else if (speed <= 90 && area == 'interstate'){
        console.log(`Driving ${speed} km/h in a ${interstate} zone`);
    } else if ( speed > 90 && area  == 'interstate'){
        difference = speed - 90;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status}`);
    } else if(speed <= 130 && area == 'motorway') {
        console.log(`Driving ${speed} km/h in a ${motorway} zone`);
    } else if(speed > 130 && area == 'motorway') {
        difference =  speed - 130;
        if (difference <= 20) {
            status = 'speeding';
        } else if (difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status}`);
    }
}

roadRader(40, 'city');
roadRader(21, 'residential');
roadRader(120, 'interstate');
roadRader(200, 'motorway');


