//código del cuadrado
console.group("cuadrados");
const ladoCuadrado = 4;
console.log("Los lados del cuadrado miden " + ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide " + perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide " + areaCuadrado);
console.groupEnd();

//código del triangulo
console.group("triangulo");
const ladotriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; 
console.log("Los lados del cuadrado miden " 
+ ladotriangulo1 + " cm, " 
+ ladoTriangulo2 + " cm, " 
+ baseTriangulo + " cm");
console.log("La altura del triangulo mide " + alturaTriangulo);

const perimetrotriangulo = ladotriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide " + perimetrotriangulo);

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide " + areaTriangulo);

console.groupEnd();


//código del circulo
console.group("circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const PI = Math.PI;
const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = (radioCirculo*radioCirculo)*PI;

console.log("El rádio del circulo mide " + radioCirculo + " cm");
console.log("El PI mide " + PI);
console.log("El perimetro del circulo mide " + perimetroCirculo + " cm");
console.log("El área del circulo mide " + areaCirculo + " cm");

console.groupEnd();
