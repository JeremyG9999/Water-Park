class ParkAttendance {
    constructor() {
        this.water_ride_health = null;
    }
    random_choice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    ride_health(element_ID) {
        this.water_ride_health = this.random_choice(["Healthy", "Healthy", "Healthy", "Healthy", "Healthy", "Healthy", "Healthy",
            "Healthy", "Healthy", "Healthy", "Minor Damage", "Minor Damage"]);
        const display_ride_health = document.getElementById(element_ID);
        display_ride_health.value = this.water_ride_health;
    }
    load_data() {
        this.ride_health('other_attraction_1');
        this.ride_health('other_attraction_2');
        this.ride_health('other_attraction_3');
        this.ride_health('other_attraction_4');
        this.ride_health('other_attraction_5');
        this.ride_health('other_attraction_6');
        this.ride_health('other_attraction_7');
        this.ride_health('other_attraction_8');
        this.ride_health('other_attraction_9');
        this.ride_health('other_attraction_10');
    }
}
function loadData() {
    const parkAttendance = new ParkAttendance();
    parkAttendance.load_data();
}
window.onload = loadData;
