var x = "";

var form = document.querySelector("form");
var textoCriptografado = document.querySelector("#texto_criptografado");
var botaoCriptografar = document.querySelector("#botao-criptografar");
var botaDescriptografar = document.querySelector("#botao-descriptografar");
var campoTextArea = document.querySelector("#campo-text_area");

function validandoTexto(x){
  //expressão regular(letras maiúsculas e letras com acentuação)
  var regex = /^[A-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/g;
  
  for(var i = 0; i < x.length; i++){
    
    if(regex.test(x.charAt(i))){
       //console.log(regex.test(x));
      //return regex.test(x.charAt(i));
      return true;
    }
  }
  return false;
}

function criptografar(){
  form.addEventListener("submit", function(event){
    event.preventDefault();
    x = document.getElementById("campo-text_area").value;
    var resultado = "";
    var resp = validandoTexto(x);

    if(!resp){
      for(var i = 0; i < x.length; i++){
        if(x.charAt(i) == 'e'){
          resultado += "enter";
        }else if(x.charAt(i) == 'i'){
          resultado += "imes";
        }else if(x.charAt(i) == 'a'){
          resultado += "ai";
        }else if(x.charAt(i) == 'o'){
          resultado += "ober";
        }else if(x.charAt(i) == 'u'){
          resultado += "ufat";
        }else{
          resultado += x.charAt(i);
        }
      }

      
      textoCriptografado.classList.remove("letra_invalida");
      //document.getElementById("texto_criptografado").setAttribute("value",resultado);
      var imgBoneco = document.querySelector("#imagem-boneco");
      var msgNaoEncontrada = document.querySelector("#msg-nao_encontrada");
      var botaoCopiar = document.querySelector("#caixa-botao_copiar");

      imgBoneco.classList.add("invisivel");
      msgNaoEncontrada.classList.add("invisivel");
      botaoCopiar.classList.remove("invisivel");  
      textoCriptografado.classList.remove("invisivel");
      textoCriptografado.textContent = resultado;   
    }else if(resp){
    
      var sessaoRetornaTexto = document.querySelector("#sessao-retorna_texto");
      sessaoRetornaTexto.classList.add("letra-invalida");
      textoCriptografado.classList.add("letra_invalida");
      //document.getElementById("texto_criptografado").setAttribute("value",resultado);
      var imgBoneco = document.querySelector("#imagem-boneco");
      var msgNaoEncontrada = document.querySelector("#msg-nao_encontrada");
      var botaoCopiar = document.querySelector("#caixa-botao_copiar");
      
      botaoCopiar.classList.add("invisivel");
      imgBoneco.classList.add("invisivel");
      msgNaoEncontrada.classList.add("invisivel");
      textoCriptografado.classList.remove("invisivel");
      textoCriptografado.textContent =  "Erro!É aceito somento letras minúsculas e sem acento!";
     
    }

  });
}

function descriptografar(){
  form.addEventListener("submit", function(event){
    event.preventDefault();
    var textoCriptografado = document.querySelector("#texto_criptografado");
    x = document.getElementById("campo-text_area").value;
    var resultado = "";

    
    for(var i = 0; i < x.length; i++){
      if(x.charAt(i) == 'a'){
        resultado += "a";
        i+=1;
      }else if(x.charAt(i) == 'e'){
        resultado += "e";
        i+=4;
      }else if(x.charAt(i) == 'i'){
        resultado += "i";
        i+=3;
      }else if(x.charAt(i) == 'o'){
        resultado += "o";
        i+=3;
      }else if(x.charAt(i) == 'u'){
        resultado += "u";
        i+=3;
      }else{
        resultado += x.charAt(i);
      }
      

      textoCriptografado.textContent = resultado;
      textoCriptografado.classList.remove("letra_invalida");
      //document.getElementById("texto_criptografado").setAttribute("value",resultado);
      var imgBoneco = document.querySelector("#imagem-boneco");
      var msgNaoEncontrada = document.querySelector("#msg-nao_encontrada");
      var botaoCopiar = document.querySelector("#caixa-botao_copiar");

      imgBoneco.classList.add("invisivel");
      msgNaoEncontrada.classList.add("invisivel");
      botaoCopiar.classList.remove("invisivel");
      
      textoCriptografado.classList.remove("invisivel");
    }  
  });
}

function copiaTexto() {
  
  var copiaTexto = document.querySelector("#texto_criptografado");
  navigator.clipboard.writeText(copiaTexto.value);
  alert("Texto Copiado");
  form.reset();
  textoCriptografado.textContent = "";
}




