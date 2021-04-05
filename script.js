var valorDaTemperaturaTexto = prompt("Digite a temperatura em Celcius")

var valorDaTemperaturaNumero = parseFloat(valorDaTemperaturaTexto)

var valorFinal = valorDaTemperaturaNumero * 1.8+(32)

alert("A tempuratura digitada em Celcius " + valorDaTemperaturaTexto + " em Fahrenheit é " +  valorFinal.toFixed(1))