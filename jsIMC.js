

function calcular(){
 
const peso = document.getElementById('peso').value;
const altura = document.getElementById('altura').value;
const resultado = peso/(altura**2);


    if (resultado <= 18)
        {
    
        imc = "Você está ABAIXO do PESO normal<br>Seu IMC é de " + resultado.toFixed(2)+" kg/m2. " 
         
        
        }

    else if ((resultado >= 18.5)&& (resultado <25))
        {
        imc = "Você está na faixa de PESO NORMAL<br>Seu IMC é de " + resultado.toFixed(2)+" kg/m2. " 
     }

    else if ((resultado >= 25)&& (resultado <30))
        {
        imc = "Você está na faixa de ACIMA DO PESO<br>Seu IMC é de " + resultado.toFixed(2)+" kg/m2. " 
     }

    else if ((resultado >= 30)&&(resultado<40))
        {
        imc = "Você está na faixa de OBESO<br>Seu IMC é de " + resultado.toFixed(2)+" kg/m2. " 
     }
    
    else if (resultado>=40)
    {
        imc ="Você está na faixa de OBESIDADE MÓRBIDA<br>Seu IMC é de " + resultado.toFixed(2)+" kg/m2. " 
    }

    else{
        imc = "Digite algo válido"
    }

    
    document.getElementById('resp').innerHTML= imc;



}

// altura com ponto