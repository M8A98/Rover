
 //México
var mexicanRover = {
  position: [0,0], 
  direction: 1  // 1 is North, two is east and so on.
};


function goForward(rover) {

  var sequence = "";

  for (var i = 0; i <= commands.length -1;i++){
    var commands = ""; // Aquí el usuario introduce los comandos.

    if (commands.length < 1){
      alert("Please insert at least a command");
    }
    if (commands[i] == "F" || commands[i] == "B" || commands[i] == "R" || commands[i] == "L"){
      sequence += commands[i];
    }

  }
  for (var j = 0; j <= sequence.length -1; j++){

    if (sequence[j] == "R") {
      direction ++;
    }
    if (sequence[j] == "L") {
     direction --;
    }
    if (direction == 0) {
      direction = 4;
    }

    if (direction == 5) {
      direction = 1;
    }

    if (direction % 2 != 0 ) {
      switch(sequence[j]){
        case 'F':
        mexicanRover.position[0] += 1
        break;
        case 'B':
        mexicanRover.position[0] -= 1
        break;
      }
    }
    if (direction % 2 == 0 ) {
      switch(sequence[j]){
        case 'F':
        mexicanRover.position[1] += 1
        break;
        case 'B':
        mexicanRover.position[1] -= 1
        break;
      }
    }
     if (mexicanRover.position[0] == 10) {
        mexicanRover.position[0] = 0;
      }
     if (mexicanRover.position[1] == 10) {
       mexicanRover.position[1] = 0;
     }

     //Obstacles !
     if (mexicanRover.position[0] == 3 && mexicanRover.position[1] == 3 ||
         mexicanRover.position[0] == 6 && mexicanRover.position[1] == 7 ||
         mexicanRover.position[0] == 8 && mexicanRover.position[1] == 6 ||
         mexicanRover.position[0] == 9 && mexicanRover.position[1] == 4 ||) {
      alert('WAIT! There is an obstacle in front of you :O');
      mexicanRover.position[0] -= 1 ;
      break; // Not sure but I think this way the sequence may stop.
     }
  } //for

  //Ireland
var irishRover = {
  position2: [0,0], 
  direction2: 3  // One is North, two is east and so on.
};


function goForward(rover) {

  var sequence = "";

  for (var i = 0; i <= commands2.length -1;i++){
    var commands2 = ""; // Here the user introduces the commands.

    if (commands2.length < 1){
      alert("Please insert at least a command");
    }
    if (commands2[i] == "F" || commands2[i] == "B" || commands2[i] == "R" || commands2[i] == "L"){
      sequence += commands2[i];
    }

  }
  for (var j = 0; j <= sequence.length -1; j++){

    if (sequence[j] == "R") {
      direction2 ++;
    }
    if (sequence[j] == "L") {
     direction2 --;
    }
    if (direction2 == 0) {
      direction2 = 4;
    }

    if (direction2 == 5) {
      direction2 = 1;
    }

    if (direction2 % 2 != 0 ) {
      switch(sequence[j]){
        case 'F':
        irishRover.position2[0] += 1
        break;
        case 'B':
        irishRover.position2[0] -= 1
        break;
      }
    }
    if (direction2 % 2 == 0 ) {
      switch(sequence[j]){
        case 'F':
        irishRover.position2[1] += 1
        break;
        case 'B':
        irishRover.position2[1] -= 1
        break;
      }
    }
     if (irishRover.position2[0] == 10) {
        irishRover.position2[0] = 0;
      }
     if (irishRover.position2[1] == 10) {
       irishRover.position2[1] = 0;
     }

     //Obstacles !
     if (irishRover.position2[0] == 3 && irishRover.position2[1] == 3 ||
         irishRover.position2[0] == 6 && irishRover.position2[1] == 7 ||
         irishRover.position2[0] == 8 && irishRover.position2[1] == 6 ||
         irishRover.position2[0] == 9 && irishRover.position2[1] == 4 ||) {
      alert('WAIT! There is an obstacle in front of you :O');
      irishRover.position2[0] -= 1 ;
      break; //Not sure, but maybe this is the way to stop the sequence whenever an obstacle is touched.
     }

     if (irishRover.position2[0] == mexicanRover.position[0] && irishRover.position2[1] == mexicanRover.position2[1]) {
      alert("Careful! They should not crash!");
      irishRover.position2[1] --;
     }
  } //for
    console.log("New Irish Rover Position: [" + rover.position2[0] + ", " + rover.position2[1] + "]");
}

    console.log("New Mexican´s Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]");
}


goForward(rovers);

 