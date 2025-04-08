const gameObj = {
    lobby: {
        promptText: "You find yourself in the lobby. You have the following options: staircase, information desk, door to the left or door to the right. Print your choice:",
        options: [
            {optionID: "door to the left", target: [this.room2]}, 
            {optionID: "door to the right", target: [this.room1]}, 
            {optionID: "staircase", target: [this.secondFloor]},
            {optionID: "information desk", target: [this.informationDesk]}
        ]
    },
    // Anastasia
    room1: {},
    // koksal
    room2: {},
    
    room3: {},
    room4: {},
    elevator: {},
    cellar: {},
    secretRoom: {},
    informationDesk: {},
    secondFloor: {}
};

function enterRoom(room){
    const choice = prompt(room.promptText); // door to the left
    for (let option of room.options) {
        if (option.optionID === choice){
            return enterRoom(gameObj[option.target]);
        }   
    }
    alert("Option not found. Please, check your spelling");
    return enterRoom(room);
}

alert("Your best friend has gone missing exploring an abandoned asylum. You came here determined to get answers. And now the game begins.");
enterRoom(gameObj.lobby);