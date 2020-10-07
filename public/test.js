let array = ["2020-01-01", "2020-01-20", "2020-02-17", "2020-03-19T16:49:36-11:00", "2020-04-10", "2020-10-06", "2020-10-12", "2020-10-13", "2020-10-14"];
let d = new Date().toISOString();

console.log(d);

function checkNextHighest(array, d){
    return array <= d;
}

let answer = array.findIndex(checkNextHighest);
console.log(answer);









console.log(todaysDay);
console.log(todaysMonth);

console.log(todaysMonth + " " + todaysDay);