function checkCreds() {
    console.log("checkCreds() started");
    //create the vars and fill them in
    var fName = document.getElementById("fName").value;
    console.log(fName);
    var lName = document.getElementById("lName").value;
    console.log(lName);
    var bID = document.getElementById("bID").value;
    console.log(bID);
    //make a fullName var
    var fullName = (fName + " " + lName)
    console.log(fullName)
    //check if fullName is 21 chars or less
    var fullNameLength = fullName.length;
    console.log(fullNameLength);
    if (fullNameLength > 21 || fullNameLength < 3) {
        document.getElementById("loginstatus").innerHTML = 
        "Invalid Name";
    } else if (bID > 999 || bID < 1) { //check the bID is less than 1000 but greater than 1
        document.getElementById("loginstatus").innerHTML =
        "Invalid Badge";
    } else { //if true, then grant acess
        alert("Access granted. Welcome " + fullName);
        location.replace("./UATSpacePage.html");
    }
}