const baseUrl = 'https://calendarific.com/api/v2/';

const key = 'bb3fdb0db093abb333c1fac7ac8d11449da7124e';

let url;

const countryDropdown = document.getElementById("countryDropdown");
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchHolidays);



preFetch();

// FETCHES
function preFetch(){

    url = baseUrl + "countries" + "?api_key=" + key;
    
    fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json) {
        populateCountries(json);
    });
}

function fetchHolidays(e){
    e.preventDefault();
    
    // https://calendarific.com/api/v2/holidays?&api_key=bb3fdb0db093abb333c1fac7ac8d11449da7124e&country=AD&year=2020
    
        // get today's date
        let date = new Date();

        let todayDay = new Date().getDay();
        let todayMonth = new Date().getMonth() + 1;
        console.log(date);


    let year = new Date().getFullYear();

    let countryCode = document.getElementById('countryDropdown').value;
    url = baseUrl + "holidays" + "?&api_key=" + key + "&country=" + countryCode + "&year=" + year;

    fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json) {
        displayHolidayData(json);
    });
}

// ACTIONS
function populateCountries(json){

    let countries = json.response.countries;
        
    for(let country of countries){
        let cName = country.country_name;
        let cHolidays = country.total_holidays;
        let iso = country["iso-3166"];
        let cOpt = document.createElement('option');
        cOpt.value = iso;
        cOpt.innerText = cName + " | " + cHolidays;
        countryDropdown.appendChild(cOpt);
    }
}

function displayHolidayData(json){

    // Today's month and day
    let todaysDay = new Date().getDate();
    let todaysMonth = new Date().getMonth() + 1;
    
    // Array of holidays:
    let holidays = json.response.holidays;

    let nextHolidayArray = [];
    let prevHolidayArray;

console.log(holidays);

    for(day of holidays){
        let d = day.date.datetime;
        if(todaysMonth == d.month && todaysDay == d.day){
            console.log("Holiday!");
        }else{
            if(d.month >= todaysMonth){
                if(d.day > todaysDay){
                    nextHolidayArray.push(day);
                }
            }
        }
    }

    // captured list of holidays AFTER today.
    console.log(nextHolidayArray);

    // Day variables
    let nextDay;
    let today;
    let prevDay;

    let countrysHolidays;

/*
    // Iterate through the holidays:
    for(day of holidays){
        // If today matches one of the holidays...

        if(todaysMonth == holidays.date.datetime.month && todaysDay == holidays.date.datetime.month){
            console.log("today is a holiday");
            console.log(holidays.name);
            // If today is not a holiday...
        } else{
            
        }
    }
*/

    /*
    for(hday of holidays){
        // console.log(hday.date.datetime);
        let x;
        if(hday.date.datetime.month >= todaysMonth){
            if(hday.date.datetime.day > todaysDay){
                
                console.log(holidays.indexOf(hday.name));

                console.log(hday)
                console.log(hday.date.datetime.month, hday.date.datetime.day, hday.name);
            }


        }
    }
    */

    // function checkHolidays(hdays){
    //     return hdays.date.datetime.month >= todaysMonth
    // }

    // console.log(fullArray.findIndex(checkHolidays));



    
            // WRAP IN FOR OF LOOP
            // let isoDate = new Date().toISOString(); // Today's date
            // let todayiso
            // console.log(hDay.date.iso === );

    // create an array of ISO dates from the group.
    // take today's date, and remove all from that date to the end.
    // take the last date left and use that.

    // let prevH = getElementById('prevH');
    // let today = getElementById('today');
    // let nextH = getElementById('nextH');
}

function getDates(holidays){
    
    let dateArray = [];

    console.log(holidays);

        for(h in holidays){
            let d = holidays[h].date.iso;
            dateArray.push(d);
        }
    return dateArray;
}
