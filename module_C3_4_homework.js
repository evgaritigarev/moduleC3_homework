// задание 3.4

function ElectricalDevices(name, power) {
    this.name = name;
    this.power = power;
    this.isPlugged = false;
};

ElectricalDevices.prototype.plugIn = function() {
    console.log(this.name + " is plugged!");
    this.isPlugged = true;
};

ElectricalDevices.prototype.unplug = function() {
    console.log(this.name + " is unplugged!");
    this.isPlugged = false;
};

function Fan(name, brand, power, type) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.bulbType = type;
    this.isPlugged = true;
};

Fan.prototype = new ElectricalDevices();

function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isPlugged = false;
}

Computer.prototype = new ElectricalDevices();

const ceilingFan = new Fan("Сeiling fan", "Dreamfan", 12, "stationary");

const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

ceilingFan.unplug();

homePC.plugIn();

console.log(homePC)

console.log(ceilingFan)