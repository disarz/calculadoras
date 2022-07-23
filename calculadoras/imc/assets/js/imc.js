const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputAltura = e.target.querySelector('#altura');
    const inputPeso = e.target.querySelector('#peso');

    const altura = Number(inputAltura.value);
    const peso = Number(inputPeso.value);

    if (!altura) {
        setResultado('Altura inválida.', false);
        return;
    }

    if (!peso) {
        setResultado('Peso inválido.', false);
        return;
    }

    const imc = getImc(altura, peso);
    const classImc = getClassImc(imc);

    const msg = `Seu IMC é: &nbsp; <b>${imc}</b> (${classImc}).`;

    setResultado(msg, true);
});

function getClassImc(imc) {
    //                    0                1              2              3                      4                 5    
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau I', 'Obesidade grau II', 'Obesidade grau III'];

    // Abaixo do peso: <18,5; Peso normal: 18,5 <> 24,9; Sobrepeso: 25 <> 29,9; Obesidade grau I: 30 <> 34,9; Obesidade grau II: 35 <> 39,9; Obesidade grau III: > 40.

    if (imc >= 39.99) {
        return nivel[5]
    }

    if (imc >= 34.99) {
        return nivel[4]
    }

    if (imc >= 29.99) {
        return nivel[3]
    }

    if (imc >= 24.99) {
        return nivel[2]
    }

    if (imc >= 18.5) {
        return nivel[1]
    }

    if (imc < 18.5) {
        return nivel[0]
    }
}

function getImc(altura, peso) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
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
