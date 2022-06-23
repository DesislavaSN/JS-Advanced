class SummerCamp {
    constructor(organizer, location){
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money){

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error("Unsuccessful registration at the camp.");
        }

        const participant = {
            name,
            condition,
            power: 100,
            wins: 0
        }

        let foundName = this.listOfParticipants.find(n => n.name == name);
        if(foundName != undefined){
            return `The ${name} is already registered at the camp.`;
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`;
        }

        this.listOfParticipants.push(participant);
        return `The ${name} was successfully registered.`

    }

    unregisterParticipant (name){

        let foundName = this.listOfParticipants.find(n => n.name == name);
        let foundNameIndex = this.listOfParticipants.findIndex(n => n.name == name);
        if (foundName == undefined) {
            throw new Error(`The ${name} is not registered in the camp.`);
        } 
        this.listOfParticipants.splice(foundNameIndex, 1);
        return `The ${name} removed successfully.`

    }

    timeToPlay (typeOfGame, participant1, participant2){

        const player1 = this.listOfParticipants.find(n => n.name == participant1);
        const player2 = this.listOfParticipants.find(n => n.name == participant2);

        if (player1 == undefined && player2 == undefined) {
            throw new Error(`Invalid entered name/s.`);
        }
          
        if (typeOfGame == 'WaterBalloonFights') {
          // WaterBalloonFights game:
            if (player1.condition !== player2.condition) {
                throw new Error(`Choose players with equal condition.`);
            }
            if (player1.power > player2.power) {
                player1.wins ++;
                return `The ${player1.name} is winner in the game ${typeOfGame}.`
            } else if (player2.power > player1.power){
                player2.wins ++;
                return `The ${player2.name} is winner in the game ${typeOfGame}.`
            } else {
                return `There is no winner.`
            }
        } else {
            // Battleship game:
            player1.power +=20;
            return `The ${participant1} successfully completed the game ${typeOfGame}.`
        }
    }

    toString (){
        let res = [];
        let firstLine = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`
        res.push(firstLine);
        this.listOfParticipants.sort((a,b) => b.wins - a.wins).forEach(p => res.push(`${p.name} - ${p.condition} - ${p.power} - ${p.wins}`));
        return res.join('\n');
    }
}

// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 200));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.registerParticipant("Leila Wolfe", "childd", 200));
//--------------
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.unregisterParticipant("Petar"));
// console.log(summerCamp.unregisterParticipant("Petar Petarson"));
//--------------
// const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
// console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
// console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
// console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
// console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
// console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
/* Autput:
The Petar Petarson was successfully registered.
The Petar Petarson successfully completed the game Battleship.
The Sara Dickinson was successfully registered.
Uncaught Error: Choose players with equal condition.
The Dimitur Kostov was successfully registered.
The Petar Petarson is winner in the game WaterBalloonFights.
 */
//--------------
const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));
console.log(summerCamp.toString());

/* Petar Petarson - student - 120 - 1
Sara Dickinson - child - 100 - 0
Dimitur Kostov - student - 100 - 0
 */
