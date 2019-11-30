//Arrays

{
    /*
    let grades = [12, "c", {}, function() { console.log("hello") }];
    console.log(grades[3]());
    */

    /*
    let grades = [15, 3, 56, 43, 67, 23, 67, 35, 78];
    grades.length = 30;
    grades[34] = 40;

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] !== undefined) {
            //legit
            console.log(grades[i]);
        }
    }
    */
    /*
    let grades = [15, 3, 56, 43, 67, 23, 67, 35, 78];
    grades.length = 30;
    grades[34] = 40;

    let found = false;
    let search = 78;


    for (let i = 0; i < grades.length; i++) {
        if (grades[i] === search) {
            //found
            console.log(grades[i] + " in the index " + i);
        }
    }

 */

    /*
      let grades = [15, 3, 56, 43, 67, 23, 67, 35, 78];
      grades.length = 30;
      grades[34] = 40;

      let count = 0;
      let total = 0;
      for (let i = 0; i < grades.length; i++) {
          if (grades[i] !== undefined) {
              //legit value
              count++;
              total += grades[i];
          }
      }
      let avg = total / count;
      console.log(avg);
      */


    /*

    // input from user
    let grades = [];
    while (true) {
        let input = prompt("Add a number");
        if (input === "q" || input === null) {
            break;
        }
        grades.push(Number(input));
        console.log(grades);
    }
*/
    /*
        let grades = [21, 5, 64, 37, 45, 24, 24, 3];
        grades.length = 30;
        grades.forEach(function(item, i) {
            console.log(item, i);
        });
    */

    //Multidimention Array
    /*
    let grades = [
        [21, 55, 64, 37, 45, 24, 24, 34],
        [23, 76, 23, 54, 67, 25, 76, 24],
        [56, 78, 34, 56, 23, 45, 23, 54]
    ];

    for (i = 0; i < grades.length; i++) {
        for (k = 0; k < grades[i].length; k++) {
            console.log(grades[i][k]);
        }
        console.log("//////////");
    }
    grades.forEach(function(row) {

        console.log(row);
    });
*/
    let grades = [
        [21, 55, 64, 37, 45, 24, 24, 34],
        [23, 76, 23, 54, 67, 25, 76, 24],
        [56, 78, 34, 56, 23, 45, 23, 54]
    ];

    grades.forEach(function(row) {
        row.forEach(function(col) {
            console.log(col);
        });
        console.log("~~~~~~~");
    });

}