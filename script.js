fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
    method: "GET",
    headers: {
        "git-user": "giacomop8",
    },
})
.then((response) => response.json())
.then((data) => document.getElementById("dados").innerHTML=data.Result[24].Name)
