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
        name: "Caleb",
        outputMe: outputMe
    };

    function outputMe() {
        console.log(this);
    }

    function outputMeStrict() {
        'use strict';
        console.log(this);
    }
    me.outputMe(); //method
    outputMe(); //function
    outputMeStrict(); //function strict


}
