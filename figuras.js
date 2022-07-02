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
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("ladoTriangulo2");
    const value2 = parseFloat(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseFloat(input3.value);
    const perimetro = perimetrotriangulo(value1, value2, value3);
    alert(perimetro);
}function calcularAreaTriangulo (){
    const input1 = document.getElementById("baseTriangulo");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("alturaTriangulo");
    const value2 = parseFloat(input2.value);
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
function calcularAlturaTriangulo (cateto1, hipotenusa){
// la suma del cuadrado de los catetos es igual al cuadrado de la hipotenusa
// hip¬2 = cat1¬2 + cat2¬2
// hip-2 - cat1-2 = cat2-2
// sqrt(hip-1 - cat1-2) = cat2
    let altura = Math.sqrt(Math.pow(cateto1,2)-Math.pow(hipotenusa,2));
    console.log("Su altura es " + altura + " cm")
    return altura;
}
function calcularHipotenusa (cateto1, cateto2){
    let hipotenusa = Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2));
    console.log("Su hipotenusa es " + hipotenusa + " cm")
    return hipotenusa;
}
function verificarlados (ladoA,ladoB,ladoC){
    console.log("lado mayor "+ladoA+", lado medio "+ladoB+", lado menor "+ladoC)
    if (ladoA <= ladoB + ladoC){
        console.log("triangulo valido")
    }
}
function verificarTrianguloEscaleno (lado1,lado2,lado3){
    console.log("es un triangulo escaleno");
    if (lado1 >= lado2 && lado2 >= lado3){
        verificarlados(lado1,lado2,lado3);
    }
    else if (lado1 > lado3 && lado3 > lado2){
        verificarlados(lado1, lado3, lado2);
    }
    else if (lado2 > lado1 && lado1 > lado3){   
        verificarlados(lado2,lado1,lado3);
    }
    else if (lado2 > lado3 && lado3 > lado1){
        verificarlados(lado2,lado3,lado1);
    }
    else if (lado3 > lado1 && lado1 > lado2){
        verificarlados(lado3,lado1,lado2);
    }
    else if (lado3 > lado2 && lado2 > lado1){
        verificarlados(lado3,lado2,lado1);
    }

/*
    a > b > c
    a > c > b
    b > a > c
    b > c > a
    c > a > b
    c > b > b
*/   
}
function verificaTrianguloisoseles (cateto, base){
    if (cateto+cateto > base){
        let altura = calcularAlturaTriangulo(cateto, (base/2));
        console.log("Es un triangulo Isoseles válido con altura de " + altura + " cm")
    }
    else
        console.log("No es un triangulo válido")
    
}
function verificarTipoTriangulo (){
    const input1 = document.getElementById("ladoTriangulo1");
    const value1 = parseFloat(input1.value);
    const input2 = document.getElementById("ladoTriangulo2");
    const value2 = parseFloat(input2.value);
    const input3 = document.getElementById("baseTriangulo");
    const value3 = parseFloat(input3.value);
    calcularHipotenusa(value1,value2);
    if (value1 == value2 && value1 == value3){
        console.log("Es un triangulo equilatero");
        altura = calcularAlturaTriangulo(value1, value3/2);
    }
    else if (value1 != value2 && value2!= value3 && value1 != value3){
            verificarTrianguloEscaleno(value1,value2,value3);
        }
        else if (value1 == value2){
                verificaTrianguloisoseles(value1,value3);
            }
            else if (value1 == value3){
                verificaTrianguloisoseles(value1, value2);
            }
            else if (value2 == value3){
                verificaTrianguloisoseles(value2,value1);
            }           
}