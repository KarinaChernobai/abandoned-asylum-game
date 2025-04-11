// Game object with all rooms
const gameObj = {
  lobby: {
    promptText: "You find yourself in the lobby. You have the following options: \n 1-staircase,\n 2-information desk,\n 3-elevator,\n 4-door to the left or \n 5-door to the right. \n Print your choice:",
    options: [
      { optionID: "4", target: "room2" },
      { optionID: "5", target: "room1" },
      { optionID: "1", target: "secondFloor" },
      { optionID: "2", target: "informationDesk" },
      { optionID: "3", target: "elevator" }
    ]
  },
  // Anastasia
  room1: {
    isCustomRoom: true,
    enter: function () {
      doctorRoom(); //
      enterRoom(gameObj.lobby); //
    },
  },
  room2: {
    promptText: "You are in the room 2. You hear a noise behind the wall. What do you want to do? Your options are:\n 1-explore or \n 2-run back. \n What do you want to do?",
    options: [{ optionID: "1", target: "bookCase" }, { optionID: "2", target: "lobby" }]
  },
  bookCase: {
    promptText: "You found a door to a secred room below the bookcase. There are still strange noises. Do you want to open door? Your options are:\n 1-check the bookcase or \n 2-go back. \n What do you want to do?",
    options: [{ optionID: "1", target: "secretRoom1" }, { optionID: "2", target: "lobby" }]
  },
  room3: {
    promptText: "You are in the patient's ward. You have the following options:\n 1-go back to second floor \n 2-to  the elevator." ,
    options: [{optionID: "1", target: "secondFloor"}, {optionID: "2", target: "elevator"}]
  },
  room4: {
    promptText: "You are in the lobotomy room. Everything is bloody and you see a shadow emerging from the corner. You have only one option:\n 1-run away",
    options: [{ optionID: "1", target: "loseroom" }]
  },
        elevator: {
        options: [{optionID: "1", target: "lobby"}, {optionID: "2", target: "secondFloor"}, {optionID: "3", target: "cellar"}]
    },
  elevator: {
    promptText: "You are in the elevator. You have the following options:\n 1-the lobby, \n 2-go upstairs, \n 3-go downstairs to cellar.\n What do you want to do?",
    isBlocked: true,
    gameText: "You need a key.",
    options: [{ optionID: "1", target: "lobby" }, { optionID: "2", target: "secondFloor" }, { optionID: "3", target: "cellar" }]
  },
  cellar: {
    promptText: "You are in the cellar. You have the following option:\n 1-go back",
    options: [{ optionID: "1", target: "lobby" }]
  },
  secretRoom1: {
    promptText: "You are in the secret room now. There is a chained ghost in the corner. It asks for help. Do you want to help it? your options are:\n 1-help the ghost or \n 2-run away. \n What do you want to do?",
    options: [{ optionID: "1", item: "key", message: "Ghost gave you a key. This is a key to another secred room where you will find you loved one.", target: "secretRoom2" }, { optionID: "2", target: "lobby" }]

  },
  secretRoom2: {
    promptText: "You are in the secret room 2. You see a big monster and an ax on the ground. Your options are:\n 1- Get the ax and fight or \n 2- Run away. \n What do you want to do?",
    options: [{ optionID: "Get the ax and fight", target: "winroom" }, { optionID: "run away", target: "lobby" }]
  },
  winroom: {
    gameText: "You won the game. You saved your loved one. You are happy.",
  },
  loseroom: {
    gameText: "You are too slow. The demon is closing behind and you feel its claws tearing at your back... Then there is darkness...",
  },
  informationDesk: {
    promptText: "On the desk you see a key. Your options are:\n  1-pick key or \n 2-go back. \n What do you want to do?",
    options: [{ optionID: "1", target: "action" }, { optionID: "2", target: "lobby" }]
  },
  secondFloor: {
    promptText: "You are at the second floor. Your options are:\n  1-lobotomy room, \n 2-patient's ward or \n 3-go downstairs. \n What do you want to do?",
    options: [{ optionID: "1", target: "room4" }, { optionID: "2", target: "room3" }, { optionID: "3", target: "lobby" }]
  },
  action:{
    isCustomRoom: true,
    enter: ()=> {
      gameObj.elevator.isBlocked = false;
      enterRoom(gameObj.lobby);
    },
  }
};

