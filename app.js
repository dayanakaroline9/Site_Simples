'use strict' //modo estrito 

const bnt = document.querySelector('.btn'); //acessa o botão

bnt.addEventListener('click',function(){
    document.body.classList.toggle('tema-escuro');

    //verifica qual o tema atual acessando a classe do copo html
    var tema = document.body.className;
    if(tema == "tema-claro"){
        this.textContent = "escuro"; //muda texto do botão para escuro
    }else{
        this.textContent = "claro"; //muda texto do botão para claro
    }
    console.log("Tema atual:"+tema)
});

