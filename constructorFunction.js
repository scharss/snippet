//Constructor Function
function circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Hallo');
    }
}
const another = new circle(1);

console.log(another.radius);