// 6.	Road Radar

function roadRader(speed, area) {
  let speedLimit = 0;
  let status = "";
  let difference = 0;

  switch (area) {
    case 'residential':
        speedLimit = 20;
      break;
    case 'city':
        speedLimit = 50;
      break;
    case 'interstate':
        speedLimit = 90;
      break;
    case 'motorway':
        speedLimit = 130;
      break;
    default:
      break;
  }

  if (speed <= speedLimit) {
      console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
  } else {
    difference = speed - speedLimit;
    if (difference <= 20) {
        status = 'speeding';
    } else if (difference > 20 && difference <= 40){
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }
    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
  }
}

roadRader(40, 'city');
roadRader(21, 'residential');
roadRader(120, 'interstate');
roadRader(200, 'motorway');


