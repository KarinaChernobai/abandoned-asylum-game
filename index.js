const gameObj = {
    lobby: {
        promptText: "You can insert either staircase, information desk, door to the left or door to the right",
        options: [{optionID: "room to the left", target: [room1], description: ""}, {}, {}, {}]
    },
    room1: {},
    room2: {
        promtText: "You are in the room 2. You hear a noise behind the wall. What do you want to do? Your options are: explore or run back. What do you want to do?",
        options: [{optionID:"Explore!", target: "bookCase"}, {optionID:"Run back", target: "lobby" }]
    },
    bookCase: {
        promptText: "You found a door to a secred room below the bookcase. There are still strange noises. Do you want to open door? Your options are: check the bookcase or go back. What do you want to do?",
        options: [{optionID:"Check the bookcase", target: "secretRoom1"}, {optionID:"Go back", target: "lobby" }]
    },
    room3: {},
    room4: {},
    elevator: {},
    cellar: {},
    secretRoom1: { "You are in the secret room now. There is a chained ghost in the corner. It asks for help. Do you want to help it? your options are: help the ghost or run away. What do you want to do?",
        options: [{optionID:"Help the ghost", item: "key", message:"Ghost gave you a key. This is a key to another secred room where you will find you loved one.", target:"secredRoom2"}, {optionID:"Run away", target: "lobby" }] 

    },
    secretRoom2: {
        promptText: "You are in the secret room 2. You see a big monster and an ax on the ground. Your options are: get the ax and fight or run away. What do you want to do?",
        options: [{optionID:"Get the ax and fight", target:"winroom"}, {optionID:"run away", target: "lobby" }]
    },
    winroom: {
        gameText: "You won the game. You saved your loved one. You are happy.",
    },
    informationDesk: {},
    secondFloor: {}
};



// staircase
gameObj[input.toLowerCase];

function startTheGame(room){
    const choice = prompt(room.promptText); // room to the left
    for (let option of choice.options) {
        if (option.optionID === choice){
            startTheGame(gameObj[option.target]);
        }   
    }
}

alert("The game begins");
startTheGame(gameObj[0]);