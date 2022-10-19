async function getContent() {
    try {        
        const response = await fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            method: 'GET',
            headers: {
            'git-user': 'giacomop8',
        }})

        const data = await response.json()
        times = data.Result

        return times
    } catch (error) {
        console.error(error)        
    }
}

times = getContent()

grupoFinal = []
timeSorteado = Math.floor(Math.random() * 32)

for(let i=0; i<32; i++) {
    
    while(grupoFinal.indexOf(timeSorteado) != -1) {
        timeSorteado = Math.floor(Math.random() * 32)
    }
    grupoFinal.push(timeSorteado)
}

console.log(grupoFinal)




/* fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
    method: 'GET',
    headers: {
        'git-user': 'giacomop8',
    },
})
.then((response) => response.json())
.then((data) => {
    let listaSelecoes = data.Result
    let grupos = []
    let jaSorteados = []
    let qtdSelecoes = listaSelecoes.length
    let numero = 0
    let contNaoExiste = 0
    let contExiste = 0
    
    



}) */
