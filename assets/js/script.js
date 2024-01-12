const API_KEY = "JDRF6ch1rVNYGwn7Q0dsbhXGCkQ"
const API_URL = "https://ci-jshint.herokuapp.com/api"
const resultsModal = new bootstrap.Modal(document.getElementById("resultsModal"));

document.getElementById("status").addEventListener("click", e => getStatus(e));

//get status function needs to make a GET request to the API_URL with the API_KEY
//get status also needs to pass this data to a function that will display it.
async function getStatus(e) {
    const queryString = `${API_URL}?api_key=${API_KEY}`;

    const response = await fetch(queryString);

    const data = await response.json();

    //on port 8000, open the console and clic the 'check key' button.
    //it will return a date or an error code
    if (response.ok) {
        displayStatus(data);
    } else {
        throw new Error(data.error)
    }
}

function displayStatus(data) {
    let heading = "API key status";
    let results = `<div>Your key is valid until </div>`;
    results += `<div class="key-status">${data.expiry}</div>`;

    document.getElementById("resultsModalTitle").innerText = heading;
    document.getElementById("results-content").innerHTML = results;

    resultsModal.show();
}