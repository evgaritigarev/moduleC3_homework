// задание 3.5

class ElectricalDevices {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isPlugged = false;
    }

    plugIn() {
        console.log(this.name + " connected");
        this.isPlugged = true;
    }

    plugOff() {
        console.log(this.name + " disable");
        this.isPlugged = false;
    }
}

class Fan extends ElectricalDevices {
    constructor (name, brand, power, type) {
      super(name, power);
      this.brand = brand;
      this.type = type;
      this.isPlugged = true;
    }
}

class Computer extends ElectricalDevices {
    constructor(name, brand, power, type, functionality) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.functionality = functionality;
      this.isPlugged = false;
    }
}

const ceilingFan = new Fan("Сeiling fan", "Dreamfan", 12, "stationary");

const homePC = new Computer("Table PC", "Intel", 120, "stationary", "for work");

ceilingFan.plugOff();

homePC.plugIn();

console.log(homePC)

console.log(ceilingFan)