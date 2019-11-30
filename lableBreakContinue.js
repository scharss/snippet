// Label with Break and  Continue

{
    let grades = [
        [21, 55, 64, 37, 45, 24, 24, 34],
        [23, 76, 23, 54, 67, 25, 76, 24],
        [56, 78, 34, 56, 23, 45, 23, 54]
    ];

    outerLoop: for (i = 0; i < grades.length; i++) {
        for (k = 0; k < grades[i].length; k++) {
            console.log(grades[i][k]);
            if (grades[i][k] === 78) {
                console.log("You found the value");
                //break;
                continue outerLoop;
            }
            console.log("Doing Stuff")
        }
        console.log("~~~~~~~~"); //this code is ignored with continue outerLoop, but is not with a break
    }
}