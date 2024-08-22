var lado1 = 5;
  var lado2 = 7;
  var lado3 = 1;
 
    if (lado1 === lado2 && lado2 === lado3) {
      console.log("Triângulo Equilátero: possui os 3 lados iguais.");
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
      console.log("Triângulo Isósceles: possui 2 lados iguais.");
    } else {
      console.log("Triângulo Escaleno: possui 3 lados diferentes.");
    }