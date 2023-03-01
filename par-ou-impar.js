const eu = process.argv[2]
const pc = Math.floor(Math.random()*10)
const resultado = +( eu + pc)

resultado % 2 === 0 ? console.log(`O resultado foi ${resultado}, você ganhou!`):
console.log(`O resultado foi ${resultado}, você perdeu!`)