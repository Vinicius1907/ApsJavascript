
/*
    Disciplina: Javascript;
    Código da Turma: 963R;
    Nome: Vinicius Peixoto Lima;
    Matrícula: 2024100030;
*/

// A função isPrime recebe um valor e verifica a quantidade de divisores possíveis através de um for, onde o contador vai de 1 até o próprio
// numero. Cada vez que oresto da divisão do contador com o número for 0, incrementa-se o número de divisores. Caso um número tenha apenas 2 divisores
// Considera-se primo.

function isPrime(a){
    var divisores = 0;

    for(var divisor = 1; divisor <= a; divisor++){
        if(a % divisor == 0){
            divisores++;
        }
    }

    if(divisores == 2){
        return true;
    } else{
        return false;
    }
}


// A função findLargestPrime() parte do número recebido e soma 1 pra incrementar no contador. Cria-se uma variavel contadorPrimos para
// Contar o número de primos. Chamamos o metodo isPrime dentro de um while enquanto número do contadorPrimos não for igual a 10;

function findLargestPrimes(b){
    
    contadorPrimos = 1;
    contador = b+1;

    while(contadorPrimos <= 10){
        if(isPrime(contador)){
            console.log(contador + "\n");
            contadorPrimos++;
        }
    
        contador++;
    }
}

findLargestPrimes(0);