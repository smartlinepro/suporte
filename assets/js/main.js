(function(){
    'use strict';

    const primeiroPassos = document.querySelector('.js-primeiros-passos');
    const baseConhecimento = document.querySelector('.js-base-conhecimentos');
    const btnPrimeiroPassos = document.querySelector('.js-button-primeiros-passos');
    const btnBaseConhecimento = document.querySelector('.js-button-base-conhecimentos');
    
    document.addEventListener("DOMContentLoaded", function (event) {
        console.log(baseConhecimento);
        baseConhecimento.style.cssText = "display:block";
        primeiroPassos.style.cssText = "display:none";
    });

    btnPrimeiroPassos.addEventListener("click", function (event) {
        event.stopPropagation();
        baseConhecimento.style.cssText = "display:none";
        primeiroPassos.style.cssText = "display:block";
    });

    btnBaseConhecimento.addEventListener("click", function (event) {
        event.stopPropagation();
        baseConhecimento.style.cssText = "display:block";
        primeiroPassos.style.cssText = "display:none";
    });


})();
