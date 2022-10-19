async function getContent() {
    try {        
        const response = await fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            method: 'GET',
            headers: {
            'git-user': 'giacomop8',
        }})

        const data = await response.json()
        times = data.Result

        sorteando(times)
    } catch (error) {
        console.error(error)        
    }
}

async function sorteando(times) {
    
    grupoFinal = []
    timeSorteado = Math.floor(Math.random() * 32)
    
    
    /* for(let i=0; i<32; i++) {
        
        while(grupoFinal.indexOf(timeSorteado) != -1) {
            timeSorteado = Math.floor(Math.random() * 32)
        }
        grupoFinal.push(times[timeSorteado])
    }
    
    console.log(grupoFinal) */
}

let dados = getContent()