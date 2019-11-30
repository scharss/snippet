{
    let me = {
        name: "Carlos",
        outputMe: function() {
            console.log(this);
        }
    };
    me.outputMe(); //Method
}

{
    let me = {
        name: "Carlos",
        outputMe: outputMe
    };

    function outputMe() {
        console.log(this);
    }

    function outputMeStrict() {
        'use strict';
        console.log(this);
    }

    function Person() {
        console.log(this);
        this.name = "Carlos"
        console.log(this);
    }

    me.outputMe(); //method
    outputMe(); //function
    outputMeStrict(); //function strict
    let person = new Person(); //Constructor


}
