"use strict";
function multiplicacao(a, b) {
    try {
        return a * b;
    }
    catch (error) {
        console.error('Error in multiplicacao', error);
        return 0;
    }
}
function dizOla(nome) {
    try {
        return `Olá ${nome}!`;
    }
    catch (error) {
        console.log('Error in saudação', error);
        return '';
    }
}
console.log(multiplicacao(2, 4));
console.log(dizOla("Pedro"));
