/*
//código del cuadrado
console.group("cuadrados");
const ladoCuadrado = 4;
console.log("Los lados del cuadrado miden " + ladoCuadrado);

console.log("El perimetro del cuadrado mide " + perimetroCuadrado(4));

// ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado mide " + areaCuadrado(ladoCuadrado));

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
console.log("El perimetro del triangulo mide " + perimetrotriangulo(ladotriangulo1, ladoTriangulo2, baseTriangulo));

const areaTriangulo = (baseTriangulo * alturaTriangulo)/2;
console.log("El área del triangulo mide " + areaTriangulo(baseTriangulo, alturaTriangulo));


console.groupEnd();


//código del circulo
console.group("circulo");
const radioCirculo = 4;
const PI = Math.PI;
const diametroCirculo = radioCirculo * 2;
const perimetroCirculo = diametroCirculo * PI;
const diametro = diametroCirculo(radio);
const areaCirculo = (radioCirculo*radioCirculo)*PI;
console.log("El rádio del circulo mide " + radioCirculo + " cm");
console.log("El PI mide " + PI);
console.log("El diametro del circulo mide " + diametroCirculo(radioCirculo) + " cm");
console.log("El perimetro del circulo mide " + perimetroCirculo(radioCirculo) + " cm");
console.log("El área del circulo mide " + areaCirculo(radioCirculo) + " cm2");

console.groupEnd();
*/

function perimetroCuadrado (lado) {
    return lado * 4;
}
function areaCuadrado (lado){
    return lado * lado;
}
function perimetrotriangulo (ladoT1, ladoT2, baseT){
    return ladoT1 + ladoT2 + baseT;
}
function areaTriangulo (baseT, alturaT){
    return ((baseT*alturaT)/2);
}
function diametroCirculo (radio){
    return radio * 2;
}
function perimetroCirculo(radio){
    return diametroCirculo(radio)*Math.PI;
}
function areaCirculo (radio){
    return (radio*radio)*Math.PI;
}
function calcularPerimetroCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado (){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}
function calcularPerimetroTriangulo (){
    const input1 = document.getElementById("ladoTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("ladoTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseInt(input3.value);
    const perimetro = perimetrotriangulo(value1, value2, value3);
    alert(perimetro);
}function calcularAreaTriangulo (){
    const input1 = document.getElementById("baseTriangulo");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("alturaTriangulo");
    const value2 = parseInt(input2.value);
    const area = areaTriangulo(value1, value2);
    alert(area);
}
function calcularPerimetroCirculo (){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}
function calcularAreaCirculo (){
    const input = document.getElementById("inputCirculo");
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);
}
function calcularPitagoras (cateto1, hipotenusa){
// la suma del cuadrado de los catetos es igual al cuadrado de la hipotenusa
// hip¬2 = cat1¬2 + cat2¬2
// hip-2 - cat1-2 = cat2-2
// sqrt(hip-1 - cat1-2) = cat2
    return Math.sqrt(Math.pow(cateto1,2)-Math.pow(hipotenusa,2))
}
function verificarTipoTriangulo (){
    const input1 = document.getElementById("ladoTriangulo1");
    const value1 = parseInt(input1.value);
    const input2 = document.getElementById("ladoTriangulo2");
    const value2 = parseInt(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseInt(input3.value);
    let cat = 0; let hip =0;
    if (value1 == value2 && value1 == value3){
        console.log("Es un triangulo equilatero");
        cat = value1; hip=value3;
    }
    else
        if (value1 == value2){
            console.log("lado1 " + value1+ " y lado2 " + value2 +" son iguales "+value3+" es distinto");
            if (value1 + value2 < value3) {
                console.log("No es un triangulo valido");
            }
            else
                console.log("Es un triangulo valido");
        }
        else
            if (value1 == value3){
                console.log("lado1 y base son iguales");
            }
            else
                if (value2 == value3){
                    console.log("Lado2 y base son iguales");
                }
                else
                    console.log("es un triangulo escaleno");
    console.log("Su altura es " + calcularPitagoras(cat, (hip/2)));
}