$(function () {

	var cepDigitado = document.getElementById('cep');


	$( "#cep" ).change(function() {

		var resposta = $.ajax({

		url: 'http://api.postmon.com.br/v1/cep/' + (cepDigitado.value),
		method: 'GET',
		dataType: 'jsonp'
		});

		resposta.done(function (dados) {

			var seletorCidade = $('#cidade').val(dados.cidade);

			seletorCidade.append(seletorCidade);

			console.log(dados.cidade);
		});

		resposta.fail(function() {

			console.log(dados);
		});
	});
});