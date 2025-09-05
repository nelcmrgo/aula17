// Estrutura de repetição PARA
// Quando sabemos o número de vezes que vai repetir

//Repetindo uma instrução 5 vezes
for (let index = 0; index < 5; index++) {
    console.log('Boa tarde 1 Info!' + index)
    
}
// Repetindo uma instrução quantas vezes que o usuário 
//quiser
let vezes = Number(prompt('Quantos bom dia?'))
for (let index = 0; index < vezes; index++) {
   console.log('Bom dia !' + index)
    
}
//Contagem regressiva
for(let i = 10; i >= 1; i--){
    console.log('Etec vai explodir em ' + i)
}
console.log('Boooooooooom!')
