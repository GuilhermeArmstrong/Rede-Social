const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt (dados.tempo_medio)
    const minutos = Math.round ((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo ) * 100).toFixed(2)

    console.log(dados);
   
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas e que aproximadamente <span>${pessoasConectadas}</span> 
    bilhões estão conectadas em alguma rede social e passam em média <span>${horas} horas e ${minutos} minutos </span> conectadas.<br>Isso significa que 
    aproximadamente ${porcentagemConectada}% de pessoas estão conectadas em alguma rede social`
    console.log(paragrafo) 

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarInformacoesGlobais()