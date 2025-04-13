class entity {
  constructor(health, strength){
  this.health = health,
  this.strength = strength
}};
player = new entity (100);
// Game object with all rooms
const gameObj = {
  lobby: {
    promptText:
      "🏚️ You find yourself in the lobby. You have the following options: \n 1) 🧱 staircase,\n 2) 🛎️ information desk,\n 3) 🛗 elevator,\n 4) 🚪 door to the left or \n 5) 🚪 door to the right. \n Print your choice:",
    options: [
      { optionID: "4", target: "room2" },
      { optionID: "5", target: "room1" },
      { optionID: "1", target: "secondFloor" },
      { optionID: "2", target: "informationDesk" },
      { optionID: "3", target: "elevator" },
    ],
  },
  room1: {
    isCustomRoom: true,
    enter: function () {
      doctorRoom();
      enterRoom(gameObj.lobby);
    },
  },
  room2: {
    promptText:
      "🚪 You are in the room 2. You hear a noise behind the wall 👂. What do you want to do? Your options are:\n 1) 🔍 explore or \n 2) 🏃 run back. \n What do you want to do?",
    options: [
      { optionID: "1", target: "bookCase" },
      { optionID: "2", target: "lobby" },
    ],
  },
  bookCase: {
    promptText:
      "📚 You found a door to a secret room behind the bookcase. Strange noises continue... 👻 \nOptions:\n 1) 📖 check the bookcase or \n 2) 🔙 go back.",
    options: [
      { optionID: "1", target: "secretRoom1" },
      { optionID: "2", target: "lobby" },
    ],
  },
  room3: {
    promptText: "🛏️ You are in the patient's ward. Option:\n 1) 🔙 go back \n 2-to  the elevator. \n 3) look under the beds 🛏️",
    options: [{optionID: "1", target: "secondFloor"}, {optionID: "2", target: "elevator"}, {optionID: "3", target: "patientBeds"}]
  },
  room4: {
    promptText:
      "🧠 You are in the lobotomy room. Everything is bloody 🩸 and a shadow emerges from the corner 👤. Only one option:\n 1) 🏃 run away",
    options: [{ optionID: "1", target: "loseroom" }],
  },
  elevator: {
    promptText: "🛗 You are in the elevator. Options:\n 1) 🔙 go back,\n 2) ⬆️ go upstairs,\n 3) ⬇️ go downstairs.\n What do you want to do?",
    isBlocked: true,
    gameText: "You need a key.",
    options: [{ optionID: "1", target: "lobby" }, { optionID: "2", target: "secondFloor" }, { optionID: "3", target: "cellar" }]
  },
  cellar: {
    promptText:
      "🍷 You are in the cellar. It smells musty. Option:\n 1) 🔙 go back",
    options: [{ optionID: "1", target: "elevator" }],
  },
  secretRoom1: {
    promptText:
      "👻 You are in the secret room. A chained ghost begs for help. Options:\n 1) 🙏 help the ghost or \n 2) 🏃 run away.",
    options: [
      {
        optionID: "1",
        item: "key",
        message:
          "🗝️ Ghost gave you a key. It opens another secret room where your loved one is held captive.",
        target: "secretRoom2",
      },
      { optionID: "2", target: "lobby" },
    ],
  },
  secretRoom2: {
    promptText:
      "🚪 You are in secret room 2. A monster blocks the way 😈. An ax lies on the ground 🪓. Options:\n 1) Get the ax and fight or \n 2) 🏃 Run away.",
    options: [
      { optionID: "1", target: "combat" },
      { optionID: "2", target: "lobby" },
    ],
  },

  patientBeds: {
    promptText:
      "Something is stirring under one of the beds... You approach the bed slowly... Before you can react a bloody and bandaged someting jumps out from under the bed. Is it a human? Do you \n 1) Run \n 2) Fight",
      options: [
        { optionID: "1", target: "combat" },
        { optionID: "2", target: "lobby" },
      ],
  },

  combat: {
    isCustomRoom: true,
    enter: function () {
      combat(110, 50);
      enterRoom(gameObj.lobby);
  }},

  winroom: {
    gameText:
      "🎉 You won the game! You saved your loved one 💖. You are happy 😊.",
  },
  loseroom: {
    gameText:
      "💀 You are too slow. The demon is right behind you... 🩸 Darkness takes over...",
  },
  informationDesk: {
    promptText: "On the desk you see a key. Your options are:\n  1-pick key or \n 2-go back. \n What do you want to do?",
    options: [{ optionID: "1", target: "action" }, { optionID: "2", target: "lobby" }]
  },
  secondFloor: {
    promptText:
      "🏢 You are at the second floor. Options:\n 1) 🧠 lobotomy room,\n 2) 🛏️ patient’s ward or \n 3) 🔽 go downstairs.",
    options: [
      { optionID: "1", target: "room4" },
      { optionID: "2", target: "room3" },
      { optionID: "3", target: "lobby" },
    ],
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
        "🌀 There's nothing else to do. Do you want to return to the lobby?"
      );
      if (goLobby) return "lobby";
      else continue;
    } else {
      alert("❓ Please answer with Yes or No.");
    }
  }
}

