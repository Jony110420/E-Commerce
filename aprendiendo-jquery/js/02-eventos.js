$(document).ready(function(){


	//MOuseOver y MouseOut

	var caja = $("#caja");
	/*

	caja.mouseover(function(){
		$(this).css("background","red");
	});

	caja.mouseout(function(){
		$(this).css("background","green");
	});*/

	//hover

	function cambia_rojo() {
		$(this).css("background","red");
	} 
	function cambia_verde() {
		$(this).css("background","green");
	}
	caja.hover(cambia_rojo,cambia_verde);

	//doble click

	caja.click(function() {
		/* Act on the event */
		$(this).css("background","blue")
		       .css("color","white");

	});

	caja.dblclick(function() {
		/* Act on the event */
		$(this).css("background","pink")
		       .css("color","yellow");

	});

	//focus y blur
	var nombre = $("#nombre");
	var datos = $("#datos");
	nombre.focus(function(){//el cursor este sobre el input 
		$(this).css("border", "2px solid green");
	});
	nombre.blur(function(){//el cursor este fuera del input
		$(this).css("border", "1px solid #ccc");
		datos.text($(this).val()).show();//mostrar en el div el texto ingresado en el input
	});

	//Mousedown y mouseup
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

//mouse move

	$('body').css("cursor","none");
	$(document).mousemove(function(){
		var sigueme = $("#sigueme").css("left",event.clientX)
		       .css("top",event.clientY);
	});

});