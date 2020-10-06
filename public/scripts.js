const baseUrl = 'https://calendarific.com/api/v2/';

const key = '?api_key=bb3fdb0db093abb333c1fac7ac8d11449da7124e';


const countryDropdown = document.getElementById("countryDropdown");
const searchForm = document.querySelector('form');

searchForm.addEventListener('submit', fetchHolidays);



preFetch();

// FETCHES
function preFetch(){

    url = baseUrl + "countries" + key;
    
//    + "holidays" + key + "&country=US&year=" + year

    fetch(url)
    .then(function(result){
        return result.json();
    }).then(function(json) {
        populateCountries(json);
    });
}

function fetchHolidays(e){
    e.preventDefault();
    let year = new Date().getFullYear();
    // https://calendarific.com/api/v2/holidays?&api_key=baa9dc110aa712sd3a9fa2a3dwb6c01d4c875950dc32vs&country=US&year=2019

    let countryCode = document.getElementById('countryDropdown').value;
    url = baseUrl + "holidays" + key + "&country=" + countryCode + "&year=" + year;
    console.log(url);

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
    console.log(countries);

        //let ddownMenu = document.querySelector('.dropdown-menu');   // Get 
        
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

    console.log(json);
    
    // let prevH = getElementById('prevH');
    // let today = getElementById('today');
    // let nextH = getElementById('nextH');
}

