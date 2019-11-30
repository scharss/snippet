//Loops
// while 
//do while
//for
// initialization, condition, update

{
    /*
    let i = 0; // initialization
    while (i < 10) { //condition
        //code
        console.log(i);
        i++ //update
    }
    */
    /*
    let i = 0; // initialization
    do {
        console.log(i);
        i++; //update
    } while (i < 10); //condition
    */
    /*
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    */
    /*
    let list = [1, 4, 3, 5, 3, 5, 4, 5, 632, 3];
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
    */
    /*
    let myString = "Search this string baby";
    let charToSearch = "c";
    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === charToSearch) {
            console.log(myString[i] + " is found at index " + i);
        }
    }
    */
    /*
        for (let i = 0; i < 10; i++) {
            for (let k = i; k < 10; k++) {
                console.log(i, k);
            }
        }
        */
    let d = document.getElementById("destiantion");
    for (let i = 0; i < 10; i++) {
        for (let k = i; k >= 0; k--) {
            d.append(k + " ");
        }
        var br = document.createElement('br');
        d.appendChild(br);
    }
}