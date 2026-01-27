var contador = 0;
const dispay = document.getElementById("valor");
const incrementar = document.getElementById("btn-decremntar");
const decremntar = document.getElementById("btn-incrementar");

incrementar.addEventListener("click", function(){
    contador ++;
    dispay.textContent = contador;
});


decremntar.addEventListener("click", function(){
    contador --;
    dispay.textContent = contador;
});
