let inputPeso = document.getElementById("peso")
let inputAltura = document.getElementById("altura")
let t1 = document.getElementById("t1")
let t2 = document.getElementById("t2")
let t3 = document.getElementById("t3")
let t4 = document.getElementById("t4")
let t5 = document.getElementById("t5")
let t6 = document.getElementById("t6")
let t7 = document.getElementById("t7")

function calcularIMC(){
    let imc = inputPeso.value/ Math.pow(inputAltura.value, 2)
    const output = document.getElementById("output") 
    output.innerHTML = `Seu imc é de ${imc.toFixed(1)}`

    if(imc < 17){
       t1.style.color = "black" 
    }
    if(imc >= 17 && imc < 18.5){
       t2.style.color = "black" 

    }
    if(imc >= 18.5 && imc < 25){
       t3.style.color = "black" 

    }
    if(imc >= 25 && imc < 30){
       t4.style.color = "black" 

    }
    if(imc >= 30 && imc < 35){
       t5.style.color = "black" 

    }
    if(imc >= 35 && imc < 40){
       t6.style.color = "black" 

    }
    if(imc >= 40){
       t7.style.color = "black" 

    }
}
