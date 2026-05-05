const produtos = document.querySelectorAll('.prod-box');
const descricao = document.querySelector('.texto-descricao');
const sobreProd = [
                    '<p>prod1</p> <br> <p>Silvio Santos prod1 É fácil ou não éam? Estamos em ritmo de festamm. É bom ou não éam? É dinheiro ou não éam? Um, dois três, quatro, PIM, entendeuam? Mah roda a roduamm. O Raul Gil é gayam!</p> <br>',
                    '<p>prod2</p> <br> <p>Silvio Santos prod2 É fácil ou não éam? Estamos em ritmo de festamm. É bom ou não éam? É dinheiro ou não éam? Um, dois três, quatro, PIM, entendeuam? Mah roda a roduamm. O Raul Gil é gayam!</p> <br>',
                    '<p>prod3</p> <br> <p>Silvio Santos prod3 É fácil ou não éam? Estamos em ritmo de festamm. É bom ou não éam? É dinheiro ou não éam? Um, dois três, quatro, PIM, entendeuam? Mah roda a roduamm. O Raul Gil é gayam!</p> <br>'
]

produtos.forEach(  (elemento) => {
    elemento.addEventListener('mouseout', (evento, elemento,) => {
        descricao.innerHTML = '/* Passe o mouse por cima de alguma habilidade para ler a descrição */';
    } )
} );


