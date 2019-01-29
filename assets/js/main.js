(function(){
    'use strict';

    const primeiroPassos = document.querySelector('.js-primeiros-passos');
    const baseConhecimento = document.querySelector('.js-base-conhecimento');
    
    document.addEventListener("DOMContentLoaded", function (event) {
        baseConhecimento.style.cssText = "display:none";
        primeiroPassos.style.cssText = "display:none";
    });
})();
