class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class contaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}
// interface is a contract that a class can implement
interface ITransacao {
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number;
}

interface IExample2 {
    cnpj: number
}
// extends: the interface inherits the properties of another interface
interface IExample3 extends IExample2 {
    telefone: number
}
// implements: the class must implement the methods of the interface
class ContaCorrente extends Conta implements ITransacao {
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += (valor - this.taxaTransferencia);
        return true;
    };
    taxaTransferencia: number = 0;

}