class WaterPark {
    constructor() {
        this.reset();
    }
    reset() {
        this.count = 1;
        this.expressTime = 0;
        this.normalTime = 0;
        this.express = [];
        this.normal = [];
    }
    random_int(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    ride() {
        for (let arrival = 1; arrival < 1000; arrival++) {
            if (this.random_int(1, 5) === 1) {
                let processing = this.random_int(1, 5);
                this.express.push([this.count, arrival, processing]);
                this.count++;
                this.expressTime += processing;
            }
            if (this.random_int(3, 8) === 3) {
                let processing = this.random_int(3, 8);
                this.normal.push([this.count, arrival, processing]);
                this.count++;
                this.normalTime += processing;
            }
        }
    }
    both(elementID) {
        this.total = this.count - 1;
        this.totals = `Both lanes: ${this.total}`;
        const display_ride_data = document.getElementById(elementID);
        display_ride_data.value = this.totals;
    }
    total_n(elementID) {
        this.totalNormal = this.normal.length;
        this.totalNormals = `Normal lanes: ${this.totalNormal}`;
        const display_ride_data = document.getElementById(elementID);
        display_ride_data.value = this.totalNormals;
    }
    total_e(elementID) {
        this.totalExpress = this.express.length;
        this.totalExpresss = `Express lanes: ${this.totalExpress}`;
        const display_ride_data = document.getElementById(elementID);
        display_ride_data.value = this.totalExpresss;
    }
    average_e(elementID) {
        this.averageExpressTime = (this.expressTime / this.totalExpress).toFixed(2);
        this.averageExpressTimes = `Average Express: ${this.averageExpressTime} min`;
        const display_ride_data = document.getElementById(elementID);
        display_ride_data.value = this.averageExpressTimes;
    }
    average_n(elementID) {
        this.averageNormalTime = (this.normalTime / this.totalNormal).toFixed(2);
        this.averageNormalTimes = `Average Normal: ${this.averageNormalTime} min`;
        const display_ride_data = document.getElementById(elementID);
        display_ride_data.value = this.averageNormalTimes;  
    }
    load_data() { //ride 1
        this.both('both1');this.total_n('normal1');this.total_e('express1');this.average_e('avg_e1');this.average_n('avg_n1')
        this.reset(); //ride 2
        this.ride();
        this.both('both2');this.total_n('normal2');this.total_e('express2');this.average_e('avg_e2');this.average_n('avg_n2')
        this.reset(); //ride 3
        this.ride();
        this.both('both3');this.total_n('normal3');this.total_e('express3');this.average_e('avg_e3');this.average_n('avg_n3')
        this.reset(); //ride 4
        this.ride();
        this.both('both4');this.total_n('normal4');this.total_e('express4');this.average_e('avg_e4');this.average_n('avg_n4')
        this.reset(); //ride 5
        this.ride();
        this.both('both5');this.total_n('normal5');this.total_e('express5');this.average_e('avg_e5');this.average_n('avg_n5')
        this.reset(); //ride 6
        this.ride();
        this.both('both6');this.total_n('normal6');this.total_e('express6');this.average_e('avg_e6');this.average_n('avg_n6')
        this.reset(); //ride 7
        this.ride();
        this.both('both7');this.total_n('normal7');this.total_e('express7');this.average_e('avg_e7');this.average_n('avg_n7')
        this.reset(); //ride 8
        this.ride();
        this.both('both8');this.total_n('normal8');this.total_e('express8');this.average_e('avg_e8');this.average_n('avg_n8')
        this.reset(); //ride 9
        this.ride();
        this.both('both9');this.total_n('normal9');this.total_e('express9');this.average_e('avg_e9');this.average_n('avg_n9')
        this.reset(); //ride 10
        this.ride();
        this.both('both10');this.total_n('normal10');this.total_e('express10');this.average_e('avg_e10');this.average_n('avg_n10')        
    }
}
function main() {
    const run = new WaterPark();
    run.ride()
    run.load_data();
}
window.onload = main;