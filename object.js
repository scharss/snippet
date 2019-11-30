//Objects

{
    let position = {
        x: 10,
        y: 20,
        print: function() {
            console.log(`X: ${this.x}, Y: ${this.y}`);
        }
    }
    position.print();
}