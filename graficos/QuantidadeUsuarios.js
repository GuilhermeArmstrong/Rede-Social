import { getCSS, tickConfig } from "./common.js"

async function quantidadeUsuariosPorRede() {
  const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
  const res = await fetch(url)
  const dados = await res.json()
  const nomeDasRedes = Object.keys(dados)
  const quantidadeDeUsuarios = Object.values(dados)

  const data = [
      {
          x: nomeDasRedes, 
          y: quantidadeDeUsuarios, 
          type: 'bar',
          marker: {
              color: getCSS('--cor-primaria')
          }
        
      }
  ]

  const layout = {
      plot_bgcolor: getCSS('--cor-de-fundo'),
      paper_bgcolor: getCSS('--cor-de-fundo'),
       title: {
        text: 'Quantidade de usuários por rede (em milhões)',
        font: {
            color: getCSS('--cor-secundaria'),
            family: getCSS('--font'),
            size: 30
        }
       },
       xaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Nome das redes',
            font: {
                color: getCSS('--cor-secundaria'),
                size: 20
            }
        }

       },
       yaxis: {
        tickfont: tickConfig,
        title: {
            text: 'Milhões de usuários ativos',
            font: {
                    color: getCSS('--cor-secundaria'),
                    size: 20
                    }
            }

       }
  }

  const grafico = document.createElement('div')
  grafico.className = 'grafico'
  document.getElementById('graficos-container').appendChild(grafico)
  Plotly.newPlot(grafico, data, layout)
}

quantidadeUsuariosPorRede()