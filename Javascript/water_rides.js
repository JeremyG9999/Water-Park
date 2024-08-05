class ParkAttendance {
    constructor() {
        this.water_ride_health = null;
    }
    random_choice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    ride_health(element_ID) {
        this.water_ride_health = this.random_choice(["Healthy", "Healthy", "Healthy", "Healthy", "Healthy", "Healthy", "Healthy",
            "Healthy", "Healthy", "Healthy", "Minor Damage Closed", "Not Operable Closed"]);
        const display_ride_health = document.getElementById(element_ID);
        display_ride_health.value = this.water_ride_health;
    }
    load_data() {
        this.ride_health('rides_health_1');
        this.ride_health('rides_health_2');
        this.ride_health('rides_health_3');
        this.ride_health('rides_health_4');
        this.ride_health('rides_health_5');
        this.ride_health('rides_health_6');
        this.ride_health('rides_health_7');
        this.ride_health('rides_health_8');
        this.ride_health('rides_health_9');
        this.ride_health('rides_health_10');
    }
}
function loadData() {
    const parkAttendance = new ParkAttendance();
    parkAttendance.load_data();
}
window.onload = loadData;