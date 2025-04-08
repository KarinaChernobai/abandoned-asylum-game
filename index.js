const gameObj = {
    lobby: {
        promptText: "You can insert either staircase, information desk, door to the left or door to the right",
        options: [{optionID: "room to the left", target: [room1], description: ""}, {}, {}, {}]
    },
    room1: {},
    room2: {},
    room3: {},
    room4: {},
    elevator: {},
    cellar: {},
    secretRoom: {},
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