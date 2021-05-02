export const calculadora = {
  trata: (expression) => {
    
  },


  multiplicacao: (expression) => {
    const [numero1, numero2] = expression.split("x");
    
    const result = numero1 * numero2;

    return result;
  },
  soma: (expression) => {
    const [numero1, numero2] = expression.split("x");
    
    const result = numero1 + numero2;

    return result;
  }


  
}