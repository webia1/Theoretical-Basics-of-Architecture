var vehicle = {
    name: 'Origin',
    weight: 0
};

var car = Object.create(vehicle);

console.log(car);   // {}

car.name = 'Car';

console.log(car);   // { name: 'Car' }
