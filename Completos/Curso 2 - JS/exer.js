    /*alert('boas vindas ao nosso site!'); 

    let nome = 'lua'; 
    let idade = 25;
    let numeroDeVendas = 50;
    let SaldoDisponivel = 1000;
    let mensagemDeErro = 'erro! preencha todos os campos'; 
    alert(mensagemDeErro); 

    let nome2 =  prompt('qual é seu nome?'); 
    let idade2 = prompt('qual é sua idade?'); 
    if(idade >= 18){
        alert ('pode tirar habilitação!'); 
    }

    let diaSemana = prompt('que dia da semana é hoje?'); 
    if(diaSemana == 'sábado' | diaSemana == 'domingo'){
        alert('bom fim de semana!'); 
    }else{
        alert('boa semana');
    }




    let cont1 = 1; 
    while(cont <= 10){
        console.log(cont);
        cont++; 

    }

    let cont = 10;
    while(cont1 >=0){
        console.log(cont1); 
        cont--; 
    } 

    let cont2 = prompt("num"); 
    while(cont2 >= 0 ){
        console.log(cont2); 
        cont--;
    }*/
/*
    console.log("boas vindas!"); 

    let nome = "leticia";

    console.log(`olá meu nome é ${nome}!`); 

    alert(`olá, ${nome}`); 

    let pergunta= prompt("Qual a linguagem de programação que você mais gosta? ");
    console.log(pergunta); 

    let valor1 = 3; 
    let valor2 = 5; 
    let resultado = valor1 + valor2; 
    let diferenca = valor1 - valor2;

    console.log(`a soma de ${valor1} e ${valor2} é igual a ${resultado}`);
    
    console.log(`a diferença entre ${valor1} e ${valor2} é igual a ${diferenca}`);



    let idade2 = prompt('qual é sua idade?'); 
    if(idade >= 18){
        alert ("pode tirar habilitação!"); 
    }else{
        alert("não pode!");
    }


    let numero = prompt("escolha um numero"); 

    if(numero> 0){
        alert("positivo");
    }else if(numero < 0 ){
        alert("negativo!");
    }else{
        alert("nulo!"); 
    }

   let num = 1; 

   while(num <= 10){
    console.log(num); 
    num++
   }

   let nota = prompt("digite sua nota"); 

   if(nota>=7){
    alert("aprovado");
   }else{
    alert("reprovado"); 
   }

   let aleatorio = Math.random(); 
   console.log(aleatorio); 

   let num2 = parseInt(Math.random()*10 +1); 
   console.log(num2); 

   let num3 = parseInt(Math.random()*1000 +1); 
   console.log(num3); */


   function imc(peso, altura) {
    media = (peso+altura)/2;
    console.log(media);
   }

   function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
 