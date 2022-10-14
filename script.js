fetch("https://estagio.geopostenergy.com/WorldCup/GetAllTeams", {
    method: "GET",
    headers: {
        "git-user": "giacomop8",
    },
})
.then((resposta) => resposta.json())
.then((data) => console.log(data))
