function sacar() {
  let valor = parseInt(document.getElementById('valor').value)  
  const notas50 = Math.floor(valor / 50)
  valor %= 50
  const notas10 = Math.floor(valor / 10)
  valor %= 10
  const notas1 = valor
  document.getElementById('resultado').innerHTML = `Notas de 50: ${notas50}<br>Notas de 10: ${notas10}<br> Notas de 1: ${notas1}`
}