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
    let grupos = []

    times.sort(() => Math.random() - 0.5)
    
    grupos.push(grupoA = times.slice(0,4))
    grupos.push(grupoB = times.slice(4,8))
    grupos.push(grupoC = times.slice(8,12))
    grupos.push(grupoD = times.slice(12,16))
    grupos.push(grupoE = times.slice(16,20))
    grupos.push(grupoF = times.slice(20,24))
    grupos.push(grupoG = times.slice(24,28))
    grupos.push(grupoH = times.slice(28,32))

    return grupos
}

async function mostrarTela() {

    const grupos = await sorteando()
    const dados = document.getElementById('dados')

    let html = ''

    for(let i=0; i<8; i++) {
        html += `<h1> Grupo ${i+1} </h1>`
        for(let j=0; j<4; j++) {
            html += `<li> ${grupos[i][j].Name} </li>`
        }        
    }
    dados.innerHTML += html
}

mostrarTela()