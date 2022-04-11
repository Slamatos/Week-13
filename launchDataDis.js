//Used for the display on the data table
//updates every 5 seconds
class InputData {
    constructor(
        time_seconds,
        lattitude,
        longitude,
        gps_altitude,
        bmp_altitude,
        bmp_pressure,
        bmp_temperature,
        dig_temperature,
        css_temperature,
        css_eCO2,
        css_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ
    ) {
        this.time_seconds = time_seconds;
        this.lattitude = lattitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmp_altitude = bmp_altitude;
        this.bmp_pressure = bmp_pressure;
        this.bmp_temperature = bmp_temperature;
        this.dig_temperature = dig_temperature;
        this.css_temperature = css_temperature;
        this.css_eCO2 = css_eCO2;
        this.css_TVOC = css_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}
function getData() {
    var loadedData = loadData();
    return loadedData;
}
function dataRow(legend, value, units) {
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
} //Need to review first ten mins of class
function updateDisplay() {
    theTime = new Date();
    console.log("The time is " + theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds());
    document.getElementById("timeStamp").innerHTML =
        theTime.getHours() + ":" + theTime.getMinutes() + ":" + theTime.getSeconds();
    var timeRead = data[index].time_seconds
    if (timeRead >= 10) {
        document.getElementById("data").rows["seconds"].innerHTML =
            dataRow("Time Elapsed", data[index].time_seconds, "seconds");
            document.getElementById("data").rows["lattitude"].innerHTML =
            dataRow("Latitude", data[index].lattitude, " ");
            document.getElementById("data").rows["longitude"].innerHTML =
            dataRow("Longitude", data[index].longitude, " ");
            document.getElementById("data").rows["gps_alt"].innerHTML =
            dataRow("GPS Altitude", data[index].gps_altitude, " ");
            document.getElementById("data").rows["bmp_alt"].innerHTML =
            dataRow("BMP Altitude", data[index].bmp_altitude, " ");
            document.getElementById("data").rows["bmp_temp"].innerHTML =
            dataRow("BMP Temperature", data[index].bmp_temperature, " ");
            document.getElementById("data").rows["dig_temp"].innerHTML =
            dataRow("Digital Temperature", data[index].dig_temperature, " ");
            document.getElementById("data").rows["css_temp"].innerHTML =
            dataRow("CSS Temperature", data[index].css_temperature, " ");
            document.getElementById("data").rows["css_eCO2"].innerHTML =
            dataRow("CSS eCO2", data[index].css_eCO2, " ");
            document.getElementById("data").rows["css_TVOC"].innerHTML =
            dataRow("CSS TVOC", data[index].css_TVOC, " ");
            document.getElementById("data").rows["UV"].innerHTML =
            dataRow("UV", data[index].UV, " ");
            document.getElementById("data").rows["accelX"].innerHTML =
            dataRow("Acceleration: X", data[index].accelX, " ");
            document.getElementById("data").rows["accelY"].innerHTML =
            dataRow("Acceleration: Y", data[index].accelY, " ");
            document.getElementById("data").rows["accelZ"].innerHTML =
            dataRow("Acceleration: Z", data[index].accelZ, " ");
            document.getElementById("data").rows["magneticX"].innerHTML =
            dataRow("Magnitization: X", data[index].magneticX, " ");
            document.getElementById("data").rows["magneticY"].innerHTML =
            dataRow("Magnitization: Y", data[index].magneticY, " ");
            document.getElementById("data").rows["magneticZ"].innerHTML =
            dataRow("Magnitization: Z", data[index].magneticZ, " ");
            document.getElementById("data").rows["gyroX"].innerHTML =
            dataRow("Gyration: X", data[index].gyroX, " ");
            document.getElementById("data").rows["gyroY"].innerHTML =
            dataRow("Gyration: Y", data[index].gyroY, " ");
            document.getElementById("data").rows["gyroZ"].innerHTML =
            dataRow("Gyration: Z", data[index].gyroZ, " ");
    }
    if (index >= 500) {
        index = 0;
    } else { index++ }
}