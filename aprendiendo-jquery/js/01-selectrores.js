
$(document).ready(function(){
	console.log("Estamos listos");


	//selector de ID
	var rojo = $("#rojo").css("background","red")//seleccionar un elemento del documento html para cambiar sus propiedades
						 .css("color","white");

	var amarillo = $("#amarillo").css("background","yellow")
								 .css("color","green");

	var verde = $("#verde").css("background","green")
								 .css("color","white");

	//selectoores de clases

	var clase = $('.zebra').css("padding","5px");//seleccionar todos los elementos de la clase zebra
	//console.log(clase.eq(1));//seleccionar un elemento de la clase zebra
	

	$('.sin_borde').click(function(){
		console.log("click dado");
		$(this).addClass('zebra');
	});


	//Selectores de etiquetas
	var parrafos = $('p').css("cursor","pointer");

	parrafos.click(function(){
		var that = $(this);
		if(!that.hasClass('grande')){
			that.addClass("grande");
		}else{
			that.removeClass("grande");
		}
		
	});
	//selectores de Atributos

	$('[title="Google"]').css('background','#ccc');
	$('[title="Facebook"]').css('background','blue');

	//otros
	//$('p, a').addClass('margen-superior');

	var busqueda = $("#caja").find('.resultado');//encontrar un elemento en el documento de la clase resultado
	var busqueda = $("#caja").eq(0).parent().find('[title="Google"]');
	console.log(busqueda);
});