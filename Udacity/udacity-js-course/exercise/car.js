// create an object car
// create the getter for all the variables
// create the setter for all the variables
// print the model and owner

var car = {
    model: '' ,
    plateNumber: '',
    owner: '',
    year: '',
    get getModel() {
        return this.model;
    },
    get getPlateNumber() {
        return this.plateNumber;
    },
    get getOwner() {
        return this.owner;
    },
    get getYear() {
        return this.year;
    },
    set setModel(m) {
        this.model = m;
    },
    set setPlateNumber(p) {
        this.plateNumber = p;
    },
    set setOwner(o) {
        this.owner = o;
    },
    set setYear(y) {
        this.year = y;
    }
};

car.setModel = 'Hyundai Tuscon';
car.setPlateNumber = 'KDL1234';
car.setOwner = 'Chanyu Choung';
car.setYear = '2018';
console.log(`The car model is ${car.getModel} made in ${car.getYear} with 
the plate number of ${car.getPlateNumber} owned by ${car.getOwner}.`);
