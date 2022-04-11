class Rocket {
    //make the properties
    constructor(
        fuelType,
        weight,
        power
    ) {
        this.fuelType = fuelType;
        this.weight = weight;
        this.power = power;
    }
    launch(){
        console.log("launch started");
        alert("clear the launch area");
        alert("launch has started");
    }
    landing(){
        console.log("landing has started");
        alert("clear the launch area");
        alert("landing has started");
    }
    detatchThruster(){
        console.log("The thruster is detatching");
        alert("beware, the thruster is detatching");
        alert("detaching has started");
    }
}
class Mission {
    constructor(
        objective,
        oxyLvl,
        launchDate,
        spaceCraft,
        numAstronauts
    ) {
        this.objective = objective
        this.oxyLvl = oxyLvl
        this.launchDate = launchDate
        this.spaceCraft = spaceCraft
        this.numAstronauts = numAstronauts
    }
    launchMission(){
        console.log("The mission is launching");
        alert("We are launching");
        alert("Good luck, " + this.spaceCraft);
    }
    displayPerams(){
        console.log("Displaying the mission perameters");
        alert("The space craft " + this.spaceCraft + " will launch on " + this.launchDate
         + " with an O2 level of " + this.oxyLvl + "%");
        alert("Get ready for a blast off!");
    }
}
function runSpDisplay(){
    console.log("Spring Display is displaying");
    springLaunch.displayPerams();
}
function spLaunch() {
    console.log("Spring Launch is launching!");
    springLaunch.launchMission();
}
function runFlDisplay(){
    console.log("Spring Display is displaying");
    fallLaunch.displayPerams();
}
function flLaunch() {
    console.log("Spring Launch is launching!");
    fallLaunch.launchMission();
}
