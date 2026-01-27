var contador = 0;
const dispay = document.getElementById("valor");
const incrementar = document.getElementById("btn-decremntar");
const decremntar = document.getElementById("btn-incrementar");

incrementar.addEventListener("click", function(){
    console.log("vai incrementar");
    contador ++;
    dispay.textContent = contador;
});


decremntar.addEventListener("click", function(){
    console.log("vai decrementar");
    contador --;
    dispay.textContent = contador;
});
