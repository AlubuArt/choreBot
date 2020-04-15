
// Gloabale variable
let doorImage1 = document.getElementById('door1');

let doorImage2 = document.getElementById('door2');

let doorImage3 = document.getElementById('door3');

let botDoorPath = 'https://www.rd.com/wp-content/uploads/2017/10/These-Funny-Dog-Videos-Are-the-Break-You-Need-Right-Now_493370860-Jenn_C-760x506.jpg';

let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';

let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';

let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';

let startButton = document.getElementById('start');

let currentlyPlaying = true;

// Antal døre åbne
numClosedDoors = 3;

let openDoor1;

let openDoor2;

let openDoor3;


const isBot = (door) => {
  if(door.src === botDoorPath) {
    return true;
  } else {
    return false;
  }

}

// afgøre om en given dør er taget eller ej
const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;

  }
}

//afspilning
const playDoor = (door) => {
  numClosedDoors --;
    if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver('lose');
  }


}


// dør Generator funktion
const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random() * numClosedDoors);
  if (choreDoor === 0) {
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }

  }


// Klik på en dør
door1.onclick = () => {
  if(currentlyPlaying && !isClicked(door1)) {
    doorImage1.src = openDoor1;
      playDoor(door1);
  }
}

door2.onclick = () => {
  if(currentlyPlaying && !isClicked(door2)) {
    doorImage2.src = openDoor2;
      playDoor(door2);
  }
}

door3.onclick = () => {
  if(currentlyPlaying && !isClicked(door3)){
    doorImage3.src = openDoor3;
      playDoor(door3);
  }
}

startButton.onclick = () => {
  if(currentlyPlaying === false){
    startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if(status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game Over! Play again?';
  }
      currentlyPlaying = false;
}

// Den kaldte funktion
startRound();
