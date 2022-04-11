function start(){
    console.log("start() started")
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop(){
    console.log("stop() started")
    clearInterval(timer);
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function testCntdwn() {
    //I remade the old countdown system to be more efficient
    console.log("testCntdwn stated");
    //Writes to the console that the timers have started
    currTime = 50
    //This is the current amount of seconds desired for the blast off
    for (var i = 0; i <= 10; i++) {
        //This is the variable "i" that is being used to program the loop function
        console.log(i);
        //This writes to the log all of the timers used for the loop function
        setTimeout(function () {
            //This function is used to print different text based on the timers
            if (currTime == 0) {
                document.getElementById("blastOffText").innerHTML = "Blast off!"
            }
            //This tells the function to say blast off after 50 seconds
            else if (currTime < 25) {
                document.getElementById("blastOffText").innerHTML =
                 "Warning! Less than halfway to launch. Time left = " + currTime;
            }
            //This tells the function to have specific text halfway through
            else {
                document.getElementById("blastOffText").innerHTML = "Time left " + currTime;
            }
            //This tells the function to write when the other criterias aren't met
            currTime = currTime - 5;
        }, 5000 * i);
        //This is how long "i" waits for each timer
    }

}
function playCraps() {
    //This is the entire function that is responsible for playing Craps
    console.log("Craps has started")
    //This tells the console that the function has started running
    var die1 = (6 * Math.random());
    //This is our first die. The variable allows all numbers from 0 to 5.9 repeating
    var roundDie1 = Math.ceil(die1);
    //This variable tells the computer to round up to the next whole number to replecate a die
    console.log("Your first die is " + roundDie1);
    //This tells the console what the whole number is. The whole number is what is represenative of a die roll
    document.getElementById("die1Res").innerHTML = ("Die one is " + roundDie1);
    //This prints the rsults of "roundDie1" to the webpage
    var even1 = (roundDie1 == 2) || (roundDie1 == 4) || (roundDie1 == 6)
    //This variable is used to locate if the die is even

    var die2 = (6 * Math.random());
    //This is our second die. The variable allows all numbers from 0 to 5.9 repeating
    var roundDie2 = Math.ceil(die2);
    //This variable tells the computer to round up to the next whole number to replecate a die
    console.log("Your second die is " + roundDie2);
    //This tells the console what the whole number is. The whole number is what is represenative of a die roll
    document.getElementById("die2Res").innerHTML = ("Die two is " + roundDie2);
    //This prints the rsults of "roundDie2" to the webpage
    var even2 = (roundDie2 == 2) || (roundDie2 == 4) || (roundDie2 == 6)
    //This variable is used to locate if the die is even


    var dieTotal = (roundDie1 + roundDie2);
    //This is used to get our total from the dice
    console.log("Your total is " + dieTotal)
    //This prints our dice roll to the console
    document.getElementById("fullRes").innerHTML = ("Your total is " + dieTotal);
    //This prints our dice roll to the webpage

    //This "if" statement is used to determine the bounds and conditions of the game
    if (dieTotal == 7 || dieTotal == 11) {
        //This statement is used to find out if you lose
        document.getElementById("crapsRes").innerHTML = "Craps, you lose!";
        //Prints to the webpage that you lost
        console.log("Craps, you lose!");
        //Prints to the console that you lost
    } else if (roundDie1 == roundDie2 && roundDie1 % 2 == 0) {
        //This statement is used to find out if you win
        document.getElementById("crapsRes").innerHTML = "You win!";
        //Prints to the webpage that you won
        console.log("You win!")
        //Prints to the console that you won
    } else {
        //This statement is used to find out if you tied
        document.getElementById("crapsRes").innerHTML = "Whoops, you tied!";
        //Prints to the webpage that you tied
        console.log("Whoops, you tied!")
        //prints to the console that you tied
    }


}
function playMissionLaunch(){
console.log("General music has started");
mySound = new sound("Home - We're Finally Landing.mp3")
mySound.play();
}
function sound(srcFile){
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound)
    this.play = function(){
        this.sound.play()
    }
    this.stop = function(){
        this.sound.pause()
    }
}
