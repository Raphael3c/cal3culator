export const calculadora = {
  trata: (expression) => {
    const multi = /[x]/i;
    const soma = /[+]/i;
    //const sub = /[-]/i;
    //const div = /[x]/i;

    if(multi.test(expression)){
      return calculadora.multiplicacao(expression)
    }

    if(soma.test(expression)){
     return calculadora.soma(expression)
    }

  },

  multiplicacao: (expression) => {
    const [numero1, numero2] = expression.split("x");
    
    const result = numero1 * numero2;

    return result;
  },
  
  soma: (expression) => {
    const [numero1, numero2] = expression.split("+");
    
    const result = Number(numero1) + Number(numero2);

    return String(result);
  }


  
}