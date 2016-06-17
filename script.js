
var valorElemento = document.getElementById('valor');
var totalElemento = document.getElementById('total');


valorElemento.addEventListener('keyup', function(e) {

	var total = 0;
	var valor = parseFloat(valorElemento.value ? valorElemento.value : 0);


	if(valor <= 0) {
		total = 0;
	}



	totalElemento.innerHTML = total;
});