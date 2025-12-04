// pido el diametro y calculo el área
const d = Number(prompt("ingresa el diámetro (cm) :"));
const r = d / 2; 
const area = Math.PI * Math.pow(r, 2);
//para que no se ingreesen numeros menores a 0 
if (isNaN(d)  || d <= 0)  {
    alert("por favor,ingresar números mayores a 0.");
}else{



//salida en 3 lugares 
console.log("Área:", area.toFixed(2), "cm²");

alert(`Área: ${area.toFixed(2)} cm²`);

document.getElementById("resultado").textContent =
`Área: ${area.toFixed(2)} cm²`;

//cambio de texto
document.querySelector("h1").textContent =
"cálculo automatico del área del círculo";

//agregar que sean visibles el diametro y el radio
document.getElementById("resultado").textContent =
`diametro: ${d} cm  |  radio: ${r} cm  | Área: ${area.toFixed(2)} cm² `;


//agregar la fecha y hora
const fecha = new Date().toLocaleString();
document.getElementById("resultado").innerHTML +=
`<br>Calculado el: ${fecha}`;

}