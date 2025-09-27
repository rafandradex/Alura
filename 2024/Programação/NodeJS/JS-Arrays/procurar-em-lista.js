const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno) {
    if(lista[0].includes(aluno)) {
        const [alunos, medias] = lista;
        const indice = alunos.indexOf(aluno)
        const mediaAluno = medias[indice]
        console.log(`${aluno} tem a media ${mediaAluno}`);
    } else {
        console.log('Estudante n existe na lista!')
    }
}

exibeNomeENota('Caio')

let i = 5;
let valorA = i++;
let valorB = ++i;

console.log("O valor de valorA é:", valorA);
console.log("O valor de valorB é:", valorB);