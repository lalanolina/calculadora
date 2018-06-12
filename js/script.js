document.getElementById("calculate-button").onclick = function(){
    //Pega dados dentro do input para realizar os calculos
	let elem1 = document.getElementById('elem-1');
    let elem2 = document.getElementById('elem-2');
    
	//solução para o desafio 1, se nenhum valor for digitado trato como se fosse zero
	let val1 = getValue(elem1.value, elem1);	
    let val2 = getValue(elem2.value, elem2);
	
	let choice = document.querySelector('input[name="operation"]:checked')
	let operation = choice.value;
	
	//console.log(val1);
	//console.log(val2);
	//console.log(operation);
	
	let operationResult = getResult(val1,val2,operation);
	
	//mostra o resultado dentro do elemento com id "result"
	let resultElement = document.getElementById('result');
	resultElement.innerHTML = operationResult;
	
}

/*
* Retorna o resultado de uma operação em relação a dois numeros
* Argumentos: dois números e um símbolo de operação
* Operações suportadasa: soma, subtração, multiplicação, divisão
*/
function getResult(val1,val2,operation){
	if(operation === "+"){
			return val1+val2;
		}	
		else if(operation === "-"){
			return val1-val2;
		}
		else if(operation === "*"){
			return val1*val2;
		}
		else if(operation === "/"){
			return val1/val2;
		}	
		else if(operation === "^"){
			return val1 ** val2;
		}
		else if(operation === "%"){
			return val1 % val2;
		}
}


/*
* Retorna o valor inteiro de um numero, caso nada seja digitado retorna zero
* Argumentos: um números
*/
function getValue(val, elem){
	if(val === ""){
			elem.value = 0;
			return 0;
		}	
		else return parseInt(val);
}
