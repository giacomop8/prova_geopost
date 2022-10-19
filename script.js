async function getContent() {
    try {        
        const response = await fetch('https://estagio.geopostenergy.com/WorldCup/GetAllTeams', {
            method: 'GET',
            headers: {
            'git-user': 'giacomop8',
        }})

        const data = await response.json()
        const times = data.Result

        return times
    } catch (error) {
        console.error(error)        
    }
}

async function sorteando() {
    
    const times = await getContent()

    times.sort(() => Math.random() - 0.5)
    
    const grupoA = times.slice(0,4)
    const grupoB = times.slice(4,8)
    const grupoC = times.slice(8,12)
    const grupoD = times.slice(12,16)
    const grupoE = times.slice(16,20)
    const grupoF = times.slice(20,24)
    const grupoG = times.slice(24,28)
    const grupoH = times.slice(28,32)

    console.log(grupoA)
    console.log(grupoB)
    console.log(grupoC)
    console.log(grupoD)
    console.log(grupoE)
    console.log(grupoF)
    console.log(grupoG)
    console.log(grupoH)
}

sorteando()