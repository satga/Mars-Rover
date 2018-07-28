// Rover Object Goes Here

var rover = { // create Object named rover
  direction: "N",  // other values: "W" "S" "E"
  x: 0,
  y:0,
  travelLog: [[0,0]],
}
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "W": 
      rover.direction = "S";
      break;
    case "N":
      rover.direction = "W";
      break;
    case "S":
    rover.direction = "E";
    break;
    case "E":
      rover.direction = "N";
      break;
    default:
    console.log("Rover has gone loose!");
  }
  console.log("Rover is now facing " + rover.direction)
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "W": 
      rover.direction = "N";
      break;
    case "N":
      rover.direction = "E";
      break;
    case "S":
    rover.direction = "W";
    break;
    case "E":
      rover.direction = "S";
      break;
    default:
    console.log("Rover has gone loose!");
  }
  console.log("Rover is now facing " + rover.direction)
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
    case "W": 
      if (rover.x >0) {
        rover.x--; // substract 1
      }
      else {
      console.log("Rover cannot move out of West boundary")
      }
      break;
    case "N":
      if (rover.y >0) {
        rover.y--; // substract 1
      }
      else {
      console.log("Rover cannot move out of North boundary")
      }
      break;
    case "S":
      if (rover.y <9) {
        rover.y++; // add 1
      }
      else {
      console.log("Rover cannot move out of South boundary")
      }
      break;
    case "E":
      if (rover.x <9) {
        rover.x++; // add 1
      }
      else {
      console.log("Rover cannot move out of South boundary")
     }
      break;
    default:
    console.log("Rover is paralized!");
}
  rover.travelLog.push([rover.x,rover.y]);
  console.log("Rover's new position is row: " +rover.x + " and column: " +rover.y)
}

function moveCommand(input) {
  for (var i = 0; i < input.length; i++){
    switch(input[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover)
        break;
      case "l":
        turnLeft(rover);
        break;
      default:
        console.log("incorrect command");
        break;
    }
  }
}

moveCommand('rfffflfflflff')
console.log(rover.travelLog)