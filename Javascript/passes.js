class Passes {
    constructor() {
        this.passes = null;
        this.tickets_cost = null;
    }
    random_int(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    random_choice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    passes_bought() {
        this.passes = this.random_int(2000, 4000);
        const display_passes = document.getElementById('total_passes');
        display_passes.value = this.passes;
    }
    projected_ticket_sales() {
        this.tickets_cost = this.passes * 350;
        const display_ticket_cost = document.getElementById('passes_sales');
        display_ticket_cost.value = this.tickets_cost;
    }
    load_data() {
        this.passes_bought();
        this.projected_ticket_sales();
    }
}
function loadData() {
    const passes_bought = new Passes();
    passes_bought.load_data();
}
window.onload = loadData;
