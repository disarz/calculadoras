/* Taxa de metabolismo basal:

HOMEM: 66.0 + (13.7 * KG) + (5.0 * Altura(CM)) - (6.8 * Idade)
MULHER: 66.5 + (9.6 * KG) + (1.8 * Altura(CM)) - (4.7 * Idade) -> Farei o feminino mais pra frente.

*/

const form = document.querySelector('.formulario');

// function getSelectValue() {
//     let selectedValue = document.getElementById("sexo").value;
//     console.log(selectedValue);
// }
// getSelectValue();

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputAltura = e.target.querySelector('#altura');
    const inputPeso = e.target.querySelector('#peso');
    const inputIdade = e.target.querySelector('#idade');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const idade = Number(inputIdade.value);

    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }


    if (!altura) {
        setResultado('Altura inválida.', false);
        return;
    }

    if (!idade) {
        setResultado('Idade inválida.', false);
        return;
    }

    const basal = getBasal(peso, altura, idade);

    const msg = `Sua taxa de metabolismo basal é: &nbsp; <b>${basal}.`;

    setResultado(msg, true);
});

function getBasal(peso, altura, idade) {
    const basal = (66 + (13.7 * peso) + (5 * altura) - (6.8 * idade));

    return basal.toFixed();
}


function criarParagrafo() {
    const p = document.createElement('p');
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';


    const p = criarParagrafo();

    if (isValid) {
        p.classList.add('resultValid');
    } else {
        p.classList.add('notValid');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}