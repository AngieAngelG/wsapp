$("#miformulario").submit(function(evento){
	evento.preventDefault();
	//console.info("Activando Formulario....")
	var cadena=$(this).serializeArray();
	//console.info(cadena);
	$.ajax({
		url:"http://especialistasenlaweb.com/aagdatos.php",
		type:"post"
		data:cadena
	
	}).done(function(respuesta){
		$(".mensaje").html(respuesta);
	});

});