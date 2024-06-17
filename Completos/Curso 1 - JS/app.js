        alert('boas vindas!');
        nuemeroMaximo = 100; 
        let numeroSecreto = parseInt((Math.random)*nuemeroMaximo +1); 
        console.log(numeroSecreto); 
        let chute; 
        let tentativas = 1; 


        while(chute != numeroSecreto){

    chute =  prompt (`Escolha um numero entre 1 e ${numeroMaximo}`); 


            if(numeroSecreto == chute){
                
                break; 
            } else {
            if(numeroSecreto > chute){
                alert(`o numero é maior que ${chute}`);
        
            }else{
                alert(`o número é menor que ${chute}`);
            }
                tentativas++;
                }
        }

        let palavra = tentativas > 1 ?'tentativas' : 'tentativa';

        alert(`acertou! o numero é ${numeroSecreto}, você acertou com ${tentativas} ${tentativas}`);

        /*if(tentativas>1){
            alert(`acertou! o numero é ${numeroSecreto}, você acertou com ${tentativas} tentativas`);
        }else{
            alert(`acertou! o numero é ${numeroSecreto}, você acertou com ${tentativas} tentativa`);
        } */ 
        