const API_URL = "https://www.balldontlie.io/api/v1/players"

fetch(API_URL)
    .then(response => response.json())
    .then( json => {
        addRows(json.data);
    });

function addRows(players) {
    tbody = document.getElementById("tbody");
    players.forEach(element => {
        tbody.appendChild(createPlayerRow(element))
    });
}

function createPlayerRow(player){
    let row = document.createElement("tr")

    let name = document.createElement("td")
        name.textContent = player.first_name;
        row.appendChild(name);

    let lastname = document.createElement("td");
        lastname.textContent = player.last_name;
        row.appendChild(lastname);

    let team = document.createElement("td")
        team.textContent = player.team.full_name;
        row.appendChild(team);
        
    return row;
}