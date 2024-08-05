class ParkAttendance {
    constructor() {
        this.attendance = null;
        this.temperature = null;  
        this.rain = null;
        this.wind = null;
        this.weather_report = null;
        this.tickets_cost = null;
    }
    random_int(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    park_attendance() {
        this.attendance = this.random_int(2000, 4000);
        const display_attendance = document.getElementById('attendance');
        display_attendance.value = this.attendance;
    }
    projected_ticket_sales() {
        this.tickets_cost = this.attendance * 60;
        const display_ticket_cost = document.getElementById('ticket_sales');
        display_ticket_cost.value = this.tickets_cost;
    }
    random_choice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    weather() {
        this.temperature = this.random_int(65, 100);
        this.rain = this.random_choice(["No Rain", "No Rain", "No Rain", "No Rain", "No Rain", "Very Light Rain",
        "Very Light Rain", "Light Rain", "Medium Rain",  "Heavy Rain", "Heavy Rain w/Storms"]);
        this.wind = this.random_choice(["No Wind", "Light Wind", "Moderate Wind", "Very Windy"]);
        this.weather_report = `It is ${this.temperature} F, ${this.rain}, ${this.wind}`;
        const display_weather_report = document.getElementById('weather_report');
        display_weather_report.value = this.weather_report;
    }
    load_data() {
        this.park_attendance();
        this.projected_ticket_sales();
        this.weather();
    }
}
function loadData() {
    const parkAttendance = new ParkAttendance();
    parkAttendance.load_data();
}
window.onload = loadData;