function doctorRoom() {
  let result = askYesNoSmart("🪧 The sign says 'Doctor's Office'. Enter?");
  if (result === "lobby") {
    alert("🔙 You return to the lobby.");
    return;
  }

  result = askYesNoSmart("🚪 Approach and open the door slightly?");
  if (result === "lobby") {
    alert("🔙 You change your mind and return to the lobby.");
    return;
  }

  alert("🧪🧫 Old medical equipment... dusty books... and certificates...");

  result = askYesNoSmart("🚶 Go further into the room?");
  if (result === "lobby") {
    alert("🔙 You step back and return to the lobby.");
    return;
  }

  alert("💀💨 THE STENCH OF ALCOHOL IS OVERWHELMING... SOMETHING ISN'T RIGHT");
  alert("🌑🪟 The room is dim. Windows are shut tight.");
  alert("🚪 You fully enter the room...feelings like SOMETHING WATCHES YOU.");

  result = askYesNoSmart("🪑📖 Look under the desk?");
  if (result === "lobby") {
    alert("🔙 You return to the lobby.");
    return;
  }
  if (result) {
    alert("😶 There's nothing under the desk.");
  } else {
    alert("🪑📖  You ignore the desk.");
  }

  result = askYesNoSmart("📚 Approach the cabinet?");
  if (result === "lobby") {
    alert("🔙 You return to the lobby.");
    return;
  }

  result = askYesNoSmart("🔓 Open the cabinet?");
  if (result === "lobby") {
    alert("🔙 You return to the lobby.");
    return;
  }

  if (result) {
    alert("😱 🚪💥 SUDDENLY!!! A STRANGER LEAPS OUT FROM THE CABINET!!!😱😈🩸");

    while (true) {
      let action = prompt("Do you want to STAY or RUN?");
      if (!action) continue;

      action = action.trim().toUpperCase();

      if (action === "RUN") {
        alert("🏃 You quickly run back to the lobby!");
        return;
      } else if (action === "STAY") {
        alert("🧍 😶 You choose to stay...");
        alert("👤 👁️👁️  The stranger stares silently. No escape...❌ ");
      } else {
        alert("❗ Please type STAY or RUN.");
      }
    }
  } else {
    alert("🚫 You don't open the cabinet.");

    result = askYesNoSmart("🔙 Return to the lobby?");
    if (result === "lobby" || result === true) {
      alert("🔙 You return to the lobby.");
    } else {
      alert("🕰️ You wait, but the silence grows unbearable.");
      doctorRoom();
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
    alert("🚫 Option not found. Please, check your input.");
    return enterRoom(room);
  }
  alert(room.gameText); // exits the game
  return;
}

function combat (monsterHealth, monsterStrength) {
  alert("You chose to fight - very brave...");
  let monster = new entity(monsterHealth, monsterStrength);

  let damage;
  let maxDamage;
  let playerTurn = true;

while(monster.health > 0){
if(playerTurn == true){
  let choice = prompt("Do you want to: \n(1)Strike max 5 Damage \n(2)Kick max 7 Damage \n(3)Stab max 15 Damage"); //plan to create cooldowns for items or one-use items
  switch (choice){
    case "1":
    maxDamage = 7;
    break;
    case "2":
    maxDamage = 13;
    break;
    case "3":
      maxDamage = 18;
    break;
  }
  damage = Math.floor(Math.random() * (maxDamage));
  monster.health = monster.health - damage;
  if(monster.health > 0){
  alert("You dealt " + damage + " points damage. The monster has " + monster.health + "health left");
  playerTurn = false;
}
  else{
    alert("You have defeated the monster!")
    enterRoom(gameObj.winroom);
  }
}

else{
  damage = Math.floor(Math.random() * (Math.floor(Math.random() * (monster.strength)))); //
  player.health = player.health - damage;
  if(player.health > 0){
  alert("The monster fought back and dealt " + damage + " points damage. You have " +player.health+ " health left");
  playerTurn = true;
}
else{
  alert("What where you thinking fighting a monster...? Now you're no longer thinking...");
  enterRoom(gameObj.lobby);
}
}
}
}


alert(
  "🎮 Your best friend has gone missing exploring an abandoned asylum. You came here to find them. And now... the game begins. 🕵️‍♂️"
);
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

