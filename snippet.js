//Object

{
    let empleado = {
        salarioBase: 3000000,
        valorHoraExtra: 50000,
        numeroHorasExtras: 10,
        salario: function() {
            let x = this.salarioBase + (this.valorHoraExtra * this.numeroHorasExtras);
            return x;
        }
    };
    console.log(empleado.salario());
}
//**********************************/
{
    let x = [15, 3, 56, 43, 67, 23, 67, 35, 78];
    for (let i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}
//*********************************/
{
    let i = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
}
//*********************************/
{
    let i = 0;
    do {
        console.log("aaa");
        i++;
    } while (i < 10);
}



{
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < 5);

}

{
    let i = 0;
    while (i < 3) {
        console.log("aaaa");
        i++;
    }
}

{
    document.getElementById("btn1").onclick = function() {
        let nombre = document.getElementById("enter").value;
        switch (nombre) {
            case "Carlos":
                console.log("Hola Carlos");
                break;
            case "Luis":
                console.log("Hola Luis");
                break;

        }

    }

}

{
    let name = prompt("What is your name");

    switch (name) {
        case "Caleb":
            console.log("Welcome Caleb");
            break;
        case "Claire":
            console.log("Welcomw Claire");
            break;
        default:
            console.log("none");
            break
    }
}

{
    let x = 10;
    let y = 30;

    function add(arg1, arg2) {
        return arg1 + arg2;
    }
    add(x, y);
}

{
    let person = {
        name: "John",
        age: 40,
        fun: function() {
            console.log("Hola Mundo");
        }
    }
    console.log(person.name);
    console.log(person.age);
    console.log(person.fun());
}

{
    let position = {
        x: 10,
        y: 20,
        print: function() {
            console.log(`x:${this.x}, y: ${this.y}`);
        }
    }
    console.log(position.print());
}


// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
var myFather = new Person("John", "Doe", 50, "blue");
var myMother = new Person("Sally", "Rally", 48, "green");

// Add nationality to first object
myFather.nationality = "English";

console.log(myFather.name);
console.log(myFather.age)