function askYesNoSmart(question) {
  while (true) {
    let answer = prompt(question + " (Yes/No)")
      .trim()
      .toLowerCase();

    if (answer === "yes" || answer === "y") {
      return true;
    } else if (answer === "no" || answer === "n") {
      const goLobby = confirm(
        "There's nothing else to do. Do you want to return to the lobby?"
      );
      if (goLobby) return "lobby";
      else continue; // a question
    } else {
      alert("Please answer with Yes or No.");
    }
  }
}
function doctorRoom() {
  let result = askYesNoSmart(
    "The sign says 'Doctor's Office'. Do you want to enter the room?"
  );
  if (result === "lobby") {
    alert("You return to the lobby.");
    return;
  }

  result = askYesNoSmart(
    "You approach the door. Do you want to slightly open it?"
  );
  if (result === "lobby") {
    alert("You change your mind and return to the lobby.");
    return;
  }

  alert(
    "You slightly open the door and see old medical equipment, books, certificates on the walls, and bare, cold walls."
  );

  result = askYesNoSmart("Do you want to go further into the room?");
  if (result === "lobby") {
    alert("You step back and return to the lobby.");
    return;
  }

  alert("You smell strong alcohol in the air.");
  alert("The room is dim. The large windows are tightly shut.");
  alert("You fully open the door and walk inside...");

  result = askYesNoSmart("You walk toward the desk. Look under the desk?");
  if (result === "lobby") {
    alert("You return to the lobby.");
    return;
  }
  if (result) {
    alert("You look under the desk — there's nothing there.");
  } else {
    alert("You decide not to look under the desk.");
  }

  result = askYesNoSmart("Approach the cabinet?");
  if (result === "lobby") {
    alert("You return to the lobby.");
    return;
  }

  result = askYesNoSmart("Do you want to open the cabinet?");
  if (result === "lobby") {
    alert("You return to the lobby.");
    return;
  }

  if (result) {
    alert("Suddenly, a stranger jumps out from the cabinet!");

    while (true) {
      let action = prompt("Do you want to STAY or RUN?");
      if (!action) continue;

      action = action.trim().toUpperCase();

      if (action === "RUN") {
        alert("You quickly turn around and run back to the lobby!");
        return;
      } else if (action === "STAY") {
        alert("You choose to stay...");
        alert("The stranger just stands there silently, staring at you.");
        alert("You feel the tension rise. There seems to be no way out...");
      } else {
        alert("Please type STAY or RUN.");
      }
    }
  } else {
    alert("You decide not to open the cabinet.");

    result = askYesNoSmart("Return to the lobby?");
    if (result === "lobby" || result === true) {
      alert("You return to the lobby.");
    } else {
      alert("You choose to stay... but the silence becomes unbearable.");
      doctorRoom(); // again
    }
  }
}

function enterRoom(room) {
  // Check if this is  doctorRoom
  if (room.isCustomRoom && typeof room.enter === "function") {
    return room.enter();
  }

  if (room.promptText) {
    console.dir(room);
    if(room.isBlocked){
      alert(room.gameText);
      console.log(room.options[0]);
      return enterRoom(gameObj.lobby);
    }
    const choice = prompt(room.promptText);
    for (let option of room.options || []) {
      if (option.optionID.toLowerCase() === choice.toLowerCase()) {
        if (option.message) alert(option.message);
        return enterRoom(gameObj[option.target]);
      }
    }
    alert("Option not found. Please, check your spelling");
    return enterRoom(room);
  }
  alert(room.gameText); // exits the game
  return;
}

alert ("Your best friend has gone missing exploring an abandoned asylum.\n You came here determined to get answers.");
alert ("You have heard that there are strange noises, screams and there might possibly be dangerous creatures in this building.");
alert ("Watch out before each of you steps!");
alert ("Death has never been so close!");
alert ("Are you ready?");
alert ("The game will start in '3'!\n (Are you sure you still want to go in?)")
alert ("The game will start in '2'!\n (You can still go home!)")
alert ("The game will start in '1'!\n (Don't forget that there will be no way back!)")
alert ("Game starts! \n (Don't worry, we will always remember your courage!)")

enterRoom(gameObj.lobby);

// instead of writing "door to the left" let the user pick a letter a) door to the left
// implement the logic for the key from the elevator
// add emojiis
